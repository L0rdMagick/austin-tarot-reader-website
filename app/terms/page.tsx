import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Austin Tarot Reader, including our SMS Communications policy and service terms.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        <section className="w-full text-center py-16 md:py-24 flex flex-col items-center justify-center px-4">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary">
            Terms of Service
          </h1>
          <p className="mt-4 font-sans text-lg text-foreground/80 max-w-2xl mx-auto">
            Last Updated: August 27, 2026
          </p>
        </section>

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12 pb-24 font-sans text-foreground/90 space-y-8">
          <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-white/10 space-y-8">
            <section className="space-y-4">
              <h2 className="font-cinzel text-2xl font-bold text-accent">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website and services provided by Austin Tarot Reader (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-cinzel text-2xl font-bold text-accent">2. Services & Disclaimer</h2>
              <p>
                Tarot readings provided by Austin Tarot Reader are intended for personal guidance, self-reflection, and entertainment purposes only. Services do not replace professional legal, financial, medical, or psychological advice.
              </p>
            </section>

            <section className="space-y-4 border-l-4 border-primary pl-6 py-2 bg-background/30 rounded-r-lg">
              <h2 className="font-cinzel text-2xl font-bold text-primary">3. SMS Communications</h2>
              <p className="text-lg leading-relaxed font-semibold">
                By opting into our SMS communications, you agree to receive text messages from Austin Tarot Reader. You may opt out at any time by replying STOP. For customer support, reply HELP. Message frequency varies. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-cinzel text-2xl font-bold text-accent">4. Booking and Cancellations</h2>
              <p>
                Appointments must be scheduled in advance. Rescheduling or cancellation requests should be made at least 24 hours prior to your scheduled session.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-cinzel text-2xl font-bold text-accent">5. Contact Information</h2>
              <p>
                For questions or customer support regarding our services or terms, please reach out to:
              </p>
              <div className="space-y-1 text-foreground/90">
                <p><strong>Austin Tarot Reader</strong></p>
                <p>Email: <a href="mailto:info@austintarotreader.com" className="text-primary hover:underline">info@austintarotreader.com</a></p>
                <p>Phone: <a href="tel:+17739488925" className="text-primary hover:underline">(773) 948-8925</a></p>
                <p>Location: Downtown Austin, Texas</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
