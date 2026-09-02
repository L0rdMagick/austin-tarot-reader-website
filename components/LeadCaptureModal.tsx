'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has already dismissed or submitted in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenLeadModal');
    if (hasSeenModal) return;

    // 1. Timed trigger (10 seconds - standard CRO timing)
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('hasSeenLeadModal', 'true');
    }, 10000);

    // 2. Scroll trigger (40% down page)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 40 && !sessionStorage.getItem('hasSeenLeadModal')) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenLeadModal', 'true');
      }
    };

    // 3. Exit intent trigger (mouse leaving top of window)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !sessionStorage.getItem('hasSeenLeadModal')) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenLeadModal', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenLeadModal', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'Exit Intent Popup' }),
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        router.push('/free-reading');
      }, 1500);
    } catch (error) {
      console.error('Lead capture error:', error);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        router.push('/free-reading');
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-surface p-6 sm:p-8 rounded-2xl border-2 border-gold/40 max-w-lg w-full shadow-2xl shadow-gold/20 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-foreground/50 hover:text-gold transition-colors p-1"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!isSubmitted ? (
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono font-semibold">
                <span>✨ Free Intuitive Gift</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-gold leading-tight">
                Before You Go — Claim Your Free Reading
              </h2>

              <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed">
                Unlock instant access to your <strong className="text-gold font-semibold">Free 3-Card AI Tarot Reading</strong> + receive weekly intuitive updates directly to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left pt-2">
                <div>
                  <label className="block text-xs font-mono text-gold/90 uppercase tracking-wider mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-surface-elevated border border-white/15 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gold/90 uppercase tracking-wider mb-1">
                    Your Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-surface-elevated border border-white/15 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-6 rounded-xl text-base transition-all font-sans shadow-xl shadow-gold/20 active:scale-95 text-center block"
                >
                  {isSubmitting ? 'Unlocking...' : 'Unlock Free Reading Now ↗'}
                </button>
              </form>

              <p className="text-[11px] font-sans text-foreground/50">
                100% confidential. No spam, unsubscribe anytime with one click.
              </p>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <span className="text-4xl">🔮</span>
              <h3 className="font-editorial text-2xl font-bold text-gold">
                You&apos;re In! Redirecting to Your Free Reading...
              </h3>
              <p className="font-sans text-sm text-foreground/80">
                Prepare your focus and questions. Taking you there now.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
