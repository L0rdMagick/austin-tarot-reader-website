'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 bg-secondary/80 backdrop-blur-sm border-b border-white/10">
      {/* CHANGED: Added flex-wrap and gap to allow items to stack gracefully on small screens */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 flex-wrap gap-4">
        {/* Site Title/Logo */}
        <Link href="/" className="font-cinzel text-xl font-bold text-primary">
          Austin Tarot Reader
        </Link>

        {/* Navigation Links and CTA Button Container */}
        {/* CHANGED: Grouped links and button together for better responsive control */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                // CHANGED: Hide text links on the very smallest screens to prevent clutter, showing them on `sm` and up.
                className={twMerge(
                  'font-sans text-md sm:text-lg hover:text-primary transition-colors hidden sm:inline-block',
                  isActive ? 'text-primary font-semibold' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            );
          })}
          
          <a
            href="https://book.squareup.com/appointments/nsc0u2gmu4vhoy/location/YB8VMMKGCHGN0/services/BF72ZKQM74NPNZ3FTYZLARXT" // Using the 60-min reading as the primary link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background font-bold py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-md hover:opacity-90 transition-opacity duration-300 font-sans"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}