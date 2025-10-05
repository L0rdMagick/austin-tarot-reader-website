import Link from 'next/link';

// DEBUG: You can add more social media links to this array if you get them in the future.
const socialLinks = [
    { 
        name: 'Instagram', 
        url: 'https://www.instagram.com/austin.tarot.reader/', 
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        )
    }
    // { name: 'Facebook', url: '#', icon: ... },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[rgb(var(--secondary-rgb))] border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-xl font-bold text-[rgb(var(--primary-rgb))]">
              Austin Tarot Reader
            </h3>
            <p className="font-sans text-sm text-[rgb(var(--foreground-rgb))] opacity-70">
              Intuitive guidance for your journey.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-rgb))] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-lg font-semibold text-[rgb(var(--accent-rgb))]">Navigate</h4>
            <ul className="space-y-2 font-sans">
              <li><Link href="/" className="hover:text-[rgb(var(--primary-rgb))] transition-colors text-[rgb(var(--foreground-rgb))]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[rgb(var(--primary-rgb))] transition-colors text-[rgb(var(--foreground-rgb))]">About Me</Link></li>
              <li><Link href="/services" className="hover:text-[rgb(var(--primary-rgb))] transition-colors text-[rgb(var(--foreground-rgb))]">Services & Booking</Link></li>
            </ul>
          </div>

          {/* Column 3: Call to Action */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-lg font-semibold text-[rgb(var(--accent-rgb))]">Ready for Clarity?</h4>
            <p className="font-sans text-sm text-[rgb(var(--foreground-rgb))] opacity-70">
              Your next chapter is waiting to be written. Let's explore it together.
            </p>
            <Link
              href="/services"
              className="inline-block bg-[rgb(var(--primary-rgb))] text-[rgb(var(--background-rgb))] font-bold py-2 px-6 rounded-lg text-md hover:opacity-90 transition-opacity duration-300 font-sans"
            >
              Book a Reading
            </Link>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-[rgb(var(--foreground-rgb))] opacity-50">
          <p>&copy; {currentYear} Austin Tarot Reader. All Rights Reserved.</p>
          <p className="mt-1">Serving the Austin, Texas area and beyond.</p>
        </div>
      </div>
    </footer>
  );
}