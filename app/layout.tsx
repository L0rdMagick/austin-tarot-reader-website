import type { Metadata } from "next";
import { Cinzel, Quicksand } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// DEBUG: Font selection is crucial for the site's feel.
// Cinzel is an elegant, mystical font for headings.
// Quicksand is a clean, approachable font for body text.
// If these don't feel right, Google Fonts is the best place to find alternatives.
const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: '--font-cinzel',
  display: 'swap',
});
const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-quicksand',
  display: 'swap',
});

// DEBUG: This Metadata object is CRITICAL for SEO.
// We are setting a template for the title that can be used on other pages.
// The description is the first thing people see on Google. It needs to be compelling and include keywords.
export const metadata: Metadata = {
  title: {
    template: "%s | Austin Tarot Reader",
    default: "Austin Tarot Reader | Intuitive Guidance & Clarity",
  },
  description: "Discover clarity and guidance with Austin's trusted tarot reader. Specializing in personal, event, and couple's readings. Book your session today for insightful and compassionate guidance.",
  keywords: ["tarot reader Austin", "Austin tarot reading", "tarot cards Austin TX", "psychic Austin", "spiritual guidance Austin", "local tarot reader"],
  openGraph: {
    title: "Austin Tarot Reader | Intuitive Guidance & Clarity",
    description: "Discover clarity and guidance with Austin's trusted tarot reader. Specializing in personal, event, and couple's readings.",
    url: "https://www.austintarotreader.com", // Replace with your actual domain later
    siteName: "Austin Tarot Reader",
    images: [
      {
        url: "/og-image.jpg", // We will create this image later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(cinzel.variable, quicksand.variable, 'font-sans bg-[rgb(var(--background-rgb))]')}>
        {children}
      </body>
    </html>
  );
}