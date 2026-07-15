'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

// --- Card Sample Images ---
// --- Card Sample Images ---
const sampleCards = [
  {
    name: 'The Fool',
    character: 'Wednesday Addams',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the fool.png',
    alt: 'Wednesday Addams as The Fool card in the Addams Family inspired Gothic Tarot Deck',
    description: 'Wednesday Addams walks a dangerous precipice with absolute indifference. A perfect representation of The Fool card in our Addams Family inspired gothic tarot deck.'
  },
  {
    name: 'The High Priestess',
    character: 'Morticia Addams',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the high priestess.png',
    alt: 'Morticia Addams as The High Priestess card in the Morticia\'s Shadow Gothic Tarot Deck',
    description: 'Morticia Addams embodies the quiet mystery, hidden secrets, and deep intuitive wisdom of The High Priestess card.'
  },
  {
    name: 'The Emperor',
    character: 'Gomez Addams',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the emperor.png',
    alt: 'Gomez Addams as The Emperor card in the Addams Family inspired Gothic Tarot Deck',
    description: 'Gomez Addams represents structural authority, passionate leadership, and family patriarchy as The Emperor card.'
  },
  {
    name: 'The Lovers',
    character: 'Morticia and Gomez Addams',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the lovers.png',
    alt: 'Morticia & Gomez Addams as The Lovers card in the Morticia\'s Shadow Gothic Tarot Deck',
    description: 'Morticia and Gomez Addams represent a passionate, undying, and dark romantic union as The Lovers card.'
  },
  {
    name: 'The Devil',
    character: 'Gomez Addams',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the devil.PNG', // Note: Uppercase PNG in file system
    alt: 'Gomez Addams as The Devil card in the Addams Family inspired Gothic Tarot Deck',
    description: 'Gomez Addams plays the tempting role of desire, playful chains, and material obsession as The Devil card.'
  },
  {
    name: 'The Star',
    character: 'Wednesday Addams',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the star.png',
    alt: 'Wednesday Addams as The Star card in the Addams Family inspired Gothic Tarot Deck',
    description: 'Wednesday Addams represents a silent beacon of hope and dark guidance under the night sky as The Star card.'
  },
  {
    name: 'Card Back',
    character: 'The Addams Crest',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/tarot card back.png',
    alt: 'Morticia\'s Shadow Gothic Tarot Deck card back design featuring intricate spiderwebs and the Addams Family crest',
    description: 'The ornate and gothic card back design, featuring custom filigree, spiderwebs, and the iconic Addams Family crest.'
  }
];

export function AddamsTarotDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [payerName, setPayerName] = useState<string | null>(null);
  const [isSquareLoading, setIsSquareLoading] = useState(false);
  const [shippingOption, setShippingOption] = useState<'standard' | 'expedited'>('standard');
  const paypalButtonContainerRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const statusParam = searchParams.get('status');

  // Detect redirect status from Square Checkout
  useEffect(() => {
    if (statusParam === 'success') {
      setPaymentSuccess(true);
    }
  }, [statusParam]);

  // Cycle to next/prev card
  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % sampleCards.length);
  };
  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + sampleCards.length) % sampleCards.length);
  };

  const handleSquareCheckout = async () => {
    setIsSquareLoading(true);
    try {
      const response = await fetch('/api/square/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shippingOption }),
      });
      const data = await response.json();

      if (response.ok && data.url) {
        // Redirect to Square Checkout portal
        window.location.href = data.url;
      } else {
        alert(data.error || 'Failed to initialize card checkout. Please try again.');
        setIsSquareLoading(false);
      }
    } catch (error) {
      console.error('Square Checkout Error:', error);
      alert('An unexpected error occurred. Please try again.');
      setIsSquareLoading(false);
    }
  };

  // Load PayPal SDK Dynamically
  useEffect(() => {
    if (paymentSuccess) return;

    // Check if PayPal is already loaded
    if (window.hasOwnProperty('paypal')) {
      setPaypalLoaded(true);
      return;
    }

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb'; // Default to sandbox ('sb')
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture&disable-funding=card,credit,paylater`;
    script.async = true;
    script.onload = () => {
      setPaypalLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load the PayPal JavaScript SDK.');
    };
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [paymentSuccess]);

  // Render PayPal Buttons once SDK is loaded
  useEffect(() => {
    if (paypalLoaded && paypalButtonContainerRef.current && !paymentSuccess) {
      // Clear container in case of multiple renders
      paypalButtonContainerRef.current.innerHTML = '';

      const itemPrice = shippingOption === 'standard' ? '64.95' : '89.95';
      const totalValue = shippingOption === 'standard' ? '69.90' : '94.90';
      const descriptionText = `Morticia's Shadow: Gothic Tarot Deck - ${shippingOption === 'standard' ? 'Standard Delivery 2-4 weeks' : 'Expedited Delivery 1-2 weeks'} (Addams Family Inspired Edition)`;

      // @ts-ignore (PayPal SDK added to window)
      window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'silver',
          shape: 'rect',
          label: 'checkout',
          height: 48,
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: totalValue,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: itemPrice
                  },
                  shipping: {
                    currency_code: 'USD',
                    value: '4.95'
                  }
                }
              },
              description: descriptionText
            }]
          });
        },
        onApprove: async (data: any, actions: any) => {
          const details = await actions.order.capture();
          setOrderId(details.id);
          const name = details.payer?.name?.given_name || 'Mystic Traveler';
          setPayerName(name);
          setPaymentSuccess(true);
        },
        onError: (err: any) => {
          console.error('PayPal Payment Error:', err);
          alert('There was an issue processing your PayPal payment. Please try again.');
        }
      }).render(paypalButtonContainerRef.current);
    }
  }, [paypalLoaded, paymentSuccess, shippingOption]);

  return (
    <section className="w-full text-foreground py-12 md:py-20 px-4 max-w-6xl mx-auto">
      {/* Visual Accent Section Header */}
      <div className="text-center mb-12">
        <span className="text-accent uppercase tracking-widest text-sm font-sans font-semibold">Mystic Wares</span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-2">
          Morticia's Shadow
        </h2>
        <p className="text-foreground/80 mt-2 font-cinzel italic text-md sm:text-lg">
          Gothic Tarot Deck (Addams Family Inspired)
        </p>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: The Interactive Gothic Deck Showcase (7 cols on large screens) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Card Showcase Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[460px] sm:h-[500px] flex items-center justify-center select-none">
            
            {/* Background filigree aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,51,81,0.4)_0%,transparent_70%)] pointer-events-none rounded-full" />
            
            {/* Cards Stack Presentation */}
            <AnimatePresence mode="popLayout">
              {sampleCards.map((card, idx) => {
                // Calculate distance/index relative to active
                const relativeIndex = (idx - activeIndex + sampleCards.length) % sampleCards.length;
                const isCurrent = relativeIndex === 0;
                
                // We only render the top few cards to keep DOM clean and stack neat
                if (relativeIndex > 3) return null;

                // Stack offset styling
                const xOffset = relativeIndex * 15;
                const yOffset = relativeIndex * 8;
                const rotateOffset = relativeIndex * 3;
                const scale = 1 - relativeIndex * 0.05;
                const opacity = 1 - relativeIndex * 0.25;

                return (
                  <motion.div
                    key={card.name}
                    className={`absolute w-[260px] h-[450px] sm:w-[280px] sm:h-[480px] rounded-xl overflow-hidden border-2 border-primary/40 bg-secondary/90 shadow-2xl flex flex-col justify-between p-3 gothic-glow animate-gothic-float ${isCurrent ? 'cursor-zoom-in' : 'cursor-pointer'}`}
                    style={{
                      zIndex: 10 - relativeIndex,
                      transformOrigin: 'bottom center',
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{
                      opacity: opacity,
                      scale: scale,
                      x: xOffset,
                      y: yOffset,
                      rotate: rotateOffset,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      x: -250,
                      rotate: -15,
                      transition: { duration: 0.4 }
                    }}
                    onClick={() => {
                      if (!isCurrent) {
                        setActiveIndex(idx);
                      } else {
                        setIsZoomed(true);
                      }
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                  >
                    {/* Tarot Card Image */}
                    <div className="relative w-full h-[90%] rounded-lg overflow-hidden border border-white/5 bg-background">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{ objectFit: 'cover' }}
                        priority={isCurrent}
                      />
                    </div>
                    {/* Small name label */}
                    <div className="text-center pt-2">
                      <span className="font-cinzel text-sm sm:text-md font-bold text-primary tracking-wide">
                        {card.name.toUpperCase()}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={prevCard}
              className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary bg-secondary/30 hover:bg-primary hover:text-background transition-all duration-300 font-bold"
              aria-label="Previous card sample"
            >
              &#8592;
            </button>
            <span className="font-sans text-foreground/70 text-sm">
              Sample {activeIndex + 1} of {sampleCards.length}
            </span>
            <button
              onClick={nextCard}
              className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary bg-secondary/30 hover:bg-primary hover:text-background transition-all duration-300 font-bold"
              aria-label="Next card sample"
            >
              &#8594;
            </button>
          </div>
          
          {/* Card description details */}
          <div className="text-center mt-6 max-w-md px-4 min-h-[60px]">
            <h4 className="font-cinzel text-lg text-accent font-semibold">{sampleCards[activeIndex].name}</h4>
            <p className="font-sans text-sm text-foreground/80 mt-1 italic">
              "{sampleCards[activeIndex].description}"
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Store Purchase Details (5 cols on large screens) */}
        <div className="lg:col-span-5 bg-secondary/40 border border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-xl relative overflow-hidden">
          
          {/* Corner Gothic Spiderweb Accent */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none select-none bg-[radial-gradient(circle_at_top_right,var(--accent-rgb)_0%,transparent_70%)]" />
          
          <AnimatePresence mode="wait">
            {!paymentSuccess ? (
              <motion.div
                key="purchase-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-primary">Order Your Deck</h3>
                  <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-relaxed mt-2 border-b border-white/5 pb-4">
                    Immerse yourself in the dark charm of <strong>Morticia's Shadow: Gothic Tarot Deck</strong>.{" "}
                    This premium, hand-crafted 78-card deck is the ultimate piece of <strong>Addams Family merchandise</strong>,{" "}
                    perfect for fans seeking spooky Edwardian occult wares. Featuring iconic, stylized designs of your favorite characters—including{" "}
                    <strong>Wednesday Addams</strong> as The Fool and The Star, <strong>Gomez Addams</strong> as The Emperor and The Devil, and the elegant{" "}
                    <strong>Morticia Addams</strong> as The High Priestess, with both as the passionate Lovers—this deck blends timeless{" "}
                    tarot symbolism with gothic aesthetic elegance.
                  </p>
                </div>

                {/* Shipping & Delivery Options Selector */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-cinzel text-sm font-semibold text-primary uppercase tracking-wider">Select Delivery Option</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {/* Standard option */}
                    <div 
                      onClick={() => setShippingOption('standard')}
                      className={`border-2 rounded-xl p-3.5 cursor-pointer transition-all duration-300 font-sans flex flex-col justify-between ${
                        shippingOption === 'standard' 
                          ? 'border-primary bg-primary/10 shadow-[0_0_12px_rgba(212,175,55,0.15)]' 
                          : 'border-white/10 bg-background/30 hover:border-white/20'
                      }`}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <span className="font-bold text-sm sm:text-md text-foreground">Standard Delivery</span>
                        <span className="font-extrabold text-sm sm:text-md text-accent">$64.95</span>
                      </div>
                      <div className="flex justify-between items-center mt-1.5 text-xs text-foreground/70">
                        <span>Made to Order (2-4 Weeks)</span>
                        <span>+ $4.95 shipping</span>
                      </div>
                    </div>

                    {/* Expedited option */}
                    <div 
                      onClick={() => setShippingOption('expedited')}
                      className={`border-2 rounded-xl p-3.5 cursor-pointer transition-all duration-300 font-sans flex flex-col justify-between ${
                        shippingOption === 'expedited' 
                          ? 'border-primary bg-primary/10 shadow-[0_0_12px_rgba(212,175,55,0.15)]' 
                          : 'border-white/10 bg-background/30 hover:border-white/20'
                      }`}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <span className="font-bold text-sm sm:text-md text-foreground flex flex-wrap items-center gap-1.5">
                          Expedited Delivery
                          <span className="text-[10px] bg-accent/20 border border-accent/30 text-accent font-bold px-1.5 py-0.5 rounded font-sans uppercase tracking-wider">Fast Track</span>
                        </span>
                        <span className="font-extrabold text-sm sm:text-md text-accent">$89.95</span>
                      </div>
                      <div className="flex justify-between items-center mt-1.5 text-xs text-foreground/70">
                        <span>Expedited Crafting (1-2 Weeks)</span>
                        <span>+ $4.95 shipping</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specs Section */}
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-cinzel text-md font-semibold text-primary uppercase tracking-wider mb-2">Specifications</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-sans text-foreground/80">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">&#9733;</span> Size: 2.75"×4.75" (70×120mm)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">&#9733;</span> Card Count: Full 78 Cards
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">&#9733;</span> Stock: S30 Standard Smooth
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">&#9733;</span> Finishing: Gloss Protective Finish
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2">
                      <span className="text-accent">&#9733;</span> Packaging: Plain black velvet bag
                    </li>
                  </ul>
                </div>

                {/* PayPal Checkout Segment */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-cinzel text-md font-semibold text-primary uppercase tracking-wider mb-4 text-center">Secure Checkout</h4>
                  
                  {/* Styled Payment Badges */}
                  <div className="flex flex-col items-center gap-2 mb-4 select-none">
                    <div className="flex items-center gap-1 text-foreground/50">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="font-sans uppercase tracking-widest text-[9px] font-bold">Secure Gateway</span>
                    </div>
                    <div className="flex justify-center items-center gap-1.5">
                      <span className="text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 border border-white/10 rounded bg-white/5 text-foreground/80">VISA</span>
                      <span className="text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 border border-white/10 rounded bg-white/5 text-foreground/80">MC</span>
                      <span className="text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 border border-white/10 rounded bg-white/5 text-foreground/80">AMEX</span>
                      <span className="text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 border border-white/10 rounded bg-white/5 text-foreground/80">DISCOVER</span>
                      <span className="text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 border border-primary/20 rounded bg-primary/10 text-primary">PAYPAL</span>
                    </div>
                  </div>

                  {!paypalLoaded ? (
                    <div className="flex flex-col items-center justify-center py-6 space-y-3">
                      {/* Gothic custom spinner (hourglass/waxing moon style) */}
                      <div className="w-8 h-8 rounded-full border-4 border-accent border-t-transparent animate-spin" />
                      <span className="font-sans text-xs text-foreground/50">Summoning PayPal Checkout...</span>
                    </div>
                  ) : null}

                  {/* Square Payment Button */}
                  <div className="mb-4">
                    <button
                      onClick={handleSquareCheckout}
                      disabled={isSquareLoading}
                      className="w-full bg-secondary/50 border border-primary/40 text-primary font-bold py-3 px-6 rounded-lg text-md hover:bg-primary hover:text-background transition-all duration-300 font-sans flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed gothic-glow"
                    >
                      {isSquareLoading ? (
                        <div className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      )}
                      <span>{isSquareLoading ? 'Redirecting to Square...' : 'Pay with Credit / Debit Card'}</span>
                    </button>

                    <div className="flex items-center justify-center my-3 gap-2 select-none">
                      <div className="h-[1px] bg-white/10 flex-grow" />
                      <span className="font-sans text-[9px] text-foreground/40 uppercase tracking-wider">or pay with</span>
                      <div className="h-[1px] bg-white/10 flex-grow" />
                    </div>
                  </div>

                  <div 
                    key={shippingOption}
                    ref={paypalButtonContainerRef} 
                    className="w-full transition-opacity duration-300"
                    style={{ opacity: paypalLoaded ? 1 : 0.4 }}
                  />
                  
                  {/* Guest Checkout Helper Text */}
                  <p className="text-[11px] text-center text-foreground/75 mt-3 font-sans max-w-xs mx-auto leading-normal">
                    <strong>No PayPal account needed?</strong> Click the button above, then select <em>"Pay with Debit or Credit Card"</em> inside the secure popup to check out securely as a guest.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto animate-pulse">
                  <span className="text-accent text-3xl font-bold">&#10003;</span>
                </div>
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-primary">Spells Cast Successfully!</h3>
                  <p className="font-sans text-lg text-foreground/90 mt-2">Thank you for your order, {payerName || 'Valued Customer'}!</p>
                  <p className="font-sans text-sm text-foreground/70 mt-3 leading-relaxed">
                    Your payment was completed and your order has been received. Morticia's Shadow deck will be custom crafted and shipped to you.
                  </p>
                </div>

                <div className="bg-background/50 border border-white/5 rounded-xl p-4 text-left font-sans text-xs sm:text-sm space-y-2 text-foreground/80">
                  <p><strong>Order Reference:</strong> <span className="font-mono text-accent">{orderId || 'Completed via Square'}</span></p>
                  <p><strong>Delivery Estimate:</strong> {shippingOption === 'standard' ? '2 to 4 weeks' : '1 to 2 weeks'} (made-to-order)</p>
                  <p><strong>Shipping Cost:</strong> Flat Rate $4.95</p>
                  <p>A receipt has been sent to your email. We will notify you as soon as the package begins its journey.</p>
                </div>

                <button
                  onClick={() => setPaymentSuccess(false)}
                  className="font-sans text-sm text-primary hover:underline"
                >
                  Place another order
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Zoom Modal overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking modal itself
              className="relative max-w-[360px] sm:max-w-[420px] w-full max-h-[90vh] flex flex-col items-center border-2 border-primary/40 bg-secondary/90 p-4 rounded-2xl shadow-2xl backdrop-blur-sm"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute -top-12 right-2 sm:right-0 text-foreground/80 hover:text-primary transition-colors text-lg font-sans font-bold flex items-center gap-1.5"
                aria-label="Close"
              >
                <span>✕</span> Close
              </button>

              {/* Card Image Container */}
              <div className="relative w-full aspect-[2.75/4.75] max-h-[60vh] sm:max-h-[65vh] rounded-lg overflow-hidden border border-white/10 bg-background shadow-inner">
                <Image
                  src={sampleCards[activeIndex].src}
                  alt={sampleCards[activeIndex].alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
              </div>

              {/* Title & Caption */}
              <div className="text-center mt-4">
                <h3 className="font-cinzel text-lg sm:text-xl text-primary font-bold tracking-wide">
                  {sampleCards[activeIndex].name.toUpperCase()}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-foreground/80 mt-1.5 italic max-w-[280px] sm:max-w-xs mx-auto">
                  "{sampleCards[activeIndex].description}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
