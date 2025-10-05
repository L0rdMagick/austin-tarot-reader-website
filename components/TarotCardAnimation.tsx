'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Configuration ---
// CHANGED: Added the `/images/` prefix to correctly point to your files.
const cardImages = [
  { src: '/images/19-TheSun.jpg', alt: 'The Sun Tarot Card' },
  { src: '/images/17-TheStar.jpg', alt: 'The Star Tarot Card' },
  { src: '/images/01-TheMagician.jpg', alt: 'The Magician Tarot Card' },
];

// Animation variants for the container to orchestrate the children's animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

// Animation variants for each individual card
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function TarotCardAnimation() {
  return (
    <motion.div
      // Responsive margin for mobile vs. desktop
      className="relative h-64 w-full flex items-center justify-center -mt-8 md:-mt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cardImages.map((card, index) => (
        <motion.div
          key={card.src}
          // Responsive card size for mobile vs. desktop
          className="absolute w-32 h-56 md:w-36 md:h-60 rounded-lg shadow-2xl shadow-black/50 overflow-hidden border-2 border-primary/50"
          style={{
            rotate: `${(index - 1) * 15}deg`,
            translateX: `${(index - 1) * 50}px`,
            zIndex: index === 1 ? 10 : 1,
          }}
          variants={cardVariants}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority={index < 2}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}