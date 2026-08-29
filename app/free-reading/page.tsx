import type { Metadata } from 'next';
import { InteractiveTarotOracle } from '@/components/InteractiveTarotOracle';
import { AmbientConstellation } from '@/components/AmbientConstellation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free AI Tarot Reading | 3-Card Oracle Sample',
  description: 'Experience a free 3-card AI tarot reading for instant guidance on love, career, and life purpose. Get a glimpse into your energy before booking a 1-on-1 session with Daniel in Austin, TX.',
  alternates: {
    canonical: '/free-reading',
  },
};

export default function FreeReadingPage() {
  return (
    <div className="fade-in-on-load min-h-screen relative pb-16">
      <AmbientConstellation />

      <main className="flex flex-col items-center relative z-10 pt-12 md:pt-16 px-4">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono font-semibold uppercase tracking-widest">
            <span>✦ Complimentary Oracle Sample ✦</span>
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-gold tracking-tight">
            Free 3-Card AI Tarot Experience
          </h1>
          <p className="font-sans text-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Curious about what energy surrounds your path right now? Use our free interactive oracle to draw 3 cards for immediate reflection.
          </p>
        </div>

        {/* The Interactive Oracle App */}
        <div className="w-full max-w-4xl mx-auto">
          <InteractiveTarotOracle />
        </div>

        {/* Bottom Transition to Full Human Reading */}
        <section className="w-full max-w-3xl mx-auto mt-16 p-8 bg-surface-elevated rounded-2xl border border-gold/30 text-center space-y-4 shadow-2xl">
          <h2 className="font-editorial text-3xl font-normal text-gold">
            Ready for Deep, Personal Intuitive Clarity?
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed max-w-xl mx-auto">
            While our AI oracle offers a quick symbolic glimpse, a 1-on-1 reading with Daniel provides true intuitive depth, personal connection, and answers to your exact life situation.
          </p>
          <div className="pt-2">
            <Link
              href="/#booking-engine"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-base transition-all transform hover:scale-[1.02] shadow-xl shadow-gold/20 font-sans"
            >
              <span>Book Your 1-on-1 Reading with Daniel ($55 – $85)</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
