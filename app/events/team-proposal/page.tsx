'use client';

import Link from 'next/link';

export default function TeamProposalPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-foreground py-10 px-4 sm:px-8 print:bg-white print:text-black print:p-0">
      <style jsx global>{`
        @media print {
          nav, footer, .no-print {
            display: none !important;
          }
          body {
            background-color: white !important;
            color: black !important;
          }
          .print-card {
            border: 1px solid #ccc !important;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
          }
          .print-gold {
            color: #997700 !important;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* ACTION BAR (NO-PRINT) */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 bg-surface p-4 rounded-xl border border-gold/30">
          <Link href="/events" className="text-gold font-sans text-sm hover:underline font-semibold">
            ← Back to Events Page
          </Link>
          <button
            onClick={handlePrint}
            className="bg-gold text-obsidian font-bold py-2.5 px-6 rounded-lg text-sm hover:bg-gold-light transition-all shadow-md active:scale-95"
          >
            🖨️ Print / Download PDF Proposal
          </button>
        </div>

        {/* PROPOSAL HEADER */}
        <div className="print-card bg-surface/90 border border-gold/40 p-8 sm:p-10 rounded-2xl shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gold/30 pb-6 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest print-gold">
                Official Event Proposal
              </span>
              <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-gold print-gold mt-1">
                Tarot Entertainment for Corporate &amp; Private Teams
              </h1>
              <p className="font-sans text-sm text-foreground/80 print:text-gray-700 mt-1">
                Austin Tarot Reader • www.austintarotreader.com
              </p>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-foreground/70 print:text-gray-600">
              <p>Prepared by: Daniel (Wharton MBA)</p>
              <p>Phone: (512) 547-7129</p>
              <p>Email: info@austintarotreader.com</p>
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="space-y-3 pt-2">
            <h2 className="font-editorial text-xl font-bold text-gold print-gold">
              Executive Overview
            </h2>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-foreground/90 print:text-gray-800">
              Elevate your corporate party, executive retreat, gala, or team celebration with high-engagement intuitive tarot readings. Combining 11+ years of reading experience with a Wharton MBA strategic background, Daniel delivers sophisticated, empowering, and memorable guest experiences.
            </p>
          </div>

          {/* PRICING & LOGISTICS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* PRICING STRUCTURE */}
            <div className="bg-surface-elevated print-card p-6 rounded-xl border border-white/10 space-y-3">
              <h3 className="font-editorial text-lg font-bold text-gold print-gold">
                Transparent Pricing Structure
              </h3>
              <ul className="font-sans text-sm space-y-2 text-foreground/90 print:text-gray-800">
                <li className="flex justify-between border-b border-white/10 pb-1">
                  <span>Hourly Rate:</span>
                  <strong className="text-gold print-gold">$150 / hour</strong>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1">
                  <span>Minimum Booking:</span>
                  <span>2 Hours ($300)</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1">
                  <span>Travel Fee (Austin Metro):</span>
                  <span>$50 Flat</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Deposit Required:</span>
                  <span>50% upon booking</span>
                </li>
              </ul>
            </div>

            {/* GUEST PACING OPTIONS */}
            <div className="bg-surface-elevated print-card p-6 rounded-xl border border-white/10 space-y-3">
              <h3 className="font-editorial text-lg font-bold text-gold print-gold">
                Guest Pacing &amp; Throughput
              </h3>
              <ul className="font-sans text-sm space-y-2 text-foreground/90 print:text-gray-800">
                <li>
                  <strong className="text-gold print-gold">5-Min Rapid Pulls:</strong> ~10-12 guests/hr (Best for large galas)
                </li>
                <li>
                  <strong className="text-gold print-gold">10-Min Insights:</strong> ~6 guests/hr (Balanced depth &amp; pace)
                </li>
                <li>
                  <strong className="text-gold print-gold">15-Min Executive Readings:</strong> 4 guests/hr (Intimate retreats)
                </li>
              </ul>
            </div>
          </div>

          {/* VENUE / BOOTH REQUIREMENTS */}
          <div className="bg-surface-elevated print-card p-6 rounded-xl border border-white/10 space-y-3 pt-4">
            <h3 className="font-editorial text-lg font-bold text-gold print-gold">
              Venue &amp; Table Setup Requirements
            </h3>
            <p className="font-sans text-sm text-foreground/90 print:text-gray-800">
              Daniel provides all professional tarot decks, tablecloths, and signage. The venue host or event planner only needs to provide:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs sm:text-sm text-foreground/80 print:text-gray-700">
              <div className="border border-gold/20 p-3 rounded-lg text-center">
                🪑 1 Small Table (2&apos;x2&apos; min) &amp; 2 Chairs
              </div>
              <div className="border border-gold/20 p-3 rounded-lg text-center">
                💡 Moderate Lighting (Well-lit corner)
              </div>
              <div className="border border-gold/20 p-3 rounded-lg text-center">
                🔇 Low-to-Moderate Ambient Noise Level
              </div>
            </div>
          </div>

          {/* CREDENTIALS & ASSURANCES */}
          <div className="pt-4 space-y-2 border-t border-gold/20">
            <h3 className="font-editorial text-lg font-bold text-gold print-gold">
              Professional Standards &amp; Credentials
            </h3>
            <ul className="font-sans text-xs sm:text-sm space-y-1.5 text-foreground/85 print:text-gray-700">
              <li>✓ <strong>11+ Years Experience:</strong> Trusted by top Austin venues, corporate clients, and private hosts.</li>
              <li>✓ <strong>Wharton MBA Perspective:</strong> Strategic, professional, articulate, and completely non-judgmental.</li>
              <li>✓ <strong>Punctuality &amp; Self-Reliance:</strong> Arrives 30 minutes prior to start time for setup and venue sync.</li>
            </ul>
          </div>

          {/* CONTACT / NEXT STEPS */}
          <div className="pt-6 border-t border-gold/30 text-center space-y-4">
            <h3 className="font-editorial text-xl font-bold text-gold print-gold">
              Ready to Reserve Your Event Date?
            </h3>
            <p className="font-sans text-sm text-foreground/80 print:text-gray-700">
              Contact Daniel directly to check date availability and lock in your rate.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-sans font-bold no-print">
              <a href="tel:+15125477129" className="bg-gold text-obsidian px-6 py-2.5 rounded-lg hover:bg-gold-light">
                Call (512) 547-7129
              </a>
              <a href="mailto:info@austintarotreader.com" className="bg-surface text-gold border border-gold/40 px-6 py-2.5 rounded-lg hover:bg-surface-overlay">
                Email Proposal Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
