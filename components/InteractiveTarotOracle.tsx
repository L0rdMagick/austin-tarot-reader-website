'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface TarotCard {
  id: string;
  name: string;
  arcana: string;
  image: string;
  keywords: string[];
  meaning: string;
  advice: string;
  category: 'Love & Connection' | 'Career & Abundance' | 'Spiritual Growth';
}

const CARDS: TarotCard[] = [
  {
    id: 'magician',
    name: 'The Magician',
    arcana: 'Major Arcana I',
    image: '/images/01-TheMagician.jpg',
    keywords: ['Manifestation', 'Resourcefulness', 'Personal Power', 'Action'],
    meaning: 'The Magician signals that you possess all the tools, skills, and energy required to manifest your desired outcome right now. The universe is aligning with your intentions.',
    advice: 'Stop waiting for external permission. Take aligned action toward your highest goal today.',
    category: 'Career & Abundance',
  },
  {
    id: 'star',
    name: 'The Star',
    arcana: 'Major Arcana XVII',
    image: '/images/17-TheStar.jpg',
    keywords: ['Hope', 'Renewal', 'Spiritual Clarity', 'Peace'],
    meaning: 'Following a period of uncertainty, The Star brings calm reassurance, renewed faith, and deep spiritual clarity. Your inner light is restoring.',
    advice: 'Trust the path unfolding before you. Healing and inspiration are actively surrounding your heart.',
    category: 'Love & Connection',
  },
  {
    id: 'sun',
    name: 'The Sun',
    arcana: 'Major Arcana XIX',
    image: '/images/19-TheSun.jpg',
    keywords: ['Joy', 'Success', 'Vitality', 'Illumination'],
    meaning: 'The Sun shines warmth, clarity, and absolute success on your current situation. Doubts melt away as hidden truths come into bright light.',
    advice: 'Embrace radiant optimism. Confidence and authenticity will open the doors you seek.',
    category: 'Spiritual Growth',
  },
];

export function InteractiveTarotOracle() {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const selectedCard = CARDS.find((c) => c.id === selectedCardId);

  const handleCardClick = (id: string) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setSelectedCardId(id);
    setTimeout(() => setIsFlipping(false), 600);
  };

  const handleReset = () => {
    setSelectedCardId(null);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 text-xs font-sans font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20 mb-3">
          Interactive Oracle Experience
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary">
          Pick a Card for Today's Insight
        </h2>
        <p className="mt-3 font-sans text-foreground/80 text-base sm:text-lg">
          Focus your mind on a pressing question about your love life, career, or personal journey. Click a card to unlock its guidance.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-3xl mx-auto">
        {CARDS.map((card) => {
          const isSelected = selectedCardId === card.id;

          return (
            <motion.div
              key={card.id}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCardClick(card.id)}
              className="cursor-pointer w-full max-w-[220px] aspect-[2/3] relative rounded-xl perspective-1000 group"
            >
              <div
                className={`w-full h-full duration-700 transform-style-3d transition-transform rounded-xl border-2 shadow-2xl ${
                  isSelected
                    ? 'rotate-y-180 border-primary shadow-primary/30 gold-glow'
                    : 'border-white/15 hover:border-accent/40 shadow-black/60'
                }`}
              >
                {/* CARD BACK */}
                <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-secondary via-background to-secondary p-4 flex flex-col items-center justify-between backface-hidden overflow-hidden border border-white/5">
                  <div className="w-full h-full border border-primary/20 rounded-lg flex flex-col items-center justify-between p-3 relative">
                    <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary text-xs font-cinzel">
                      ✦
                    </div>
                    <div className="text-center my-auto">
                      <div className="text-primary/70 font-cinzel text-2xl tracking-widest">A T R</div>
                      <div className="text-foreground/40 font-sans text-[10px] tracking-widest uppercase mt-1">
                        Tap to Reveal
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary text-xs font-cinzel">
                      ✦
                    </div>
                  </div>
                </div>

                {/* CARD FRONT */}
                <div className="absolute inset-0 w-full h-full rounded-xl rotate-y-180 backface-hidden overflow-hidden bg-secondary">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-3 text-center">
                    <span className="text-[11px] font-cinzel text-accent uppercase tracking-wider">
                      {card.arcana}
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-primary">
                      {card.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* REVEAL MODAL / DRAWER BELOW CARDS */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 bg-secondary/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/30 max-w-3xl mx-auto shadow-2xl text-center md:text-left relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-28 h-44 relative flex-shrink-0 rounded-lg overflow-hidden border border-primary/40 shadow-lg hidden sm:block">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-grow space-y-3">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="text-xs font-sans uppercase font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                    {selectedCard.category}
                  </span>
                  <span className="text-xs font-cinzel text-foreground/60">
                    {selectedCard.arcana}
                  </span>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-primary">
                  {selectedCard.name}
                </h3>

                <p className="font-sans text-foreground/90 text-sm sm:text-base leading-relaxed">
                  {selectedCard.meaning}
                </p>

                <div className="bg-background/60 p-3 rounded-lg border border-white/10 font-sans text-xs sm:text-sm text-foreground/80 italic">
                  💡 <span className="font-semibold text-primary">Guidance:</span> {selectedCard.advice}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                  <Link
                    href="/services"
                    className="w-full sm:w-auto bg-primary text-background font-bold py-2.5 px-6 rounded-lg text-sm sm:text-base hover:opacity-90 transition-opacity font-sans text-center shadow-lg"
                  >
                    Explore Your Full Situation in a 1-on-1 Reading →
                  </Link>

                  <button
                    onClick={handleReset}
                    className="text-xs font-sans text-foreground/60 hover:text-primary transition-colors underline py-2"
                  >
                    Pick Another Card
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
