'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Configuration ---
const cardImages = [
  { src: '/images/19-TheSun.jpg', alt: 'The Sun Tarot Card' },
  { src: '/images/17-TheStar.jpg', alt: 'The Star Tarot Card' },
  { src: '/images/01-TheMagician.jpg', alt: 'The Magician Tarot Card' },
];

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

// CHANGED: Increased the initial `y` offset to make the "slide up" more obvious.
const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
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
            // CHANGED: Increased rotation from 15deg to 20deg for a more dramatic fan.
            rotate: `${(index - 1) * 20}deg`,
            // CHANGED: Increased translateX from 50px to 65px to spread the cards out more.
            translateX: `${(index - 1) * 65}px`,
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