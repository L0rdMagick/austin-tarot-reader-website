'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TarotTopicFeatureProps {
  cardSrc: string;
  cardName: string;
  subtitle: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  imagePosition?: 'left' | 'right';
  badge?: string;
}

export function TarotTopicFeature({
  cardSrc,
  cardName,
  subtitle,
  title,
  description,
  ctaText,
  ctaHref,
  imagePosition = 'left',
  badge,
}: TarotTopicFeatureProps) {
  const isLeft = imagePosition === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`w-full bg-surface/60 border border-gold/25 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-sm grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center hover:border-gold/45 transition-colors ${
        isLeft ? '' : 'md:flex-row-reverse'
      }`}
    >
      {/* Visual Stimulus: High-Impact Tarot Card Graphic */}
      <div
        className={`md:col-span-4 flex flex-col items-center justify-center ${
          isLeft ? 'order-1' : 'order-1 md:order-2'
        }`}
      >
        <motion.div
          whileHover={{ rotateY: 10, scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="relative w-40 h-64 sm:w-48 sm:h-76 md:w-52 md:h-80 rounded-xl overflow-hidden shadow-2xl shadow-black/70 border-2 border-gold/40 cursor-pointer group"
        >
          <Image
            src={cardSrc}
            alt={`${cardName} Tarot Card - ${title}`}
            fill
            sizes="(max-width: 768px) 192px, 208px"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle Ambient Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 right-2 text-center bg-obsidian/85 backdrop-blur-md py-1 px-2 rounded border border-gold/30">
            <span className="font-editorial text-xs font-bold text-gold tracking-wide">
              {cardName}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Copy Fulfillment: Engaging Hook & Persuasive Copy */}
      <div
        className={`md:col-span-8 text-center md:text-left space-y-4 ${
          isLeft ? 'order-2' : 'order-2 md:order-1'
        }`}
      >
        {badge && (
          <span className="inline-block text-gold uppercase tracking-widest text-xs font-mono font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            {badge}
          </span>
        )}
        <span className="block text-gold/80 uppercase tracking-widest text-xs font-mono font-semibold">
          {subtitle}
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-normal text-gold leading-tight">
          {title}
        </h3>
        <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
          {description}
        </p>

        {ctaText && ctaHref && (
          <div className="pt-2 text-center md:text-left">
            <a
              href={ctaHref}
              className="inline-block bg-gold hover:bg-gold-light text-obsidian font-bold py-3 px-7 rounded-xl text-base transition-all font-sans shadow-lg shadow-gold/20 active:scale-95"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
