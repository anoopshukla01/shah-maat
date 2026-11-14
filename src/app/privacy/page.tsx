import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-3xl mx-auto retro-card p-8 md:p-12 border-3 border-ink shadow-card">
        <span className="retro-badge bg-teal text-cream text-xs mb-3">
          STUDENT PRIVACY
        </span>
        <h1 className="font-headline text-4xl uppercase tracking-wider text-ink mb-6">
          PRIVACY &amp; DATA POLICY
        </h1>
        <div className="space-y-4 font-sans text-sm md:text-base text-ink/85 leading-relaxed">
          <p>
            1. Shah-Maat collects only the student credentials required to organize pairings and verify collegiate affiliation (Student Roll Number, IITM email, and Lichess handle).
          </p>
          <p>
            2. We never store personal attendance tracking, commercial tracking pixels, or monetization cookies on public pages.
          </p>
          <p>
            3. Tournament performance archives, Buchholz tiebreaks, and game notations are maintained publicly as part of institutional sporting records.
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

