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
  highlights: string[];
}

const PACKAGES: SessionPackage[] = [
  {
    id: "clarity-30",
    title: "30-Min Clarity Reading",
    duration: "30 Minutes",
    price: 75,
    tagline: "Focused intuitive answers for 1–2 pressing life questions",
    highlights: [
      "Direct single-spread card breakdown",
      "Immediate action steps",
      "Audio recording included",
    ],
  },
  {
    id: "deep-soul-60",
    title: "60-Min Deep Soul Roadmap",
    duration: "60 Minutes",
    price: 135,
    popular: true,
    tagline: "Comprehensive multi-spread deep dive into your life's path",
    highlights: [
      "Past, present & 6-month trajectory",
      "Shadow work & block identification",
      "Live Q&A + HD Video/Audio recording",
    ],
  },
  {
    id: "couples-90",
    title: "90-Min Master Couples & Destiny",
    duration: "90 Minutes",
    price: 195,
    tagline: "Deep alignment for romantic partners or major life transitions",
    highlights: [
      "Dual-person energy synthesis",
      "Karmic connections & obstacles",
      "Personalized integration guide",
    ],
  },
];

const INTENT_CHIPS = [
  "❤️ Love & Relationships",
  "💼 Career & Purpose",
  "✨ Shadow Work & Blockages",
  "💰 Financial Abundance",
  "🏡 Home & Major Decisions",
  "🔮 General Spiritual Roadmap",
];

const AVAILABLE_SLOTS = [
  { time: "10:00 AM CST", count: "2 slots left" },
  { time: "1:30 PM CST", count: "1 slot left" },
  { time: "4:00 PM CST", count: "3 slots left" },
  { time: "7:00 PM CST", count: "1 slot left (Popular)" },
];

export function MysticBookingEngine() {
  const [selectedPkg, setSelectedPkg] = useState<string>("deep-soul-60");
  const [selectedIntent, setSelectedIntent] = useState<string>("❤️ Love & Relationships");
  const [selectedSlot, setSelectedSlot] = useState<string>("7:00 PM CST");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const activePackage = PACKAGES.find((p) => p.id === selectedPkg) || PACKAGES[1];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="booking-engine" className="w-full max-w-6xl mx-auto px-4 py-16 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono font-semibold uppercase tracking-widest">
          <span>✦ Sacred Session Reservation ✦</span>
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl font-normal tracking-tight text-gold">
          The Mystic Booking Engine
        </h2>
        <p className="font-sans text-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Reserve your 1-on-1 reading with Daniel. Select your reading depth, choose your intention, and lock in your session slot seamlessly.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* BENTO CARD 1: Package Selection (7 cols) */}
        <div className="lg:col-span-7 bg-surface p-6 sm:p-8 rounded-2xl border border-gold/20 shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-editorial text-2xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-gold">01.</span> Select Your Session Depth
              </h3>
              <span className="text-xs font-mono text-gold/80 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                1-on-1 via Zoom or Phone
              </span>
            </div>

            <div className="space-y-4">
              {PACKAGES.map((pkg) => {
                const isActive = selectedPkg === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkg(pkg.id)}
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
                      <div className="text-right sm:text-right shrink-0">
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
                        className="mt-4 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-foreground/90"
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

          {/* Intention Quick Chips */}
          <div className="pt-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-gold/90 mb-3">
              Focused Intent / Topic Choice:
            </label>
            <div className="flex flex-wrap gap-2">
              {INTENT_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setSelectedIntent(chip)}
                  className={`text-xs font-sans px-3.5 py-2 rounded-lg border transition-all ${
                    selectedIntent === chip
                      ? "bg-gold text-obsidian font-bold border-gold shadow-md"
                      : "bg-surface-elevated/60 text-foreground/80 border-white/10 hover:border-gold/30"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BENTO CARD 2: Slot & Confirmation Summary (5 cols) */}
        <div className="lg:col-span-5 bg-surface-elevated p-6 sm:p-8 rounded-2xl border border-gold/30 shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <h3 className="font-editorial text-2xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-gold">02.</span> Available Live Slots
              </h3>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Calendar
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <label className="block text-xs font-mono uppercase tracking-wider text-foreground/70">
                Select Preferred Time (CST):
              </label>
              {AVAILABLE_SLOTS.map((slot) => {
                const isSelected = selectedSlot === slot.time;
                return (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedSlot(slot.time)}
                    className={`w-full p-3.5 rounded-xl border flex items-center justify-between font-mono text-sm transition-all ${
                      isSelected
                        ? "bg-gold/20 border-gold text-gold font-bold shadow-md shadow-gold/10"
                        : "bg-surface/60 border-white/10 text-foreground/80 hover:border-gold/30"
                    }`}
                  >
                    <span>{slot.time}</span>
                    <span className="text-xs font-sans text-gold/80 bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/20">
                      {slot.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Session Summary Box */}
            <div className="bg-obsidian/70 p-4 rounded-xl border border-gold/20 space-y-2 text-xs font-sans">
              <div className="flex justify-between text-foreground/70">
                <span>Selected Package:</span>
                <span className="font-bold text-gold">{activePackage.title}</span>
              </div>
              <div className="flex justify-between text-foreground/70">
                <span>Primary Intent:</span>
                <span className="text-foreground">{selectedIntent}</span>
              </div>
              <div className="flex justify-between text-foreground/70">
                <span>Time Slot:</span>
                <span className="font-mono text-gold">{selectedSlot}</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between text-sm font-bold text-foreground">
                <span>Total Investment:</span>
                <span className="font-mono text-gold text-base">${activePackage.price}</span>
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-[1.01] shadow-xl shadow-gold/20 flex items-center justify-center gap-2 group"
            >
              <span>Lock In Session Slot</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="text-center font-sans text-[11px] text-foreground/50 mt-3">
              🔒 100% Confidential • Audio/Video Recording Included
            </p>
          </div>
        </div>

      </div>

      {/* CONFIRMATION / CHECKOUT MODAL DRAWER */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-surface p-6 sm:p-8 rounded-2xl border border-gold/40 max-w-lg w-full shadow-2xl space-y-6 relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-foreground/50 hover:text-gold text-lg"
              >
                ✕
              </button>

              {!isSubmitted ? (
                <>
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-gold uppercase tracking-widest">
                      Finalize Reservation
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-foreground mt-1">
                      {activePackage.title} (${activePackage.price})
                    </h3>
                    <p className="font-sans text-xs text-foreground/70 mt-1">
                      Slot: <span className="text-gold font-mono">{selectedSlot}</span> • Topic: {selectedIntent}
                    </p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4 font-sans text-sm">
                    <div>
                      <label className="block text-xs text-foreground/80 mb-1 font-bold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Lin"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-foreground/80 mb-1 font-bold">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="maya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-foreground/80 mb-1 font-bold">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        placeholder="(512) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-foreground/80 mb-1 font-bold">Specific Question / Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Share any background details or questions for Daniel..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-6 rounded-xl text-base transition-all shadow-lg shadow-gold/20"
                    >
                      Confirm Session Booking →
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-full border border-gold flex items-center justify-center mx-auto text-2xl text-gold">
                    ✦
                  </div>
                  <h3 className="font-editorial text-3xl font-bold text-gold">
                    Session Reserved!
                  </h3>
                  <p className="font-sans text-sm text-foreground/80 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-foreground">{formData.name}</span>. A confirmation email and calendar link for <span className="text-gold font-mono">{selectedSlot}</span> has been sent to <span className="underline">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSubmitted(false);
                    }}
                    className="bg-surface-elevated border border-gold/30 hover:border-gold text-gold font-bold py-2.5 px-6 rounded-xl text-xs font-mono uppercase tracking-wider"
                  >
                    Return to Site
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
