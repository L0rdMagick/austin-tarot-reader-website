import type { Metadata } from 'next';
import Link from 'next/link';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AmbientBackgroundCards, BgCard } from '@/components/AmbientBackgroundCards';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: "Find answers to common questions about tarot readings in Austin with Daniel. Learn about reading types, what to expect, and how to prepare.",
  openGraph: {
    title: 'Frequently Asked Questions | Austin Tarot Reader',
    description: "Find answers to common questions about tarot readings in Austin with Daniel. Learn about reading types, what to expect, and how to prepare.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Austin Tarot Reader',
    description: "Find answers to common questions about tarot readings in Austin with Daniel. Learn about reading types, what to expect, and how to prepare.",
  },
  alternates: {
    canonical: '/faq',
  },
};

const faqData = [
  {
    question: "What is a tarot reading?",
    answer: "A tarot reading is a practice where a reader uses a deck of 78 cards with symbolic imagery to gain insight into a person's past, present, or potential future. It's a tool for self-reflection, guidance, and gaining clarity on life's situations."
  },
  {
    question: "How does a tarot reading work with Daniel?",
    answer: "In a session with Daniel, an experienced tarot reader in Austin, you will explore your questions together. Daniel acts as a guide, using his intuition and knowledge of the cards to interpret their messages and provide empowering, compassionate advice."
  },
  {
    question: "What is the difference between your 30-minute and 60-minute readings?",
    answer: "The 30-minute reading is a focused session, perfect for quick insight on a specific question. The 60-minute reading allows for a much deeper dive, exploring the nuances of a situation, underlying patterns, and a more comprehensive look at your path forward. You can see details on my services page."
  },
  {
    question: "Do you offer tarot readings specifically for love and relationships?",
    answer: <p>Absolutely. My <Link href="/services" className="text-primary hover:underline">Love & Relationship Readings</Link> are one of my most requested services. We can explore your romantic life, heal past wounds, or gain clarity on a current partnership. This is a core part of my practice as a tarot reader in Austin.</p>
  },
  {
    question: "Can a tarot reading help with my career or finances?",
    answer: "Yes, many clients seek guidance on their professional lives. A Career & Money reading can help you understand hidden blocks, identify new opportunities, and make aligned decisions about your job, business, or financial path."
  },
  {
    question: "Are your tarot readings confidential?",
    answer: "100%. Everything we discuss in our session is completely private and held in a safe, non-judgmental space. Your trust is my highest priority."
  },
  {
    question: "Do I need to be in person in Austin for a reading?",
    answer: "Not at all! I offer readings for clients globally via phone or video call. Energy is not bound by distance, and virtual sessions are just as powerful and accurate as in-person readings."
  },
  {
    question: "What is your style as a tarot reader? Are you a psychic?",
    answer: "My style is intuitive, compassionate, and empowering. I see myself as a guide who interprets the language of the cards. While the readings are highly intuitive ('psychic'), my focus is less on fortune-telling and more on providing practical, spiritual guidance you can use to improve your life."
  },
  {
    question: "I'm skeptical about tarot. Is a reading still for me?",
    answer: "Skepticism is healthy! I invite you to see a tarot reading not as a supernatural event, but as a structured conversation with your own intuition. The cards provide archetypes and symbols that can unlock insights and perspectives you already hold within. Many of my most dedicated clients started as curious skeptics."
  },
  {
    question: "What is a Twin Flame Tarot Reading?",
    answer: <p>This is a specialized reading for those who feel they have a deep, spiritual 'twin flame' connection. It's designed to explore the unique challenges and lessons of this profound journey. You can learn more on the <Link href="/services" className="text-primary hover:underline">services page</Link>.</p>
  },
  {
    question: "How often should I get a tarot reading?",
    answer: "It varies for everyone. Some people find a quarterly reading helpful for seasonal check-ins, while others seek guidance during major life transitions or when facing a specific challenge. Trust your intuition—you'll know when it's the right time."
  },
  {
    question: "Can you tell me what someone else is thinking or feeling?",
    answer: "A tarot reading centers on *your* energy and your path. While the cards can offer insight into the dynamics of a relationship, ethical tarot reading avoids infringing on another person's privacy. We will focus on what you can control: your actions, perspective, and energy."
  },
  {
    question: "What if I get a 'scary' card like Death or The Devil?",
    answer: "There are no 'bad' cards in tarot! Cards like Death rarely signify a physical death; they typically point to a powerful and necessary ending to make way for a new beginning. The Devil card often highlights areas of your life where you feel trapped and empowers you to break free. I will guide you through the true, empowering meaning of every card."
  },
  {
    question: "Is a tarot reading the same as spiritual guidance?",
    answer: "Yes, I consider tarot to be a powerful form of spiritual guidance. It's a tool that helps bridge the gap between your conscious mind and your higher self, offering a spiritual perspective on your everyday challenges and decisions."
  },
  {
    question: "What is the Intuitive Coaching + Tarot session?",
    answer: "This is a unique hybrid session for those who want both spiritual insight and actionable steps. We use the tarot to identify the core issue, and then we use coaching techniques to create a structured plan for you to move forward with confidence."
  },
  {
    question: "Do you do tarot readings for events or parties in the Austin area?",
    answer: "Yes! I love bringing a touch of magic to events. Offering mini-readings for guests is a fun and engaging addition to parties, corporate events, and weddings in and around Austin. Please use the contact page to inquire about rates."
  },
  {
    question: "What should I do after my tarot reading?",
    answer: "I recommend taking some time to reflect on the insights from our session. Journaling can be very helpful. The goal is to integrate the guidance into your life. Remember, the reading illuminates the path, but you are the one who walks it."
  },
  {
    question: "How do I book a tarot reading with you?",
    answer: <p>It's easy! Simply visit my <Link href="/services" className="text-primary hover:underline">Services & Booking page</Link>, choose the reading that resonates with you, and click the 'Book Session' button to see my availability and schedule your appointment.</p>
  },
];

const FAQ_BG_CARDS: BgCard[] = [
  { src: '/images/rider-waite-tarot-deck-cards/11-Justice.jpg', name: 'Justice', topPercent: 12, side: 'left', rotateDeg: -15 },
  { src: '/images/rider-waite-tarot-deck-cards/05-TheHierophant.jpg', name: 'The Hierophant', topPercent: 35, side: 'right', rotateDeg: 18 },
  { src: '/images/rider-waite-tarot-deck-cards/18-TheMoon.jpg', name: 'The Moon', topPercent: 60, side: 'left', rotateDeg: -12 },
  { src: '/images/rider-waite-tarot-deck-cards/19-TheSun.jpg', name: 'The Sun', topPercent: 82, side: 'right', rotateDeg: 14 },
];

export default function FaqPage() {
  return (
    <div className="fade-in-on-load relative min-h-screen overflow-hidden">
      <AmbientBackgroundCards cards={FAQ_BG_CARDS} />

      <main className="flex flex-col items-center relative z-10">
        <ScrollReveal variant="fade-up">
          <section className="w-full text-center pt-12 pb-6 md:pt-16 md:pb-8 flex flex-col items-center justify-center px-4">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": faqData.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": typeof faq.answer === 'string' ? faq.answer : 'Visit our services page for more details.'
                    }
                  }))
                })
              }}
            />
            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-gold">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground/90">
              Answers to common questions about tarot readings in Austin.
            </p>
          </section>
        </ScrollReveal>

        <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 md:px-12 pb-24">
          <section className="space-y-2">
            {faqData.map((faq, index) => (
              <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </section>
          
          <ScrollReveal variant="zoom-in">
            <section className="text-center bg-surface p-8 rounded-2xl border border-gold/30 mt-16 shadow-2xl">
              <h2 className="font-editorial text-3xl font-bold text-gold">
                Have More Questions?
              </h2>
              <p className="mt-2 font-sans text-lg text-foreground/90 max-w-lg mx-auto">
                If you don't see your question answered here, feel free to reach out.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block bg-gold text-obsidian font-bold py-3.5 px-8 rounded-xl text-lg hover:bg-gold-light transition-all duration-300 font-sans shadow-lg shadow-gold/20 active:scale-95"
              >
                Contact Me ↗
              </Link>
            </section>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}