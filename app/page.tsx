import { TestimonialCard } from '@/components/TestimonialCard';
import { HeroFiveCardBanner } from '@/components/HeroFiveCardBanner';
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
  description: "Discover clarity and guidance with Austin's trusted tarot reader. Specializing in love & relationship, career, and life purpose readings. Book your session now.",
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
        {/* SECTION 1: HERO 5-CARD SPREAD BANNER */}
        {/* ========================================================================= */}
        <HeroFiveCardBanner />

        <div className="w-full max-w-5xl mx-auto space-y-12 md:space-y-16 px-4 sm:px-8 md:px-12 pb-16 pt-6">
          
          {/* ========================================================================= */}
          {/* SECTION 2: ABOUT DANIEL (VISUAL STIMULUS + PERSUASIVE COPY) */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <TarotTopicFeature
              badge="Intuitive Authority"
              subtitle="Deep Intuition & Unfiltered Clarity"
              title="A Trusted Guide for Your Journey"
              description="Welcome! I'm Daniel. Known for a compassionate and intuitive approach, I've conducted thousands of readings helping people from all walks of life navigate life's complexities. My goal is to offer insight and clarity, revealing the truth behind emotional confusion so you can make confident decisions from a place of self-worth."
              cardSrc="/images/austin tarot reader portrait image of daniel the tarot reader4.png"
              cardName="Daniel • Intuitive Reader"
              ctaText="Learn More About My Philosophy →"
              ctaHref="/about"
              imagePosition="left"
            />
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 3: CLIENT EXPERIENCES & VERIFIED GOOGLE REVIEWS */}
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
          {/* SECTION 4: SPECIALIZED FOCUS VIDEO CAROUSEL (PLACED BEFORE BOOKING ENGINE) */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <SpecializedFocusCarousel />
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 5: PRIMARY BOOKING ENGINE (DEMAND-DRIVEN TOPIC TABS & FORMAT TOGGLE) */}
          {/* ========================================================================= */}
          <ScrollReveal variant="fade-up">
            <MysticBookingEngine />
          </ScrollReveal>

          {/* ========================================================================= */}
          {/* SECTION 6: HOW A READING WORKS (SIMPLE 3-STEP PROCESS) */}
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
          {/* SECTION 7: QUICK FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
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