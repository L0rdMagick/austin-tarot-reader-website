import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Daniel | Austin Tarot Reader',
  description: 'Learn about Daniel, an esteemed Austin tarot reader known for a compassionate and intuitive approach. Discover my philosophy on using tarot for clarity and empowerment.',
};

export default function AboutPage() {
  return (
    // ADDED: Wrapper div with the fade-in animation class
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        {/* Section 1: Page Header */}
        <section className="w-full text-center py-20 md:py-28 flex flex-col items-center justify-center px-4">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-balance text-primary">
            My Journey & Philosophy
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground">
            I believe tarot is a profound tool for unlocking the wisdom we already hold within.
          </p>
        </section>

        <div className="w-full max-w-3xl mx-auto space-y-16 px-4 sm:px-8 md:px-12 pb-24">
          
          <div className="w-full max-w-sm mx-auto aspect-square relative rounded-full overflow-hidden shadow-2xl shadow-black/50 border-4 border-primary/50">
            <Image 
              src="/images/daxiel-austin-tarot-reader.png" 
              alt="Daniel, Austin Tarot Reader" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Section 2: My Story */}
          <section>
            <h2 className="font-cinzel text-3xl font-bold text-accent">
              An Intuitive Path
            </h2>
            <div className="mt-4 space-y-4 font-sans text-md sm:text-lg text-foreground/90">
              <p>
                I'm Daniel, and for years I've had the honor of guiding individuals from all walks of life through thousands of tarot readings. With a deep understanding of the intricacies of the human experience, I've helped people navigate countless situations, offering insight where there was confusion and clarity where there was doubt.
              </p>
              <p>
                My journey began not with a mystical vision, but with a quiet curiosity about the stories these 78 cards could tell. I quickly learned they weren't about predicting a rigid, unchangeable future. Instead, they are a powerful language for our own intuition—a way to see our circumstances with a fresh perspective and make decisions from a place of empowerment.
              </p>
            </div>
          </section>

          {/* Section 3: My Approach to Tarot */}
          <section>
            <h2 className="font-cinzel text-3xl font-bold text-accent">
              Tarot for Modern Life
            </h2>
             <div className="mt-4 space-y-4 font-sans text-md sm:text-lg text-foreground/90">
              <p>
                My approach is compassionate, intuitive, and grounded in practical wisdom. I see a tarot reading as a collaborative conversation—a safe, non-judgmental space where we can explore the energies surrounding you. My goal is to help you:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-3">
                <li><strong>Gain Empowering Perspective:</strong> See your situation from a new angle that highlights your strength and options.</li>
                <li><strong>Validate Your Intuition:</strong> Confirm those gut feelings you've been having and build trust in your own inner wisdom.</li>
                <li><strong>Navigate Your Crossroads:</strong> Explore the potential outcomes of your choices so you can move forward with confidence, not fear.</li>
                <li><strong>Find Actionable Clarity:</strong> You will leave our session not just with insight, but with a clearer understanding of your next steps.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Call to Action */}
          <section className="text-center bg-secondary p-8 rounded-xl border border-white/10">
            <h2 className="font-cinzel text-3xl font-bold text-primary">
              Are You Ready to Find Clarity?
            </h2>
            <p className="mt-2 font-sans text-lg text-foreground/90 max-w-lg mx-auto">
              If my approach resonates with you, I would be honored to guide you on your journey.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-block bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans"
            >
              Explore My Readings
            </Link>
          </section>
          
        </div>
      </main>
    </div>
  );
}