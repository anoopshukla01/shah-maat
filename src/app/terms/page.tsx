import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-3xl mx-auto retro-card p-8 md:p-12 border-3 border-ink shadow-card">
        <span className="retro-badge bg-mustard text-ink text-xs mb-3">
          SOCIETY CHARTER
        </span>
        <h1 className="font-headline text-4xl uppercase tracking-wider text-ink mb-6">
          TERMS OF COMPETITION &amp; FAIR PLAY
        </h1>
        <div className="space-y-4 font-sans text-sm md:text-base text-ink/85 leading-relaxed">
          <p>
            1. All participants in Shah-Maat tournaments must be registered students, faculty, or alumni of the IIT Madras BS Degree program.
          </p>
          <p>
            2. The use of chess engines, external assistance, opening book databases during live rapid/blitz play, or third-party coaching is strictly prohibited.
          </p>
          <p>
            3. All games are subject to automated statistical fair-play analysis by accredited community arbiters.
          </p>
          <p>
            4. Mutual respect, ethical sportsmanship, and cordial conduct on digital platforms and physical boards are fundamental tenets of the society.
          </p>
        </div>
        <div className="mt-8 pt-6 border-t-2 border-ink/20">
          <Link href="/" className="retro-btn bg-saffron text-cream px-6 py-2.5 text-xs font-bold">
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

