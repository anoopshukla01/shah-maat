// Retro Indian Poster Bold Red & Yellow Footer

import React from 'react';
import Link from 'next/link';
import { TornEdge } from './TornEdge';
import { MandalaLinePattern } from './PatternBackgrounds';
import { ChessClock } from './ChessClock';
import { StickerImage } from './StickerImage';
import { siteSetting } from '@/content/seed';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-crimson text-white overflow-hidden">
      {/* Torn Edge rising from section above into mustard strip */}
      <TornEdge position="top" fillColor="#D81B28" mustardBacking={true} height={44} />

      {/* Gold Mandala Line Art at 18% opacity */}
      <MandalaLinePattern strokeColor="#FFD23F" opacity={0.18} />

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12">
        {/* Top: Giant Distressed Mustard Blackletter Wordmark with White Offset Shadow */}
        {/* Wordmark "SHAH-MAAT" about 55vw wide, left, with stopwatch icon replacing the "A" in MAAT */}
        <div className="mb-12 max-w-[clamp(320px,55vw,840px)] select-none">
          <h2 className="flex items-center gap-1.5 md:gap-3 font-blackletter text-[clamp(44px,7.5vw,110px)] text-mustard tracking-tight leading-none drop-shadow-[5px_5px_0px_#FFFFFF]">
            <span>SHAH-M</span>
            <div className="w-[clamp(36px,5.5vw,78px)] aspect-square relative inline-flex items-center justify-center">
              <ChessClock size="100%" variant="logo" isTicking={false} showHands={false} />
            </div>
            <span>AT</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-white/90 tracking-widest uppercase mt-2 font-bold">
            IIT MADRAS BS DEGREE CHESS SOCIETY · ESTD {siteSetting.foundedYear}
          </p>
        </div>

        {/* Middle: Three Link Columns + Right Chessboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Three Link Columns in pure white Anton at ~3.6vw with 4px mustard underline */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                ABOUT
              </Link>
              <Link
                href="/team"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                TEAM
              </Link>
              <Link
                href="/school"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                SCHOOL OF CHESS
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <Link
                href="/events"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                EVENTS
              </Link>
              <Link
                href="/calendar"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                CALENDAR
              </Link>
              <Link
                href="/mentoring"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                MENTORING
              </Link>
              <a
                href="#community"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                COMMUNITY
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <Link
                href="/join"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                JOIN NOW
              </Link>
              <Link
                href="/terms"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                TERMS
              </Link>
              <Link
                href="/privacy"
                className="font-headline text-[clamp(20px,3.2vw,42px)] text-white uppercase tracking-wide leading-none hover:text-mustard transition-colors pb-1 border-b-4 border-mustard w-max"
              >
                PRIVACY
              </Link>
            </div>
          </div>

          {/* Right Column: Pure White rounded card with red/cream chessboard (~35vw wide, rotated 6 deg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end select-none">
            <div className="relative w-full max-w-[clamp(280px,35vw,440px)] bg-white rounded-2xl border-3 border-ink shadow-card rotate-6 transition-transform hover:rotate-3 p-5">
              {/* Gold Ring Knight Badge at top-right corner */}
              <div
                className="absolute -top-6 -right-6 w-20 h-20 aspect-square z-30 pointer-events-none"
                aria-hidden="true"
              >
                <StickerImage src="/art/knight-badge.png" fallbackName="knight-badge" width={80} height={80} />
              </div>

              {/* Red & White Chessboard Artwork */}
              <div className="w-full aspect-square border-3 border-ink rounded-lg overflow-hidden bg-ink p-2 shadow-button">
                <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                  {Array.from({ length: 16 }).map((_, i) => {
                    const isRed = (Math.floor(i / 4) + (i % 4)) % 2 === 1;
                    return (
                      <div
                        key={i}
                        className={isRed ? 'bg-crimson' : 'bg-white'}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Two Saffron & Gold Ribbon Banners across the board */}
              <div className="absolute inset-x-2 bottom-12 flex flex-col gap-2 z-20 items-center">
                <a
                  href={siteSetting.socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-saffron hover:bg-saffron-light border-2 border-ink shadow-button py-2 px-6 -rotate-2 hover:rotate-0 transition-transform text-center w-[90%]"
                >
                  <span className="font-headline text-white text-base md:text-lg uppercase tracking-wider block font-bold">
                    STAY IN THE LOOP ↗
                  </span>
                </a>
                <a
                  href={siteSetting.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-mustard hover:bg-mustard-light border-2 border-ink shadow-button py-2 px-6 rotate-2 hover:rotate-0 transition-transform text-center w-[90%]"
                >
                  <span className="font-headline text-ink text-base md:text-lg uppercase tracking-wider block font-bold">
                    FOLLOW THE GAMES ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Canary Yellow Marquee Strip: "LEARN ✦ PLAY ✦ COMPETE ✦ BELONG" (~8vh tall, Anton, ink & red text) */}
      <div className="w-full bg-mustard border-t-3 border-ink py-3 min-h-[56px] flex items-center overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-headline text-[clamp(20px,3.8vw,48px)] text-ink uppercase tracking-widest mx-6 font-bold"
            >
              LEARN <span className="text-crimson">✦</span> PLAY <span className="text-white">✦</span> COMPETE <span className="text-crimson">✦</span> BELONG
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Pure White Strip (~8vh tall) with Ink Anton text */}
      <div className="w-full bg-white border-t-3 border-ink py-4 h-[8vh] min-h-[58px] flex items-center justify-center select-none overflow-hidden">
        <p className="font-headline text-ink text-[clamp(14px,2.2vw,28px)] uppercase tracking-wider text-center px-4 leading-none font-bold">
          ✦ SHAH-MAAT CHESS SOCIETY ✦ ALL RIGHTS RESERVED ✦ ESTD {siteSetting.foundedYear} ✦
        </p>
      </div>
    </footer>
  );
};
