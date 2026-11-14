'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StickerImage } from '@/components/ui/StickerImage';
import { TornEdge } from '@/components/ui/TornEdge';
import { MandalaLinePattern } from '@/components/ui/PatternBackgrounds';

export default function AboutPage() {
  const timelineMilestones = [
    {
      year: '2024',
      term: 'Founding Term',
      title: 'The Spark & Constitution',
      description:
        'A passionate group of IIT Madras BS students founded Shah-Maat to bridge distant campuses and time zones through competitive chess. Ratified by the Student Affairs Council.',
      tag: 'ORIGINS',
      color: 'bg-mustard text-ink',
    },
    {
      year: '2025',
      term: 'Spring & Autumn',
      title: 'The Inter-House League System',
      description:
        'Launched the 5-house competitive ecosystem (Mandakini, Sarang, Shaastra, Bhadra, Alakananda) and crossed 1,200 active student arbiters and competitors on Lichess.',
      tag: 'EXPANSION',
      color: 'bg-teal text-cream',
    },
    {
      year: '2026',
      term: 'Current Semester',
      title: 'Grandmaster Simuls & Chitrakut Open',
      description:
        'Inaugurated structured three-tier mentoring cohorts, live streaming relays with digital scoreboards, and the semester-flagship Chitrakut Open Rapid Championship.',
      tag: 'EXCELLENCE',
      color: 'bg-crimson text-cream',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#F6EAD3] py-12 md:py-24 px-4 overflow-hidden">
      {/* Background Mandala & Halftone Paper Textures */}
      <MandalaLinePattern strokeColor="#E8A51D" opacity={0.14} />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(18, 11, 12, 0.22) 13%, transparent 14%)',
          backgroundSize: '15px 15px',
        }}
      />

      {/* =========================================================
          BACKGROUND GRAPHICS (User Supplied Assets)
      ========================================================= */}

      {/* 1. Royal Golden Crown Watermark (Centered Behind Header) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-4 md:top-8 w-[clamp(280px,38vw,480px)] pointer-events-none select-none z-0 opacity-20 filter drop-shadow-[0px_4px_16px_rgba(232,165,29,0.35)]"
        aria-hidden="true"
      >
        <Image
          src="/art/golden-crown.png"
          alt=""
          width={480}
          height={320}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 2. Ancient Strategy Codex & Compass (Top Right Accent) */}
      <div
        className="absolute -right-10 sm:-right-4 top-14 md:top-10 w-[clamp(190px,26vw,340px)] pointer-events-none select-none z-0 rotate-6 opacity-90 drop-shadow-[8px_8px_0px_#120B0C]"
        aria-hidden="true"
      >
        <Image
          src="/art/ancient-chess-book.png"
          alt=""
          width={340}
          height={227}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 3. The King Da Vinci Golden Ratio Blueprint Scroll (Mid-Left Watermark) */}
      <div
        className="absolute -left-12 sm:-left-6 top-[28%] w-[clamp(240px,32vw,400px)] pointer-events-none select-none z-0 -rotate-3 opacity-35 md:opacity-45 drop-shadow-[6px_6px_0px_rgba(18,11,12,0.35)] hidden sm:block"
        aria-hidden="true"
      >
        <Image
          src="/art/king-blueprint-scroll.png"
          alt=""
          width={400}
          height={266}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 4. Golden Chess Pieces Lineup (Spanning across Background behind Pillars) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[52%] w-[clamp(320px,90vw,1100px)] pointer-events-none select-none z-0 opacity-20 md:opacity-30 filter drop-shadow-[0px_4px_10px_rgba(18,11,12,0.25)]"
        aria-hidden="true"
      >
        <Image
          src="/art/chess-pieces-lineup.png"
          alt=""
          width={1100}
          height={550}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 5. Second Golden Crown Accent (Lower Right near Timeline) */}
      <div
        className="absolute -right-8 bottom-[22%] w-[clamp(180px,22vw,300px)] pointer-events-none select-none z-0 rotate-12 opacity-25 hidden lg:block"
        aria-hidden="true"
      >
        <Image
          src="/art/golden-crown.png"
          alt=""
          width={300}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 6. Grand Stone Knight Statue with Royal Crimson Drape (Right Background Feature) */}
      <div
        className="absolute -right-12 md:-right-6 top-[22%] w-[clamp(260px,36vw,500px)] pointer-events-none select-none z-0 opacity-45 md:opacity-65 filter drop-shadow-[8px_8px_0px_rgba(18,11,12,0.4)]"
        aria-hidden="true"
      >
        <Image
          src="/art/statue-knight-crimson.png"
          alt=""
          width={500}
          height={750}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Banner */}
        <div className="text-center mb-16">
          <span className="retro-badge bg-crimson text-white mb-3 font-bold">
            HERITAGE &amp; MISSION · IIT MADRAS BS
          </span>
          <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-wider text-ink mb-4 font-bold">
            ABOUT SHAH-MAAT
          </h1>
          <p className="font-sans text-base md:text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Chess was born in India. We bring its strategic grandeur and electrifying tactical fury to every corner of the IIT Madras BS student community.
          </p>
        </div>

        {/* Section 1: Purpose & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card: Our Purpose */}
          <div className="retro-card p-6 md:p-8 bg-white -rotate-1">
            <span className="retro-badge bg-crimson text-white text-xs mb-3 font-bold">
              OUR PURPOSE
            </span>
            <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink mb-3 font-bold">
              Grassroots Love, Grandmaster Rigor
            </h2>
            <p className="font-sans text-sm md:text-base text-ink/85 leading-relaxed font-medium">
              As an online-first degree community spanning thousands of learners across India and abroad, Shah-Maat turns the 64 squares into our central quad. We welcome unrated beginners learning their first pawn levers alongside titled experts preparing for national university olympiads.
            </p>
          </div>

          {/* Card: Our Vision */}
          <div className="retro-card p-6 md:p-8 bg-white rotate-1">
            <span className="retro-badge bg-mustard text-ink text-xs mb-3 font-bold">
              OUR VISION
            </span>
            <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink mb-3 font-bold">
              Cultivating India’s Sharpest Minds
            </h2>
            <p className="font-sans text-sm md:text-base text-ink/85 leading-relaxed font-medium">
              We envision an ecosystem where analytical calculation, ethical sportsmanship, and creative audacity flourish hand-in-hand. We train student arbiters, publish community codices, and ensure every student gets a seat at the clock.
            </p>
          </div>
        </div>

        {/* Section 2: What We Do */}
        <div className="retro-card p-8 md:p-10 bg-white mb-16 border-3 border-ink shadow-card">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="retro-badge bg-mustard text-ink text-xs mb-2">
              SOCIETY PILLARS
            </span>
            <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-wider text-ink">
              WHAT WE DO EVERY WEEK
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-2 border-ink p-4 bg-cream-dark/40 rounded shadow-button">
              <h3 className="font-headline text-xl uppercase tracking-wider text-crimson mb-2">
                1. Swiss Rapids
              </h3>
              <p className="font-sans text-xs text-ink/80 leading-relaxed">
                Bi-weekly 10+5 and 15+10 classical Swiss tournaments with FIDE fair-play screening.
              </p>
            </div>

            <div className="border-2 border-ink p-4 bg-cream-dark/40 rounded shadow-button">
              <h3 className="font-headline text-xl uppercase tracking-wider text-teal mb-2">
                2. Masterclasses
              </h3>
              <p className="font-sans text-xs text-ink/80 leading-relaxed">
                Weekly opening architecture lectures and endgame technique drills across 3 cohorts.
              </p>
            </div>

            <div className="border-2 border-ink p-4 bg-cream-dark/40 rounded shadow-button">
              <h3 className="font-headline text-xl uppercase tracking-wider text-saffron-dark mb-2">
                3. Inter-House
              </h3>
              <p className="font-sans text-xs text-ink/80 leading-relaxed">
                High-stakes 5v5 team battles between Mandakini, Sarang, Shaastra, and Bhadra.
              </p>
            </div>

            <div className="border-2 border-ink p-4 bg-cream-dark/40 rounded shadow-button">
              <h3 className="font-headline text-xl uppercase tracking-wider text-olive mb-2">
                4. Kaapi &amp; Check
              </h3>
              <p className="font-sans text-xs text-ink/80 leading-relaxed">
                Saturday morning casual blitz, game analysis, and banter over piping hot filter coffee.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="retro-badge bg-crimson text-cream text-xs mb-2">
              OUR CHRONICLE
            </span>
            <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-wider text-ink">
              SOCIETY TIMELINE
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-1 before:bg-ink hidden sm:block" />

          <div className="space-y-8">
            {timelineMilestones.map((m, i) => (
              <div
                key={m.year}
                className="retro-card p-6 md:p-8 bg-cream border-3 border-ink flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                style={{ transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 ${m.color} border-3 border-ink shadow-button flex flex-col items-center justify-center font-headline font-bold flex-shrink-0`}>
                    <span className="text-2xl leading-none">{m.year}</span>
                    <span className="text-[10px] font-sans tracking-widest">{m.term.split(' ')[0]}</span>
                  </div>
                  <div>
                    <span className="retro-badge bg-ink text-cream text-[10px] mb-1">
                      {m.tag}
                    </span>
                    <h3 className="font-headline text-2xl uppercase tracking-wider text-ink">
                      {m.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-sm text-ink/80 max-w-md leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-saffron halftone-saffron p-8 md:p-12 border-3 border-ink shadow-card">
          <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-wider text-cream mb-4">
            BE PART OF OUR NEXT CHAPTER
          </h2>
          <p className="font-sans text-cream/90 text-sm md:text-base max-w-lg mx-auto mb-6">
            Join hundreds of peers advancing their chess vision while conquering their degrees.
          </p>
          <Link
            href="/join"
            className="retro-btn bg-ink text-cream hover:bg-cream hover:text-ink px-8 py-3.5 text-base font-bold tracking-wider"
          >
            BECOME A MEMBER TODAY
          </Link>
        </div>
      </div>
    </div>
  );
}

