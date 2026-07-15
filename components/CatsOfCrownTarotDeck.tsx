'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

// --- Card Sample Images ---
const sampleCards = [
  {
    name: 'The Hierophant',
    character: 'Royal Feline Priest',
    src: '/images/Merchandise/Tarot Decks/Cats of the Crown Tarot Deck/the_hierophant.webp',
    alt: 'The Hierophant card in the Cats of the Crown Tarot Deck showing a wise majestic cat pope',
    description: 'A wise, regal feline pope presiding over the royal council. Representing spiritual tradition and structured belief.'
  },
  {
    name: 'The Lovers',
    character: 'Cuddling Companions',
    src: '/images/Merchandise/Tarot Decks/Cats of the Crown Tarot Deck/the_lovers.webp',
    alt: 'The Lovers card in the Cats of the Crown Tarot Deck showing two royal cats cuddling in the palace garden',
    description: 'Two beautiful bonded royal felines cuddling in the palace gardens, symbolizing deep connection, love, and harmony.'
  },
  {
    name: 'The Tower',
    character: 'Upheaval Castle',
    src: '/images/Merchandise/Tarot Decks/Cats of the Crown Tarot Deck/the_tower.webp',
    alt: 'The Tower card in the Cats of the Crown Tarot Deck showing a lightning strike on a royal cat castle',
    description: 'A grand castle tower struck by lightning, throwing royal felines into sudden upheaval and structural collapse.'
  },
  {
    name: 'The World',
    character: 'Crown Sovereign',
    src: '/images/Merchandise/Tarot Decks/Cats of the Crown Tarot Deck/the_world.webp',
    alt: 'The World card in the Cats of the Crown Tarot Deck showing a crowned cat resting in a laurel wreath',
    description: 'A crowned sovereign feline resting peacefully inside a laurel wreath, representing completion, wholeness, and absolute mastery.'
  },
  {
    name: 'Three of Cups',
    character: 'Celebratory Kittens',
    src: '/images/Merchandise/Tarot Decks/Cats of the Crown Tarot Deck/three_of_cups.webp',
    alt: 'Three of Cups card in the Cats of the Crown Tarot Deck showing three playful cats drinking from gold cups',
    description: 'Three feline companions playing and drinking milk from golden chalices. A card of celebration, friendship, and joy.'
  },
  {
    name: 'Two of Swords',
    character: 'Stalemate Blindfold',
    src: '/images/Merchandise/Tarot Decks/Cats of the Crown Tarot Deck/two_of_swords.webp',
    alt: 'Two of Swords card in the Cats of the Crown Tarot Deck showing a blindfolded cat with crossed claws',
    description: 'A blindfolded cat sitting calmly with two crossed swords, representing difficult choices, stalemate, and intellectual block.'
  },
  {
    name: 'Card Back',
    character: 'Cats of the Crown Back',
    src: '/images/Merchandise/Tarot Decks/Cats of the Crown Tarot Deck/cats of the crown tarot card back.png',
    alt: 'Cats of the Crown Tarot Deck card back design featuring royal feline crowns and gold filigree',
    description: 'Intricate royal feline card back design, featuring majestic crowns, paws, and gold-leaf patterns.'
  }
];

export function CatsOfCrownTarotDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

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
        body: JSON.stringify({ shippingOption, deck: 'cats-of-the-crown' }),
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

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb';
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
      const descriptionText = `Cats of the Crown Tarot Deck - ${shippingOption === 'standard' ? 'Standard Delivery 2-4 weeks' : 'Expedited Delivery 1-2 weeks'} (Royal Feline Edition)`;

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
          Cats of the Crown
        </h2>
        <p className="text-foreground/80 mt-2 font-cinzel italic text-md sm:text-lg">
          Royal Feline Tarot Deck (Majestic & Divine)
        </p>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: The Interactive Gothic Deck Showcase (7 cols on large screens) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Card Showcase Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[460px] sm:h-[530px] flex items-center justify-center select-none">
            
            {/* Background filigree aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,51,81,0.4)_0%,transparent_70%)] pointer-events-none rounded-full" />
            
            {/* Cards Stack Presentation */}
            <AnimatePresence mode="popLayout">
              {sampleCards.map((card, idx) => {
                const relativeIndex = (idx - activeIndex + sampleCards.length) % sampleCards.length;
                const isCurrent = relativeIndex === 0;
                
                // Show 3 cards stacked in perspective
                if (relativeIndex > 2 && relativeIndex < sampleCards.length - 1) return null;

                // Position transforms
                let x = 0;
                let zIndex = 10 - relativeIndex;
                let scale = 1 - relativeIndex * 0.08;
                let rotate = 0;
                let opacity = 1 - relativeIndex * 0.45;

                if (relativeIndex === 1) {
                  x = 35;
                  rotate = 6;
                } else if (relativeIndex === 2) {
                  x = 70;
                  rotate = 12;
                } else if (relativeIndex === sampleCards.length - 1) {
                  // Card exiting left
                  x = -250;
                  rotate = -15;
                  scale = 0.8;
                  opacity = 0;
                  zIndex = 20;
                }

                return (
                  <motion.div
                    key={card.name}
                    className={`absolute w-[240px] sm:w-[280px] aspect-[1.66/3] rounded-xl border-2 border-primary/40 bg-secondary/80 p-3 shadow-2xl flex flex-col backdrop-blur-sm ${isCurrent ? 'cursor-zoom-in' : 'cursor-grab active:cursor-grabbing'}`}
                    style={{
                      transformOrigin: 'bottom center',
                      zIndex
                    }}
                    animate={{
                      x,
                      scale,
                      rotate,
                      opacity,
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
          
          {/* Corner Gothic Filigree Accent */}
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
                    Immerse yourself in the majestic world of the <strong>Cats of the Crown Tarot Deck</strong>.{" "}
                    This premium, hand-crafted 78-card deck is the ultimate piece of <strong>cat tarot merchandise</strong>,{" "}
                    perfect for feline lovers and seekers of divine, regal designs. Featuring beautiful, stylized artwork of sovereign kitty characters—including{" "}
                    <strong>The Hierophant</strong> as the wise feline priest, <strong>The Lovers</strong> as bonded palace companions, and the crowned ruler of{" "}
                    <strong>The World</strong>—this deck blends classic tarot symbolism with breathtaking feline majesty.
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
                      <span className="text-accent">&#9733;</span> Cards: 78 Full Tarot Deck
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">&#9733;</span> Finish: Smooth Satin Coating
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">&#9733;</span> Size: Standard Tarot Size (2.75" x 4.75")
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">&#9733;</span> Card Stock: Heavy 350 GSM Paper
                    </li>
                    <li className="flex items-center gap-2 col-span-1 sm:col-span-2">
                      <span className="text-accent">&#9733;</span> Packaging: Plain black velvet bag
                    </li>
                  </ul>
                </div>

                {/* Secure Checkout Section */}
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
                    Your payment was completed and your order has been received. Cats of the Crown deck will be custom crafted and shipped to you.
                  </p>
                </div>

                <div className="bg-background/50 border border-white/5 rounded-xl p-4 text-left font-sans text-xs sm:text-sm space-y-2 text-foreground/80">
                  <p><strong>Order Reference:</strong> <span className="font-mono text-accent">{orderId || 'Completed via Square'}</span></p>
                  <p><strong>Delivery Estimate:</strong> {shippingOption === 'standard' ? '2 to 4 weeks' : '1 to 2 weeks'} (made-to-order)</p>
                  <p><strong>Shipping Cost:</strong> Flat Rate $4.95</p>
                  <p>A receipt has been sent to your email. We will notify you as soon as the package begins its journey.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Zoom Modal overlay */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/90 backdrop-blur-md p-4 cursor-zoom-out"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 text-foreground/80 hover:text-primary transition-colors text-lg font-sans font-bold flex items-center gap-1.5 z-10 bg-secondary/80 border border-primary/30 px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-lg"
                aria-label="Close"
              >
                <span>✕</span> Close
              </button>

              {/* Enlarged Card Image with elegant border wrapper */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                style={{
                  aspectRatio: '1.66 / 3',
                }}
                className="relative w-full h-auto max-h-[82vh] max-w-[90vw] rounded-2xl overflow-hidden border-2 border-primary/60 bg-background shadow-2xl"
              >
                <Image
                  src={sampleCards[activeIndex].src}
                  alt={sampleCards[activeIndex].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
