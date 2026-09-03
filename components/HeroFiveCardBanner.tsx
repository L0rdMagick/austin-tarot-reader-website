'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HERO_CARDS = [
  {
    src: '/images/rider-waite-tarot-deck-cards/03-TheEmpress.jpg',
    alt: 'The Empress Tarot Card',
    rotate: -12,
    offsetY: 8,
    mobileHide: true,
  },
  {
    src: '/images/rider-waite-tarot-deck-cards/18-TheMoon.jpg',
    alt: 'The Moon Tarot Card',
    rotate: -6,
    offsetY: 2,
    mobileHide: false,
  },
  {
    src: '/images/rider-waite-tarot-deck-cards/17-TheStar.jpg',
    alt: 'The Star Tarot Card',
    rotate: 0,
    offsetY: 0,
    mobileHide: false,
  },
  {
    src: '/images/rider-waite-tarot-deck-cards/19-TheSun.jpg',
    alt: 'The Sun Tarot Card',
    rotate: 6,
    offsetY: 2,
    mobileHide: false,
  },
  {
    src: '/images/rider-waite-tarot-deck-cards/04-TheEmperor.jpg',
    alt: 'The Emperor Tarot Card',
    rotate: 12,
    offsetY: 8,
    mobileHide: true,
  },
];

export function HeroFiveCardBanner() {
  return (
    <section className="w-full relative py-12 md:py-16 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* 5-CARD TAROT SPREAD BACKGROUND ACCENT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-70">
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 transform scale-90 sm:scale-100 md:scale-110">
          {HERO_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: card.offsetY, rotate: card.rotate }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
              className={`relative w-24 h-40 sm:w-32 sm:h-52 md:w-40 md:h-64 rounded-xl overflow-hidden border border-gold/40 shadow-2xl shadow-gold/20 backdrop-blur-sm shrink-0 ${
                card.mobileHide ? 'hidden sm:block' : 'block'
              }`}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                style={{ objectFit: 'cover' }}
                priority={idx === 2}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/20 to-obsidian/60" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOREGROUND SEMI-INDIGO BACKDROP CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl w-full text-center bg-[#0B0F19]/85 backdrop-blur-md border border-gold/30 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-obsidian/80 space-y-6"
      >
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-sans font-semibold">
          <span>⭐ 5.0 Google Rated Tarot Reader</span>
          <span className="text-foreground/40">•</span>
          <span>In-Person Austin, TX & Virtual</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-balance text-gold max-w-4xl mx-auto leading-[1.08]">
          Step into the Circle. The Cards Already Know.
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-xl text-balance max-w-2xl mx-auto text-foreground/90 leading-relaxed">
          Find immediate clarity for love, purpose, and life&apos;s crossroads with Austin&apos;s premier intuitive reader.
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <a
            href="#booking-engine"
            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-10 rounded-xl text-lg transition-all duration-300 font-sans shadow-xl shadow-gold/20 transform hover:scale-[1.02] active:scale-95"
          >
            Book Your Reading ↓
          </a>
          <a
            href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20booking%20a%20tarot%20reading."
            className="font-sans text-sm text-foreground/75 hover:text-gold transition-colors duration-200"
          >
            Need same-day? <span className="underline font-medium">Text (512) 547-7129</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
