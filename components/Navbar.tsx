'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CHANGED: Added "Blog" to the navigation links.
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Offerings' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close the mobile menu and dropdown when the route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-secondary/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Site Title/Logo */}
        <Link href="/" className="font-cinzel text-xl font-bold text-primary z-20">
          Austin Tarot Reader
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 z-30"> {/* Changed to lg for more space */}
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href) && (link.href !== '/' || pathname === '/');
            
            if (link.label === 'Offerings') {
              const isOfferingsActive = pathname.startsWith('/services');
              return (
                <div
                  key={link.href}
                  className="relative py-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className={twMerge(
                      'font-sans text-lg hover:text-primary transition-colors flex items-center gap-1 focus:outline-none',
                      isOfferingsActive ? 'text-primary font-semibold' : 'text-foreground'
                    )}
                  >
                    <span>Offerings</span>
                    <svg
                      className={twMerge('w-4 h-4 transition-transform duration-200', isDropdownOpen && 'rotate-180')}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Card */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-secondary/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md p-2 flex flex-col z-50"
                      >
                        <Link
                          href="/services"
                          className={twMerge(
                            'font-sans text-md px-4 py-2.5 rounded-lg hover:bg-primary hover:text-background text-foreground transition-all duration-200 text-left',
                            pathname === '/services' && 'text-primary font-semibold'
                          )}
                        >
                          Tarot Readings
                        </Link>
                        <Link
                          href="/services/decks"
                          className={twMerge(
                            'font-sans text-md px-4 py-2.5 rounded-lg hover:bg-primary hover:text-background text-foreground transition-all duration-200 text-left',
                            pathname.startsWith('/services/decks') && 'text-primary font-semibold'
                          )}
                        >
                          Tarot Decks
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={twMerge(
                  'font-sans text-lg hover:text-primary transition-colors',
                  isActive ? 'text-primary font-semibold' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        
        {/* Desktop Call to Action Button */}
        <a
          href="https://www.austintarotreader.com/services"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block bg-primary text-background font-bold py-2 px-6 rounded-lg text-md hover:opacity-90 transition-opacity duration-300 font-sans"
        >
          Book Now
        </a>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden z-20"> {/* Changed to lg */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel (Animated) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden absolute top-0 left-0 w-full h-screen bg-background pt-20 overflow-y-auto"
            >
              <div className="flex flex-col items-center space-y-6 pb-12">
                {navLinks.map((link) => {
                  if (link.label === 'Offerings') {
                    return (
                      <div key={link.href} className="flex flex-col items-center space-y-3 w-full">
                        <span className="font-cinzel text-2xl text-primary font-bold uppercase tracking-wider">
                          Offerings
                        </span>
                        <div className="flex flex-col items-center space-y-2 bg-secondary/20 py-3 w-full border-y border-white/5">
                          <Link
                            href="/services"
                            className="font-sans text-xl text-foreground/90 hover:text-primary"
                          >
                            Tarot Readings & Coaching
                          </Link>
                          <Link
                            href="/services/decks"
                            className="font-sans text-xl text-foreground/90 hover:text-primary"
                          >
                            Gothic Tarot Decks
                          </Link>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-cinzel text-3xl text-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <a
                  href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-primary text-background font-bold py-3 px-12 rounded-lg text-xl hover:opacity-90 transition-opacity duration-300 font-sans"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}