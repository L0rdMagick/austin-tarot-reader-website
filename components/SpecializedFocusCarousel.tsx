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
      "Uncover the unseen spiritual threads of your romantic path. The cards act as mirrors, revealing hidden partner motivations, dissolving emotional obstacles, and illuminating your 1-year romantic outlook.",
    videoSrc: "/videos/love-tarot-reading-questions.mp4",
    bookingUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ",
    buttonText: "Book a Love Reading ($85) ↗",
  },
  {
    id: "career",
    badge: "Specialized Focus",
    title: "Tarot for Career Questions",
    description:
      "At a professional crossroads? Combine analytical perception with esoteric intuition to evaluate business shifts, uncover colleague intentions, dissolve abundance blocks, and navigate future outcomes.",
    videoSrc: "/videos/tarot-career-reading-questions.mp4",
    bookingUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/Y35MKZALF3RNQPE6OSOUDG5Q",
    buttonText: "Book a Career Reading ($85) ↗",
  },
  {
    id: "lifepath",
    badge: "Specialized Focus",
    title: "Tarot for Life Path & Destiny",
    description:
      "Decode universal messages and signs meant for your soul. Understand how your past informs the present, dissolve karmic blocks, and step into your true destiny with unshakeable clarity.",
    videoSrc: "/videos/tarot-life-path-questions.mp4",
    bookingUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT",
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
      {/* Animated Slide Content Viewport - PURE FADE ANIMATION WITHOUT SLIDE MOTION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center"
        >
          {/* Vertical 9:16 Video Player Container */}
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

            {/* Subtle Gradient Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="space-y-4 text-left flex flex-col justify-center">
            <span className="text-gold uppercase tracking-widest text-xs font-mono font-semibold">
              {currentSlide.badge}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-foreground">
              {currentSlide.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed">
              {currentSlide.description}
            </p>
            <div className="pt-2">
              <a
                href={currentSlide.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-light text-obsidian font-bold py-3 px-6 rounded-xl text-sm transition-all duration-300 shadow-md active:scale-95"
              >
                {currentSlide.buttonText}
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Controls */}
      <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlideIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeSlideIndex ? "w-8 bg-gold" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-surface-elevated text-gold border border-white/10 text-xs font-mono hover:bg-surface-overlay transition-colors"
          >
            {isPlaying ? "Pause ⏸" : "Play ▶"}
          </button>

          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-surface-elevated text-gold border border-white/10 hover:bg-surface-overlay transition-colors"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-surface-elevated text-gold border border-white/10 hover:bg-surface-overlay transition-colors"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
