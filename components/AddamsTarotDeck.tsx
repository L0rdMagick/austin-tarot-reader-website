'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Card Sample Images ---
const sampleCards = [
  {
    name: 'The Fool',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the fool.png',
    description: 'A whimsical and careless traveler stepping off the precipice of expectation.'
  },
  {
    name: 'The High Priestess',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the high priestess.png',
    description: 'Guardian of secrets, keeper of the quiet dark, and deep intuitive wisdom.'
  },
  {
    name: 'The Emperor',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the emperor.png',
    description: 'Order, structural control, and the patriarch of the mysterious domain.'
  },
  {
    name: 'The Lovers',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the lovers.png',
    description: 'An elegant union of souls, embracing both the light and the shadows.'
  },
  {
    name: 'The Devil',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the devil.PNG', // Note: Uppercase PNG in file system
    description: 'Material entrapment, raw passion, and the playful chains of desire.'
  },
  {
    name: 'The Star',
    src: '/images/Merchandise/Tarot Decks/Addams Family Tarot Deck/the star.png',
    description: 'Hope, serene starlight, and spiritual replenishment in the dark of night.'
  }
];

export function AddamsTarotDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [payerName, setPayerName] = useState<string | null>(null);
  const paypalButtonContainerRef = useRef<HTMLDivElement>(null);

  // Cycle to next/prev card
  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % sampleCards.length);
  };
  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + sampleCards.length) % sampleCards.length);
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
                value: '44.90', // $39.95 deck + $4.95 shipping
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: '39.95'
                  },
                  shipping: {
                    currency_code: 'USD',
                    value: '4.95'
                  }
                }
              },
              description: "Morticia's Shadow: Gothic Tarot Deck (Addams Family Inspired Edition)"
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
  }, [paypalLoaded, paymentSuccess]);

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: The Interactive Gothic Deck Showcase (7 cols on large screens) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Card Showcase Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[580px] flex items-center justify-center select-none">
            
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
                    className={`absolute w-[260px] h-[450px] sm:w-[280px] sm:h-[480px] rounded-xl overflow-hidden border-2 border-primary/40 bg-secondary/90 shadow-2xl flex flex-col justify-between p-3 cursor-pointer gothic-glow animate-gothic-float`}
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
                      }
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                  >
                    {/* Tarot Card Image */}
                    <div className="relative w-full h-[90%] rounded-lg overflow-hidden border border-white/5 bg-background">
                      <Image
                        src={card.src}
                        alt={`Morticia's Shadow Tarot: ${card.name}`}
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
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-sans text-3xl font-extrabold text-accent">$39.95</span>
                    <span className="font-sans text-foreground/60 text-sm">+ $4.95 shipping</span>
                  </div>
                  <div className="mt-4 bg-primary/10 border border-primary/20 rounded-lg p-3 text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed">
                    <strong>Made to Order:</strong> Each deck is handcrafted individually. Due to the high standard of production and custom detail, all deliveries take approximately <strong>2 to 3 weeks</strong>.
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

                  <div 
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
                  <p className="font-sans text-lg text-foreground/90 mt-2">Thank you for your order, {payerName}!</p>
                  <p className="font-sans text-sm text-foreground/70 mt-3 leading-relaxed">
                    Your payment was completed and your order has been received. Morticia's Shadow deck will be custom crafted and shipped to you.
                  </p>
                </div>

                <div className="bg-background/50 border border-white/5 rounded-xl p-4 text-left font-sans text-xs sm:text-sm space-y-2 text-foreground/80">
                  <p><strong>Order Reference:</strong> <span className="font-mono text-accent">{orderId}</span></p>
                  <p><strong>Delivery Estimate:</strong> 2 to 3 weeks (made-to-order)</p>
                  <p><strong>Shipping Cost:</strong> Flat Rate $4.95</p>
                  <p>A receipt has been sent to your PayPal email. We will notify you as soon as the package begins its journey.</p>
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
    </section>
  );
}
