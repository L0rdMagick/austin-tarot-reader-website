import type { Metadata } from 'next';
import Link from 'next/link';

// SEO: This metadata is specific to the About page.
// It tells Google what this page is about, focusing on your personal approach and location.
export const metadata: Metadata = {
  title: 'About Me | Austin Tarot Reader',
  description: 'Learn about my personal approach to tarot reading in Austin, TX. I offer compassionate, empowering guidance to help you find clarity on your unique journey.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-3xl mx-auto space-y-16">
        
        {/* Section 1: Page Header */}
        <section className="text-center">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-balance text-[rgb(var(--primary-rgb))]">
            My Philosophy & Journey
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-[rgb(var(--foreground-rgb))]">
            Connecting with the cards is connecting with ourselves.
          </p>
        </section>

        {/* Section 2: Personal Introduction */}
        {/* TODO: Replace the placeholder content below with your own story. */}
        <section>
          <h2 className="font-cinzel text-3xl font-bold text-[rgb(var(--accent-rgb))]">Welcome, Seeker</h2>
          <div className="mt-4 space-y-4 font-sans text-md sm:text-lg text-[rgb(var(--foreground-rgb))] opacity-90">
            <p>
              My name is [Your Name], and I'm the heart behind Austin Tarot Reader. My journey with tarot didn't begin with a sudden mystical vision, but with a quiet curiosity about the stories these cards could tell. I discovered they weren't about predicting a rigid, unchangeable future, but about unlocking the wisdom we already hold within.
            </p>
            <p>
              Here in Austin, a city buzzing with creative and spiritual energy, I've found a home for my practice. My goal is to create a grounded, welcoming space for you to explore your questions without judgment.
            </p>
          </div>
        </section>

        {/* Section 3: My Approach to Tarot */}
        {/* TODO: This is a key section to build trust. Explain your approach clearly. */}
        <section>
          <h2 className="font-cinzel text-3xl font-bold text-[rgb(var(--accent-rgb))]">Tarot as a Tool for Empowerment</h2>
           <div className="mt-4 space-y-4 font-sans text-md sm:text-lg text-[rgb(var(--foreground-rgb))] opacity-90">
            <p>
              I view the tarot as a deck of 78 mirrors, each reflecting a different facet of our human experience. A reading with me is a collaborative conversation. We use the cards to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li><strong>Gain Perspective:</strong> See your situation from a new, empowering angle.</li>
              <li><strong>Clarify Your Intuition:</strong> Validate those gut feelings you've been having.</li>
              <li><strong>Explore Possibilities:</strong> Brainstorm potential paths forward with confidence.</li>
              <li><strong>Promote Self-Discovery:</strong> Understand your own patterns and strengths more deeply.</li>
            </ul>
            <p>
              My readings are always delivered with compassion and are focused on actionable, empowering insights you can use in your daily life.
            </p>
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="text-center bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10">
          <h2 className="font-cinzel text-3xl font-bold text-[rgb(var(--primary-rgb))]">Ready to Find Your Clarity?</h2>
          <p className="mt-2 font-sans text-lg text-[rgb(var(--foreground-rgb))] opacity-90">
            If my approach resonates with you, I invite you to explore the readings I offer.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-block bg-[rgb(var(--primary-rgb))] text-[rgb(var(--background-rgb))] font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans"
          >
            View My Services 
          </Link>
        </section>
        
      </div>
    </main>
  );
}