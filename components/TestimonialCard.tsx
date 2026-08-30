'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-surface p-8 rounded-2xl border border-white/10 hover:border-gold/50 shadow-xl hover:shadow-2xl hover:shadow-gold/10 h-full flex flex-col text-center md:text-left transition-colors cursor-pointer select-none"
    >
      {/* Decorative quotation mark for visual flair */}
      <svg
        className="w-10 h-10 text-gold opacity-60 mb-4 mx-auto md:mx-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>

      <blockquote className="flex-grow">
        <p className="font-sans text-base sm:text-lg italic text-foreground/90 leading-relaxed text-balance">
          "{quote}"
        </p>
      </blockquote>

      <footer className="mt-6 pt-4 border-t border-white/5">
        <p className="font-bold not-italic text-gold font-editorial text-lg">
          - {author}
        </p>
        <p className="text-xs font-mono text-emerald-400 mt-0.5 flex items-center justify-center md:justify-start gap-1">
          <span>⭐ Verified Google Review</span>
        </p>
      </footer>
    </motion.div>
  );
}