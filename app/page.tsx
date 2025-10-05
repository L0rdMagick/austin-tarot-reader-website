import Image from 'next/image'; // We will use this later for images

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-4xl mx-auto space-y-24">
        
        {/* Section 1: Hero */}
        <section className="text-center">
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-balance text-[rgb(var(--primary-rgb))]">
            Unlock Your Path with Austin's Tarot Reader
          </h1>
          <p className="mt-6 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-[rgb(var(--foreground-rgb))]">
            Compassionate, insightful readings that bring clarity to your life's most pressing questions. Find the guidance you seek, right here in Austin.
          </p>
          <a
            href="YOUR_BOOKING_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-[rgb(var(--primary-rgb))] text-[rgb(var(--background-rgb))] font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans"
          >
            Book a Reading
          </a>
        </section>

        {/* Section 2: Introduction */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[rgb(var(--accent-rgb))]">A Modern Approach to Ancient Wisdom</h2>
          <p className="mt-4 font-sans text-md sm:text-lg text-[rgb(var(--foreground-rgb))] opacity-90">
            Welcome! I'm [Your Name], and I believe tarot is a powerful tool for self-discovery and empowerment. My readings are a conversation with your intuition, a way to explore possibilities and gain a new perspective. I'm not here to predict a fixed future, but to help you navigate your present with confidence and clarity. My style is approachable and non-judgmental, creating a safe space for you to explore your journey.
          </p>
        </section>

        {/* Section 3: Services */}
        <section className="text-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[rgb(var(--accent-rgb))]">Readings Tailored For You</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10">
              <h3 className="font-cinzel text-2xl font-bold text-[rgb(var(--primary-rgb))]">Personal Guidance</h3>
              <p className="mt-2 font-sans text-[rgb(var(--foreground-rgb))] opacity-90">Deep dive into your career, relationships, or personal growth. Get the clarity you need to move forward.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10">
              <h3 className="font-cinzel text-2xl font-bold text-[rgb(var(--primary-rgb))]">Couple's Readings</h3>
              <p className="mt-2 font-sans text-[rgb(var(--foreground-rgb))] opacity-90">Explore the dynamics of your relationship in a safe and constructive space, fostering deeper connection.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10">
              <h3 className="font-cinzel text-2xl font-bold text-[rgb(var(--primary-rgb))]">Events & Parties</h3>
              <p className="mt-2 font-sans text-[rgb(var(--foreground-rgb))] opacity-90">Add a touch of magic to your event in Austin. Engaging and fun readings for your guests.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials Placeholder */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[rgb(var(--accent-rgb))]">What Clients Are Saying</h2>
          <div className="mt-6 bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10 italic">
            <p className="font-sans text-lg text-[rgb(var(--foreground-rgb))]">
              "This was an absolutely amazing experience. The reading was so insightful and accurate, and it gave me the clarity I was desperately looking for. I can't recommend them enough!"
            </p>
            <p className="mt-4 font-bold not-italic text-[rgb(var(--primary-rgb))]">- A Happy Client (from Google Reviews)</p>
          </div>
          {/* We will add more reviews here later */}
        </section>

      </div>
    </main>
  );
}