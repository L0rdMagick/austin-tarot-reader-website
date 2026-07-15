import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gothic Tarot Decks for Sale | Austin Tarot Reader',
  description: 'Explore handcrafted tarot decks for sale. Discover the Morticia\'s Shadow Gothic Tarot Deck, an Addams Family inspired 78-card deck with custom velvet bag.',
  openGraph: {
    title: 'Gothic Tarot Decks for Sale | Austin Tarot Reader',
    description: 'Explore handcrafted tarot decks for sale. Discover the Morticia\'s Shadow Gothic Tarot Deck, an Addams Family inspired 78-card deck with custom velvet bag.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gothic Tarot Decks for Sale | Austin Tarot Reader',
    description: 'Explore handcrafted tarot decks for sale. Discover the Morticia\'s Shadow Gothic Tarot Deck, an Addams Family inspired 78-card deck with custom velvet bag.',
  },
  alternates: {
    canonical: '/services/decks',
  },
};

export default function DecksCatalogPage() {
  return (
    <div className="fade-in-on-load">
      <main className="flex flex-col items-center">
        {/* Section Header */}
        <section className="w-full text-center py-16 md:py-24 flex flex-col items-center justify-center px-4">
          <span className="text-accent uppercase tracking-widest text-sm font-sans font-semibold">Mystic Wares</span>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-primary mt-2">
            Sacred Tarot Decks
          </h1>
          <p className="mt-4 font-sans text-lg sm:text-xl text-balance max-w-2xl mx-auto text-foreground/80">
            Handcrafted instruments of divination, designed to guide you through the mysteries of the subconcious.
          </p>
        </section>

        {/* Catalog Grid */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pb-24">
          <div className="space-y-12">
            
            {/* Deck Card - Morticia's Shadow */}
            <div className="bg-secondary/40 p-6 sm:p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-8 md:gap-12 items-center hover:border-accent/30 transition-all duration-300 shadow-xl">
              
              {/* Left Column: Large Hovering Thumbnail (star card) */}
              <div className="w-full md:w-1/2 max-w-[280px] sm:max-w-[320px] aspect-[2/3] relative rounded-xl overflow-hidden shadow-2xl border border-primary/30 group cursor-pointer animate-gothic-float">
                <Image
                  src="/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the lovers.png"
                  alt="Morticia's Shadow Gothic Tarot Deck - Lovers Card"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="font-cinzel text-sm text-primary tracking-widest">VIEW DETAILS</span>
                </div>
              </div>

              {/* Right Column: Title & Caption */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
                <div>
                  <span className="text-accent text-xs sm:text-sm uppercase tracking-widest font-sans font-semibold">Featured Deck</span>
                  <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary mt-1">
                    Morticia's Shadow
                  </h2>
                  <p className="text-foreground/60 font-cinzel italic text-sm sm:text-md mt-1">
                    Gothic Tarot Deck (Addams Family Inspired)
                  </p>
                </div>
                
                <p className="font-sans text-foreground/90 text-md sm:text-lg leading-relaxed">
                  Immerse yourself in the dark elegance of this premium 78-card <strong>Addams Family inspired gothic tarot deck</strong>. Handcrafted to order and safely wrapped in a plain black velvet drawstring bag.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="font-sans text-3xl font-extrabold text-accent">From $64.95</span>
                    <span className="font-sans text-foreground/50 text-xs sm:text-sm font-light">+ $4.95 shipping</span>
                  </div>
                  <span className="hidden sm:inline text-foreground/20">|</span>
                  <span className="font-sans text-xs sm:text-sm text-foreground/60 italic bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                    Made to Order (Expedited available)
                  </span>
                </div>

                <div className="pt-4">
                  <Link 
                    href="/services/decks/morticias-shadow" 
                    className="inline-block text-center w-full sm:w-auto bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans tracking-wide"
                  >
                    Learn More & Purchase
                  </Link>
                </div>
              </div>

            </div>

            {/* Deck Card - Cats of the Crown */}
            <div className="bg-secondary/40 p-6 sm:p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-8 md:gap-12 items-center hover:border-accent/30 transition-all duration-300 shadow-xl">
              
              {/* Left Column: Large Hovering Thumbnail (Lovers card) */}
              <div className="w-full md:w-1/2 max-w-[280px] sm:max-w-[320px] aspect-[2/3] relative rounded-xl overflow-hidden shadow-2xl border border-primary/30 group cursor-pointer animate-gothic-float">
                <Image
                  src="/images/Merchandise/Tarot Decks/Cats of the Crown Tarot Deck/the_lovers.webp"
                  alt="Cats of the Crown Tarot Deck - Lovers Card"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="font-cinzel text-sm text-primary tracking-widest">VIEW DETAILS</span>
                </div>
              </div>

              {/* Right Column: Title & Description */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
                <div>
                  <span className="text-accent text-xs sm:text-sm uppercase tracking-widest font-sans font-semibold">New Release</span>
                  <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary mt-1">
                    Cats of the Crown
                  </h2>
                  <p className="text-foreground/60 font-cinzel italic text-sm sm:text-md mt-1">
                    Royal Feline Tarot Deck (Majestic & Divine)
                  </p>
                </div>
                
                <p className="font-sans text-foreground/90 text-md sm:text-lg leading-relaxed">
                  Step into the majestic court of the **Cats of the Crown Tarot Deck**. This stunning 78-card deck features wise, regal feline sovereigns, card artwork representing spiritual traditions, and royal kitty guardians, wrapped in a black velvet drawstring bag.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="font-sans text-3xl font-extrabold text-accent">From $64.95</span>
                    <span className="font-sans text-foreground/50 text-xs sm:text-sm font-light">+ $4.95 shipping</span>
                  </div>
                  <span className="hidden sm:inline text-foreground/20">|</span>
                  <span className="font-sans text-xs sm:text-sm text-foreground/60 italic bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                    Made to Order (Expedited available)
                  </span>
                </div>

                <div className="pt-4">
                  <Link 
                    href="/services/decks/cats-of-the-crown" 
                    className="inline-block text-center w-full sm:w-auto bg-primary text-background font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 font-sans tracking-wide"
                  >
                    Learn More & Purchase
                  </Link>
                </div>
              </div>

            </div>

            {/* Placeholder / Future decks indicator */}
            <div className="text-center pt-8 border-t border-white/5 opacity-40">
              <p className="font-cinzel text-sm sm:text-md text-foreground/50 tracking-wider">
                More mystic wares arriving soon...
              </p>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
