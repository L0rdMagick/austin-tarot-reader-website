'use client'; // This is a client component because it uses hooks (usePathname)

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

// DEBUG: To add or change navigation links, edit this array.
// The `href` is the URL path, and `label` is the text that appears.
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 bg-[rgb(var(--secondary-rgb))] bg-opacity-80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Site Title/Logo */}
        <Link href="/" className="font-cinzel text-xl font-bold text-[rgb(var(--primary-rgb))]">
          Austin Tarot Reader
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={twMerge(
                  'font-sans text-lg hover:text-[rgb(var(--primary-rgb))] transition-colors',
                  isActive ? 'text-[rgb(var(--primary-rgb))] font-semibold' : 'text-[rgb(var(--foreground-rgb))]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        
        {/* Call to Action Button */}
        <a
          href="YOUR_MAIN_BOOKING_LINK_HERE" // TODO: Add your primary booking link
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[rgb(var(--primary-rgb))] text-[rgb(var(--background-rgb))] font-bold py-2 px-6 rounded-lg text-md hover:opacity-90 transition-opacity duration-300 font-sans"
        >
          Book Now
        </a>

        {/* Mobile Menu Button Placeholder - Functionality to be added later if needed */}
        <div className="md:hidden">
            <Link 
                href="/services" 
                className="inline-block bg-[rgb(var(--primary-rgb))] text-[rgb(var(--background-rgb))] font-bold py-2 px-4 rounded-lg text-sm hover:opacity-90 transition-opacity duration-300 font-sans"
            >
                Book Now
            </Link>
        </div>
      </nav>
    </header>
  );
}