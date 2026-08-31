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
      "Feeling uncertain? My love readings are designed to meet you exactly where you are and illuminate the path forward. We'll explore hidden patterns, clarify your present, and uncover any obstacles to a deeper connection.",
    videoSrc: "/videos/love-tarot-reading-questions.mp4",
    bookingUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/MTY5Q7OG2SPMK6S5AUMAUPUJ",
    buttonText: "Book a Love Reading ($85) ↗",
  },
  {
    id: "career",
    badge: "Specialized Focus",
    title: "Tarot for Career Questions",
    description:
      "At a crossroads in your professional life? Career readings provide intuitive direction on work transitions, financial abundance, business pivots, and making confident, aligned moves.",
    videoSrc: "/videos/tarot-career-reading-questions.mp4",
    bookingUrl: "https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/Y35MKZALF3RNQPE6OSOUDG5Q",
    buttonText: "Book a Career Reading ($85) ↗",
  },
  {
    id: "lifepath",
    badge: "Specialized Focus",
    title: "Tarot for Life Path & Destiny",
    description:
      "Feeling lost or seeking higher purpose? Life path readings light up the road ahead, dissolving fear and shadow blocks so you can walk your true soul path with joy and clarity.",
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
      {/* Animated Slide Content Viewport */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
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

            {/* TOP OVERLAY: Dark Semi-Transparent Backdrop Behind Category Pills & Mobile Title */}
            <div className="absolute top-0 left-0 right-0 p-3 pt-3.5 pb-3.5 bg-black/80 backdrop-blur-md border-b border-white/10 z-10 flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`px-3 py-1 rounded-full font-mono text-[11px] transition-all ${
                      activeSlideIndex === idx
                        ? "bg-gold text-obsidian font-bold shadow-md"
                        : "bg-black/50 text-white/90 hover:text-gold border border-white/20"
                    }`}
                  >
                    {idx + 1}. {slide.id === "love" ? "Love" : slide.id === "career" ? "Career" : "Life Path"}
                  </button>
                ))}
              </div>

              {/* Mobile Title Overlay */}
              <h3 className="md:hidden font-editorial text-lg font-normal text-gold text-center leading-tight drop-shadow-md pt-0.5">
                {currentSlide.title}
              </h3>
            </div>

            {/* BOTTOM OVERLAY: Video Controls & Circular Arrows */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10 flex items-center justify-between gap-2 font-sans">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-semibold backdrop-blur-md ${
                  isPlaying
                    ? "bg-black/70 border-gold/50 text-gold hover:bg-gold/20"
                    : "bg-black/80 border-white/40 text-white hover:bg-white/20"
                }`}
              >
                <span className="text-sm">{isPlaying ? "⏸" : "▶"}</span>
                <span>{isPlaying ? "Pause Rotation" : "Resume Rotation"}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="w-8 h-8 rounded-full border border-gold/40 bg-black/70 text-gold hover:bg-gold hover:text-obsidian flex items-center justify-center text-lg font-bold transition-all shadow-md backdrop-blur-md"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="w-8 h-8 rounded-full border border-gold/40 bg-black/70 text-gold hover:bg-gold hover:text-obsidian flex items-center justify-center text-lg font-bold transition-all shadow-md backdrop-blur-md"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Slide Text & Action Button */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="hidden md:block font-editorial text-3xl sm:text-4xl font-normal text-gold leading-tight">
              {currentSlide.title}
            </h3>
            <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
              {currentSlide.description}
            </p>
            <div className="pt-2 text-center md:text-left">
              <a
                href={currentSlide.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-8 rounded-xl text-base transition-all font-sans shadow-lg shadow-gold/20 transform hover:scale-[1.02]"
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
