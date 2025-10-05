import type { Metadata } from 'next';

// SEO: This metadata targets users in Austin actively looking for tarot reading services.
// It uses keywords like "tarot readings," "book a session," and "Austin, TX."
export const metadata: Metadata = {
  title: 'Services & Booking | Austin Tarot Reader',
  description: 'Explore my tarot reading services in Austin, TX. I offer personal, couple\'s, and event readings. Book your session today for clarity and guidance.',
};

// --- Service Data ---
// DEBUG: To change your services, prices, or booking links, edit the objects in this array.
// This makes it easy to update your offerings without digging through the page structure.
const services = [
  {
    title: 'Personal Guidance Reading',
    duration: '60 minutes',
    price: '$80', // TODO: Update with your price
    description: 'A comprehensive one-on-one session. We\'ll dive deep into your questions about career, relationships, personal growth, or any area where you seek clarity. This is your time to explore your path and empower your next steps.',
    bookingLink: 'YOUR_PERSONAL_READING_BOOKING_LINK', // TODO: Add your booking link
  },
  {
    title: 'Couple\'s Clarity Reading',
    duration: '75 minutes',
    price: '$120', // TODO: Update with your price
    description: 'A reading for you and your partner to explore the dynamics of your relationship in a safe and constructive space. We focus on communication, shared goals, and strengthening your connection.',
    bookingLink: 'YOUR_COUPLES_READING_BOOKING_LINK', // TODO: Add your booking link
  },
  {
    title: 'Austin Events & Parties',
    duration: 'By the hour',
    price: 'Contact for rates', // TODO: Update with your price/pricing model
    description: 'Add a unique and memorable touch to your private party, corporate event, or gathering in the Austin area. My engaging and insightful mini-readings are a wonderful way to entertain guests.',
    bookingLink: 'mailto:your.email@example.com?subject=Event%20Booking%20Inquiry', // TODO: Update with your email or contact form link
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-4xl mx-auto space-y-16">
        
        {/* Section 1: Page Header */}
        <section className="text-center">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-balance text-[rgb(var(--primary-rgb))]">
            Readings Tailored For You
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-[rgb(var(--foreground-rgb))]">
            Each reading is a confidential, compassionate, and empowering experience. Choose the session that best fits your needs.
          </p>
        </section>

        {/* Section 2: Services List */}
        <section className="space-y-12">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-grow">
                <h2 className="font-cinzel text-3xl font-bold text-[rgb(var(--primary-rgb))]">{service.title}</h2>
                <p className="font-sans text-lg text-[rgb(var(--accent-rgb))] mt-1">{service.duration} | {service.price}</p>
                <p className="mt-4 font-sans text-[rgb(var(--foreground-rgb))] opacity-90">
                  {service.description}
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href={service.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center w-full md:w-auto bg-[rgb(var(--primary-rgb))] text-[rgb(var(--background-rgb))] font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Section 3: How to Prepare */}
        <section>
          <h2 className="font-cinzel text-3xl font-bold text-center text-[rgb(var(--accent-rgb))]">How to Prepare for Your Reading</h2>
          <div className="mt-6 font-sans text-md sm:text-lg text-[rgb(var(--foreground-rgb))] opacity-90 max-w-2xl mx-auto space-y-4">
            <p>To make the most of our time together, I recommend thinking about your questions or the area of your life you'd like to focus on beforehand. Come with an open mind and a quiet space where you won't be disturbed. Remember, there are no 'silly' questions. This is your space to seek clarity.</p>
          </div>
        </section>

      </div>
    </main>
  );
}