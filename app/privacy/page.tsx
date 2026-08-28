import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Austin Tarot Reader, including our strict SMS data protection and privacy policies.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        <section className="w-full text-center py-16 md:py-24 flex flex-col items-center justify-center px-4">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary">
            Privacy Policy
          </h1>
          <p className="mt-4 font-sans text-lg text-foreground/80 max-w-2xl mx-auto">
            Last Updated: August 27, 2026
          </p>
        </section>

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 md:px-12 pb-24 font-sans text-foreground/90 space-y-8">
          <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-white/10 space-y-8">
            <section className="space-y-4">
              <h2 className="font-cinzel text-2xl font-bold text-accent">Introduction</h2>
              <p>
                Austin Tarot Reader (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website at austintarotreader.com or interact with our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-cinzel text-2xl font-bold text-accent">Information We Collect</h2>
              <p>
                We collect information that you voluntarily provide to us when you fill out contact forms, book appointments, or communicate with us directly. This information may include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/80">
                <li>Name and contact details (email address, phone number).</li>
                <li>Appointment scheduling and service preferences.</li>
                <li>Messages or inquiry details submitted through our contact forms.</li>
              </ul>
            </section>

            <section className="space-y-4 border-l-4 border-primary pl-6 py-2 bg-background/30 rounded-r-lg">
              <h2 className="font-cinzel text-2xl font-bold text-primary">SMS Data and Privacy</h2>
              <p className="text-lg leading-relaxed font-semibold">
                We highly value your privacy. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-cinzel text-2xl font-bold text-accent">How We Use Your Information</h2>
              <p>
                We use the collected information solely for business purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/80">
                <li>Providing and scheduling tarot reading services.</li>
                <li>Responding to customer support requests and inquiries.</li>
                <li>Sending transactional updates or notifications regarding your bookings.</li>
                <li>Communicating via SMS regarding updates or services, only if explicitly opted in.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-cinzel text-2xl font-bold text-accent">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
