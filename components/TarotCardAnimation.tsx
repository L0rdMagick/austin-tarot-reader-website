'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Configuration ---
// DEBUG: Replace these with the actual filenames of your tarot card images.
// The `alt` text is important for SEO and accessibility.
const cardImages = [
  { src: '/images/the-sun.png', alt: 'The Sun Tarot Card' },
  { src: '/images/the-star.png', alt: 'The Star Tarot Card' },
  { src: '/images/the-magician.png', alt: 'The Magician Tarot Card' },
];

// Animation variants for the container to orchestrate the children's animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Each card will animate 0.3s after the previous one
      delayChildren: 0.5,   // Wait 0.5s before starting the animation
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
      className="relative h-64 w-full flex items-center justify-center -mt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cardImages.map((card, index) => (
        <motion.div
          key={card.src}
          className="absolute w-36 h-60 rounded-lg shadow-2xl shadow-black/50 overflow-hidden border-2 border-primary/50"
          style={{
            // Arrange cards in a fan shape. Adjust rotation and position.
            rotate: `${(index - 1) * 15}deg`,
            translateX: `${(index - 1) * 60}px`,
            zIndex: index === 1 ? 10 : 1, // Make the middle card appear on top
          }}
          variants={cardVariants}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority={index < 2} // Prioritize loading the first two images
          />
        </motion.div>
      ))}
    </motion.div>
  );
}