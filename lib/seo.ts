/**
 * SEO utility functions for generating JSON-LD structured data.
 */

interface LocalBusinessSchema {
  name: string;
  url: string;
  image: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone?: string;
  openingHours?: string[];
  sameAs?: string[];
}

export function generateLocalBusinessSchema(data: LocalBusinessSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    ...data,
    "@id": `${data.url}/#organization`,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string | React.ReactNode }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer : 'Visit our services page for more details.',
      },
    })),
  };
}

export function generateBlogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "url": post.url,
    "image": post.image ? `https://www.austintarotreader.com${post.image}` : undefined,
    "author": {
      "@type": "Person",
      "name": post.authorName,
      "url": "https://www.austintarotreader.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Austin Tarot Reader",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.austintarotreader.com/images/icon.png"
      }
    }
  };
}

export function generateServiceSchema(services: { name: string; description: string; url: string; price: string; priceCurrency: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "offers": {
          "@type": "Offer",
          "price": service.price.replace('$', ''),
          "priceCurrency": service.priceCurrency
        },
        "provider": {
          "@type": "LocalBusiness",
          "name": "Austin Tarot Reader"
        }
      }
    }))
  };
}
