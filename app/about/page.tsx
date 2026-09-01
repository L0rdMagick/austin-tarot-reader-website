import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { AmbientBackgroundCards, BgCard } from '@/components/AmbientBackgroundCards';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Daniel',
  description: "Learn about Daniel, an Austin tarot reader known for an intuitive approach. Discover my philosophy on using tarot for clarity and guidance.",
  openGraph: {
    title: 'About Daniel | Austin Tarot Reader',
    description: "Learn about Daniel, an Austin tarot reader known for an intuitive approach. Discover my philosophy on using tarot for clarity and guidance.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Daniel | Austin Tarot Reader',
    description: "Learn about Daniel, an Austin tarot reader known for an intuitive approach. Discover my philosophy on using tarot for clarity and guidance.",
  },
  alternates: {
    canonical: '/about',
  },
};

const ABOUT_BG_CARDS: BgCard[] = [
  { src: '/images/rider-waite-tarot-deck-cards/03-TheEmpress.jpg', name: 'The Empress', topPercent: 15, side: 'left', rotateDeg: -16 },
  { src: '/images/rider-waite-tarot-deck-cards/14-Temperance.jpg', name: 'Temperance', topPercent: 40, side: 'right', rotateDeg: 14 },
  { src: '/images/rider-waite-tarot-deck-cards/17-TheStar.jpg', name: 'The Star', topPercent: 65, side: 'left', rotateDeg: -10 },
  { src: '/images/rider-waite-tarot-deck-cards/01-TheMagician.jpg', name: 'The Magician', topPercent: 85, side: 'right', rotateDeg: 18 },
];

export default function AboutPage() {
  return (
    <div className="fade-in-on-load relative min-h-screen overflow-hidden">
      <AmbientBackgroundCards cards={ABOUT_BG_CARDS} />

      <main className="flex flex-col items-center relative z-10">
        {/* Section 1: Page Header */}
        <ScrollReveal variant="fade-up">
          <section className="w-full text-center pt-12 pb-6 md:pt-16 md:pb-8 flex flex-col items-center justify-center px-4">
            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-balance text-gold">
              My Journey & Philosophy
            </h1>
            <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground/90">
              I believe tarot is a profound tool for unlocking the wisdom we already hold within.
            </p>
          </section>
        </ScrollReveal>

        <div className="w-full max-w-3xl mx-auto space-y-12 md:space-y-16 px-4 sm:px-8 md:px-12 pb-16">
          <ScrollReveal variant="zoom-in">
            <div className="w-full max-w-sm mx-auto aspect-square relative rounded-full overflow-hidden shadow-2xl shadow-black/50 border-4 border-gold/40">
              <Image 
                src="/images/daxiel-austin-tarot-reader.png" 
                alt="Daniel, an intuitive Tarot Reader in Austin, TX" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </ScrollReveal>

          {/* Section 2: My Story */}
          <ScrollReveal variant="fade-up">
            <section className="bg-surface/80 p-8 rounded-2xl border border-gold/20 shadow-xl">
              <h2 className="font-editorial text-3xl font-bold text-gold">
                An Intuitive Path
              </h2>
              <div className="mt-4 space-y-4 font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
                <p>
                  I'm Daniel, and for years I've had the honor of guiding individuals from all walks of life through thousands of tarot readings. With a deep understanding of the intricacies of the human experience, I've helped people navigate countless situations, offering insight where there was confusion and clarity where there was doubt.
                </p>
                <p>
                  My journey began not with a mystical vision, but with a quiet curiosity about the stories these 78 cards could tell. I quickly learned they weren't about predicting a rigid, unchangeable future. Instead, they are a powerful language for our own intuition—a way to see our circumstances with a fresh perspective and make decisions from a place of empowerment.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 3: My Approach to Tarot */}
          <ScrollReveal variant="fade-up">
            <section className="bg-surface/80 p-8 rounded-2xl border border-gold/25 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-52 h-72 sm:w-56 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 shadow-gold/20 transform hover:scale-[1.02] transition-transform">
                  <Image
                    src="/images/austin tarot reader portrait image of daniel the tarot reader3.png"
                    alt="Daniel - Intuitive Tarot Reader in Austin, TX"
                    fill
                    sizes="(max-width: 768px) 224px, 224px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="md:col-span-7 space-y-4 font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
                <h2 className="font-editorial text-3xl font-bold text-gold">
                  Tarot for Modern Life
                </h2>
                <p>
                  My approach is compassionate, intuitive, and grounded in practical wisdom. I see a tarot reading as a collaborative conversation—a safe, non-judgmental space where we can explore the energies surrounding you. My goal is to help you:
                </p>
                <ul className="list-disc list-inside space-y-2.5 text-sm sm:text-base text-foreground/85">
                  <li><strong>Gain Empowering Perspective:</strong> See your situation from a new angle that highlights your strength and options.</li>
                  <li><strong>Validate Your Intuition:</strong> Confirm those gut feelings you&apos;ve been having and build trust in your own inner wisdom.</li>
                  <li><strong>Navigate Your Crossroads:</strong> Explore the potential outcomes of your choices so you can move forward with confidence.</li>
                  <li><strong>Find Actionable Clarity:</strong> Leave with clear understanding of your next steps.</li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 4: Call to Action */}
          <ScrollReveal variant="zoom-in">
            <section className="text-center bg-surface p-8 rounded-2xl border border-gold/30 shadow-2xl">
              <h2 className="font-editorial text-3xl font-bold text-gold">
                Are You Ready to Find Clarity?
              </h2>
              <p className="mt-2 font-sans text-lg text-foreground/90 max-w-lg mx-auto">
                If my approach resonates with you, I would be honored to guide you on your journey.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-block bg-gold text-obsidian font-bold py-3.5 px-8 rounded-xl text-lg hover:bg-gold-light transition-all duration-300 font-sans shadow-lg shadow-gold/20 active:scale-95"
              >
                Explore My Readings ↗
              </Link>
            </section>
          </ScrollReveal>
          
        </div>
      </main>
    </div>
  );
}