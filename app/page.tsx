import { TestimonialCard } from '@/components/TestimonialCard';
import { TarotCardAnimation } from '@/components/TarotCardAnimation';
import Link from 'next/link';

// --- Testimonials Data ---
const testimonials = [
  { quote: "I’ve been seeing Daniel for close to two years now and he never misses! His foresight is amazing and his readings are always spot on!", author: "A. C." },
  { quote: "Daniel is amazing! His insight through his reads have had such a positive impact on my life... I completely encourage anyone to use his services. He is the best!", author: "M. G." },
  { quote: "This was such a great experience! Daniel has such great energy that I felt safe as soon as I sat down. My reading and ceremony offered so much clarity and reassurance.", author: "S. B." }
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Section 1: Hero */}
      <section className="w-full text-center pt-24 pb-12 md:pt-32 md:pb-20 flex flex-col items-center justify-center px-4">
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-balance text-primary">
          Unlock Your Path with Austin's Tarot Reader
        </h1>
        <p className="mt-6 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground">
          Find clarity for your love life, career, and spiritual journey. Compassionate, intuitive readings that bring the guidance you seek.
        </p>
        <Link href="/services" className="mt-10 inline-block bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans">
          Book a Reading
        </Link>
      </section>

      <TarotCardAnimation />

      <div className="w-full max-w-5xl mx-auto space-y-24 md:space-y-32 px-4 sm:px-8 md:px-12 pb-24 pt-16">
        
        {/* Section 2: Brief About Me */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-accent">A Trusted Guide for Your Journey</h2>
          <p className="mt-4 font-sans text-md sm:text-lg text-foreground/90">
            Welcome! I'm Daniel. Known for a compassionate and intuitive approach, I've conducted thousands of readings helping people from all walks of life navigate life's complexities. My goal is to offer insight and clarity, revealing the truth behind emotional confusion so you can make confident decisions from a place of self-worth.
          </p>
          <Link href="/about" className="mt-6 inline-block font-sans text-lg text-primary hover:underline">
            Learn more about my philosophy →
          </Link>
        </section>

        {/* Section 3: Featured Service - Love Readings with VIDEO */}
        <section className="bg-secondary p-8 md:p-12 rounded-2xl border border-white/10">
          {/* CHANGED: This section is now a responsive grid to accommodate the video */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Video Column */}
            <div className="w-full max-w-xs mx-auto">
              <video
                className="w-full h-auto rounded-xl shadow-2xl shadow-black/50 border-2 border-primary/30"
                autoPlay
                loop
                muted
                playsInline // Essential for autoplay on iOS
                key="/videos/austin-tarot-reader-wizard.mp4" // A key helps React re-render if the source changes
              >
                <source src="/videos/austin-tarot-reader-wizard.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Text Content Column */}
            <div className="text-center md:text-left">
              <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary">Tarot for Love & Relationships</h3>
              <p className="mt-4 font-sans text-lg text-foreground/90">
                Feeling uncertain? My love readings are designed to meet you exactly where you are and illuminate the path forward. We'll explore hidden patterns, clarify your present, and uncover any obstacles to a deeper connection.
              </p>
              <div className="mt-8 text-left">
                <a
                  href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans"
                >
                  Book a Love Reading
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Other Services Overview */}
        <section className="text-center">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-accent">Guidance for Every Part of Your Life</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-secondary/50 p-8 rounded-xl border border-white/10"><h3 className="font-cinzel text-2xl font-bold text-primary">Career & Money</h3><p className="mt-2 font-sans text-foreground/90">Gain clarity on your professional path and financial decisions.</p></div>
                <div className="bg-secondary/50 p-8 rounded-xl border border-white/10"><h3 className="font-cinzel text-2xl font-bold text-primary">Intuitive Coaching</h3><p className="mt-2 font-sans text-foreground/90">Combine tarot with life coaching for structured support.</p></div>
                <div className="bg-secondary/50 p-8 rounded-xl border border-white/10"><h3 className="font-cinzel text-2xl font-bold text-primary">Personal Guidance</h3><p className="mt-2 font-sans text-foreground/90">An in-depth reading for spiritual growth and transformation.</p></div>
            </div>
            <Link href="/services" className="mt-10 inline-block font-sans text-lg text-primary hover:underline">
                Explore all readings →
            </Link>
        </section>
        
        {/* Section 5: Testimonials */}
        <section className="text-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-accent">What Clients Are Saying</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => ( <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} /> ))}
          </div>
        </section>

      </div>
    </main>
  );
}