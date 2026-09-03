'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HERO_CARDS = [
  {
    src: '/images/rider-waite-tarot-deck-cards/03-TheEmpress.jpg',
    alt: 'The Empress Tarot Card',
    rotate: -10,
    mobileHide: true,
  },
  {
    src: '/images/rider-waite-tarot-deck-cards/18-TheMoon.jpg',
    alt: 'The Moon Tarot Card',
    rotate: -5,
    mobileHide: false,
  },
  {
    src: '/images/rider-waite-tarot-deck-cards/17-TheStar.jpg',
    alt: 'The Star Tarot Card',
    rotate: 0,
    mobileHide: false,
  },
  {
    src: '/images/rider-waite-tarot-deck-cards/19-TheSun.jpg',
    alt: 'The Sun Tarot Card',
    rotate: 5,
    mobileHide: false,
  },
  {
    src: '/images/rider-waite-tarot-deck-cards/04-TheEmperor.jpg',
    alt: 'The Emperor Tarot Card',
    rotate: 10,
    mobileHide: true,
  },
];

export function HeroFiveCardBanner() {
  return (
    <section className="w-full relative pt-0 pb-0 flex flex-col items-center justify-center overflow-hidden bg-[#0B0F19]/30 backdrop-blur-sm border-b border-gold/30">
      {/* 5-CARD TAROT SPREAD BACKGROUND ACCENT - 100% CONTAINED INSIDE HERO BORDERS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-75 py-4">
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 h-full w-full max-w-7xl px-4">
          {HERO_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: card.rotate }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
              className={`relative h-full aspect-[2/3] max-h-[460px] rounded-2xl overflow-hidden border border-gold/40 shadow-2xl shadow-gold/20 shrink-0 ${
                card.mobileHide ? 'hidden sm:block' : 'block'
              }`}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 640px) 140px, (max-width: 768px) 200px, 280px"
                style={{ objectFit: 'cover' }}
                priority={idx === 2}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/10 to-obsidian/50" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOREGROUND FULL-WIDTH CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full text-center py-10 sm:py-16 px-4 sm:px-8 space-y-6"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Sleek Minimal Trust Line */}
          <div className="text-gold text-sm sm:text-base font-sans font-semibold tracking-wide drop-shadow-md">
            ⭐ 5.0 Google Rated Reader
          </div>

          {/* Bold, Larger Hero Title */}
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-balance text-white max-w-4xl mx-auto leading-[1.05] [text-shadow:_0_4px_20px_rgba(0,0,0,0.95),_0_2px_8px_rgba(11,15,25,1)]">
            The Cards Already Know.
          </h1>

          {/* Punchy Subheader */}
          <p className="font-sans text-lg sm:text-2xl text-balance text-gold font-medium max-w-xl mx-auto leading-relaxed [text-shadow:_0_3px_12px_rgba(0,0,0,0.95)]">
            Intuitive tarot guidance for love, career, and destiny.
          </p>

          {/* Single Primary CTA Button */}
          <div className="pt-2 flex justify-center">
            <a
              href="#booking-engine"
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-obsidian font-bold py-4 px-10 rounded-xl text-lg sm:text-xl transition-all duration-300 font-sans shadow-2xl shadow-gold/30 transform hover:scale-[1.02] active:scale-95"
            >
              Reserve Your Session Below ↓
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
