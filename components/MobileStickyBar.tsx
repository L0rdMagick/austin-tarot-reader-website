'use client';

import Link from 'next/link';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-primary/30 px-4 py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <a
          href="sms:15125477129?body=Hi%20Daniel,%20I'm%20interested%20in%20booking%20a%20tarot%20reading!"
          className="flex-1 bg-surface-elevated text-gold border border-gold/40 font-bold py-2.5 px-3 rounded-lg text-center font-sans text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <span>💬</span>
          <span>Text Daniel</span>
        </a>
        <a
          href="#booking-engine"
          className="flex-1 bg-gold text-obsidian font-bold py-2.5 px-3 rounded-lg text-center font-sans text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-gold/20 active:scale-95 transition-transform"
        >
          <span>✨</span>
          <span>Book Session</span>
        </a>
      </div>
    </div>
  );
}
