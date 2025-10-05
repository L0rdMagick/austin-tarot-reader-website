import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Austin Tarot Reader',
  description: 'Contact Daniel for tarot readings in Austin, TX. Reach out by phone or email for inquiries about personal sessions, coaching, or event bookings.',
};

const contactDetails = [
    { 
        name: 'Email', 
        value: 'tarot@AustinTarotReader.com', 
        href: 'mailto:tarot@AustinTarotReader.com?subject=Tarot%20Reading%20Inquiry',
        cta: 'Email Now'
    },
    { 
        name: 'Phone', 
        value: '(773) 948-8925', 
        href: 'tel:+17739488925',
        cta: 'Call Now'
    },
    { 
        name: 'Location', 
        value: 'Downtown Austin, Texas', 
        href: '#', // No link needed for location
        cta: null
    },
];

export default function ContactPage() {
  return (
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        <section className="w-full text-center py-20 md:py-28 flex flex-col items-center justify-center px-4">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary">
            Get In Touch
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground">
            I'm here to answer your questions and help you book your session.
          </p>
        </section>

        <div className="w-full max-w-2xl mx-auto px-4 sm:px-8 md:px-12 pb-24">
          <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-white/10 space-y-8">
            {contactDetails.map((item) => (
              <div key={item.name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:gap-4">
                <div className="mb-4 sm:mb-0">
                  <h2 className="font-cinzel text-2xl font-bold text-accent">{item.name}</h2>
                  <p className="font-sans text-lg text-foreground/80 mt-1">
                    {item.name === 'Email' ? (
                      <a href={item.href} className="hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
                {item.cta && (
                  <a
                    href={item.href}
                    className="flex-shrink-0 bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans"
                  >
                    {item.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="font-sans text-lg text-foreground/70">
              For most bookings, please use the links on the <a href="/services" className="font-bold text-primary hover:underline">Services page</a> for the fastest response.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}