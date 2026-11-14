'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChessClock } from './ChessClock';
import { siteSetting } from '@/content/seed';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Calendar', href: '/calendar' },
    { label: 'School of Chess', href: '/school' },
    { label: 'Mentoring', href: '/mentoring' },
    { label: 'Join', href: '/join' },
  ];

  return (
    <>
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-saffron focus:text-cream focus:font-headline focus:border-3 focus:border-ink focus:shadow-button"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full bg-white border-b-3 border-ink shadow-sm select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 md:h-20 flex items-center justify-between">
          {/* Logo with blackletter SHAH [clock] MAAT in postage stamp frame */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ink"
            aria-label="Shah-Maat Home"
          >
            <div className="postage-stamp bg-white px-3 py-1 flex items-center gap-1.5 transition-transform group-hover:-rotate-1">
              <span className="font-blackletter text-2xl md:text-3xl text-ink font-bold tracking-tight">
                SHAH
              </span>
              <div className="w-6 h-6 md:w-7 md:h-7 relative flex items-center justify-center">
                <ChessClock size={26} variant="logo" isTicking={false} showHands={false} />
              </div>
              <span className="font-blackletter text-2xl md:text-3xl text-crimson font-bold tracking-tight">
                MAAT
              </span>
            </div>
            <div className="hidden sm:flex flex-col ml-1">
              <span className="font-headline text-[10px] text-crimson tracking-widest leading-none font-bold">
                IIT MADRAS BS
              </span>
              <span className="font-sans text-[9px] text-ink/80 uppercase tracking-widest leading-none font-bold">
                CHESS SOCIETY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-headline uppercase text-sm tracking-wider transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-crimson border-crimson'
                      : 'text-ink border-transparent hover:text-saffron hover:border-saffron'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Saffron Join Now Button - ALWAYS VISIBLE */}
            <Link
              href="/join"
              className="retro-btn bg-saffron hover:bg-saffron-light text-cream px-4 md:px-5 py-2 text-xs md:text-sm font-bold tracking-wider"
            >
              JOIN NOW
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ink border-2 border-ink bg-mustard shadow-button rounded focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-dark border-t-3 border-ink px-4 py-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-headline uppercase text-lg tracking-wider px-3 py-2 border-2 border-ink rounded ${
                      isActive ? 'bg-mustard text-ink shadow-button' : 'bg-cream text-ink hover:bg-cream-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t-2 border-ink/30 flex flex-col gap-3">
                <a
                  href={siteSetting.whatsappCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-whatsapp text-cream py-2.5 text-center text-sm font-bold"
                >
                  WHATSAPP COMMUNITY
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

