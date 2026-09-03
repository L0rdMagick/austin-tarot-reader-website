"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FocusSlide {
  id: string;
  badge: string;
  title: string;
  description: string;
  videoSrc: string;
  bookingUrl: string;
  buttonText: string;
}

const SLIDES: FocusSlide[] = [
  {
    id: "love",
    badge: "Specialized Focus",
    title: "Tarot for Love & Relationships",
    description:
      "Uncover the unseen spiritual threads of your romantic path. The cards act as sacred mirrors, revealing partner motivations, dissolving blocks, and illuminating your 1-year romantic outlook.",
    videoSrc: "/videos/love-tarot-reading-questions.mp4",
    bookingUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ",
    buttonText: "Book a Love Reading ($85) ↗",
  },
  {
    id: "career",
    badge: "Specialized Focus",
    title: "Tarot for Career Questions",
    description:
      "At a professional crossroads? Combine analytical perception with esoteric intuition to evaluate business shifts, uncover colleague intentions, dissolve blocks, and navigate future career outcomes.",
    videoSrc: "/videos/tarot-career-reading-questions.mp4",
    bookingUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/Y35MKZALF3RNQPE6OSOUDG5Q",
    buttonText: "Book a Career Reading ($85) ↗",
  },
  {
    id: "lifepath",
    badge: "Specialized Focus",
    title: "Tarot for Life Path & Destiny",
    description:
      "Decode universal messages and signs meant for your soul. Understand how your past informs the present, dissolve karmic blocks, and step into your true destiny with unshakeable spiritual clarity.",
    videoSrc: "/videos/tarot-life-path-questions.mp4",
    bookingUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/BF72ZKQM74NPNZ3FTYZLARXT",
    buttonText: "Book a Life Path Reading ($85) ↗",
  },
];

export function SpecializedFocusCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-rotate every 5 seconds if isPlaying is true
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const currentSlide = SLIDES[activeSlideIndex];

  return (
    <section className="bg-surface p-6 sm:p-10 md:p-12 rounded-2xl border border-gold/20 shadow-2xl relative overflow-hidden">
      {/* MAGICKAL SCRYING GLASS DISSOLVE TRANSITION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
        >
          {/* Vertical 9:16 Video Player Container with Reverted Overlays */}
          <div className="w-full max-w-xs mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-2xl shadow-black/60 border-2 border-gold/40 bg-obsidian relative group">
            <video
              key={currentSlide.videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              title={`${currentSlide.title} demonstration video`}
            >
              <source src={currentSlide.videoSrc} type="video/mp4" />
              Your browser does not support video playback.
            </video>

            {/* TOP OVERLAY: Dark Semi-Transparent Backdrop Behind Category Pills */}
            <div className="absolute top-0 left-0 right-0 p-3 pt-3.5 pb-3.5 bg-black/55 backdrop-blur-md border-b border-white/10 z-10 flex items-center justify-center rounded-t-[10px]">
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`px-3 py-1 rounded-full font-mono text-[11px] transition-all ${
                      activeSlideIndex === idx
                        ? "bg-gold text-obsidian font-bold shadow-md"
                        : "bg-black/40 text-white/90 hover:text-gold border border-white/20"
                    }`}
                  >
                    {idx + 1}. {slide.id === "love" ? "Love" : slide.id === "career" ? "Career" : "Life Path"}
                  </button>
                ))}
              </div>
            </div>

            {/* BOTTOM OVERLAY: Left Arrow, Centered Pause/Resume, Right Arrow */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 via-black/35 to-transparent z-10 flex items-center justify-between gap-2 font-sans rounded-b-[10px]">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-8 h-8 shrink-0 rounded-full border border-gold/40 bg-black/55 text-gold hover:bg-gold hover:text-obsidian flex items-center justify-center text-2xl font-bold leading-none transition-all shadow-md backdrop-blur-md select-none"
              >
                <span className="relative -top-[1px] -left-[0.5px]">‹</span>
              </button>

              {/* Centered Pause/Resume Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3 py-1.5 rounded-lg border transition-all flex items-center justify-center gap-1.5 text-xs font-semibold backdrop-blur-md mx-auto ${
                  isPlaying
                    ? "bg-black/55 border-gold/50 text-gold hover:bg-gold/20"
                    : "bg-black/55 border-white/40 text-white hover:bg-white/20"
                }`}
              >
                <span className="text-sm">{isPlaying ? "⏸" : "▶"}</span>
                <span>{isPlaying ? "Pause Rotation" : "Resume Rotation"}</span>
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-8 h-8 shrink-0 rounded-full border border-gold/40 bg-black/55 text-gold hover:bg-gold hover:text-obsidian flex items-center justify-center text-2xl font-bold leading-none transition-all shadow-md backdrop-blur-md select-none"
              >
                <span className="relative -top-[1px] -right-[0.5px]">›</span>
              </button>
            </div>
          </div>

          {/* Clean Flexible Text Stack with Zero Overlapping */}
          <div className="text-center md:text-left space-y-4 sm:space-y-5 flex flex-col justify-center py-2">
            <span className="inline-block text-gold uppercase tracking-widest text-xs font-mono font-semibold">
              {currentSlide.badge}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-normal text-gold leading-snug">
              {currentSlide.title}
            </h3>
            <p className="font-sans text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
              {currentSlide.description}
            </p>
            <div className="pt-2 text-center md:text-left">
              <a
                href={currentSlide.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-base transition-all font-sans shadow-lg shadow-gold/20 transform hover:scale-[1.02] active:scale-95"
              >
                {currentSlide.buttonText}
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar Indicator */}
      {isPlaying && (
        <motion.div
          key={`bar-${activeSlideIndex}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "linear" }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gold origin-left"
        />
      )}
    </section>
  );
}
