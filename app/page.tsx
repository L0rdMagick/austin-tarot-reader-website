import { TestimonialCard } from '@/components/TestimonialCard';
import Link from 'next/link';

const testimonials = [
  { quote: "This was an absolutely amazing experience. The reading was so insightful and accurate, and it gave me the clarity I was desperately looking for. I can't recommend them enough!", author: "Jessica M." },
  { quote: "I was a little nervous, but they made me feel so comfortable and at ease. The reading resonated deeply and provided actionable guidance that I've already started using in my life.", author: "David R." },
  { quote: "Truly a gifted reader. They have a wonderful, calming presence and a unique way of interpreting the cards that is both profound and easy to understand. A session is a true gift to yourself.", author: "Samantha K." }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-5xl mx-auto space-y-24 md:space-y-32">
        <section className="text-center pt-16">
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-balance text-[rgb(var(--primary-rgb))]">Unlock Your Path with Austin's Tarot Reader</h1>
          <p className="mt-6 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-[rgb(var(--foreground-rgb))]">Compassionate, insightful readings that bring clarity to your life's most pressing questions. Find the guidance you seek, right here in Austin.</p>
          <a href="YOUR_MAIN_BOOKING_LINK_HERE" target="_blank" rel="noopener noreferrer" className="mt-10 inline-block bg-[rgb(var(--primary-rgb))] text-[rgb(var(--background-rgb))] font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans">Book a Reading</a>
        </section>
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[rgb(var(--accent-rgb))]">A Modern Approach to Ancient Wisdom</h2>
          <p className="mt-4 font-sans text-md sm:text-lg text-[rgb(var(--foreground-rgb))] opacity-90">Welcome! I'm [Your Name], and I believe tarot is a powerful tool for self-discovery and empowerment. My readings are a conversation with your intuition, a way to explore possibilities and gain a new perspective. I'm not here to predict a fixed future, but to help you navigate your present with confidence and clarity. My style is approachable and non-judgmental, creating a safe space for you to explore your journey.</p>
        </section>
        <section className="text-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[rgb(var(--accent-rgb))]">Readings Tailored For You</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10"><h3 className="font-cinzel text-2xl font-bold text-[rgb(var(--primary-rgb))]">Personal Guidance</h3><p className="mt-2 font-sans text-[rgb(var(--foreground-rgb))] opacity-90">Deep dive into your career, relationships, or personal growth to move forward.</p></div>
            <div className="bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10"><h3 className="font-cinzel text-2xl font-bold text-[rgb(var(--primary-rgb))]">Couple's Readings</h3><p className="mt-2 font-sans text-[rgb(var(--foreground-rgb))] opacity-90">Explore your relationship dynamics and foster deeper connection in a safe space.</p></div>
            <div className="bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10"><h3 className="font-cinzel text-2xl font-bold text-[rgb(var(--primary-rgb))]">Events & Parties</h3><p className="mt-2 font-sans text-[rgb(var(--foreground-rgb))] opacity-90">Add a touch of magic to your Austin event with engaging readings for guests.</p></div>
          </div>
          <Link href="/services" className="mt-10 inline-block font-sans text-lg text-[rgb(var(--primary-rgb))] hover:underline">Learn more about my services →</Link>
        </section>
        <section className="text-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[rgb(var(--accent-rgb))]">What Clients Are Saying</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (<TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} />))}
          </div>
        </section>
      </div>
    </main>
  );
}