import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AmbientBackgroundCards } from '@/components/AmbientBackgroundCards';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Corporate Events & Private Parties | Austin Tarot Reader',
  description:
    'Elevate your corporate gala, holiday party, Halloween event, or private gathering with 11 years of professional tarot reading experience in Austin, TX. Straightforward $150/hr rate + $50 travel fee.',
  alternates: {
    canonical: '/events',
  },
};

const eventTypes = [
  {
    title: 'Corporate Galas & Celebrations',
    desc: 'Unforgettable cocktail-hour entertainment for company milestones, product launches, and annual celebrations.',
    icon: '🍸',
  },
  {
    title: 'Halloween & Fall Bashes',
    desc: 'The ultimate seasonal attraction. October dates book up months in advance — reserve early.',
    icon: '🎃',
  },
  {
    title: 'Private Parties & Birthdays',
    desc: 'Intimate, uplifting readings for milestone birthdays, dinner parties, and bachelorette gatherings.',
    icon: '✨',
  },
  {
    title: 'Executive Retreats & Team Building',
    desc: 'Reframing intuition as strategic perspective for decision-makers and high-performing teams.',
    icon: '💼',
  },
];

const sellingPoints = [
  {
    title: '11 Years of Professional Experience',
    description:
      'Over a decade of reading for thousands of individuals, corporate executives, and high-profile private events across Austin and beyond.',
  },
  {
    title: 'Customizable Pace per Guest',
    description:
      'Structure readings for any headcount — from 5-minute rapid clarity pulls for large crowds to 15-minute deep insights for smaller gatherings.',
  },
  {
    title: 'Zero Logistical Stress for Planners',
    description:
      'I arrive fully self-contained 30 minutes prior to start time, adhering precisely to your venue rules, schedule, and load-in instructions.',
  },
  {
    title: 'Uplifting & Professional Tone',
    description:
      'Always empowering, non-judgmental, and engaging. Every guest leaves feeling valued, inspired, and excited about their experience.',
  },
];

export default function EventsPage() {
  return (
    <div className="fade-in-on-load pb-16 md:pb-0 relative min-h-screen overflow-hidden">
      <AmbientBackgroundCards cards={[
        { src: '/images/rider-waite-tarot-deck-cards/02-TheHighPriestess.jpg', name: 'The High Priestess', topPercent: 12, side: 'left', rotateDeg: -18 },
        { src: '/images/rider-waite-tarot-deck-cards/10-WheelOfFortune.jpg', name: 'Wheel of Fortune', topPercent: 55, side: 'right', rotateDeg: 15 },
        { src: '/images/rider-waite-tarot-deck-cards/21-TheWorld.jpg', name: 'The World', topPercent: 82, side: 'left', rotateDeg: -12 },
      ]} />

      <main className="flex flex-col items-center relative z-10 w-full">
        {/* HERO SECTION */}
        <ScrollReveal variant="fade-up" className="w-full flex flex-col items-center">
          <section className="w-full text-center pt-12 pb-8 md:pt-16 md:pb-12 flex flex-col items-center justify-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-mono font-semibold mb-6">
              <span>📍 Austin, TX &amp; Surrounding Areas • In-Person Events</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-balance text-gold max-w-5xl leading-[1.08]">
              Unforgettable Intuitive Entertainment for Corporate Events &amp; Private Parties
            </h1>

            <p className="mt-6 font-sans text-lg sm:text-xl text-balance max-w-3xl mx-auto text-foreground/90 leading-relaxed">
              Elevate your next gathering with Austin&apos;s premier tarot reader. Backed by <strong className="text-gold font-semibold">11 years of professional reading experience</strong>, I bring a stylish, captivating, and deeply engaging dimension to your event.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#event-pricing"
                className="w-full sm:w-auto bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 font-sans shadow-xl shadow-gold/20 transform hover:scale-[1.02] active:scale-95"
              >
                View Straightforward Pricing ↓
              </a>
              <a
                href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20inquire%20about%20booking%20tarot%20readings%20for%20an%20event."
                className="w-full sm:w-auto bg-surface-elevated text-gold border border-gold/40 font-bold py-3.5 px-6 rounded-xl text-base hover:bg-surface-overlay transition-colors duration-300 font-sans active:scale-95"
              >
                💬 Text Daniel for Event Inquiry
              </a>
            </div>
          </section>
        </ScrollReveal>

        {/* HERO IMAGE SHOWCASE */}
        <ScrollReveal variant="fade-up" className="w-full flex flex-col items-center">
          <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 mb-16">
            <div className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] rounded-2xl overflow-hidden border-2 border-gold/40 shadow-2xl shadow-gold/15">
              <Image
                src="/images/events/corporate-tarot-hero.jpg"
                alt="Professional tarot reader performing at a high-end Austin corporate cocktail party"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="bg-gold/20 backdrop-blur-md text-gold text-xs font-mono font-bold px-3 py-1 rounded-full border border-gold/40">
                  Austin Corporate &amp; Private Parties
                </span>
                <p className="font-editorial text-xl sm:text-2xl font-bold text-foreground mt-2">
                  High-Engagement Entertainment Guests Talk About For Months
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="w-full max-w-5xl mx-auto space-y-16 px-4 sm:px-8 md:px-12 pb-24">
          {/* SELLING POINTS FOR EVENT PLANNERS */}
          <ScrollReveal variant="fade-up">
            <section className="space-y-8 text-center">
              <div>
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Why Event Planners Choose Daniel
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  11 Years of Excellence &amp; Flawless Execution
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {sellingPoints.map((point) => (
                  <div
                    key={point.title}
                    className="bg-surface p-7 rounded-2xl border border-white/10 space-y-3 hover:border-gold/40 transition-colors shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gold font-mono text-lg">✦</span>
                      <h3 className="font-editorial text-xl font-bold text-foreground">
                        {point.title}
                      </h3>
                    </div>
                    <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* PRICING & LOGISTICS SECTION */}
          <ScrollReveal variant="fade-up">
            <section id="event-pricing" className="bg-surface p-8 sm:p-12 rounded-2xl border-2 border-gold space-y-8 shadow-2xl shadow-gold/15">
              <div className="text-center">
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Transparent &amp; Simple
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  Event Pricing &amp; Terms
                </h2>
                <p className="mt-2 font-sans text-foreground/80 max-w-xl mx-auto text-sm sm:text-base">
                  No hidden fees, no complicated packages. Clear hourly billing so you can budget with complete confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-center">
                {/* Rate Breakdown */}
                <div className="bg-surface-elevated p-8 rounded-xl border border-gold/40 space-y-6">
                  <div>
                    <span className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">Hourly Booking Rate</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-mono text-4xl sm:text-5xl font-bold text-gold">$150</span>
                      <span className="font-mono text-sm text-foreground/60">/ hour</span>
                    </div>
                    <p className="font-sans text-xs text-foreground/70 mt-1">
                      (2-hour minimum per booking)
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">Flat Travel Fee</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-mono text-3xl font-bold text-gold">$50</span>
                      <span className="font-mono text-xs text-foreground/60">flat rate</span>
                    </div>
                    <p className="font-sans text-xs text-foreground/70 mt-1">
                      Covers transit, early load-in, and professional setup across Austin, TX &amp; surrounding areas.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 font-sans text-xs text-foreground/80 space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="text-gold">✓</span> Includes full velvet table setup &amp; ambient decor
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gold">✓</span> Flexible per-guest timing based on headcount
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gold">✓</span> Seamless corporate invoice / card billing available
                    </p>
                  </div>
                </div>

                {/* Setup Image + Experience Note */}
                <div className="space-y-6">
                  <div className="relative w-full h-[260px] rounded-xl overflow-hidden border border-gold/30 shadow-xl">
                    <Image
                      src="/images/events/event-tarot-setup.jpg"
                      alt="Celestial tarot reading lounge setup for Austin events"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-gold">
                      Customizable Reading Duration
                    </h3>
                    <p className="font-sans text-sm text-foreground/80 mt-2 leading-relaxed">
                      Whether you have 15 VIP guests who want 15-minute deep readings or a crowd of 100 who want fast 5-minute headline pulls, I adapt the pace live to ensure every guest gets their moment.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* PERFECT FOR THESE EVENTS */}
          <ScrollReveal variant="fade-up">
            <section className="space-y-8 text-center">
              <div>
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Versatile &amp; Stylish
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  Ideal For Any Occasion
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {eventTypes.map((event) => (
                  <div
                    key={event.title}
                    className="bg-surface/80 p-6 rounded-2xl border border-white/10 space-y-3 hover:border-gold/40 transition-all duration-300 hover:scale-[1.02] shadow-xl"
                  >
                    <span className="text-3xl">{event.icon}</span>
                    <h3 className="font-editorial text-lg font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="font-sans text-xs text-foreground/75 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* HOW BOOKING WORKS — STEP BY STEP */}
          <ScrollReveal variant="fade-up">
            <section className="bg-surface p-8 sm:p-12 rounded-2xl border border-gold/30 space-y-8 shadow-2xl">
              <div className="text-center">
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Simple Logistics
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  How Event Booking Works
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">01</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">Submit Your Details</h3>
                  <p className="font-sans text-xs text-foreground/80 leading-relaxed">
                    Send the event date, estimated guest count, location, and desired duration. I confirm availability within 24 hours.
                  </p>
                </div>

                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">02</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">Confirm &amp; Reserve</h3>
                  <p className="font-sans text-xs text-foreground/80 leading-relaxed">
                    Receive a straightforward invoice ($150/hr + $50 travel). Once confirmed, your date and time slot are 100% locked.
                  </p>
                </div>

                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">03</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">Flawless Delivery</h3>
                  <p className="font-sans text-xs text-foreground/80 leading-relaxed">
                    I arrive 30 minutes early, set up according to your venue directions, and deliver non-stop engaging readings for your guests.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* DIRECT INQUIRY & CONTACT CTA */}
          <ScrollReveal variant="zoom-in">
            <section className="text-center bg-surface-elevated border-2 border-gold/50 rounded-2xl p-10 space-y-6 shadow-2xl">
              <div>
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Reserve Your Date
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  Ready to Elevate Your Event?
                </h2>
                <p className="font-sans text-foreground/80 max-w-lg mx-auto text-sm sm:text-base mt-2">
                  Dates — especially for October, Halloween, and holiday seasons — fill up quickly. Get in touch today to check availability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href="tel:+15125477129"
                  className="w-full sm:w-auto bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-base transition-all duration-300 font-sans shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-95"
                >
                  📞 Call (512) 547-7129
                </a>
                <a
                  href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20inquire%20about%20booking%20tarot%20readings%20for%20an%20event."
                  className="w-full sm:w-auto bg-surface text-gold border border-gold/40 font-bold py-3.5 px-8 rounded-xl text-base hover:bg-surface-overlay transition-colors duration-300 font-sans active:scale-95"
                >
                  💬 Text for Quick Quote
                </a>
                <a
                  href="mailto:info@austintarotreader.com?subject=Corporate%2FParty%20Event%20Tarot%20Inquiry"
                  className="w-full sm:w-auto bg-surface text-gold border border-gold/40 font-bold py-3.5 px-8 rounded-xl text-base hover:bg-surface-overlay transition-colors duration-300 font-sans active:scale-95"
                >
                  ✉️ Email Event Details
                </a>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
