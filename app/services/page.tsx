import type { Metadata } from 'next';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Tarot Reading Services & Booking',
  description: 'Book a tarot reading in Austin, TX. I offer in-depth, love & relationship, career, and intuitive coaching sessions. Find the clarity you seek today.',
  openGraph: {
    title: 'Tarot Reading Services & Booking | Austin Tarot Reader',
    description: 'Book a tarot reading in Austin, TX. I offer in-depth, love & relationship, career, and intuitive coaching sessions. Find the clarity you seek today.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarot Reading Services & Booking | Austin Tarot Reader',
    description: 'Book a tarot reading in Austin, TX. I offer in-depth, love & relationship, career, and intuitive coaching sessions. Find the clarity you seek today.',
  },
  alternates: {
    canonical: '/services',
  },
};

const services = [
  { title: 'In-Depth 60-Minute Tarot Reading', duration: '1 hr', price: '$85.00', tag: 'Most Popular', description: 'An extended, 15-card reading ideal for seeking deep clarity on a single issue or life theme. Perfect for spiritual growth and transformational insight. Available in-person in Austin, by phone, or video call.', bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT' },
  { title: 'Love & Relationship Reading', duration: '1 hr', price: '$85.00', tag: 'Love & Relationships', description: 'This 60-minute session is centered on your romantic life, helping you understand what to hold onto and what to let go of.', details: [ "Explores the past, present, and potential future of your love situation.", "Uncovers emotional patterns or past experiences still affecting you.", "Identifies obstacles standing in the way of a deeper connection.", "Reveals external influences from friends, family, or timing." ], bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ' },
  { title: 'Focused 30-Minute Tarot Reading', duration: '30 min', price: '$55.00', tag: 'Quick Clarity', description: 'A focused 15-card spread designed to bring quick insight into your current questions or crossroads. We explore each card one-by-one to find the guidance you need. Available in-person in Austin, by phone, or video call.', bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU' },
  { title: 'Intuitive Coaching + Tarot Session', duration: '1 hr', price: '$85.00', tag: 'Transformation', description: 'This unique session combines intuitive tarot with practical life coaching to help you gain insight and take action. Ideal for clients who want both spiritual clarity and structured support in making real changes. Includes meditation, a focused reading, coaching, and personalized next steps.', bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/SK53OJ3ZTPXWAEZOF3SK4P4A' },
  { title: 'Twin Flame Tarot Reading', duration: '1 hr', price: '$85.00', tag: 'Karmic Connections', description: 'Explore your deep spiritual connection in this 60-minute reading. A specialized 15-card spread helps uncover karmic lessons, emotional blocks, and the next steps on your unique twin flame journey.', bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/ST7VCF5PTA3TP2GXKQCFSQBL' },
  { title: 'Career & Money Tarot Reading', duration: '1 hr', price: '$85.00', tag: 'Abundance & Career', description: 'A 60-minute reading focused on your professional path. This spread offers intuitive guidance to help you make confident, aligned decisions.', details: [ "Assesses what’s working (or not) in your current career position.", "Identifies hidden blocks or limiting beliefs affecting abundance.", "Highlights upcoming opportunities or professional shifts.", "Provides clear guidance on decision-making: whether to hold steady, take a leap, or pivot." ], bookingLink: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/Y35MKZALF3RNQPE6OSOUDG5Q' },
];

export default function ServicesPage() {
  return (
    <div className="fade-in-on-load pb-16 md:pb-0">
      <main className="flex flex-col items-center">
        <section className="w-full text-center py-16 md:py-24 flex flex-col items-center justify-center px-4">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.austintarotreader.com/services"
                },
                "itemListElement": services.map((service, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "url": service.bookingLink,
                  "item": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description,
                    "url": service.bookingLink,
                    "provider": {
                      "@id": "https://www.austintarotreader.com/#organization"
                    }
                  }
                }))
              })
            }}
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-sans font-semibold mb-4">
            <span>📍 In-Person Austin, TX & Virtual Worldwide</span>
          </div>

          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary">
            Tarot Readings & Coaching Services
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground/90">
            Each session is a confidential, compassionate, and empowering experience. Choose the reading that best fits your needs.
          </p>
        </section>

        <div className="w-full max-w-4xl mx-auto space-y-16 px-4 sm:px-8 md:px-12 pb-24">
          <section className="space-y-8">
            {services.map((service) => (
              <div key={service.title} className="bg-secondary/70 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center hover:border-primary/40 transition-all duration-300 shadow-xl relative">
                <div className="flex-grow space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-sans uppercase font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                      {service.tag}
                    </span>
                    <span className="text-xs font-sans text-foreground/60">
                      {service.duration} Session
                    </span>
                  </div>

                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-primary">{service.title}</h2>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-2xl font-bold text-accent">{service.price}</span>
                    <span className="font-sans text-xs text-foreground/50">| In-Person or Phone/Zoom</span>
                  </div>

                  <p className="font-sans text-foreground/90 text-sm sm:text-base leading-relaxed">{service.description}</p>
                  
                  {service.details && (
                    <ul className="mt-3 space-y-1.5 list-disc list-inside font-sans text-xs sm:text-sm text-foreground/80">
                      {service.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex-shrink-0 w-full md:w-auto pt-2 md:pt-0">
                  <a href={service.bookingLink} target="_blank" rel="noopener noreferrer" className="inline-block text-center w-full md:w-auto bg-primary text-background font-bold py-3 px-8 rounded-lg text-base sm:text-lg hover:opacity-90 transition-opacity duration-300 font-sans shadow-md">
                    Book {service.duration} Session
                  </a>
                </div>
              </div>
            ))}
          </section>

          <section className="bg-secondary/40 p-8 rounded-2xl border border-primary/20 text-center max-w-2xl mx-auto">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-accent">
              How to Prepare for Your Reading
            </h2>
            <div className="mt-4 font-sans text-sm sm:text-base text-foreground/90 space-y-3 leading-relaxed">
              <p>To make the most of our time together, I recommend thinking about your questions or the area of your life you'd like to focus on beforehand. Come with an open mind and a quiet space where you won't be disturbed.</p>
              <p className="text-primary font-semibold">Remember, there are no 'silly' questions. This is your safe space to seek clarity.</p>
            </div>
          </section>
        </div>
      </main>

      <MobileStickyBar />
    </div>
  );
}