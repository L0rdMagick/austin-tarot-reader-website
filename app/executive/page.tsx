import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AmbientBackgroundCards } from '@/components/AmbientBackgroundCards';
import { ScrollReveal } from '@/components/ScrollReveal';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Executive Clarity Sessions | Strategic Tarot for Leaders',
  description:
    'Combine Wharton MBA business strategy with 11 years of intuitive tarot reading. High-level clarity sessions for founders, executives, VCs, and decision-makers in Austin, TX & worldwide. $250/session.',
  alternates: {
    canonical: '/executive',
  },
};

const focusAreas = [
  {
    title: 'High-Stakes Decision Alignment',
    desc: 'Evaluate critical strategic crossroads, partnership negotiations, or market pivots through combined analytical and intuitive lenses.',
    icon: '📊',
  },
  {
    title: 'Leadership & Founder Trajectory',
    desc: 'Uncover unseen blind spots, navigate co-founder dynamics, and align your career trajectory with authentic core vision.',
    icon: '🏛️',
  },
  {
    title: 'Burnout & Mindset Reset',
    desc: 'Private, non-judgmental space to process high-pressure demands, restore mental equilibrium, and regain unshakeable focus.',
    icon: '⚖️',
  },
  {
    title: 'Venture & Project Evaluation',
    desc: 'Test intuitive gut feelings against structured strategic frameworks before committing capital, time, or equity.',
    icon: '🎯',
  },
];

const executiveFaqs = [
  {
    question: "Are Executive Clarity Sessions strictly confidential?",
    answer: "Yes. Every session is held under strict NDA-level confidentiality. Your business strategy, negotiations, co-founder dynamics, and sensitive decisions remain 100% private."
  },
  {
    question: "How does Wharton MBA strategy combine with intuitive tarot?",
    answer: "Daniel bridges analytical frameworks (market timing, risk evaluation, capital allocation) with deep symbolic intuition to illuminate unstated variables, emotional leverage points, and non-obvious paths forward."
  },
  {
    question: "What business and executive topics are best suited for this session?",
    answer: "Common topics include founder burnout & perspective resets, co-founder partnership alignment, strategic pivots, product launches, venture capital timing, and high-stakes negotiation positioning."
  }
];

export default function ExecutivePage() {
  return (
    <div className="fade-in-on-load pb-16 md:pb-0 relative min-h-screen overflow-hidden">
      <AmbientBackgroundCards cards={[
        { src: '/images/rider-waite-tarot-deck-cards/01-TheMagician.jpg', name: 'The Magician', topPercent: 15, side: 'left', rotateDeg: -16 },
        { src: '/images/rider-waite-tarot-deck-cards/10-WheelOfFortune.jpg', name: 'Wheel of Fortune', topPercent: 55, side: 'right', rotateDeg: 14 },
        { src: '/images/rider-waite-tarot-deck-cards/21-TheWorld.jpg', name: 'The World', topPercent: 82, side: 'left', rotateDeg: -10 },
      ]} />

      <main className="flex flex-col items-center relative z-10 w-full">
        {/* HERO SECTION */}
        <ScrollReveal variant="fade-up" className="w-full flex flex-col items-center">
          <section className="w-full text-center pt-12 pb-8 md:pt-16 md:pb-12 flex flex-col items-center justify-center px-4">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": executiveFaqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                })
              }}
            />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-mono font-semibold mb-6">
              <span>🎓 Wharton MBA • 11 Years Intuitive Reader</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-balance text-gold max-w-5xl leading-[1.08]">
              Executive Clarity Sessions: Strategic Intuition for Decision-Makers
            </h1>

            <p className="mt-6 font-sans text-lg sm:text-xl text-balance max-w-3xl mx-auto text-foreground/90 leading-relaxed">
              Where analytical business discipline meets high-level intuitive insight. Designed specifically for founders, C-suite executives, VCs, and leaders navigating high-stakes crossroads.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 font-sans shadow-xl shadow-gold/20 transform hover:scale-[1.02] active:scale-95"
              >
                Book Executive Session ($250) ↗
              </a>
              <a
                href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20an%20Executive%20Clarity%20Session."
                className="w-full sm:w-auto bg-surface-elevated text-gold border border-gold/40 font-bold py-3.5 px-6 rounded-xl text-base hover:bg-surface-overlay transition-colors duration-300 font-sans active:scale-95"
              >
                💬 Text Daniel Directly
              </a>
            </div>
          </section>
        </ScrollReveal>

        <div className="w-full max-w-5xl mx-auto space-y-16 px-4 sm:px-8 md:px-12 pb-24">
          {/* THE STRATEGIST BEHIND THE CARDS */}
          <ScrollReveal variant="fade-up" className="w-full flex flex-col items-center">
            <section className="bg-surface p-8 sm:p-12 rounded-2xl border-2 border-gold/40 shadow-2xl shadow-gold/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-56 h-80 sm:w-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/50 shadow-gold/20">
                  <Image
                    src="/images/austin tarot reader portrait image of daniel the tarot reader4.png"
                    alt="Daniel - Wharton MBA & Intuitive Tarot Reader"
                    fill
                    sizes="(max-width: 768px) 256px, 256px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4 text-left">
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  The Dual Perspective
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold">
                  The Strategist Behind the Cards
                </h2>
                <div className="space-y-4 font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
                  <p>
                    I hold an <strong className="text-gold font-semibold">MBA in entrepreneurship from the Wharton School of Business</strong>, have built tech platforms, and have spent over 11 years conducting thousands of intuitive tarot readings.
                  </p>
                  <p>
                    Most executive decisions fail not from lack of data, but from unexamined gut feelings or emotional blind spots. Executive Clarity Sessions bridge this gap — providing a sophisticated space where market strategy, organizational dynamics, and intuitive foresight converge.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* FOCUS AREAS GRID */}
          <ScrollReveal variant="fade-up" className="w-full flex flex-col items-center">
            <section className="space-y-8 text-center w-full">
              <div>
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Strategic Applications
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  How Leaders Use These Sessions
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="bg-surface/80 p-7 rounded-2xl border border-white/10 space-y-3 hover:border-gold/40 transition-all duration-300 shadow-xl"
                  >
                    <span className="text-3xl">{area.icon}</span>
                    <h3 className="font-editorial text-xl font-bold text-foreground">
                      {area.title}
                    </h3>
                    <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* PRICING & INCLUDED STRUCTURE */}
          <ScrollReveal variant="fade-up" className="w-full flex flex-col items-center">
            <section className="bg-surface p-8 sm:p-12 rounded-2xl border border-gold/30 space-y-8 shadow-2xl w-full">
              <div className="text-center">
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Session Investment
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  Executive Clarity Package
                </h2>
              </div>

              <div className="max-w-xl mx-auto bg-surface-elevated p-8 rounded-xl border border-gold/40 text-center space-y-6">
                <div>
                  <span className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">Single Session Investment</span>
                  <div className="flex items-baseline justify-center gap-2 mt-1">
                    <span className="font-mono text-5xl font-bold text-gold">$250</span>
                    <span className="font-mono text-sm text-foreground/60">/ 60 minutes</span>
                  </div>
                  <p className="font-sans text-xs text-foreground/70 mt-1">
                    In-Person Downtown Austin or Virtual Worldwide
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 font-sans text-xs sm:text-sm text-foreground/85 text-left space-y-2.5">
                  <p className="flex items-center gap-2">
                    <span className="text-gold">✦</span> 60-Minute Dedicated Strategy &amp; Tarot Session
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold">✦</span> High-Resolution Spread Photo &amp; Action Item Summary
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold">✦</span> Wharton MBA Decision Framework Integration
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold">✦</span> 100% Strict NDA-Level Confidentiality Guarantee
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-6 rounded-xl text-base transition-all font-sans shadow-lg active:scale-95"
                  >
                    Reserve Executive Session ($250) ↗
                  </a>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* EXECUTIVE FAQ SECTION */}
          <ScrollReveal variant="fade-up" className="w-full">
            <section className="mt-12 bg-surface/80 p-8 sm:p-10 rounded-2xl border border-gold/30 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-gold">
                  Executive FAQ &amp; Confidentiality
                </h2>
                <p className="mt-2 font-sans text-foreground/80 text-base">
                  Direct answers regarding privacy, methodology, and session structure.
                </p>
              </div>
              <div className="space-y-3 max-w-3xl mx-auto">
                {executiveFaqs.map((faq, index) => (
                  <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
