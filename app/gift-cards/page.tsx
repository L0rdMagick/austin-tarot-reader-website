import type { Metadata } from 'next';
import { AmbientBackgroundCards } from '@/components/AmbientBackgroundCards';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Tarot Reading Gift Cards | Austin Tarot Reader',
  description:
    'Give the gift of clarity. Purchase a tarot reading gift card for someone you love. Available in multiple denominations — redeemable for any session in Austin, TX or virtually.',
  alternates: {
    canonical: '/gift-cards',
  },
};

const SQUARE_GIFT_CARD_URL = 'https://app.squareup.com/gift/RGD1ADG4XM3EW/order';

const giftOptions = [
  {
    label: 'Focused Reading',
    amount: '$55',
    duration: '30 Minutes',
    description:
      'Sharp, targeted insight into 1–2 pressing questions. Perfect for someone at a crossroads who needs clarity fast.',
    badge: null,
    highlight: false,
  },
  {
    label: 'In-Depth Reading',
    amount: '$85',
    duration: '60 Minutes',
    description:
      'A full 15-card spread covering love, career, life purpose, or spiritual path. The most comprehensive single session.',
    badge: 'Most Popular',
    highlight: true,
  },
  {
    label: 'Two Focused Readings',
    amount: '$100',
    duration: '2 × 30 Minutes',
    description:
      'Gift two 30-minute sessions — one to use now, one to hold for whenever the next question arises.',
    badge: 'Save $10',
    highlight: false,
    savingsNote: 'Save $10 vs. booking separately',
  },
  {
    label: 'Two In-Depth Readings',
    amount: '$160',
    duration: '2 × 60 Minutes',
    description:
      'Two full 60-minute sessions — ideal for a deep journey or for sharing the experience with someone special.',
    badge: 'Save $10',
    highlight: false,
    savingsNote: 'Save $10 vs. booking separately',
  },
  {
    label: 'Custom Amount',
    amount: 'Any',
    duration: 'Your Choice',
    description:
      'Set your own amount. The recipient applies it toward any reading or service of their choice.',
    badge: null,
    highlight: false,
  },
];

const faqs = [
  {
    q: 'How does the recipient use their gift card?',
    a: 'They receive a digital gift card code by email. When they book a session, they enter the code at checkout on the Square booking page to apply the balance.',
  },
  {
    q: 'Can the gift card be used for any reading type?',
    a: 'Yes — the balance applies to any session: in-person in Austin, TX, or virtual via phone or video call worldwide.',
  },
  {
    q: 'Does the gift card expire?',
    a: 'No. Under Texas law, gift cards cannot be given expiration dates. The balance remains available indefinitely.',
  },
  {
    q: 'When is the money charged?',
    a: 'Payment is collected at the time of purchase, just like any other transaction. You pay now, they book when they are ready.',
  },
  {
    q: 'Can I purchase a gift card for myself?',
    a: '辦Absolutely. Locking in a session at today\'s rate for a future booking is a smart move — especially heading into busier months.',
  },
];

export default function GiftCardsPage() {
  return (
    <div className="fade-in-on-load pb-16 md:pb-0 relative min-h-screen overflow-hidden">
      <AmbientBackgroundCards />

      <main className="flex flex-col items-center relative z-10">
        {/* HERO */}
        <ScrollReveal variant="fade-up">
          <section className="w-full text-center pt-12 pb-6 md:pt-16 md:pb-8 flex flex-col items-center justify-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-mono font-semibold mb-6">
              <span>🎁 Gift Cards — Redeemable In-Person &amp; Virtually</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-balance text-gold max-w-4xl leading-[1.1]">
              Give the Gift of Clarity
            </h1>
            <p className="mt-6 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground/90 leading-relaxed">
              A tarot reading is a genuinely meaningful gift — not another thing
              they don&apos;t need. Give someone you care about a private space
              to find answers, process what&apos;s weighing on them, and leave
              with real direction.
            </p>
            <div className="mt-8">
              <a
                href={SQUARE_GIFT_CARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-10 rounded-xl text-lg transition-all duration-300 font-sans shadow-xl shadow-gold/20 transform hover:scale-[1.02] active:scale-95"
              >
                Purchase a Gift Card ↗
              </a>
            </div>
          </section>
        </ScrollReveal>

        <div className="w-full max-w-5xl mx-auto space-y-16 px-4 sm:px-8 md:px-12 pb-24 pt-4">
          {/* GIFT CARD OPTIONS GRID */}
          <ScrollReveal variant="fade-up">
            <section className="space-y-6">
              <div className="text-center">
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Choose an Amount
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  Five Ways to Give
                </h2>
                <p className="mt-3 font-sans text-foreground/70 max-w-xl mx-auto text-sm sm:text-base">
                  Select the option that fits. All gift cards are purchased
                  through Square — secure, instant digital delivery to any
                  email address.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {giftOptions.map((option) => (
                  <div
                    key={option.label}
                    className={`relative flex flex-col justify-between rounded-2xl border p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                      option.highlight
                        ? 'bg-surface border-2 border-gold shadow-gold/15'
                        : 'bg-surface/80 border-white/10 hover:border-gold/40'
                    }`}
                  >
                    {option.badge && (
                      <div
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold font-mono uppercase px-3 py-1 rounded-full tracking-wider shadow-md ${
                          option.highlight
                            ? 'bg-gold text-obsidian'
                            : 'bg-gold/20 text-gold border border-gold/40'
                        }`}
                      >
                        {option.badge}
                      </div>
                    )}

                    <div>
                      <span className="text-gold font-mono text-xs uppercase tracking-wider font-semibold">
                        {option.duration}
                      </span>
                      <h3 className="font-editorial text-xl font-bold text-foreground mt-1">
                        {option.label}
                      </h3>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-mono text-3xl font-bold text-gold">
                          {option.amount}
                        </span>
                        {option.amount !== 'Any' && (
                          <span className="font-mono text-xs text-foreground/50">
                            gift card value
                          </span>
                        )}
                      </div>
                      <p className="mt-3 font-sans text-sm text-foreground/80 leading-relaxed">
                        {option.description}
                      </p>
                      {option.savingsNote && (
                        <p className="mt-2 font-mono text-xs text-gold/70 font-semibold">
                          ✦ {option.savingsNote}
                        </p>
                      )}
                    </div>

                    <div className="mt-6">
                      <a
                        href={SQUARE_GIFT_CARD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center w-full font-bold py-3 px-6 rounded-xl text-sm transition-colors duration-300 font-sans active:scale-95 ${
                          option.highlight
                            ? 'bg-gold text-obsidian hover:bg-gold-light'
                            : 'bg-surface-elevated border border-gold/40 text-gold hover:bg-gold hover:text-obsidian'
                        }`}
                      >
                        {option.amount === 'Any'
                          ? 'Set Custom Amount ↗'
                          : `Gift ${option.amount} ↗`}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <a
                  href={SQUARE_GIFT_CARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-10 rounded-xl text-base transition-all duration-300 font-sans shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-95"
                >
                  Purchase Your Gift Card on Square ↗
                </a>
                <p className="mt-3 font-sans text-xs text-foreground/50">
                  Secure checkout via Square. Digital delivery to any email
                  address. No expiration date.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* HOW IT WORKS */}
          <ScrollReveal variant="fade-up">
            <section className="bg-surface p-8 sm:p-12 rounded-2xl border border-gold/30 space-y-8 shadow-2xl">
              <div className="text-center">
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Simple Process
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  How Gift Cards Work
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">01</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">You Purchase</h3>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                    Choose an amount and complete checkout on Square. You enter
                    the recipient&apos;s email and an optional personal message.
                  </p>
                </div>

                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">02</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">They Receive</h3>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                    The recipient gets a digital gift card delivered instantly
                    to their inbox — no shipping, no waiting.
                  </p>
                </div>

                <div className="bg-surface-elevated p-6 rounded-xl border border-white/10 space-y-3 hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-editorial font-bold text-gold">03</span>
                  <h3 className="font-editorial text-xl font-bold text-foreground">They Book</h3>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                    They choose their session type, pick a time that works for
                    them, and apply the gift card code at checkout. Done.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal variant="fade-up">
            <section className="max-w-3xl mx-auto space-y-6 text-center">
              <div>
                <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
                  Common Questions
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold mt-1">
                  Gift Card FAQ
                </h2>
              </div>

              <div className="text-left space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-surface/80 rounded-xl border border-white/10 p-5 hover:border-gold/20 transition-colors"
                  >
                    <p className="font-editorial text-base font-bold text-foreground">
                      {faq.q}
                    </p>
                    <p className="mt-2 font-sans text-sm text-foreground/80 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* CLOSING CTA */}
          <ScrollReveal variant="zoom-in">
            <section className="text-center bg-surface/50 rounded-2xl border border-gold/20 p-10 space-y-4">
              <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-gold">
                Ready to Give the Gift?
              </h2>
              <p className="font-sans text-foreground/70 max-w-md mx-auto text-sm">
                Birthdays, anniversaries, holidays, or just because — clarity
                is always the right gift.
              </p>
              <a
                href={SQUARE_GIFT_CARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-10 rounded-xl text-base transition-all duration-300 font-sans shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-95"
              >
                Purchase a Gift Card ↗
              </a>
            </section>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
