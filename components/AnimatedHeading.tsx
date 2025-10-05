'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

interface AnimatedHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
}

export function AnimatedHeading({ as: Tag = 'h2', children, className }: AnimatedHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // CHANGED: Set `once` to `true` for stability. This is the critical fix for the crash.
      viewport={{ once: true, amount: 0.5 }}
      variants={headingVariants}
    >
      <Tag className={twMerge(
        'font-cinzel font-bold text-balance',
        className
      )}>
        {children}
      </Tag>
    </motion.div>
  );
}