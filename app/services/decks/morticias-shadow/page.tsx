import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { AddamsTarotDeck } from '@/components/AddamsTarotDeck';

export const metadata: Metadata = {
  title: "Morticia's Shadow Gothic Tarot Deck | Austin Tarot Reader",
  description: "Purchase Morticia's Shadow: Gothic Tarot Deck (Addams Family Inspired Edition). Handcrafted 78-card deck, standard tarot size with plain black velvet bag.",
  openGraph: {
    title: "Morticia's Shadow Gothic Tarot Deck | Austin Tarot Reader",
    description: "Purchase Morticia's Shadow: Gothic Tarot Deck (Addams Family Inspired Edition). Handcrafted 78-card deck, standard tarot size with plain black velvet bag.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Morticia's Shadow Gothic Tarot Deck | Austin Tarot Reader",
    description: "Purchase Morticia's Shadow: Gothic Tarot Deck (Addams Family Inspired Edition). Handcrafted 78-card deck, standard tarot size with plain black velvet bag.",
  },
  alternates: {
    canonical: '/services/decks/morticias-shadow',
  },
};

export default function MorticiasShadowPage() {
  return (
    <div className="fade-in-on-load min-h-screen">
      <main className="flex flex-col items-center pt-8 pb-16">
        {/* Back Navigation Bar */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-6">
          <Link 
            href="/services/decks" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-sans text-sm sm:text-md transition-colors duration-200"
          >
            <span>&larr;</span> Back to Tarot Decks
          </Link>
        </div>

        <Suspense fallback={<div className="text-center py-20 font-sans text-foreground/50">Loading Morticia's Shadow...</div>}>
          <AddamsTarotDeck />
        </Suspense>
      </main>
    </div>
  );
}
