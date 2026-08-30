'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AmbientCardProps {
  cards?: { src: string; name: string; topPercent: number; side: 'left' | 'right'; rotateDeg: number }[];
}

const DEFAULT_BG_CARDS = [
  { src: '/images/rider-waite-tarot-deck-cards/02-TheHighPriestess.jpg', name: 'The High Priestess', topPercent: 12, side: 'left' as const, rotateDeg: -12 },
  { src: '/images/rider-waite-tarot-deck-cards/10-WheelOfFortune.jpg', name: 'Wheel of Fortune', topPercent: 28, side: 'right' as const, rotateDeg: 14 },
  { src: '/images/rider-waite-tarot-deck-cards/00-TheFool.jpg', name: 'The Fool', topPercent: 48, side: 'left' as const, rotateDeg: 10 },
  { src: '/images/rider-waite-tarot-deck-cards/21-TheWorld.jpg', name: 'The World', topPercent: 68, side: 'right' as const, rotateDeg: -15 },
  { src: '/images/rider-waite-tarot-deck-cards/08-Strength.jpg', name: 'Strength', topPercent: 88, side: 'left' as const, rotateDeg: 8 },
];

export function AmbientBackgroundCards({ cards = DEFAULT_BG_CARDS }: AmbientCardProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {cards.map((card, idx) => {
        const isLeft = card.side === 'left';
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 1.2, delay: idx * 0.2 }}
            style={{
              top: `${card.topPercent}%`,
              left: isLeft ? '2%' : 'auto',
              right: isLeft ? 'auto' : '2%',
              transform: `rotate(${card.rotateDeg}deg)`,
            }}
            className="hidden lg:block absolute w-36 h-60 rounded-xl overflow-hidden border border-gold/40 shadow-2xl shadow-gold/10 filter blur-[0.4px]"
          >
            <Image
              src={card.src}
              alt={card.name}
              fill
              sizes="144px"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
