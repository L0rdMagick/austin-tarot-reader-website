'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreedToEmail, setAgreedToEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Developer Test Override: Append ?testPopup=true to any URL to test popup immediately
    if (typeof window !== 'undefined' && window.location.search.includes('testPopup=true')) {
      setIsOpen(true);
      return;
    }

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
    if (!email || !agreedToEmail) return;

    setIsSubmitting(true);
    setIsSubmitted(true); // Instant UI transition with 0ms delay!

    try {
      await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          source: 'Exit Intent Popup (Subscribed)',
          agreedToEmail: true,
        }),
      });
    } catch (error) {
      console.error('Lead capture error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-obsidian/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-surface p-5 sm:p-7 rounded-2xl border-2 border-gold/40 max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl shadow-gold/20"
        >
          {/* Prominent Circular Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-gold/10 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-obsidian transition-all shadow-md z-10"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!isSubmitted ? (
            <div className="space-y-4 text-center pt-1">
              <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-gold leading-tight">
                Before You Go — Claim Your Free Reading
              </h2>

              <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-md mx-auto">
                Unlock instant access to your <strong className="text-gold font-semibold">Free 3-Card AI Tarot Reading</strong> + exclusive text message discounts, email tarot draws, &amp; priority updates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 text-left pt-1">
                <div>
                  <label className="block text-[11px] font-mono text-gold/90 uppercase tracking-wider mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-surface-elevated border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gold/90 uppercase tracking-wider mb-1">
                    Your Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-surface-elevated border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gold/90 uppercase tracking-wider mb-1">
                    Mobile Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(512) 000-0000"
                    className="w-full bg-surface-elevated border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer pt-0.5">
                    <input
                      type="checkbox"
                      required
                      checked={agreedToEmail}
                      onChange={(e) => setAgreedToEmail(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-white/20 bg-surface-elevated text-gold focus:ring-gold accent-amber-500 shrink-0"
                    />
                    <span className="text-[11px] font-sans text-foreground/80 leading-snug">
                      I agree to receive weekly tarot clarity insights, exclusive session discounts, &amp; priority updates via email and SMS text (if phone number is submitted). Unsubscribe anytime with one click.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreedToEmail || isSubmitting}
                  className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-3 px-5 rounded-xl text-sm transition-all font-sans shadow-xl shadow-gold/20 active:scale-95 text-center block disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Unlocking...' : 'Unlock Free Reading Now ↗'}
                </button>
              </form>

              <p className="text-[10px] font-sans text-foreground/50 pt-1">
                100% confidential. No spam, unsubscribe anytime with one click.
              </p>
            </div>
          ) : (
            <div className="py-6 text-center space-y-5 pt-4">
              <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/40 text-gold text-3xl flex items-center justify-center mx-auto shadow-lg">
                🔮
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-gold">
                You&apos;re Connected!
              </h3>

              <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed max-w-sm mx-auto">
                Your information has been successfully recorded in our database. You are now unlocked to experience your 3-Card AI Tarot Reading.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    router.push('/free-reading');
                  }}
                  className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-3.5 px-6 rounded-xl text-sm transition-all font-sans shadow-lg shadow-gold/20 active:scale-95"
                >
                  Continue to Free Reading ↗
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full bg-surface-elevated text-gold border border-gold/40 font-bold py-3.5 px-6 rounded-xl text-sm hover:bg-surface-overlay transition-colors active:scale-95"
                >
                  Close &amp; Stay on Page
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
