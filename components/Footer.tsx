import Link from 'next/link';

const socialLinks = [
    { 
        name: 'Instagram', 
        url: 'https://www.instagram.com/austin.tarot.reader/', 
        icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> )
    }
];

const contactLinks = [
    { 
        name: '(773) 948-8925', 
        href: 'tel:+17739488925', 
        icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> )
    },
    { 
        name: 'tarot@AustinTarotReader.com', 
        href: 'mailto:tarot@AustinTarotReader.com?subject=Tarot%20Reading%20Inquiry', 
        icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> )
    },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Brand, Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-xl font-bold text-primary">
              Austin Tarot Reader
            </h3>
            <div className="space-y-2 font-sans text-foreground/80">
                {contactLinks.map((link) => (
                    <a key={link.name} href={link.href} className="flex items-center justify-center md:justify-start gap-3 hover:text-primary transition-colors">
                        {link.icon}
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-foreground hover:text-primary transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-lg font-semibold text-accent">Navigate</h4>
            {/* CHANGED: Added FAQ and Contact links */}
            <ul className="space-y-2 font-sans">
              <li><Link href="/" className="hover:text-primary transition-colors text-foreground">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors text-foreground">About Me</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors text-foreground">Services & Booking</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors text-foreground">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Call to Action */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-lg font-semibold text-accent">Ready for Clarity?</h4>
            <p className="font-sans text-sm text-foreground/70">
              Your next chapter is waiting to be written. Let's explore it together.
            </p>
            <Link href="/services" className="inline-block bg-primary text-background font-bold py-2 px-6 rounded-lg text-md hover:opacity-90 transition-opacity duration-300 font-sans">
              Book a Reading
            </Link>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-foreground/50">
          <p>&copy; {currentYear} Austin Tarot Reader. All Rights Reserved.</p>
          <p className="mt-1">Serving the Austin, Texas area and beyond.</p>
        </div>
      </div>
    </footer>
  );
}