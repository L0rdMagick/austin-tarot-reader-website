import type { Metadata } from "next";
import { Cinzel, Quicksand } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
export const metadata: Metadata = {
  // This new line fixes the metadataBase warning.
  metadataBase: new URL('https://www.austintarotreader.com'),
  title: {
    template: "%s | Austin Tarot Reader",
    default: "Austin Tarot Reader | Intuitive Guidance & Clarity",
  },
  description: "Discover clarity and guidance with Austin's trusted tarot reader. Specializing in personal, event, and couple's readings. Book your session today for insightful and compassionate guidance.",
  keywords: ["tarot reader Austin", "Austin tarot reading", "tarot cards Austin TX", "psychic Austin", "spiritual guidance Austin", "local tarot reader"],
  openGraph: {
    title: "Austin Tarot Reader | Intuitive Guidance & Clarity",
    description: "Discover clarity and guidance with Austin's trusted tarot reader. Specializing in personal, event, and couple's readings.",
    url: "https://www.austintarotreader.com",
    siteName: "Austin Tarot Reader",
    images: [
      {
        url: "/og-image.jpg",
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
    <html lang="en" className="scroll-smooth">
      <body className={twMerge(cinzel.variable, quicksand.variable, 'font-sans bg-background flex flex-col min-h-screen')}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}