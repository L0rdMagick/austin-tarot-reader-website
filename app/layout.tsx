import type { Metadata } from "next";
import { Cinzel, Quicksand } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from "react";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.austintarotreader.com'),
  title: {
    template: "%s | Austin Tarot Reader",
    default: "Austin Tarot Reader | Intuitive Guidance & Clarity",
  },
  description: "Discover clarity and guidance with Austin's trusted tarot reader. Specializing in personal, event, and couple's readings. Book your session today for insightful and compassionate guidance.",
  keywords: ["tarot reader Austin", "Austin tarot reading", "tarot cards Austin TX", "psychic Austin", "spiritual guidance Austin", "local tarot reader"],
  
  // CHANGED: Upgraded the icons object to a comprehensive, professional suite.
  icons: {
    icon: [ // Providing an array for multiple sizes
      { url: '/images/favicon.ico', type: 'image/x-icon' },
      { url: '/images/icon.png', type: 'image/png' },
      { url: '/images/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      // Assuming your icon.png is 32x32. If not, you might need a separate favicon-32x32.png
    ],
    apple: '/images/apple-icon.png', // For Apple devices
    other: [ // For other platforms like Android
      {
        rel: 'android-chrome-192x192',
        url: '/images/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/images/android-chrome-512x512.png',
      },
    ],
  },

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
}: {
  children: React.ReactNode;
}) {
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