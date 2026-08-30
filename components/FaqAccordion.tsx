'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqAccordionProps {
  question: string;
  answer: React.ReactNode;
}

export function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="border-b border-primary/20 py-4"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
        className="w-full flex justify-between items-center text-left py-2 px-3 rounded-lg hover:bg-surface-elevated/50 transition-colors"
      >
        <h3 className="font-sans text-lg md:text-xl font-semibold text-foreground">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-gold"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 px-3 font-sans text-foreground/80 text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}