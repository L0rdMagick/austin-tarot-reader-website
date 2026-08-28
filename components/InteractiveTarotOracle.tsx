'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
  const [loading, setLoading] = useState(false);
  const [readingResult, setReadingResult] = useState<ReadingResponse | null>(null);

  const handleStartReading = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setReadingResult(null);
    setFlippedCards([false, false, false]);

    // STEP 1: Random selection happens FIRST, completely independent of the prompt/AI
    const cards = drawRandomCards(3);
    setDrawnCards(cards);

    try {
      // STEP 2: Send question + randomly chosen cards to AI interpretation API
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
      
      // Automatically trigger 3D card flips in sequence
      setTimeout(() => setFlippedCards([true, false, false]), 400);
      setTimeout(() => setFlippedCards([true, true, false]), 900);
      setTimeout(() => setFlippedCards([true, true, true]), 1400);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleCardFlip = (index: number) => {
    setFlippedCards((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleReset = () => {
    setDrawnCards(null);
    setReadingResult(null);
    setFlippedCards([false, false, false]);
    setQuestion('');
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-block px-3 py-1 text-xs font-sans font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20 mb-3">
          78-Card AI Tarot Experience
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary">
          Ask the Cards: 3-Card AI Reading
        </h2>
        <p className="mt-3 font-sans text-foreground/80 text-base sm:text-lg">
          Select a subject, type your burning question, and let our robust 78-card random generator draw your cards before receiving AI intuitive guidance.
        </p>
      </div>

      {!drawnCards ? (
        /* STEP 1: FORM INPUT */
        <motion.form
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleStartReading}
          className="bg-secondary/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/30 max-w-3xl mx-auto shadow-2xl space-y-6"
        >
          {/* Subject Picker */}
          <div>
            <label className="block text-sm font-sans font-bold text-accent uppercase tracking-wider mb-3">
              1. Choose Your Reading Subject:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SUBJECT_OPTIONS.map((sub) => (
                <button
                  type="button"
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`p-3 rounded-xl border text-left font-sans transition-all duration-200 ${
                    selectedSubject === sub.id
                      ? 'bg-primary text-background font-bold border-primary shadow-lg shadow-primary/20 scale-[1.02]'
                      : 'bg-background/60 text-foreground/90 border-white/10 hover:border-primary/40 hover:bg-background/80'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold">{sub.label}</div>
                  <div className="text-[11px] opacity-75 mt-0.5 hidden sm:block">{sub.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Question Input */}
          <div>
            <label className="block text-sm font-sans font-bold text-accent uppercase tracking-wider mb-2">
              2. Enter Your Question or Focus Area:
            </label>
            <textarea
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g. What should I know about my relationship right now? Or Leave blank for general guidance..."
              className="w-full bg-background/80 text-foreground border border-white/15 rounded-xl p-4 font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-foreground/40"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-primary text-background font-bold py-3.5 px-10 rounded-xl text-lg hover:opacity-90 transition-all duration-300 font-sans shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="animate-spin text-xl">✦</span>
                  <span>Generating Random Draw & Reading...</span>
                </>
              ) : (
                <>
                  <span>✦</span>
                  <span>Draw 3 Cards & Reveal AI Reading</span>
                </>
              )}
            </button>
          </div>
        </motion.form>
      ) : (
        /* STEP 2 & 3: CARDS REVEAL & AI READING */
        <div className="space-y-10">
          {/* Card Spread Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto">
            {drawnCards.map((card, index) => {
              const isFlipped = flippedCards[index];
              const positions = ['1. Past / Foundation', '2. Present Energy', '3. Future Potential'];

              return (
                <div key={card.id} className="w-full max-w-[220px] flex flex-col items-center">
                  <span className="text-xs font-cinzel text-accent font-bold uppercase tracking-wider mb-2">
                    {positions[index]}
                  </span>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleToggleCardFlip(index)}
                    className="cursor-pointer w-full aspect-[2/3] relative rounded-xl perspective-1000 group"
                  >
                    <div
                      className={`w-full h-full duration-700 transform-style-3d transition-transform rounded-xl border-2 shadow-2xl ${
                        isFlipped
                          ? 'rotate-y-180 border-primary shadow-primary/30 gold-glow'
                          : 'border-white/20 hover:border-accent/50 shadow-black/80'
                      }`}
                    >
                      {/* CARD BACK (Custom Mystical Backing with Instructional Overlay) */}
                      <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-secondary via-background to-secondary p-3 flex flex-col items-center justify-between backface-hidden overflow-hidden border border-white/10">
                        <div className="w-full h-full border-2 border-primary/30 rounded-lg flex flex-col items-center justify-between p-3 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent">
                          <div className="w-7 h-7 rounded-full border border-primary/40 flex items-center justify-center text-primary text-xs font-cinzel">
                            ✦
                          </div>
                          <div className="text-center my-auto space-y-1">
                            <div className="text-primary font-cinzel text-xl font-bold tracking-widest">A T R</div>
                            <div className="text-accent font-sans text-[10px] font-semibold tracking-wider uppercase bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                              Tap to Reveal
                            </div>
                            <div className="text-foreground/40 font-cinzel text-[9px] tracking-widest uppercase">
                              {positions[index]}
                            </div>
                          </div>
                          <div className="w-7 h-7 rounded-full border border-primary/40 flex items-center justify-center text-primary text-xs font-cinzel">
                            ✦
                          </div>
                        </div>
                      </div>

                      {/* CARD FRONT (Rider-Waite Artwork in 2:3 ratio) */}
                      <div className="absolute inset-0 w-full h-full rounded-xl rotate-y-180 backface-hidden overflow-hidden bg-secondary">
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          sizes="220px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-3 text-center">
                          <span className="text-[10px] font-sans text-accent font-bold uppercase tracking-wider">
                            {card.arcana}
                          </span>
                          <h3 className="font-cinzel text-base font-bold text-primary">
                            {card.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* AI Reading Results */}
          <AnimatePresence>
            {readingResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-secondary/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/30 max-w-4xl mx-auto shadow-2xl space-y-8"
              >
                {/* Header */}
                <div className="border-b border-white/10 pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-2">
                  <div>
                    <span className="text-xs font-sans uppercase font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      Subject: {readingResult.subject}
                    </span>
                    <h3 className="font-cinzel text-2xl font-bold text-primary mt-2">
                      Your Intuitive 3-Card Reading
                    </h3>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs font-sans text-foreground/60 hover:text-primary transition-colors underline"
                  >
                    ✦ Ask Another Question
                  </button>
                </div>

                {/* Individual Card Breakdowns */}
                <div className="space-y-6">
                  {readingResult.cardReadings.map((item, idx) => (
                    <div key={idx} className="bg-background/50 p-5 rounded-xl border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs font-sans text-accent font-bold uppercase tracking-wider">
                        <span>{item.position}</span>
                        <span className="text-primary">{item.cardName}</span>
                      </div>
                      <p className="font-sans text-foreground/90 text-sm sm:text-base leading-relaxed">
                        {item.insight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Overall Summary & Action */}
                <div className="bg-primary/10 p-6 rounded-xl border border-primary/30 space-y-3 text-center sm:text-left">
                  <h4 className="font-cinzel text-xl font-bold text-primary">
                    Overall Synthesis & Guidance
                  </h4>
                  <p className="font-sans text-foreground/90 text-sm sm:text-base leading-relaxed">
                    {readingResult.summary}
                  </p>
                  <div className="pt-2 font-sans text-xs sm:text-sm text-foreground/80 italic">
                    💡 <span className="font-bold text-primary">Empowering Step:</span> {readingResult.actionStep}
                  </div>
                </div>

                {/* Direct Booking CTA */}
                <div className="bg-secondary p-6 rounded-xl border border-white/10 text-center space-y-4 pt-4">
                  <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-primary">
                    Want to Explore Your Path Even Deeper?
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-foreground/80 max-w-xl mx-auto">
                    While AI offers quick reflections, a live 1-on-1 session with Daniel provides deep intuitive clarity, personal connection, and answers to your exact life situation.
                  </p>
                  <div>
                    <Link
                      href="/services"
                      className="inline-block bg-primary text-background font-bold py-3 px-8 rounded-lg text-base hover:opacity-90 transition-opacity font-sans shadow-lg shadow-primary/20"
                    >
                      Book Your Personal Reading with Daniel →
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
