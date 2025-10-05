import type { Metadata } from 'next';

// SEO: This metadata targets users in Austin actively looking for specific tarot reading services.
export const metadata: Metadata = {
  title: 'Tarot Reading Services & Booking | Austin Tarot Reader',
  description: 'Book a tarot reading in Austin, TX. I offer in-depth, love & relationship, career, and intuitive coaching sessions. Find the clarity you seek today.',
};

// --- Service Data ---
// DEBUG: This array contains all your tarot services. To update prices, links, or descriptions, edit here.
const services = [
  {
    title: 'In-Depth 60-Minute Tarot Reading',
    duration: '1 hr',
    price: '$85.00',
    description: 'An extended, 15-card reading ideal for seeking deep clarity on a single issue or life theme. Perfect for spiritual growth and transformational insight. Available in-person in Austin, by phone, or video call.',
    bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT',
  },
  {
    title: 'Love & Relationship Reading',
    duration: '1 hr',
    price: '$85.00',
    description: 'This 60-minute session is centered on your romantic life. Using a 15-card spread, this reading offers guidance on current relationships, future love, or emotional healing, helping you understand what to hold onto and what to let go of.',
    bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ',
  },
  {
    title: 'Focused 30-Minute Tarot Reading',
    duration: '30 min',
    price: '$55.00',
    description: 'A focused 15-card spread designed to bring quick insight into your current questions or crossroads. We explore each card one-by-one to find the guidance you need. Available in-person in Austin, by phone, or video call.',
    bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU',
  },
  {
    title: 'Intuitive Coaching + Tarot Session',
    duration: '1 hr',
    price: '$85.00',
    description: 'This unique session combines intuitive tarot with practical life coaching to help you gain insight and take action. Ideal for clients who want both spiritual clarity and structured support in making real changes. Includes meditation, a focused reading, coaching, and personalized next steps.',
    bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/SK53OJ3ZTPXWAEZOF3SK4P4A',
  },
  {
    title: 'Twin Flame Tarot Reading',
    duration: '1 hr',
    price: '$85.00',
    description: 'Explore your deep spiritual connection in this 60-minute reading. A specialized 15-card spread helps uncover karmic lessons, emotional blocks, and the next steps on your unique twin flame journey.',
    bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/ST7VCF5PTA3TP2GXKQCFSQBL',
  },
  {
    title: 'Career & Money Tarot Reading',
    duration: '1 hr', // Adjusted from 30min to match $85 price point
    price: '$85.00',
    description: 'A 60-minute reading focused on career direction, job changes, financial decisions, or your overall sense of purpose. This spread offers intuitive guidance to help you make confident, aligned decisions for your path forward.',
    bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/Y35MKZALF3RNQPE6OSOUDG5Q',
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-4xl mx-auto space-y-16">
        
        <section className="text-center">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-balance text-primary">
            Tarot Readings & Coaching Services
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground">
            Each session is a confidential, compassionate, and empowering experience. Choose the reading that best fits your needs.
          </p>
        </section>

        <section className="space-y-12">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-secondary p-8 rounded-xl border border-white/10 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-grow">
                <h2 className="font-cinzel text-3xl font-bold text-primary">{service.title}</h2>
                <p className="font-sans text-lg text-accent mt-1">{service.duration} | {service.price}</p>
                <p className="mt-4 font-sans text-foreground/90">
                  {service.description}
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href={service.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center w-full md:w-auto bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans"
                >
                  Book Session
                </a>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="font-cinzel text-3xl font-bold text-center text-accent">How to Prepare for Your Reading</h2>
          <div className="mt-6 font-sans text-md sm:text-lg text-foreground/90 max-w-2xl mx-auto space-y-4">
            <p>To make the most of our time together, I recommend thinking about your questions or the area of your life you'd like to focus on beforehand. Come with an open mind and a quiet space where you won't be disturbed. Remember, there are no 'silly' questions. This is your space to seek clarity.</p>
          </div>
        </section>

      </div>
    </main>
  );
}