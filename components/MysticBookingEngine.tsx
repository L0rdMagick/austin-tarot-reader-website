"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SessionPackage {
  id: string;
  category: "love" | "career" | "general";
  durationMinutes: 30 | 60;
  title: string;
  durationText: string;
  price: number;
  popular?: boolean;
  tagline: string;
  squareUrl: string;
  highlights: string[];
}

const CATEGORIES = [
  { id: "love", name: "💖 Love & Relationships" },
  { id: "career", name: "💼 Career & Life Purpose" },
  { id: "general", name: "✨ General / Open Reading" },
];

const PACKAGES: SessionPackage[] = [
  // --- LOVE CATEGORY ---
  {
    id: "love-60",
    category: "love",
    durationMinutes: 60,
    title: "60-Min Deep Love & Relationship Reading",
    durationText: "60 Minutes",
    price: 85,
    popular: true,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ",
    tagline: "A deep esoteric consultation reading the signs and omens of your romantic journey, soulmate dynamics, and twin flame connection.",
    highlights: [
      "Format: Available In-Person in Downtown Austin, TX, or Worldwide via Phone & Zoom Video Call",
      "Hidden Intentions & Influences: Reveal unspoken partner feelings, unstated motives, and third-party energetic influences",
      "Past to Present: Understand how past heartbreaks, unresolved karmic loops, and emotional contracts shape your present state",
      "Obstacles & Subconscious Desires: Uncover hidden romantic blocks, fears of vulnerability, and true heart desires",
      "1-Year Romantic Outlook & Outcomes: Future timelines, likely romantic outcomes, and next steps for soul evolution",
    ],
  },
  {
    id: "love-30",
    category: "love",
    durationMinutes: 30,
    title: "30-Min Focused Love Check",
    durationText: "30 Minutes",
    price: 55,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU",
    tagline: "Direct intuitive single-spread consultation providing sharp clarity for 1 or 2 pressing relationship questions or romantic crossroads.",
    highlights: [
      "Format: Available In-Person in Downtown Austin, TX, or Worldwide via Phone & Zoom Video Call",
      "Partner Intentions & Dynamics: Immediate insight into partner motives, true feelings, and emotional masks",
      "Obstacles & Next Steps: Identify current romantic blockages and concrete spiritual next steps for your connection",
      "Likely Near-Term Outcomes: Understand immediate future trajectories and upcoming romantic developments",
    ],
  },

  // --- CAREER CATEGORY ---
  {
    id: "career-60",
    category: "career",
    durationMinutes: 60,
    title: "60-Min Career, Money & Purpose Reading",
    durationText: "60 Minutes",
    price: 85,
    popular: true,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/Y35MKZALF3RNQPE6OSOUDG5Q",
    tagline: "A powerful intuitive sanctuary evaluating workplace crossroads, colleague intentions, executive alignment, and financial abundance.",
    highlights: [
      "Format: Available In-Person in Downtown Austin, TX, or Worldwide via Phone & Zoom Video Call",
      "Unspoken Intentions & Leadership Influences: Uncover hidden partner motives, executive negotiations, and team dynamics",
      "Past Career Cycles & Abundance Blocks: How past work lessons shape your present, and dissolve subconscious money blocks",
      "Workplace Obstacles & Hidden Desires: Identify professional stagnation causes and align with your true vocational calling",
      "1-Year Career Outlook & Financial Outcomes: Future timelines for promotions, ventures, and next steps for financial mastery",
    ],
  },
  {
    id: "career-30",
    category: "career",
    durationMinutes: 30,
    title: "30-Min Quick Career Check",
    durationText: "30 Minutes",
    price: 55,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU",
    tagline: "Focused intuitive guidance for urgent workplace decisions, salary discussions, job offers, or immediate business crossroads.",
    highlights: [
      "Format: Available In-Person in Downtown Austin, TX, or Worldwide via Phone & Zoom Video Call",
      "Immediate Decision Clarity: Uncover unstated workplace motives and evaluate upcoming professional choices",
      "Obstacles & Aligned Actions: Identify professional blockages and immediate next steps for confidence and worth",
      "Likely Career Outcomes: Clear direction on near-term financial and professional trajectories",
    ],
  },

  // --- GENERAL CATEGORY ---
  {
    id: "general-60",
    category: "general",
    durationMinutes: 60,
    title: "60-Min In-Depth Life Path Reading",
    durationText: "60 Minutes",
    price: 85,
    popular: true,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/BF72ZKQM74NPNZ3FTYZLARXT",
    tagline: "An all-encompassing oracle consultation reading the signs sent by the universe to illuminate your overall destiny and spiritual growth.",
    highlights: [
      "Format: Available In-Person in Downtown Austin, TX, or Worldwide via Phone & Zoom Video Call",
      "Universal Signs & Hidden Desires: Decode pressing messages the universe is sending right now for your soul path",
      "Past to Present Echoes: Understand how past karmic contracts and experiences shape your current life state",
      "Obstacles & Shadow Work: Uncover unseen energetic blocks, subconscious fears, and self-limiting patterns",
      "1-Year Destiny Outlook & Likely Outcomes: Full 12-month future trajectory, outcome probabilities, and soul steps",
    ],
  },
  {
    id: "general-30",
    category: "general",
    durationMinutes: 30,
    title: "30-Min Focused General Reading",
    durationText: "30 Minutes",
    price: 55,
    squareUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/QYUIGU2PGLAKP5QCBA22BIKU",
    tagline: "Quick intuitive single-spread breakdown decoding universal signs for 1 or 2 pressing life questions.",
    highlights: [
      "Format: Available In-Person in Downtown Austin, TX, or Worldwide via Phone & Zoom Video Call",
      "Universal Message Breakdown: Direct insight into the immediate signs surrounding your life right now",
      "Obstacles & Immediate Next Steps: Dissolve confusion, identify current blocks, and gain emotional peace",
      "Likely Near-Term Trajectory: Reassurance and clarity on upcoming life developments",
    ],
  },
];

export function MysticBookingEngine() {
  const [selectedCategory, setSelectedCategory] = useState<"love" | "career" | "general">("love");
  const [selectedDuration, setSelectedDuration] = useState<30 | 60>(60);

  // Find exact matching package based on category + duration
  const activePackage =
    PACKAGES.find((p) => p.category === selectedCategory && p.durationMinutes === selectedDuration) ||
    PACKAGES[0];

  return (
    <section id="booking-engine" className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-sans font-semibold uppercase tracking-widest">
          <span>✦ Reserve Your Consultation ✦</span>
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl font-normal tracking-tight text-gold">
          Reserve Your Reading Session
        </h2>
        <p className="font-sans text-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Select your topic and duration below for instant calendar appointment confirmation.
        </p>
      </div>

      {/* 1. TOPIC CATEGORY FILTERS */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as "love" | "career" | "general")}
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

        {/* 2. DURATION FILTERS (Half Hour vs Full Hour) */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => setSelectedDuration(30)}
            className={`px-6 py-2.5 rounded-xl text-xs font-sans font-bold transition-all duration-200 border ${
              selectedDuration === 30
                ? "bg-gold/20 text-gold border-gold shadow-sm"
                : "bg-surface/40 text-foreground/70 border-white/10 hover:border-gold/30"
            }`}
          >
            ⏱️ Half Hour (30 Min • $55)
          </button>
          <button
            type="button"
            onClick={() => setSelectedDuration(60)}
            className={`px-6 py-2.5 rounded-xl text-xs font-sans font-bold transition-all duration-200 border ${
              selectedDuration === 60
                ? "bg-gold/20 text-gold border-gold shadow-sm"
                : "bg-surface/40 text-foreground/70 border-white/10 hover:border-gold/30"
            }`}
          >
            ⌛ Full Hour (60 Min • $85)
          </button>
        </div>
      </div>

      {/* 3. CONSOLIDATED SINGLE PRODUCT SHOWCASE CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCategory}-${selectedDuration}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="bg-surface-elevated p-6 sm:p-10 rounded-2xl border-2 border-gold/40 shadow-2xl space-y-6 relative overflow-hidden text-left"
        >
          {/* Card Header & Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono text-gold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/30 font-semibold">
                  Selected Session
                </span>
                {activePackage.popular && (
                  <span className="text-[10px] font-mono text-obsidian bg-gold font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-foreground">
                {activePackage.title}
              </h3>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-gold tabular-nums">
                ${activePackage.price}
              </span>
              <span className="block font-mono text-xs text-foreground/60">
                {activePackage.durationText}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed">
            {activePackage.tagline}
          </p>

          {/* Feature Highlights Checklist */}
          <div className="bg-obsidian/60 p-5 sm:p-6 rounded-xl border border-gold/20 space-y-3 text-xs sm:text-sm font-sans text-foreground/90">
            {activePackage.highlights.map((item, idx) => {
              const [title, desc] = item.split(": ");
              return (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-gold shrink-0 mt-0.5">✦</span>
                  <div>
                    {desc ? (
                      <>
                        <strong className="text-gold">{title}:</strong> {desc}
                      </>
                    ) : (
                      <span>{item}</span>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="flex items-center gap-2 text-emerald-400 pt-2 border-t border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span><strong>Confidentiality:</strong> 100% Private, Compassionate & Sacred Consultation Space</span>
            </div>
          </div>

          {/* Direct CTA Action Button */}
          <div className="pt-2">
            <a
              href={activePackage.squareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-[1.01] shadow-xl shadow-gold/20 flex items-center justify-center gap-2 text-center font-sans"
            >
              <span>Book {activePackage.title} (${activePackage.price})</span>
              <span className="text-lg">↗</span>
            </a>
          </div>

          {/* Direct SMS Help Footer */}
          <div className="pt-2 text-center text-xs font-sans text-foreground/60 border-t border-white/10">
            💬 Questions? <a href="sms:15125477129?body=Hi%20Daniel,%20I'd%20like%20to%20ask%20about%20booking%20a%20tarot%20reading." className="text-gold hover:underline font-bold">Text Daniel directly at 512-547-7129</a>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
