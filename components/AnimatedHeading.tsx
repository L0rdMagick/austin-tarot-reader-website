'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// Define the animation properties
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9], // A gentle, custom easing curve
    },
  },
};

// Define the component's props for flexibility
interface AnimatedHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4'; // Allows us to use h1, h2, etc.
  children: React.ReactNode;
  className?: string;
}

export function AnimatedHeading({ as: Tag = 'h2', children, className }: AnimatedHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible" // This is the trigger: animates when the component is in the viewport
      viewport={{ once: false, amount: 0.5 }} // `once: false` allows re-animation, `amount: 0.5` triggers when 50% is visible
      variants={headingVariants}
    >
      <Tag className={twMerge(
        // Default styles for all animated headings
        'font-cinzel font-bold text-balance',
        // Merge in any custom classes passed via props
        className
      )}>
        {children}
      </Tag>
    </motion.div>
  );
}