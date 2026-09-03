"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SessionPackage {
  id: string;
  category: "love" | "career" | "general";
  title: string;
  duration: string;
  price: number;
  popular?: boolean;
  tagline: string;
  squareUrl: string;
  highlights: string[];
}

const CATEGORIES = [
  { id: "love", name: "💖 Love & Relationships", tagline: "Twin Flames, Soulmates, Heartbreak & Connection" },
  { id: "career", name: "💼 Career & Life Purpose", tagline: "Pivots, Workplace Decisions & Financial Abundance" },
  { id: "general", name: "✨ General / Open Reading", tagline: "Life Crossroads, Spiritual Growth & Deep Clarity" },
];

const PACKAGES: SessionPackage[] = [
  // --- LOVE CATEGORY ---
  {
    id: "love-60",
    category: "love",
    title: "60-Min Deep Love & Relationship Reading",
    duration: "60 Minutes",
    price: 85,
    popular: true,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ",
    tagline: "Comprehensive 15-card spread for romantic connections, twin flames & soulmates",
    highlights: [
      "Partner energy & communication dynamics",
      "Uncover hidden romantic patterns & emotional blocks",
      "6-month relationship trajectory & actionable next steps",
    ],
  },
  {
    id: "love-30",
    category: "love",
    title: "30-Min Focused Love Check",
    duration: "30 Minutes",
    price: 55,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU",
    tagline: "Direct single-spread insight into 1–2 pressing relationship questions",
    highlights: [
      "Quick, sharp clarity on your current romantic situation",
      "Immediate insight into partner intentions & feelings",
      "Actionable guidance for immediate decisions",
    ],
  },

  // --- CAREER CATEGORY ---
  {
    id: "career-60",
    category: "career",
    title: "60-Min Career, Money & Purpose Reading",
    duration: "60 Minutes",
    price: 85,
    popular: true,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/Y35MKZALF3RNQPE6OSOUDG5Q",
    tagline: "Deep strategic spread for career transitions, business decisions & abundance",
    highlights: [
      "Evaluate career pivots, job offers, or business opportunities",
      "Identify limiting beliefs & abundance blockages",
      "Strategic alignment for long-term professional fulfillment",
    ],
  },
  {
    id: "career-30",
    category: "career",
    title: "30-Min Quick Career Check",
    duration: "30 Minutes",
    price: 55,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU",
    tagline: "Focused guidance for immediate work crossroads or salary negotiations",
    highlights: [
      "Quick assessment of upcoming workplace decisions",
      "Uncover unstated dynamics with colleagues or managers",
      "Clear direction on immediate next steps",
    ],
  },

  // --- GENERAL CATEGORY ---
  {
    id: "general-60",
    category: "general",
    title: "60-Min In-Depth Life Path Reading",
    duration: "60 Minutes",
    price: 85,
    popular: true,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT",
    tagline: "Extended 15-card general spread revealing overall energy, past, present & future",
    highlights: [
      "Past, present & 6-month trajectory overview",
      "Shadow work & energetic block identification",
      "Full spread photo & custom action steps included",
    ],
  },
  {
    id: "general-30",
    category: "general",
    title: "30-Min Focused General Reading",
    duration: "30 Minutes",
    price: 55,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU",
    tagline: "Quick intuitive breakdown for 1–2 immediate general questions",
    highlights: [
      "Direct single-spread card breakdown",
      "Immediate action steps & peace of mind",
      "Ideal for overall energy check-ins",
    ],
  },
];

export function MysticBookingEngine() {
  const [selectedFormat, setSelectedFormat] = useState<"in-person" | "virtual">("in-person");
  const [selectedCategory, setSelectedCategory] = useState<"love" | "career" | "general">("love");
  const [selectedPkgId, setSelectedPkgId] = useState<string>("love-60");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeSquareUrl, setActiveSquareUrl] = useState<string>(PACKAGES[0].squareUrl);

  const buttonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredPackages = PACKAGES.filter((p) => p.category === selectedCategory);
  const activePackage = PACKAGES.find((p) => p.id === selectedPkgId) || filteredPackages[0] || PACKAGES[0];

  const handleSelectCategory = (catId: "love" | "career" | "general") => {
    setSelectedCategory(catId);
    const firstPkg = PACKAGES.find((p) => p.category === catId);
    if (firstPkg) {
      setSelectedPkgId(firstPkg.id);
      setActiveSquareUrl(firstPkg.squareUrl);
    }
  };

  const handleSelectPackage = (pkg: SessionPackage) => {
    setSelectedPkgId(pkg.id);
    setActiveSquareUrl(pkg.squareUrl);

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        const el = buttonRefs.current[pkg.id];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const handleOpenSquareModal = (url: string) => {
    setActiveSquareUrl(url);
    setIsModalOpen(true);
  };

  return (
    <section id="booking-engine" className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-sans font-semibold uppercase tracking-widest">
          <span>✦ Live Square Calendar Reservation ✦</span>
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl font-normal tracking-tight text-gold">
          Reserve Your Reading Session
        </h2>
        <p className="font-sans text-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Select your focus area and format below. Direct live synchronization with Daniel&apos;s Squareup calendar for instant confirmation.
        </p>

        {/* 1. FORMAT SELECTOR TOGGLE (In-Person vs Virtual) */}
        <div className="pt-2 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedFormat("in-person")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all duration-200 border ${
              selectedFormat === "in-person"
                ? "bg-gold text-obsidian border-gold shadow-lg shadow-gold/20"
                : "bg-surface/80 text-foreground/80 border-white/10 hover:border-gold/40"
            }`}
          >
            📍 In-Person (Downtown Austin, TX)
          </button>
          <button
            type="button"
            onClick={() => setSelectedFormat("virtual")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all duration-200 border ${
              selectedFormat === "virtual"
                ? "bg-gold text-obsidian border-gold shadow-lg shadow-gold/20"
                : "bg-surface/80 text-foreground/80 border-white/10 hover:border-gold/40"
            }`}
          >
            💻 Virtual (Phone / Video Worldwide)
          </button>
        </div>
      </div>

      {/* 2. TOPIC CATEGORY TABS */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat.id as "love" | "career" | "general")}
              className={`px-5 py-3 rounded-xl font-sans text-sm font-bold transition-all duration-200 border ${
                isActive
                  ? "bg-surface-elevated text-gold border-gold shadow-md shadow-gold/10"
                  : "bg-surface/60 text-foreground/70 border-white/10 hover:border-gold/30 hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* BENTO CARD 1: Session Package Selector (6 cols) */}
        <div className="lg:col-span-6 bg-surface p-6 sm:p-8 rounded-2xl border border-gold/20 shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-editorial text-2xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-gold">01.</span> Choose Duration
              </h3>
              <span className="text-xs font-mono text-gold/80 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                {selectedFormat === "in-person" ? "📍 In-Person Austin" : "💻 Virtual Session"}
              </span>
            </div>

            <div className="space-y-4">
              {filteredPackages.map((pkg) => {
                const isActive = selectedPkgId === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    ref={(el) => { buttonRefs.current[pkg.id] = el; }}
                    className="scroll-mt-24"
                  >
                    <button
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

                      {/* Desktop Highlights List */}
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

                    {/* MOBILE ACCORDION FOLD-OUT: Live Booking Summary directly below selected card on Mobile (< lg) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="lg:hidden mt-3 p-5 bg-obsidian/90 rounded-xl border border-gold/40 space-y-4 shadow-xl overflow-hidden"
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <span className="text-xs font-editorial font-bold text-gold">
                              Live Booking Summary
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Square Active
                            </span>
                          </div>

                          <div className="space-y-2 text-xs font-sans text-foreground/90">
                            <p className="text-foreground/80 leading-relaxed">{pkg.tagline}</p>
                            <div className="flex items-center gap-2 text-gold">
                              <span>✦</span>
                              <span><strong>Real-Time Sync:</strong> Direct Squareup Connection</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>✦</span>
                              <span><strong>Format:</strong> {selectedFormat === "in-person" ? "In-Person (Downtown Austin)" : "Phone / Zoom Video Worldwide"}</span>
                            </div>
                          </div>

                          <div className="pt-2 space-y-2">
                            <a
                              href={pkg.squareUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 text-center"
                            >
                              <span>Book {pkg.duration} (${pkg.price}) on Square</span>
                              <span className="text-base">↗</span>
                            </a>
                            <button
                              type="button"
                              onClick={() => handleOpenSquareModal(pkg.squareUrl)}
                              className="w-full bg-surface-elevated text-gold border border-gold/30 font-bold py-2.5 px-4 rounded-xl text-[11px] font-mono uppercase tracking-wider text-center block"
                            >
                              Preview Square Calendar Overlay ✦
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 text-center text-xs font-sans text-foreground/60">
              💬 Questions? <a href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20booking%20a%20tarot%20reading." className="text-gold hover:underline font-bold">Text Daniel directly at 512-547-7129</a>
            </div>
          </div>
        </div>

        {/* BENTO CARD 2: Custom Native Booking Card (Visible on desktop/larger screens lg:) */}
        <div className="hidden lg:flex lg:col-span-6 bg-surface-elevated p-6 sm:p-8 rounded-2xl border border-gold/30 shadow-2xl flex-col justify-between space-y-6 relative overflow-hidden">
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
                  <span><strong>Format:</strong> {selectedFormat === "in-person" ? "In-Person (Downtown Austin, TX)" : "Virtual (Phone / Video Call)"}</span>
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

      {/* FULLSCREEN / MODAL SQUARE APPOINTMENTS DRAWER */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-24 pb-6 bg-obsidian/90 backdrop-blur-lg overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              className="bg-surface p-4 sm:p-6 rounded-2xl border-2 border-gold/50 max-w-4xl w-full h-[85vh] shadow-2xl flex flex-col relative z-[101]"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-editorial text-lg sm:text-xl font-bold text-gold">
                    Square Appointments: Live Booking
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
