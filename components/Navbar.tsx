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
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu when the route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-secondary/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Site Title/Logo */}
        <Link href="/" className="font-cinzel text-xl font-bold text-primary z-20">
          Austin Tarot Reader
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6"> {/* Changed to lg for more space */}
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href) && (link.href !== '/' || pathname === '/');
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
          href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services"
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
              className="lg:hidden absolute top-0 left-0 w-full h-screen bg-background pt-24" // Changed to lg
            >
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-cinzel text-3xl text-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 bg-primary text-background font-bold py-3 px-12 rounded-lg text-xl hover:opacity-90 transition-opacity duration-300 font-sans"
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