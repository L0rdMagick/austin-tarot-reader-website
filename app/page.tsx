import { TestimonialCard } from '@/components/TestimonialCard';
import { TarotCardAnimation } from '@/components/TarotCardAnimation';
import { MysticBookingEngine } from '@/components/MysticBookingEngine';
import { AmbientConstellation } from '@/components/AmbientConstellation';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { FaqAccordion } from '@/components/FaqAccordion';
import { SpecializedFocusCarousel } from '@/components/SpecializedFocusCarousel';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TarotTopicFeature } from '@/components/TarotTopicFeature';
import { AmbientBackgroundCards } from '@/components/AmbientBackgroundCards';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Austin Tarot Reader | Intuitive Guidance & Clarity",
  description: "Discover clarity and guidance with Austin's trusted tarot reader. Specializing in personal, event, and couple's readings. Book your insightful session now.",
  alternates: {
    canonical: '/',
  },
};

// --- Testimonials Data ---
const testimonials = [
  { quote: "I’ve been seeing Daniel for close to two years now and he never misses! His foresight is amazing and his readings are always spot on!", author: "A. C." },
  { quote: "Daniel is amazing! His insight through his reads have had such a positive impact on my life... I completely encourage anyone to use his services. He is the best!", author: "M. G." },
  { quote: "This was such a great experience! Daniel has such great energy that I felt safe as soon as I sat down. My reading and ceremony offered so much clarity and reassurance.", author: "S. B." }
];

// --- Quick FAQ Data ---
const quickFaqs = [
  {
    question: "Are in-person tarot readings available in Austin, TX?",
    answer: "Yes! In-person sessions are available in Downtown Austin, TX. Virtual readings via Phone or Video are also available worldwide with the exact same energetic accuracy."
  },
  {
    question: "What if I don't know what specific question to ask?",
    answer: "No problem at all. Open, general spreads allow the cards to illuminate whatever message, emotional blockage, or upcoming transition is most urgent for your soul right now."
  },
  {
    question: "What will I take away from my reading session?",
    answer: "You will leave with direct actionable guidance, emotional peace, plus a high-resolution photo of your custom card spread to revisit anytime."
  },
  {
    question: "Is my reading completely confidential?",
    answer: "100%. Every reading is a strictly private, non-judgmental, and compassionate space."
  }
];

export default function HomePage() {
  return (
    <div className="fade-in-on-load pb-16 md:pb-0 relative min-h-screen overflow-hidden">
      {/* 60fps Ambient Stardust & Constellations */}
      <AmbientConstellation />

      {/* Ambient Floating Tarot Card Watermarks in Background */}
      <AmbientBackgroundCards />

      <main className="flex flex-col items-center relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO */}
        {/* ========================================================================= */}
        <ScrollReveal variant="fade-up">
          <section className="w-full text-center pt-12 pb-6 md:pt-16 md:pb-8 flex flex-col items-center justify-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-mono font-semibold mb-6">
              <span>⭐ 5.0 Google Rated Tarot Reader</span>
              <span className="text-foreground/40">•</span>
              <span>In-Person Austin, TX & Virtual</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-balance text-gold max-w-5xl leading-[1.08]">
              Step into the Circle. The Cards Already Know.
            </h1>
            <p className="mt-6 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground/90 leading-relaxed">
              Find immediate clarity for love, purpose, and life's crossroads with Austin's premier intuitive reader.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a href="#booking-engine" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 font-sans shadow-xl shadow-gold/20 transform hover:scale-[1.02] active:scale-95">
                Reserve Your Reading Below ↓
              </a>
              <a href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20booking%20a%20tarot%20reading." className="w-full sm:w-auto bg-surface-elevated text-gold border border-gold/40 font-bold py-3.5 px-6 rounded-xl text-base hover:bg-surface-overlay transition-colors duration-300 font-sans active:scale-95">
                💬 Text Daniel for Today's Openings
              </a>
            </div>
          </section>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* SECTION 2: FLOATING TAROT CARDS VISUAL ACCENT */}
        {/* ========================================================================= */}
        <TarotCardAnimation />

        <div className="w-full max-w-5xl mx-auto space-y-12 md:space-y-16 px-4 sm:px-8 md:px-12 pb-16 pt-6">
          
          {/* ========================================================================= */}
          {/* SECTION 3: ABOUT DANIEL (VISUAL STIMULUS + PERSUASIVE COPY) */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <TarotTopicFeature
              badge="Intuitive Authority"
              subtitle="Deep Intuition & Unfiltered Clarity"
              title="A Trusted Guide for Your Journey"
              description="Welcome! I'm Daniel. Known for a compassionate and intuitive approach, I've conducted thousands of readings helping people from all walks of life navigate life's complexities. My goal is to offer insight and clarity, revealing the truth behind emotional confusion so you can make confident decisions from a place of self-worth."
              cardSrc="/images/rider-waite-tarot-deck-cards/02-TheHighPriestess.jpg"
              cardName="02 - The High Priestess"
              ctaText="Learn More About My Philosophy →"
              ctaHref="/about"
              imagePosition="left"
            />
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 4: CLIENT EXPERIENCES & VERIFIED GOOGLE REVIEWS */}
          {/* ========================================================================= */}
          <ScrollReveal variant="zoom-in">
            <section className="text-center">
              <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">Client Experiences</span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                What Clients Are Saying
              </h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 5: HOW A READING WORKS (VISUAL STIMULUS + 3-STEP PROCESS) */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <section className="bg-surface p-8 sm:p-12 rounded-2xl border border-gold/30 space-y-8 shadow-2xl">
              <div className="text-center">
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">Simple 3-Step Process</span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  How Your Session Works
                </h2>
                <p className="font-sans text-sm sm:text-base text-foreground/80 max-w-xl mx-auto mt-2">
                  Designed to feel welcoming, empowering, and completely non-judgmental.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 relative hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">01</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">Choose Your Format</h3>
                  <p className="font-sans text-xs text-foreground/80 leading-relaxed">
                    Reserve in-person in Downtown Austin or via Phone/Video worldwide.
                  </p>
                </div>

                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 relative hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">02</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">Share Your Focus</h3>
                  <p className="font-sans text-xs text-foreground/80 leading-relaxed">
                    Bring specific questions (Love, Career, Life Purpose) or let open spreads reveal immediate clarity.
                  </p>
                </div>

                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 relative hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">03</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">Gain Actionable Clarity</h3>
                  <p className="font-sans text-xs text-foreground/80 leading-relaxed">
                    Leave with concrete next steps, spiritual peace, plus clarity on your given question.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 6: MYSTIC BENTO BOOKING ENGINE (PRIMARY CONVERSION MACHINE) */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <MysticBookingEngine />
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 7: SPECIALIZED FOCUS 3-SLIDE VIDEO CAROUSEL */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <SpecializedFocusCarousel />
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 8: QUICK FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <section className="text-center max-w-3xl mx-auto space-y-6">
              <div>
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">Have Questions?</span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="text-left space-y-2">
                {quickFaqs.map((faq, index) => (
                  <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 9: CLEAR OFFERINGS SUMMARY GRID & FOOTER HOOK */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <section className="text-center space-y-8">
              <div>
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">Frictionless Booking</span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  Choose Your Guidance Session
                </h2>
                <p className="mt-3 font-sans text-foreground/80 max-w-xl mx-auto text-base sm:text-lg">
                  Available in-person in Downtown Austin or via Phone/Video worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {/* Card 1: 30-Min */}
                <div className="bg-surface/80 p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-gold/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                  <div>
                    <span className="text-gold font-mono text-xs uppercase tracking-wider font-semibold">Quick Answers</span>
                    <h3 className="font-editorial text-2xl font-bold text-foreground mt-1">Focused Reading</h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-mono text-3xl font-bold text-gold">$55.00</span>
                      <span className="font-mono text-xs text-foreground/60">/ 30 minutes</span>
                    </div>
                    <p className="mt-4 font-sans text-sm text-foreground/80 leading-relaxed">
                      Designed to bring quick, sharp insight into 1–2 pressing questions or immediate crossroads in your life.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-surface-elevated border border-gold/40 text-gold hover:bg-gold hover:text-obsidian font-bold py-3 px-6 rounded-xl text-base transition-colors duration-300 font-sans active:scale-95">
                      Book 30-Min ($55) ↗
                    </a>
                  </div>
                </div>

                {/* Card 2: 60-Min (MOST POPULAR) */}
                <div className="bg-surface p-8 rounded-2xl border-2 border-gold shadow-2xl shadow-gold/15 flex flex-col justify-between relative transform md:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-obsidian text-xs font-bold font-mono uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
                    Most Popular
                  </div>
                  <div>
                    <span className="text-gold font-mono text-xs uppercase tracking-wider font-semibold">Deep Clarity</span>
                    <h3 className="font-editorial text-2xl font-bold text-foreground mt-1">In-Depth Reading</h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-mono text-3xl font-bold text-gold">$85.00</span>
                      <span className="font-mono text-xs text-foreground/60">/ 60 minutes</span>
                    </div>
                    <p className="mt-4 font-sans text-sm text-foreground/90 leading-relaxed">
                      An extended 15-card spread covering your Love Life, Career, Twin Flame journey, or overall spiritual path.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-gold text-obsidian font-bold py-3 px-6 rounded-xl text-base hover:bg-gold-light transition-opacity duration-300 font-sans shadow-md active:scale-95">
                      Book 60-Min ($85) ↗
                    </a>
                  </div>
                </div>

                {/* Card 3: Coaching */}
                <div className="bg-surface/80 p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-gold/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                  <div>
                    <span className="text-gold font-mono text-xs uppercase tracking-wider font-semibold">Tarot + Life Coaching</span>
                    <h3 className="font-editorial text-2xl font-bold text-foreground mt-1">Intuitive Coaching</h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-mono text-3xl font-bold text-gold">$85.00</span>
                      <span className="font-mono text-xs text-foreground/60">/ 60 minutes</span>
                    </div>
                    <p className="mt-4 font-sans text-sm text-foreground/80 leading-relaxed">
                      Combines intuitive tarot insight with structured life coaching to map out real action steps for transformation.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/SK53OJ3ZTPXWAEZOF3SK4P4A" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-surface-elevated border border-gold/40 text-gold hover:bg-gold hover:text-obsidian font-bold py-3 px-6 rounded-xl text-base transition-colors duration-300 font-sans active:scale-95">
                      Book Coaching ($85) ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/services" className="font-sans text-base text-gold hover:underline inline-flex items-center gap-1 font-semibold active:scale-95">
                  <span>Explore all specialized reading topics (Love, Career, Twin Flame)</span>
                  <span>→</span>
                </Link>
              </div>
            </section>
          </ScrollReveal>

        </div>
      </main>

      {/* Sticky Action Bar for Mobile Visitors */}
      <MobileStickyBar />
    </div>
  );
}