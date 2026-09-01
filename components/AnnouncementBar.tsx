'use client';

import Link from 'next/link';
import { useState } from 'react';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-amber-950 via-obsidian to-amber-950 text-gold border-b border-gold/30 py-2.5 px-4 text-xs sm:text-sm font-sans relative z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        {/* Halloween & Corporate Events Highlight */}
        <div className="flex items-center gap-2">
          <span className="animate-pulse">🎃</span>
          <span className="font-semibold text-foreground">
            Booking Halloween &amp; Fall Events:
          </span>
          <Link
            href="/events"
            className="text-gold font-bold underline hover:text-gold-light transition-colors inline-flex items-center gap-1"
          >
            <span>Reserve Your Date</span>
            <span>→</span>
          </Link>
        </div>

        <span className="hidden sm:inline text-gold/40">•</span>

        {/* Gift Cards Highlight */}
        <div className="flex items-center gap-2">
          <span>🎁</span>
          <span className="text-foreground/90">Gift Cards Now Available:</span>
          <Link
            href="/gift-cards"
            className="text-gold font-bold underline hover:text-gold-light transition-colors"
          >
            Buy Online
          </Link>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-gold p-1 transition-colors"
        aria-label="Dismiss announcement"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
