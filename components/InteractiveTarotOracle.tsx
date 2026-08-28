'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { drawRandomCards } from '@/lib/randomTarot';
import { TarotCardData } from '@/lib/tarotDeck';

const SUBJECT_OPTIONS = [
  { id: 'General', label: '✨ General Guidance', desc: 'Overall life, spiritual clarity, or open focus' },
  { id: 'Love', label: '❤️ Love & Relationships', desc: 'Romantic connections, emotional clarity, soulmates' },
  { id: 'Money', label: '💰 Money & Wealth', desc: 'Financial flow, abundance mindset, prosperity' },
  { id: 'Career', label: '💼 Career & Ambition', desc: 'Work path, promotion, business decisions' },
  { id: 'Family', label: '🏡 Family & Home', desc: 'Home life, family dynamics, personal peace' },
  { id: 'Life Purpose', label: '🔮 Life Purpose', desc: 'Soul calling, higher path, personal growth' },
];

const PLACEMENT_LABELS = [
  { badge: '⏳ Past Energy', title: 'Past Energy & Origins' },
  { badge: '⚡ Present Energy', title: 'Present Energy & Dynamics' },
  { badge: '🔮 Future Outcome', title: 'Future Outcome & Trajectory' },
];

interface CardReadingItem {
  position: string;
  cardName: string;
  insight: string;
}

interface ReadingResponse {
  subject: string;
  question: string;
  cardReadings: CardReadingItem[];
  summary: string;
  actionStep: string;
}

export function InteractiveTarotOracle() {
  const [selectedSubject, setSelectedSubject] = useState<string>('General');
  const [question, setQuestion] = useState<string>('');
  
  const [drawnCards, setDrawnCards] = useState<TarotCardData[] | null>(null);
  const [cardFlippedState, setCardFlippedState] = useState<boolean[]>([false, false, false]);
  const [loading, setLoading] = useState(false);
  const [readingResult, setReadingResult] = useState<ReadingResponse | null>(null);
  
  // Carousel slide index: 0 = Past, 1 = Present, 2 = Future, 3 = Synthesis
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleStartReading = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setReadingResult(null);
    setCardFlippedState([false, false, false]);
    setActiveSlide(0);

    // STEP 1: Random card selection FIRST
    const cards = drawRandomCards(3);
    setDrawnCards(cards);

    try {
      // STEP 2: Send question + chosen cards to AI interpretation API
      const res = await fetch('/api/tarot-reading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: selectedSubject,
          question: question,
          cards: cards.map((c) => ({ name: c.name, arcana: c.arcana })),
        }),
      });

      if (!res.ok) throw new Error('Reading generation failed');
      const data: ReadingResponse = await res.json();
      setReadingResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleCurrentFlip = () => {
    if (activeSlide > 2) return;
    setCardFlippedState((prev) => {
      const next = [...prev];
      next[activeSlide] = !next[activeSlide];
      return next;
    });
  };

  const handleNextSlide = () => {
    if (activeSlide < 3) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleReset = () => {
    setDrawnCards(null);
    setReadingResult(null);
    setCardFlippedState([false, false, false]);
    setActiveSlide(0);
    setQuestion('');
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Header Title */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-gold bg-gold/10 rounded-full border border-gold/20 mb-3">
          78-Card Interactive Oracle
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold">
          Ask the Cards: 3-Card Interactive Reading
        </h2>
        <p className="mt-2 font-sans text-foreground/80 text-sm sm:text-base leading-relaxed">
          Select your subject, enter your question, and draw your cards to unveil step-by-step guidance.
        </p>
      </div>

      {!drawnCards ? (
        /* FORM INPUT STAGE */
        <motion.form
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleStartReading}
          className="bg-surface/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gold/25 max-w-2xl mx-auto shadow-2xl space-y-6"
        >
          {/* Subject Picker */}
          <div>
            <label className="block text-xs font-mono font-bold text-gold uppercase tracking-wider mb-3">
              1. Choose Reading Subject:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SUBJECT_OPTIONS.map((sub) => (
                <button
                  type="button"
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`p-3 rounded-xl border text-left font-sans transition-all duration-200 ${
                    selectedSubject === sub.id
                      ? 'bg-gold text-obsidian font-bold border-gold shadow-lg shadow-gold/20 scale-[1.02]'
                      : 'bg-surface-elevated/60 text-foreground/90 border-white/10 hover:border-gold/40 hover:bg-surface-elevated'
                  }`}
                >
                  <div className="text-xs font-bold">{sub.label}</div>
                  <div className="text-[10px] opacity-75 mt-0.5 hidden sm:block">{sub.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Question Input */}
          <div>
            <label className="block text-xs font-mono font-bold text-gold uppercase tracking-wider mb-2">
              2. Enter Specific Question (Optional):
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g. What energy is surrounding my career transition this month?"
              className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none transition-colors"
            />
          </div>

          {/* Draw Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-6 rounded-xl text-base transition-all transform hover:scale-[1.01] shadow-xl shadow-gold/20 flex items-center justify-center gap-2 font-sans"
          >
            {loading ? (
              <span className="flex items-center gap-2 font-mono text-sm">
                <span className="w-4 h-4 rounded-full border-2 border-obsidian border-t-transparent animate-spin" />
                Shuffling Sacred Deck...
              </span>
            ) : (
              <span>Draw 3 Cards & Reveal Spread →</span>
            )}
          </button>
        </motion.form>
      ) : (
        /* COMPACT SINGLE-CARD CAROUSEL CONTAINER */
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface/90 backdrop-blur-md p-5 sm:p-7 rounded-2xl border border-gold/30 max-w-xl mx-auto shadow-2xl space-y-5"
        >
          {/* Top Bar: Subject + Ask New Question */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-sans">
            <span className="text-gold/90 font-mono bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Subject: {selectedSubject} {question ? `• "${question.slice(0, 24)}..."` : ''}
            </span>
            <button
              onClick={handleReset}
              className="text-foreground/60 hover:text-gold transition-colors underline py-1"
            >
              ✦ Ask Another Question
            </button>
          </div>

          {/* Carousel Step Progress Navigation Bar */}
          <div className="grid grid-cols-4 gap-1.5 p-1 bg-obsidian/70 rounded-xl border border-white/10 text-[11px] font-mono">
            {['1. Past', '2. Present', '3. Future', '4. Wizard'].map((label, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`py-1.5 rounded-lg text-center transition-all ${
                  activeSlide === idx
                    ? 'bg-gold text-obsidian font-bold shadow-md'
                    : 'text-foreground/60 hover:text-foreground hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CAROUSEL SLIDE VIEW */}
          <div className="relative min-h-[380px] flex flex-col justify-between">
            {/* CARDS 1 - 3 (SLIDES 0, 1, 2) */}
            {activeSlide < 3 && drawnCards && (
              <div className="space-y-4">
                {/* Slide Title & Placement Badge */}
                <div className="text-center">
                  <span className="text-xs font-mono text-gold font-bold uppercase tracking-wider bg-gold/10 px-3 py-0.5 rounded-full border border-gold/20">
                    {PLACEMENT_LABELS[activeSlide].badge}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-foreground mt-1">
                    {PLACEMENT_LABELS[activeSlide].title}
                  </h3>
                </div>

                {/* Single Interactive 3D Card Display */}
                <div className="flex flex-col items-center justify-center my-2">
                  <div
                    onClick={handleToggleCurrentFlip}
                    className="cursor-pointer w-44 aspect-[2/3] relative rounded-xl perspective-1000 group transition-transform transform hover:scale-[1.02]"
                  >
                    <div
                      className={`w-full h-full duration-700 transform-style-3d transition-transform rounded-xl border-2 shadow-2xl ${
                        cardFlippedState[activeSlide]
                          ? 'rotate-y-180 border-gold shadow-gold/30'
                          : 'border-white/20 hover:border-gold/50 shadow-black/80'
                      }`}
                    >
                      {/* CARD BACK */}
                      <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-surface-elevated via-obsidian to-surface-elevated p-3 flex flex-col items-center justify-between backface-hidden overflow-hidden border border-white/10">
                        <div className="w-full h-full border border-gold/30 rounded-lg flex flex-col items-center justify-between p-3 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent">
                          <div className="text-gold text-xs font-editorial">✦</div>
                          <div className="text-center my-auto space-y-1">
                            <div className="text-gold font-editorial text-lg font-bold tracking-widest">A T R</div>
                            <div className="text-obsidian font-mono text-[9px] font-bold tracking-wider uppercase bg-gold px-2 py-0.5 rounded-full shadow-md animate-pulse">
                              Tap to Reveal
                            </div>
                          </div>
                          <div className="text-gold text-xs font-editorial">✦</div>
                        </div>
                      </div>

                      {/* CARD FRONT */}
                      <div className="absolute inset-0 w-full h-full rounded-xl rotate-y-180 backface-hidden overflow-hidden bg-surface-elevated">
                        <Image
                          src={drawnCards[activeSlide].image}
                          alt={drawnCards[activeSlide].name}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/30 to-transparent flex flex-col justify-end p-2.5 text-center">
                          <span className="text-[9px] font-mono text-gold font-bold uppercase tracking-wider">
                            {drawnCards[activeSlide].arcana}
                          </span>
                          <h4 className="font-editorial text-sm font-bold text-foreground leading-tight">
                            {drawnCards[activeSlide].name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prompt if unflipped */}
                  {!cardFlippedState[activeSlide] && (
                    <p className="text-[11px] font-mono text-gold/80 mt-2 animate-bounce">
                      👆 Tap card to flip & unveil interpretation
                    </p>
                  )}
                </div>

                {/* Specific Card Interpretation (Revealed when card is flipped or loading) */}
                <div className="bg-obsidian/60 p-4 rounded-xl border border-white/10 text-xs font-sans leading-relaxed min-h-[90px]">
                  {cardFlippedState[activeSlide] ? (
                    readingResult ? (
                      <div className="space-y-1">
                        <div className="flex justify-between items-center border-b border-white/10 pb-1 mb-1">
                          <span className="font-bold text-gold font-editorial text-sm">
                            {drawnCards[activeSlide].name}
                          </span>
                          <span className="text-[10px] font-mono text-foreground/50">
                            {PLACEMENT_LABELS[activeSlide].badge}
                          </span>
                        </div>
                        <p className="text-foreground/90">
                          {readingResult.cardReadings[activeSlide]?.insight || 'Channeling interpretation...'}
                        </p>
                      </div>
                    ) : (
                      <div className="text-center py-4 text-gold/80 font-mono text-[11px]">
                        ✦ Generating intuitive interpretation...
                      </div>
                    )
                  ) : (
                    <p className="text-center text-foreground/50 italic py-3">
                      Card interpretation is locked. Tap the card above to reveal its wisdom.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* SLIDE 4: FINAL SYNTHESIS & WIZARD ADVICE */}
            {activeSlide === 3 && (
              <div className="space-y-4 text-center">
                <span className="text-xs font-mono text-gold font-bold uppercase tracking-wider bg-gold/10 px-3 py-0.5 rounded-full border border-gold/20">
                  🧙‍♂️ The Wizard's Synthesis
                </span>

                {/* Square Wizard Image */}
                <div className="w-48 h-48 mx-auto relative rounded-xl overflow-hidden border-2 border-gold shadow-xl shadow-gold/20">
                  <Image
                    src="/images/tarot-wizard-synthesis.jpg"
                    alt="Wizard Tarot Reader in Rider-Waite style"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>

                {/* Synthesis Text Box */}
                <div className="bg-obsidian/70 p-4 rounded-xl border border-gold/20 text-left space-y-2 text-xs font-sans">
                  <h4 className="font-editorial text-lg font-semibold text-gold border-b border-white/10 pb-1">
                    Overall Arcane Synthesis
                  </h4>
                  {readingResult ? (
                    <>
                      <p className="text-foreground/90 leading-relaxed">
                        {readingResult.summary}
                      </p>
                      <div className="pt-1 text-[11px] text-gold font-mono flex items-start gap-1">
                        <span>💡</span>
                        <span><strong>Actionable Step:</strong> {readingResult.actionStep}</span>
                      </div>
                    </>
                  ) : (
                    <p className="text-foreground/60 italic">
                      Channeling overall synthesis...
                    </p>
                  )}
                </div>

                {/* Direct Booking CTA */}
                <a
                  href="#booking-engine"
                  className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-2.5 px-4 rounded-xl text-xs font-mono uppercase tracking-wider block transition-all shadow-lg shadow-gold/20"
                >
                  Reserve Your 1-on-1 Personal Reading ↓
                </a>
              </div>
            )}

            {/* PREV & NEXT NAVIGATION ARROWS */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
              <button
                onClick={handlePrevSlide}
                disabled={activeSlide === 0}
                className={`px-3 py-1.5 rounded-lg border flex items-center gap-1 transition-all ${
                  activeSlide === 0
                    ? 'opacity-40 cursor-not-allowed border-white/5 text-foreground/40'
                    : 'border-white/15 hover:border-gold text-gold bg-surface-elevated'
                }`}
              >
                ← Previous
              </button>

              <span className="text-foreground/50 text-[11px]">
                {activeSlide < 3 ? `Card ${activeSlide + 1} of 3` : 'Final Synthesis'}
              </span>

              <button
                onClick={handleNextSlide}
                disabled={activeSlide === 3}
                className={`px-3 py-1.5 rounded-lg border flex items-center gap-1 transition-all ${
                  activeSlide === 3
                    ? 'opacity-40 cursor-not-allowed border-white/5 text-foreground/40'
                    : 'border-gold text-obsidian bg-gold font-bold shadow-md'
                }`}
              >
                Next {activeSlide === 2 ? '(Wizard 🧙‍♂️)' : '→'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
