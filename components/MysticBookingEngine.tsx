"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SessionPackage {
  id: string;
  title: string;
  duration: string;
  price: number;
  popular?: boolean;
  tagline: string;
  squareUrl: string;
  highlights: string[];
}

const PACKAGES: SessionPackage[] = [
  {
    id: "focused-30",
    title: "30-Min Focused Reading",
    duration: "30 Minutes",
    price: 55,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU",
    tagline: "Quick, sharp intuitive insight for 1–2 pressing life questions",
    highlights: [
      "Direct single-spread card breakdown",
      "Immediate action steps & clarity",
      "In-Person Austin or Phone/Video worldwide",
    ],
  },
  {
    id: "in-depth-60",
    title: "60-Min In-Depth Reading",
    duration: "60 Minutes",
    price: 85,
    popular: true,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT",
    tagline: "Comprehensive 15-card spread covering Love, Career, or Life Path",
    highlights: [
      "Past, present & 6-month trajectory",
      "Shadow work & block identification",
      "Full spread photo & custom action steps included",
    ],
  },
  {
    id: "coaching-60",
    title: "60-Min Intuitive Coaching",
    duration: "60 Minutes",
    price: 85,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/SK53OJ3ZTPXWAEZOF3SK4P4A",
    tagline: "Combines intuitive tarot insight with structured action coaching",
    highlights: [
      "Tarot spread + actionable goal mapping",
      "Break through emotional or career blocks",
      "Personalized integration steps",
    ],
  },
  {
    id: "love-60",
    title: "60-Min Love & Relationships",
    duration: "60 Minutes",
    price: 85,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ",
    tagline: "Specialized deep dive for romantic connections & soulmates",
    highlights: [
      "Partner energy & communication dynamics",
      "Uncover hidden relationship patterns",
      "Clear guidance for next steps",
    ],
  },
];

const BASE_SQUARE_URL = "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services";

export function MysticBookingEngine() {
  const [selectedPkgId, setSelectedPkgId] = useState<string>("in-depth-60");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeSquareUrl, setActiveSquareUrl] = useState<string>(PACKAGES[1].squareUrl);

  const activePackage = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[1];

  const handleSelectPackage = (pkg: SessionPackage) => {
    setSelectedPkgId(pkg.id);
    setActiveSquareUrl(pkg.squareUrl);
  };

  const handleOpenSquareModal = (url: string) => {
    setActiveSquareUrl(url);
    setIsModalOpen(true);
  };

  return (
    <section id="booking-engine" className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono font-semibold uppercase tracking-widest">
          <span>✦ Live Square Calendar Reservation ✦</span>
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl font-normal tracking-tight text-gold">
          Reserve Your Session
        </h2>
        <p className="font-sans text-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Select your reading depth below. Synchronized live with Daniel's official Squareup calendar for instant appointment confirmation.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* BENTO CARD 1: Session Package Selector (6 cols) */}
        <div className="lg:col-span-6 bg-surface p-6 sm:p-8 rounded-2xl border border-gold/20 shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-editorial text-2xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-gold">01.</span> Choose Session Type
              </h3>
              <span className="text-xs font-mono text-gold/80 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                In-Person or Virtual
              </span>
            </div>

            <div className="space-y-4">
              {PACKAGES.map((pkg) => {
                const isActive = selectedPkgId === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => handleSelectPackage(pkg)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative ${
                      isActive
                        ? "bg-surface-elevated border-gold shadow-lg shadow-gold/10 scale-[1.01]"
                        : "bg-surface/50 border-white/10 hover:border-gold/40 hover:bg-surface-elevated/40"
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-4 bg-gold text-obsidian font-mono text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                        Most Popular
                      </span>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-editorial text-xl font-bold text-foreground">
                          {pkg.title}
                        </h4>
                        <p className="font-sans text-xs text-foreground/70 mt-1">
                          {pkg.tagline}
                        </p>
                      </div>
                      <div className="text-left sm:text-right shrink-0">
                        <span className="font-mono text-2xl font-bold text-gold tabular-nums">
                          ${pkg.price}
                        </span>
                        <span className="block font-mono text-[11px] text-foreground/50">
                          {pkg.duration}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-xs font-sans text-foreground/90"
                      >
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-gold/90">
                            <span className="text-gold">✦</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 text-center text-xs font-sans text-foreground/60">
            💬 Questions? <a href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20booking%20a%20tarot%20reading." className="text-gold hover:underline font-bold">Text Daniel directly at 512-547-7129</a>
          </div>
        </div>

        {/* BENTO CARD 2: Custom Native Booking Card (6 cols) */}
        <div className="lg:col-span-6 bg-surface-elevated p-6 sm:p-8 rounded-2xl border border-gold/30 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-editorial text-2xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-gold">02.</span> Live Booking Summary
              </h3>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Square Calendar Active
              </span>
            </div>

            {/* Native Session Card Showcase */}
            <div className="bg-obsidian/80 p-6 rounded-2xl border border-gold/30 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-gold uppercase tracking-widest block">
                    Selected Experience
                  </span>
                  <h4 className="font-editorial text-2xl font-bold text-foreground">
                    {activePackage.title}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="font-mono text-3xl font-bold text-gold tabular-nums">
                    ${activePackage.price}
                  </span>
                  <span className="block text-xs font-mono text-foreground/60">
                    {activePackage.duration}
                  </span>
                </div>
              </div>

              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                {activePackage.tagline}
              </p>

              {/* Service Highlights Checklist */}
              <div className="space-y-2 text-xs font-sans text-foreground/90 border-t border-b border-white/10 py-3">
                <div className="flex items-center gap-2 text-gold">
                  <span>✦</span>
                  <span><strong>Real-Time Sync:</strong> Direct connection to Squareup Calendar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✦</span>
                  <span><strong>Location:</strong> In-Person (Austin, TX) or Virtual (Phone/Video)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✦</span>
                  <span><strong>Included:</strong> Full Spread Photo + Custom Integration Blueprint</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✦</span>
                  <span><strong>Confidentiality:</strong> 100% Private, Compassionate Guidance</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-gold/80">
                <span className="bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">⚡ Instant Confirmation</span>
                <span className="bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">🔒 Secure Square Checkout</span>
              </div>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={activePackage.squareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-[1.01] shadow-xl shadow-gold/20 flex items-center justify-center gap-2 text-center"
            >
              <span>Book {activePackage.title} (${activePackage.price}) on Square</span>
              <span className="text-lg">↗</span>
            </a>

            <button
              type="button"
              onClick={() => handleOpenSquareModal(activePackage.squareUrl)}
              className="w-full bg-surface/80 hover:bg-surface border border-gold/30 text-gold font-bold py-2.5 px-6 rounded-xl text-xs font-mono uppercase tracking-wider text-center block transition-colors"
            >
              Preview Live Square Calendar Overlay ✦
            </button>
          </div>
        </div>

      </div>

      {/* FULLSCREEN / MODAL SQUARE APPOINTMENTS DRAWER WITH UN-OVERLAPPED CLOSE BUTTON */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-24 pb-6 bg-obsidian/90 backdrop-blur-lg overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              className="bg-surface p-4 sm:p-6 rounded-2xl border-2 border-gold/50 max-w-4xl w-full h-[85vh] shadow-2xl flex flex-col relative z-[101]"
            >
              {/* Modal Top Header Bar with High-Visibility Close Pill */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-editorial text-lg sm:text-xl font-bold text-gold">
                    Square Appointments — Live Booking
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gold text-obsidian font-bold px-4 py-2 rounded-xl text-xs font-mono tracking-wider shadow-lg hover:bg-gold-light transition-all flex items-center gap-1.5 border border-gold"
                >
                  <span>Close Window</span>
                  <span className="text-sm font-bold">✕</span>
                </button>
              </div>

              {/* Full Interactive iFrame Container */}
              <div className="flex-grow w-full rounded-xl overflow-hidden bg-white border border-white/20">
                <iframe
                  src={activeSquareUrl}
                  title="Full Square Appointments Booking"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
