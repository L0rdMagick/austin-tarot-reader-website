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
      {/* Visual Stimulus: 25% Larger Tarot Card Graphic + SMS Text Button Underneath */}
      <div
        className={`md:col-span-5 flex flex-col items-center justify-center ${
          isLeft ? 'order-1' : 'order-1 md:order-2'
        }`}
      >
        <motion.div
          whileHover={{ rotateY: 10, scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="relative w-52 h-80 sm:w-60 sm:h-96 md:w-64 md:h-[26rem] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border-2 border-gold/40 cursor-pointer group"
        >
          <Image
            src={cardSrc}
            alt={`${cardName} Tarot Card - ${title}`}
            fill
            sizes="(max-width: 768px) 240px, 256px"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle Ambient Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 right-2.5 text-center bg-obsidian/90 backdrop-blur-md py-1.5 px-3 rounded-lg border border-gold/40 shadow-md">
            <span className="font-editorial text-xs sm:text-sm font-bold text-gold tracking-wide">
              {cardName}
            </span>
          </div>
        </motion.div>

        {/* SMS Texting Button Directly Underneath Image Container */}
        <a
          href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20booking%20a%20tarot%20reading."
          className="mt-3.5 w-full max-w-[256px] bg-surface-elevated text-gold border border-gold/40 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm hover:bg-surface-overlay transition-colors duration-300 font-sans active:scale-95 text-center shadow-lg block"
        >
          💬 Text Daniel for Today&apos;s Openings
        </a>
      </div>

      {/* Copy Fulfillment: Engaging Hook & Persuasive Copy */}
      <div
        className={`md:col-span-7 text-center md:text-left space-y-4 ${
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
              className="inline-block bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-base transition-all font-sans shadow-lg shadow-gold/20 active:scale-95"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
