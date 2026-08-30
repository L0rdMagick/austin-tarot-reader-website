'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'zoom-in' | 'slide-up';
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -30, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 25, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // Smooth custom cubic bezier
      }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
