import { TestimonialCard } from '@/components/TestimonialCard';
import { TarotCardAnimation } from '@/components/TarotCardAnimation';
import { InteractiveTarotOracle } from '@/components/InteractiveTarotOracle';
import { MysticBookingEngine } from '@/components/MysticBookingEngine';
import { AmbientConstellation } from '@/components/AmbientConstellation';
import { MobileStickyBar } from '@/components/MobileStickyBar';
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

export default function HomePage() {
  return (
    <div className="fade-in-on-load pb-16 md:pb-0 relative min-h-screen">
      {/* 60fps Ambient Stardust & Constellations */}
      <AmbientConstellation />

      <main className="flex flex-col items-center relative z-10">
        {/* Section 1: Hero */}
        <section className="w-full text-center pt-24 pb-8 md:pt-32 md:pb-16 flex flex-col items-center justify-center px-4">
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
            <a href="#booking-engine" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 font-sans shadow-xl shadow-gold/20 transform hover:scale-[1.02]">
              Reserve Your Reading Below ↓
            </a>
            <a href="sms:15125550199?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20booking%20a%20tarot%20reading." className="w-full sm:w-auto bg-surface-elevated text-gold border border-gold/40 font-bold py-3.5 px-6 rounded-xl text-base hover:bg-surface-overlay transition-colors duration-300 font-sans">
              💬 Text Daniel for Today's Openings
            </a>
          </div>
        </section>

        <TarotCardAnimation />

        {/* Section 2: Interactive Card Flip Experience */}
        <InteractiveTarotOracle />

        {/* Section 3: Mystic Bento Booking Engine */}
        <MysticBookingEngine />

        <div className="w-full max-w-5xl mx-auto space-y-24 md:space-y-32 px-4 sm:px-8 md:px-12 pb-24 pt-10">
          
          {/* Section 3: Brief About Me */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-accent">
              A Trusted Guide for Your Journey
            </h2>
            <p className="mt-4 font-sans text-md sm:text-lg text-foreground/90 leading-relaxed">
              Welcome! I'm Daniel. Known for a compassionate and intuitive approach, I've conducted thousands of readings helping people from all walks of life navigate life's complexities. My goal is to offer insight and clarity, revealing the truth behind emotional confusion so you can make confident decisions from a place of self-worth.
            </p>
            <Link href="/about" className="mt-6 inline-block font-sans text-lg text-primary hover:underline">
              Learn more about my philosophy →
            </Link>
          </section>

          {/* Section 4: Clear Session Durations & Pricing */}
          <section className="text-center">
            <span className="text-accent uppercase tracking-widest text-xs font-sans font-semibold">Frictionless Booking</span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary mt-1">
              Choose Your Guidance Session
            </h2>
            <p className="mt-3 font-sans text-foreground/80 max-w-xl mx-auto text-base sm:text-lg">
              Available in-person in Austin, TX or via Phone/Zoom worldwide.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Card 1: 30-Min */}
              <div className="bg-secondary/60 p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-xl">
                <div>
                  <span className="text-accent font-sans text-xs uppercase tracking-wider font-semibold">Quick Answers</span>
                  <h3 className="font-cinzel text-2xl font-bold text-primary mt-1">Focused Reading</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-sans text-3xl font-bold text-primary">$55.00</span>
                    <span className="font-sans text-xs text-foreground/60">/ 30 minutes</span>
                  </div>
                  <p className="mt-4 font-sans text-sm text-foreground/80 leading-relaxed">
                    Designed to bring quick, sharp insight into 1–2 pressing questions or immediate crossroads in your life.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-secondary border border-primary/50 text-primary hover:bg-primary hover:text-background font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 font-sans">
                    Book 30-Min ($55)
                  </a>
                </div>
              </div>

              {/* Card 2: 60-Min (MOST POPULAR) */}
              <div className="bg-secondary p-8 rounded-2xl border-2 border-primary shadow-2xl shadow-primary/20 flex flex-col justify-between relative transform md:-translate-y-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold font-sans uppercase px-3 py-1 rounded-full tracking-wider">
                  Most Popular
                </div>
                <div>
                  <span className="text-accent font-sans text-xs uppercase tracking-wider font-semibold">Deep Clarity</span>
                  <h3 className="font-cinzel text-2xl font-bold text-primary mt-1">In-Depth Reading</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-sans text-3xl font-bold text-primary">$85.00</span>
                    <span className="font-sans text-xs text-foreground/60">/ 60 minutes</span>
                  </div>
                  <p className="mt-4 font-sans text-sm text-foreground/90 leading-relaxed">
                    An extended 15-card spread covering your Love Life, Career, Twin Flame journey, or overall spiritual path.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-primary text-background font-bold py-3 px-6 rounded-lg text-base hover:opacity-90 transition-opacity duration-300 font-sans shadow-md">
                    Book 60-Min ($85)
                  </a>
                </div>
              </div>

              {/* Card 3: Coaching */}
              <div className="bg-secondary/60 p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-xl">
                <div>
                  <span className="text-accent font-sans text-xs uppercase tracking-wider font-semibold">Tarot + Life Coaching</span>
                  <h3 className="font-cinzel text-2xl font-bold text-primary mt-1">Intuitive Coaching</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-sans text-3xl font-bold text-primary">$85.00</span>
                    <span className="font-sans text-xs text-foreground/60">/ 60 minutes</span>
                  </div>
                  <p className="mt-4 font-sans text-sm text-foreground/80 leading-relaxed">
                    Combines intuitive tarot insight with structured life coaching to map out real action steps for transformation.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/SK53OJ3ZTPXWAEZOF3SK4P4A" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-secondary border border-primary/50 text-primary hover:bg-primary hover:text-background font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 font-sans">
                    Book Coaching ($85)
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/services" className="font-sans text-base text-primary hover:underline">
                Explore all specialized reading topics (Love, Career, Twin Flame) →
              </Link>
            </div>
          </section>

          {/* Section 5: Featured Service - Love Readings with VIDEO */}
          <section className="bg-secondary p-8 md:p-12 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="w-full max-w-xs mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border-2 border-primary/30">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline key="/videos/love-tarot-reading-questions.mp4" title="Love and relationship tarot reading session demonstration">
                  <source src="/videos/love-tarot-reading-questions.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center md:text-left">
                <span className="text-accent uppercase tracking-widest text-xs font-sans font-semibold">Specialized Focus</span>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary mt-1">
                  Tarot for Love & Relationships
                </h3>
                <p className="mt-4 font-sans text-lg text-foreground/90">
                  Feeling uncertain? My love readings are designed to meet you exactly where you are and illuminate the path forward. We'll explore hidden patterns, clarify your present, and uncover any obstacles to a deeper connection.
                </p>
                <div className="mt-8 text-center md:text-left">
                  <a href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background font-bold py-3.5 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans shadow-lg">
                    Book a Love Reading ($85)
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Section 6: Testimonials */}
          <section className="text-center">
            <span className="text-accent uppercase tracking-widest text-xs font-sans font-semibold">Client Experiences</span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-accent mt-1">
              What Clients Are Saying
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => ( <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} /> ))}
            </div>
          </section>
        </div>
      </main>

      {/* Sticky Action Bar for Mobile Visitors */}
      <MobileStickyBar />
    </div>
  );
}