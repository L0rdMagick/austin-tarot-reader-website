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
    <section className="w-full relative pt-4 pb-10 sm:pb-14 flex flex-col items-center justify-center overflow-hidden">
      {/* 5-CARD TAROT SPREAD BACKGROUND ACCENT - STRICTLY CONTAINED INSIDE HERO HEIGHT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-75">
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 h-[92%] w-full max-w-7xl px-4 py-2">
          {HERO_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: card.rotate }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
              className={`relative h-full aspect-[2/3] max-h-[500px] rounded-2xl overflow-hidden border border-gold/40 shadow-2xl shadow-gold/20 shrink-0 ${
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

      {/* FOREGROUND FULL-WIDTH 30% OPAQUE SEMI-INDIGO BACKDROP CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full text-center bg-[#0B0F19]/30 backdrop-blur-sm border-y border-gold/30 py-8 sm:py-12 px-4 sm:px-8 shadow-2xl space-y-6"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Trust Badge - Darker High Contrast Backdrop */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0B0F19]/90 border border-gold/40 text-gold text-xs sm:text-sm font-sans font-semibold shadow-lg shadow-obsidian/60">
            <span>⭐ 5.0 Google Rated Tarot Reader</span>
            <span className="text-foreground/40">•</span>
            <span>In-Person Austin, TX & Virtual</span>
          </div>

          {/* Hero Title with Dark Letter Shadows for Crisp Readability */}
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-balance text-gold max-w-4xl mx-auto leading-[1.08] [text-shadow:_0_2px_10px_rgba(11,15,25,0.95),_0_1px_3px_rgba(11,15,25,0.9)]">
            Step into the Circle. The Cards Already Know.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-xl text-balance max-w-2xl mx-auto text-foreground/90 leading-relaxed font-medium [text-shadow:_0_1px_5px_rgba(11,15,25,0.9)]">
            Find immediate clarity for love, purpose, and life&apos;s crossroads with Austin&apos;s premier intuitive reader.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking-engine"
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 font-sans shadow-xl shadow-gold/20 transform hover:scale-[1.02] active:scale-95"
            >
              Reserve Your Reading Below ↓
            </a>
            <a
              href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20booking%20a%20tarot%20reading."
              className="w-full sm:w-auto bg-surface-elevated text-gold border border-gold/40 font-bold py-3.5 px-6 rounded-xl text-base hover:bg-surface-overlay transition-colors duration-300 font-sans active:scale-95"
            >
              💬 Text Daniel for Today&apos;s Openings
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
