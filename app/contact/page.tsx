import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Daniel for tarot readings in Austin, TX. Reach out by phone or email for inquiries about personal sessions, coaching, or event bookings.',
  alternates: {
    canonical: '/contact',
  },
};

const contactDetails = [
    { 
        name: 'Email', 
        value: 'info@austintarotreader.com', 
        href: 'mailto:info@austintarotreader.com?subject=Tarot%20Reading%20Inquiry',
        cta: 'Email Now'
    },
    { 
        name: 'Phone', 
        value: '(512) 547-7129', 
        href: 'tel:+15125477129',
        cta: 'Call Now'
    },
    { 
        name: 'Location', 
        value: 'Downtown Austin, Texas', 
        href: '#',
        cta: null
    },
];

export default function ContactPage() {
  return (
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        <section className="w-full text-center pt-12 pb-6 md:pt-16 md:pb-8 flex flex-col items-center justify-center px-4">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary">
            Get In Touch
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground">
            I&apos;m here to answer your questions and help you book your session.
          </p>
        </section>

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12 pb-24 space-y-12">
          {/* Direct Contact Options */}
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

          {/* Contact Inquiry Form with 10DLC Compliant SMS Opt-in */}
          <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-white/10 space-y-6">
            <div className="text-center sm:text-left">
              <h2 className="font-cinzel text-3xl font-bold text-primary">Send a Message</h2>
              <p className="font-sans text-foreground/80 mt-2">
                Have a question or request? Fill out the form below and I will get back to you shortly.
              </p>
            </div>

            <form className="space-y-6 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-background border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-background border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-accent mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(512) 555-0199"
                  className="w-full bg-background border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-background border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-y"
                ></textarea>
              </div>

              {/* 10DLC Mandatory Unchecked SMS Opt-In Checkbox */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="sms_opt_in"
                    name="sms_opt_in"
                    defaultChecked={false}
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-background text-primary focus:ring-primary focus:ring-offset-background cursor-pointer"
                  />
                  <label htmlFor="sms_opt_in" className="text-xs text-foreground/80 leading-relaxed cursor-pointer select-none">
                    By checking this box, you agree to receive SMS text messages from Austin Tarot Reader regarding services, updates, and offers. You can opt-out at any time by replying STOP. Message and data rates may apply.
                  </label>
                </div>
                <p className="text-xs text-foreground/50">
                  See our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link> and <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> for details.
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="text-center">
            <p className="font-sans text-lg text-foreground/70">
              For most bookings, please use the links on the <Link href="/services" className="font-bold text-primary hover:underline">Services page</Link> for the fastest response.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}