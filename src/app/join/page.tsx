'use client';

import React from 'react';
import { siteSetting } from '@/content/seed';
import { TornEdge } from '@/components/ui/TornEdge';

export default function JoinPage() {
  const steps = [
    {
      step: '01',
      title: 'Enter your details',
      accent: 'text-olive-dark',
      desc: 'Fill out your official IIT Madras student roll number and primary email.',
      rotation: -1.5,
    },
    {
      step: '02',
      title: 'Pick your house and region',
      accent: 'text-brick',
      desc: 'Align with Mandakini, Sarang, Shaastra, Bhadra or Alakananda.',
      rotation: 1.2,
    },
    {
      step: '03',
      title: 'Add your chess IDs',
      accent: 'text-fuchsia',
      desc: 'Link your active Lichess and Chess.com usernames for Swiss arenas.',
      rotation: -2,
    },
    {
      step: '04',
      title: 'Promote your pawn',
      accent: 'text-crimson',
      desc: 'Submit your pledge to arbiters and graduate from unrated to certified member.',
      rotation: 1.5,
    },
    {
      step: '05',
      title: 'Join the community',
      accent: 'text-teal',
      desc: 'Hop into our WhatsApp group, Discord server, and start playing.',
      rotation: -1,
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-coral halftone-coral overflow-hidden flex flex-col justify-between pt-8">
      {/* Background Decorative Cloud Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute -top-12 left-10 w-96 h-48 opacity-25 text-cream fill-current" viewBox="0 0 100 100">
          <path d="M 20 60 A 20 20 0 0 1 50 40 A 25 25 0 0 1 85 55 A 15 15 0 0 1 80 80 L 20 80 Z" />
        </svg>
        <svg className="absolute top-1/3 -right-16 w-[480px] h-64 opacity-20 text-cream fill-current" viewBox="0 0 100 100">
          <path d="M 15 65 A 25 25 0 0 1 55 45 A 30 30 0 0 1 95 60 A 18 18 0 0 1 90 90 L 15 90 Z" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
        {/* Top Header Label */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <span className="retro-badge bg-mustard text-ink text-sm">
            HOW TO JOIN · MEMBERSHIP ONBOARDING
          </span>
          <a
            href={siteSetting.joinFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="retro-btn bg-ink text-cream hover:bg-ink-light px-6 py-2.5 text-sm font-bold tracking-wider"
          >
            OPEN OFFICIAL FORM ↗
          </a>
        </div>

        {/* Hero Section: Left outlined "MAKE YOUR MOVE" + Right 5 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Block: Outlined "MAKE YOUR MOVE" (~22vw text width) */}
          <div className="lg:col-span-4 flex flex-col items-start select-none">
            <h1 className="outlined-display-text text-[clamp(44px,5.8vw,86px)] leading-[0.9] font-bold text-left mb-4">
              MAKE<br />YOUR<br />MOVE
            </h1>
            <p className="font-sans text-ink font-semibold text-sm md:text-base max-w-xs leading-relaxed bg-cream/90 p-4 border-2 border-ink shadow-button rounded mb-6">
              Join the official chess collective of the IIT Madras BS Degree program. 5 simple steps to get your rating verified and seat at our Swiss tables.
            </p>

            {/* WhatsApp Green Notification Bubble */}
            <a
              href={siteSetting.whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-whatsapp hover:bg-whatsapp-dark text-cream p-4 flex items-center gap-3 w-full max-w-xs shadow-card rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="w-9 h-9 bg-cream text-whatsapp rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 border-2 border-ink">
                💬
              </div>
              <div className="text-left">
                <span className="font-headline text-xs tracking-wider block text-ink">
                  NEED HELP JOINING?
                </span>
                <span className="font-sans text-xs font-bold text-cream block underline">
                  Chat on WhatsApp Community
                </span>
              </div>
            </a>
          </div>

          {/* Right Block: FIVE Tilted Step Cards (~12vw wide, 34vh tall) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((st, index) => (
              <div
                key={st.step}
                className="retro-card bg-white text-ink p-4 flex flex-col justify-between border-3 border-ink shadow-card min-h-[220px] md:h-[34vh]"
                style={{ transform: `rotate(${st.rotation}deg)` }}
              >
                <div>
                  {/* Step Pill */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="retro-badge bg-ink text-cream text-[10px] font-bold">
                      STEP {st.step}
                    </span>
                    {index < steps.length - 1 && (
                      <span className="text-ink text-lg font-bold hidden md:inline" aria-hidden="true">
                        ⤷
                      </span>
                    )}
                  </div>

                  {/* 5vw Numeral */}
                  <span className={`font-headline text-[clamp(36px,4.5vw,60px)] leading-none ${st.accent} block mb-1 font-bold tabular-nums`}>
                    {st.step}
                  </span>

                  {/* Permanent Marker Title */}
                  <h3 className="font-marker text-base md:text-lg text-ink leading-tight mb-2">
                    {st.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-ink/85 font-medium leading-snug">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Small Cream "Window" Mock-ups (form fields & pawn promotion dialog, purely decorative) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto my-12 select-none">
          {/* Window 1: Form Fields Mockup */}
          <div className="retro-card bg-cream p-5 border-3 border-ink shadow-card -rotate-1">
            <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-4 bg-cream-dark px-3 py-1 -mx-2 -mt-2">
              <span className="font-headline text-xs uppercase tracking-wider text-ink font-bold">
                MEMBER_APPLICATION_V3.EXE
              </span>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-crimson border border-ink" />
                <span className="w-3 h-3 rounded-full bg-mustard border border-ink" />
                <span className="w-3 h-3 rounded-full bg-teal border border-ink" />
              </div>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <div>
                <label className="font-headline text-xs uppercase tracking-wider text-ink block mb-1">
                  FULL NAME (AS REGISTERED AT IITM):
                </label>
                <div className="w-full bg-white border-2 border-ink p-2 text-ink/60 font-mono">
                  ANAND VISWANATHAN [SAMPLE STUDENT]
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-headline text-xs uppercase tracking-wider text-ink block mb-1">
                    STUDENT ROLL NO:
                  </label>
                  <div className="w-full bg-white border-2 border-ink p-2 text-ink/60 font-mono">
                    22F1000892
                  </div>
                </div>
                <div>
                  <label className="font-headline text-xs uppercase tracking-wider text-ink block mb-1">
                    HOUSE AFFILIATION:
                  </label>
                  <div className="w-full bg-white border-2 border-ink p-2 text-ink font-bold">
                    MANDAKINI ▼
                  </div>
                </div>
              </div>
              <div>
                <label className="font-headline text-xs uppercase tracking-wider text-ink block mb-1">
                  LICHESS / CHESS.COM USERNAME:
                </label>
                <div className="w-full bg-white border-2 border-ink p-2 text-ink/60 font-mono">
                  @vishy_rapid_king
                </div>
              </div>
            </div>
          </div>

          {/* Window 2: Pawn-Promotion Dialog Mockup */}
          <div className="retro-card bg-white p-5 border-3 border-ink shadow-card rotate-1">
            <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-4 bg-mustard px-3 py-1 -mx-2 -mt-2">
              <span className="font-headline text-xs uppercase tracking-wider text-ink font-bold">
                PAWN PROMOTION DIALOG
              </span>
              <span className="retro-badge bg-crimson text-white text-[10px] font-bold">
                RANK 8 REACHED
              </span>
            </div>

            <div className="text-center py-2">
              <p className="font-headline text-base uppercase text-ink mb-3 font-bold">
                SELECT PIECE TO PROMOTE YOUR APPLICATION:
              </p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-14 h-14 bg-crimson border-2 border-ink shadow-button flex items-center justify-center text-white text-2xl font-bold cursor-pointer hover:scale-105">
                  ♛
                </div>
                <div className="w-14 h-14 bg-mustard border-2 border-ink shadow-button flex items-center justify-center text-ink text-2xl font-bold cursor-pointer hover:scale-105">
                  ♜
                </div>
                <div className="w-14 h-14 bg-teal border-2 border-ink shadow-button flex items-center justify-center text-white text-2xl font-bold cursor-pointer hover:scale-105">
                  ♝
                </div>
                <div className="w-14 h-14 bg-olive border-2 border-ink shadow-button flex items-center justify-center text-white text-2xl font-bold cursor-pointer hover:scale-105">
                  ♞
                </div>
              </div>
              <div className="bg-cream p-2 border border-ink text-xs font-mono text-ink/90 font-bold">
                STATUS: PROMOTED TO ACTIVE COMPETITIVE MEMBER
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA Box */}
        <div className="text-center my-12">
          <a
            href={siteSetting.joinFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="retro-btn bg-saffron hover:bg-saffron-light text-white px-10 py-5 text-xl font-bold tracking-wider inline-flex items-center gap-3 shadow-card"
          >
            <span>CLICK HERE TO SUBMIT GOOGLE FORM</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Torn Edge Transition to Marquee Strip with Mustard Backing */}
      <TornEdge position="bottom" fillColor="#D81B28" mustardBacking={true} height={40} />

      {/* Bold Red Marquee Strip at the Bottom */}
      <div className="w-full bg-crimson py-4 border-t-3 border-ink overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-headline text-white text-[clamp(20px,2.8vw,38px)] uppercase tracking-wider mx-6 flex items-center gap-6 font-bold"
            >
              <span>PROMOTE YOUR PAWN</span>
              <span className="text-mustard">★</span>
              <span>NO ELO MINIMUM REQUIRED</span>
              <span className="text-white">★</span>
              <span>IIT MADRAS BS CHESS</span>
              <span className="text-mustard">★</span>
              <span>CHITRAKUT RAPID REGISTER</span>
              <span className="text-white">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

