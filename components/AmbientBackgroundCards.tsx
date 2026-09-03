'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface BgCard {
  src: string;
  name: string;
  topPercent: number; // Vertical position in page (e.g. 10%, 30%, 55%, 75%, 90%)
  side: 'left' | 'right';
  rotateDeg: number; // Tilt angle (e.g. -18, 15, -12, 20)
}

interface AmbientBackgroundCardsProps {
  cards?: BgCard[];
}

const HOMEPAGE_BG_CARDS: BgCard[] = [
  { src: '/images/rider-waite-tarot-deck-cards/02-TheHighPriestess.jpg', name: 'The High Priestess', topPercent: 10, side: 'left', rotateDeg: -18 },
  { src: '/images/rider-waite-tarot-deck-cards/10-WheelOfFortune.jpg', name: 'Wheel of Fortune', topPercent: 28, side: 'right', rotateDeg: 15 },
  { src: '/images/rider-waite-tarot-deck-cards/00-TheFool.jpg', name: 'The Fool', topPercent: 48, side: 'left', rotateDeg: -14 },
  { src: '/images/rider-waite-tarot-deck-cards/21-TheWorld.jpg', name: 'The World', topPercent: 68, side: 'right', rotateDeg: 20 },
  { src: '/images/rider-waite-tarot-deck-cards/08-Strength.jpg', name: 'Strength', topPercent: 88, side: 'left', rotateDeg: -12 },
];

export function AmbientBackgroundCards({ cards = HOMEPAGE_BG_CARDS }: AmbientBackgroundCardsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {cards.map((card, idx) => {
        const isLeft = card.side === 'left';
        return (
          <motion.div
            key={`${card.name}-${idx}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.05, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: (idx % 3) * 0.15 }}
            style={{
              top: `${card.topPercent}%`,
              left: isLeft ? '1%' : 'auto',
              right: isLeft ? 'auto' : '1%',
            }}
            className="absolute hidden lg:block"
          >
            {/* Tilted Floating Container */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [card.rotateDeg, card.rotateDeg + 2, card.rotateDeg],
              }}
              transition={{
                duration: 6 + (idx % 3),
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-24 h-40 sm:w-32 sm:h-52 md:w-36 md:h-60 rounded-xl overflow-hidden border border-gold/40 shadow-2xl shadow-gold/20 backdrop-blur-[1px]"
            >
              <Image
                src={card.src}
                alt={`${card.name} Background Card`}
                fill
                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-obsidian/40" />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
