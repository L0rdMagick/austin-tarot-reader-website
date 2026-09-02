import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AmbientBackgroundCards } from '@/components/AmbientBackgroundCards';
import { ScrollReveal } from '@/components/ScrollReveal';

interface LocationData {
  slug: string;
  name: string;
  neighborhoodTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  landmarks: string[];
  descriptionText: string;
  bookingUrl: string;
}

const LOCATIONS: Record<string, LocationData> = {
  'downtown-austin': {
    slug: 'downtown-austin',
    name: 'Downtown Austin',
    neighborhoodTitle: 'Downtown Austin, TX',
    metaTitle: 'Tarot Reader Downtown Austin | Executive & In-Person Sessions',
    metaDescription: 'Top-rated in-person tarot reading and executive clarity sessions in Downtown Austin, TX. Located near Rainey Street, Congress Ave, and 2nd Street District.',
    heroHeadline: 'Intuitive Tarot Readings & Executive Strategy in Downtown Austin',
    heroSubheadline: 'Convenient 1-on-1 sessions and private event readings in the heart of Downtown Austin.',
    landmarks: ['Hotel Van Zandt', 'W Austin', 'Congress Avenue', 'Rainey Street Historic District', '2nd Street District'],
    descriptionText: 'Whether you are a founder navigating high-stakes company decisions, an executive visiting Austin for a conference, or a local seeking personal spiritual guidance, Daniel offers deeply intuitive 1-on-1 readings right in Downtown Austin.',
    bookingUrl: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT'
  },
  'south-congress': {
    slug: 'south-congress',
    name: 'South Congress (SoCo)',
    neighborhoodTitle: 'South Congress (SoCo), Austin, TX',
    metaTitle: 'Tarot Reader South Congress Austin (SoCo) | Intuitive Readings',
    metaDescription: 'Experience authentic intuitive tarot readings in South Congress (SoCo), Austin, TX. Serving locals and visitors along S Congress Ave.',
    heroHeadline: 'Authentic Intuitive Tarot Readings on South Congress Ave',
    heroSubheadline: 'Immerse yourself in Austin’s famous vibrant culture with a transformative 1-on-1 reading.',
    landmarks: ['South Congress Hotel', 'Hotel San José', 'Music Lane', 'Continental Club', 'Milwood & SoCo Shops'],
    descriptionText: 'South Congress is the creative heartbeat of Austin. Daniel brings 11+ years of tarot expertise to locals and travelers strolling SoCo, delivering empowering readings focused on love, career, and personal alignment.',
    bookingUrl: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT'
  },
  'east-austin': {
    slug: 'east-austin',
    name: 'East Austin',
    neighborhoodTitle: 'East Austin, TX',
    metaTitle: 'Tarot Reader East Austin | Creative & Intuitive Readings',
    metaDescription: 'Intuitive tarot readings in East Austin. Private sessions and corporate party entertainment near East Cesar Chavez and 6th Street.',
    heroHeadline: 'Intuitive Tarot Readings & Party Entertainment in East Austin',
    heroSubheadline: 'Grounding insights for East Austin’s vibrant creative community, founders, and private gatherings.',
    landmarks: ['Fair Market', 'East Cesar Chavez', 'Plaza Saltillo', 'East 6th Street Venues', 'Canopy Art Studios'],
    descriptionText: 'East Austin combines rich artistic energy with emerging tech innovation. Daniel provides tailored tarot experiences for individual seekers, creative retreats, and private parties across the Eastside.',
    bookingUrl: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT'
  },
  'the-domain-austin': {
    slug: 'the-domain-austin',
    name: 'The Domain & North Austin',
    neighborhoodTitle: 'The Domain & North Austin, TX',
    metaTitle: 'Tarot Reader The Domain Austin | Corporate & Private Readings',
    metaDescription: 'Tarot readings and executive clarity sessions in The Domain & North Austin. In-person readings and corporate event entertainment.',
    heroHeadline: 'Executive Clarity & Intuitive Tarot at The Domain Austin',
    heroSubheadline: 'High-level executive clarity sessions and premium event readings for North Austin tech hubs and private events.',
    landmarks: ['Domain NORTHSIDE', 'Archer Hotel Austin', 'Rock Rose Avenue', 'North Burnet Corridor', 'IBM & Apple Campuses'],
    descriptionText: 'Serving North Austin’s premier business and luxury entertainment district. Daniel’s unique dual background in Wharton business strategy and 11+ years of tarot reading delivers unmatched value for leaders and teams at The Domain.',
    bookingUrl: 'https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT'
  }
};

export function generateStaticParams() {
  return Object.keys(LOCATIONS).map((slug) => ({
    location: slug,
  }));
}

export function generateMetadata({ params }: { params: { location: string } }): Metadata {
  const loc = LOCATIONS[params.location];
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `/tarot-reader-${loc.slug}`,
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.austintarotreader.com/tarot-reader-${loc.slug}`,
    },
  };
}

export default function NeighborhoodSeoPage({ params }: { params: { location: string } }) {
  const loc = LOCATIONS[params.location];
  if (!loc) {
    notFound();
  }

  const geoSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Austin Tarot Reader - ${loc.name}`,
    "image": "https://www.austintarotreader.com/images/austin%20tarot%20reader%20portrait%20image%20of%20daniel%20the%20tarot%20reader4.png",
    "@id": "https://www.austintarotreader.com/#organization",
    "url": `https://www.austintarotreader.com/tarot-reader-${loc.slug}`,
    "telephone": "+15125477129",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.2672,
      "longitude": -97.7431
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": loc.neighborhoodTitle
    }
  };

  return (
    <div className="fade-in-on-load pb-16 md:pb-0 relative min-h-screen overflow-hidden">
      <AmbientBackgroundCards />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoSchema) }}
      />

      <main className="flex flex-col items-center relative z-10 w-full px-4 sm:px-8">
        <ScrollReveal variant="fade-up">
          <section className="w-full text-center pt-12 pb-8 md:pt-16 md:pb-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-mono font-semibold mb-6">
              <span>📍 Serving {loc.neighborhoodTitle}</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-gold leading-tight">
              {loc.heroHeadline}
            </h1>

            <p className="mt-6 font-sans text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
              {loc.heroSubheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={loc.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-lg transition-all font-sans shadow-xl shadow-gold/20 active:scale-95"
              >
                Book Session in {loc.name} ↗
              </a>
              <Link
                href="/events"
                className="bg-surface text-gold border border-gold/40 font-bold py-3.5 px-8 rounded-xl text-base hover:bg-surface-overlay transition-colors font-sans active:scale-95"
              >
                Event Readings in {loc.name}
              </Link>
            </div>
          </section>
        </ScrollReveal>

        {/* DETAILS & LANDMARKS */}
        <ScrollReveal variant="zoom-in" className="w-full max-w-3xl mx-auto my-8">
          <div className="bg-surface/80 p-8 sm:p-10 rounded-2xl border border-gold/30 shadow-2xl space-y-6">
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-gold text-center">
              Tarot Guidance tailored for {loc.name}
            </h2>

            <p className="font-sans text-base text-foreground/90 leading-relaxed text-center">
              {loc.descriptionText}
            </p>

            <div className="pt-4 border-t border-white/10">
              <h3 className="font-mono text-xs text-gold uppercase tracking-wider font-semibold text-center mb-4">
                Proximity to Major Venues &amp; Landmarks
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {loc.landmarks.map((landmark, idx) => (
                  <span
                    key={idx}
                    className="bg-surface-elevated text-foreground/90 border border-gold/20 text-xs px-3 py-1.5 rounded-lg"
                  >
                    📍 {landmark}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* SERVICES LINKING */}
        <ScrollReveal variant="fade-up" className="w-full max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-surface p-6 rounded-xl border border-gold/20 space-y-3">
              <h3 className="font-editorial text-xl font-bold text-gold">1-on-1 Tarot Sessions</h3>
              <p className="font-sans text-xs text-foreground/80">
                In-depth 60-min, focused 30-min, and love &amp; relationship readings available in-person or virtual.
              </p>
              <Link
                href="/services"
                className="inline-block text-xs font-mono font-bold text-gold hover:underline pt-2"
              >
                Explore Services →
              </Link>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-gold/20 space-y-3">
              <h3 className="font-editorial text-xl font-bold text-gold">Executive Clarity</h3>
              <p className="font-sans text-xs text-foreground/80">
                Wharton MBA strategic decision framework paired with 11 years of intuitive insight.
              </p>
              <Link
                href="/executive"
                className="inline-block text-xs font-mono font-bold text-gold hover:underline pt-2"
              >
                Executive Sessions →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
}
