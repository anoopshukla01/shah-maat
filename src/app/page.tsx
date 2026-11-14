'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { siteSetting, events, learningResources } from '@/content/seed';
import { formatISTDate, formatISTTime, REFERENCE_DATE } from '@/lib/date';
import { Skyline } from '@/components/ui/Skyline';
import { ChessClock } from '@/components/ui/ChessClock';
import { StickerImage } from '@/components/ui/StickerImage';
import { TornEdge } from '@/components/ui/TornEdge';
import { PaisleyPeacockPattern, MandalaLinePattern } from '@/components/ui/PatternBackgrounds';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { CountUpStat } from '@/components/ui/CountUpStat';
import { EmptyState } from '@/components/ui/EmptyState';

export default function HomePage() {
  // Upcoming events
  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const nextEvent = upcomingEvents[0];

  // Completed events for results
  const pastEvents = events.filter((e) => e.status === 'completed');

  // Featured resource: Rook & Pawn Codex
  const featuredResource =
    learningResources.find((r) => r.slug === 'endgame-mastery-rook-pawn-codex') ||
    learningResources[0];

  // Next up strip state-aware button
  const currentTimeMs = REFERENCE_DATE.getTime();
  const nextEventOpensAtMs = nextEvent ? new Date(nextEvent.opensAt).getTime() : 0;
  const isCheckInOpen = nextEvent && currentTimeMs >= nextEventOpensAtMs;

  // Step cards for the GSAP Stacked Card Scroll Animation
  const stepCards = [
    {
      step: '01',
      phase: 'CAMPUS ONBOARDING',
      title: 'CLAIM YOUR BOARD',
      color: '#A8A02E', // Olive
      tagline: 'STUDENT REGISTRATION & WHATSAPP WAR-ROOM',
      description:
        'Step into Chennai’s fiercest collegiate chess collective. Verify your IIT Madras BS credentials, link your Lichess and Chess.com handles, and gain instant access to our active community chats and weekly battle schedules.',
      meta: ['ROLL-CALL VERIFIED', 'ACTIVE WHATSAPP', 'ZERO ADMISSION FEES'],
      buttonText: 'CLAIM MEMBERSHIP',
      buttonHref: '/join',
      sticker: '/art/knight-sunglasses.png',
    },
    {
      step: '02',
      phase: 'ELO BENCHMARKING',
      title: 'VERIFY YOUR RATING',
      color: '#B84A32', // Brick
      tagline: 'PROVE YOUR CALCULATIONS UNDER 5-MINUTE BLITZ',
      description:
        'No self-reported numbers. Enter our monthly blitz calibration arena to establish your verified Shah-Maat Elo bracket. We calibrate everyone from passionate 1200 beginners to 2200+ FIDE tournament veterans.',
      meta: ['5+3 BLITZ CALIBRATION', 'INTERNAL ELO BOARD', 'ARBITER SIGN-OFF'],
      buttonText: 'VIEW CALENDAR',
      buttonHref: '/calendar',
      sticker: '/art/kaapi-pour.png',
    },
    {
      step: '03',
      phase: 'STRUCTURED LEARNING',
      title: 'JOIN A COHORT',
      color: '#C42FA8', // Fuchsia
      tagline: 'TACTICAL CODICES, ENGINE DECODES & LIVE SPARRING',
      description:
        'Study under curated weekly cohorts led by university arbiters and veteran seniors. Master endgames without engine crutches, analyze classic Soviet matches, and dissect your blunders over hot filter coffee.',
      meta: ['WEEKLY LIVE DRILLS', 'ROOK CODEX ACCESS', 'COACH REVIEWS'],
      buttonText: 'EXPLORE SCHOOL',
      buttonHref: '/school',
      sticker: '/art/students-chess.png',
    },
    {
      step: '04',
      phase: 'CAMPUS COMPETITION',
      title: 'COMPETE & CLIMB',
      color: '#7B4BD6', // Violet
      tagline: 'SWISS CUPS, ARENA BLITZ & TROPHY CLASHES',
      description:
        'Every Saturday is battle day. Fight across our flagship Kaapi & Check Swiss tournament, represent IIT Madras BS against international university societies, and hoist the semester champion trophy.',
      meta: ['FIDE HYBRID FORMAT', 'CASH PRIZE POOLS', 'PHYSICAL TROPHIES'],
      buttonText: 'UPCOMING CLASHES',
      buttonHref: '/events',
      sticker: '/art/trophy.png',
    },
    {
      step: '05',
      phase: 'LEADERSHIP & TENURE',
      title: 'LEAD & ARBITRATE',
      color: '#2F6FD8', // Blue
      tagline: 'SHAPE CHESS CULTURE ACROSS THE GLOBAL BS PROGRAM',
      description:
        'Become an official Society Arbiter. Direct major Swiss championships, run live Twitch & YouTube broadcasts with GM commentary, mentor junior cohorts, and leave your mark on the permanent society archive.',
      meta: ['ARBITER BADGE', 'BROADCAST CREW', 'TENURE HALL OF FAME'],
      buttonText: 'MEET THE TEAM',
      buttonHref: '/team',
      sticker: '/art/archive-portrait.png',
    },
  ];

  // GSAP ScrollTrigger Stacked Cards Animation (Requested by User)
  useEffect(() => {
    let ctx: any;

    const setupCardsAnimation = async () => {
      if (typeof window === 'undefined') return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Seleccionar todas las tarjetas y definir la distancia de stick
        const cards = gsap.utils.toArray('.c-card');
        if (!cards || cards.length < 2) return;
        const lastCardIndex = cards.length - 1;

        // Crear el ScrollTrigger para la primera y última tarjeta
        const firstCardST = ScrollTrigger.create({
          trigger: cards[1] as HTMLElement,
          start: 'center center',
        });

        const lastCardST = ScrollTrigger.create({
          trigger: cards[cards.length - 1] as HTMLElement,
          start: 'center center',
        });

        // Iterar sobre cada tarjeta
        cards.forEach((card, index) => {
          const scale = index === lastCardIndex ? 1 : 0.5;
          const scaleDown = gsap.to(card as HTMLElement, {
            scale: scale,
            ease: 'none',
          });

          ScrollTrigger.create({
            trigger: card as HTMLElement,
            start: 'top top',
            end: () => lastCardST.start,
            pin: true,
            pinSpacing: false,
            scrub: 0.5,
            ease: 'none',
            animation: scaleDown,
            toggleActions: 'restart none none reverse',
          } as any);
        });
      });
    };

    setupCardsAnimation();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-cream">
      {/* =========================================================
          SECTION 1: HERO (min-height 100vh) - Vibrant Light & Bold Theme
          Saffron, Red, Yellow & White sunburst sky with halftone.
          Skyline layers fill bottom 45% with temple silhouettes & palm trees.
          Wordmark SHAH [clock] MAAT (~58vw) in pure white with crimson shadow.
          Bold red ribbon "MAKE YOUR NEXT MOVE." (~26vw).
          Tilted yellow banner (-6 deg, ~55vw): CHESS WAS BORN IN INDIA.
          Big clock sticker (~34vw diameter) cropped ~12% on right.
      ========================================================= */}
      <section className="relative min-h-screen w-full bg-gradient-to-b from-crimson via-saffron to-mustard halftone-saffron flex flex-col justify-between overflow-hidden pt-6 pb-0">
        {/* Ambient warm sunburst glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crimson/15 to-mustard/40 pointer-events-none" />

        {/* Skyline Layers filling bottom 45% */}
        <Skyline />

        {/* Central Brand Composition */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center mt-2 md:mt-4">
          {/* Main Wordmark Container */}
          <div className="relative inline-block w-[clamp(320px,58vw,860px)]">
            {/* Postage Stamp Offset Background behind right half (Reference Image 1) */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[120%] bg-[#7A1D28] border-4 border-white p-2 -rotate-2 pointer-events-none -z-10 hidden sm:block shadow-card"
              style={{
                boxShadow: '8px 8px 0px #120B0C',
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full border-2 border-dashed border-[#FFD23F]/60" />
            </div>

            {/* Wordmark: SHAH [clock] MAAT in Golden Yellow with thick Ink Stroke and Crimson Shadow (matching Reference Image 1) */}
            <h1
              className="flex items-center justify-center gap-2 md:gap-4 font-blackletter text-[clamp(44px,9.5vw,130px)] tracking-tight leading-none py-2 select-none"
              style={{
                color: '#FFD23F',
                WebkitTextStroke: 'clamp(2px, 0.28vw, 4px) #120B0C',
                textShadow: '4px 4px 0px #120B0C, 8px 8px 0px #7A1D28',
              }}
            >
              <span>SHAH</span>
              <div className="w-[clamp(40px,7.5vw,100px)] aspect-square relative flex items-center justify-center animate-wobble">
                <ChessClock size="100%" variant="logo" isTicking={true} />
              </div>
              <span>MAAT</span>
            </h1>
          </div>

          {/* Bold Red Ribbon "MAKE YOUR NEXT MOVE." (~26vw wide) */}
          <div className="mt-2 w-[clamp(240px,28vw,420px)] bg-crimson border-3 border-ink shadow-button py-1.5 px-4 rotate-1 z-20">
            <span className="font-headline text-[clamp(14px,1.8vw,26px)] text-white uppercase tracking-widest block font-bold">
              MAKE YOUR NEXT MOVE.
            </span>
          </div>

          {/* Tilted Bold Yellow Banner (-6 degrees, ~55vw wide, ink Anton text) */}
          <div className="mt-4 md:mt-6 w-[clamp(300px,55vw,780px)] bg-mustard border-3 border-ink shadow-card py-2 md:py-3 px-4 md:px-6 -rotate-6 z-20 transition-transform hover:-rotate-3">
            <p className="font-headline text-[clamp(14px,1.9vw,28px)] text-ink uppercase tracking-wide leading-tight font-bold">
              CHESS WAS BORN IN INDIA. JOIN THE GAME. MAKE YOUR MOVE.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 z-20">
            <Link
              href="/join"
              className="retro-btn bg-crimson hover:bg-crimson-light text-white px-8 py-3.5 text-base md:text-lg font-bold tracking-wider shadow-button"
            >
              JOIN NOW
            </Link>
            <a
              href="#upcoming-events"
              className="retro-btn bg-white hover:bg-mustard text-ink px-6 py-3.5 text-base md:text-lg font-bold tracking-wider shadow-button"
            >
              SEE WHAT&apos;S ON ↓
            </a>
          </div>
        </div>

        {/* Hero Stickers Bombing */}
        {/* Big Clock Sticker on the Right (~34vw diameter, cropped ~12% off right edge, rotated 8 deg) */}
        <div
          className="absolute -right-[4vw] top-[28vh] md:top-[22vh] w-[clamp(200px,34vw,480px)] aspect-square z-20 pointer-events-none rotate-8 select-none"
          aria-hidden="true"
        >
          <StickerImage
            src="/art/hero-clock-real.png"
            fallbackName="clock"
            width={480}
            height={480}
            rotation={8}
            priority
          />
        </div>

        {/* Queen Sticker (~28vh tall) beside the clock */}
        <div
          className="absolute right-[18vw] md:right-[22vw] top-[48vh] h-[clamp(160px,28vh,340px)] w-auto z-20 pointer-events-none -rotate-6 select-none hidden sm:block"
          aria-hidden="true"
        >
          <StickerImage
            src="/art/queen.png"
            fallbackName="queen"
            width={240}
            height={340}
            rotation={-6}
          />
        </div>

        {/* Rangoli Wheel (~12vw) beside the clock */}
        <div
          className="absolute right-[28vw] md:right-[32vw] top-[26vh] w-[clamp(80px,12vw,160px)] aspect-square z-15 pointer-events-none rotate-12 select-none animate-spin-slow hidden md:block"
          aria-hidden="true"
        >
          <StickerImage
            src="/art/rangoli-wheel.png"
            fallbackName="rangoli-wheel"
            width={160}
            height={160}
          />
        </div>

        {/* Pawn + King Cluster (~14vw) bottom-left */}
        <div
          className="absolute left-[3vw] md:left-[5vw] bottom-[10vh] w-[clamp(110px,15vw,220px)] z-25 pointer-events-none rotate-3 select-none"
          aria-hidden="true"
        >
          <StickerImage
            src="/art/king-pawn-cluster.png"
            fallbackName="pawns"
            width={220}
            height={220}
            rotation={3}
          />
        </div>

        {/* Scroll-Down Arrow in a pure white circle */}
        <div className="relative z-30 flex justify-center pb-6">
          <a
            href="#next-up-strip"
            className="w-12 h-12 rounded-full bg-white border-3 border-ink shadow-button flex items-center justify-center text-ink hover:bg-mustard transition-transform hover:scale-110"
            aria-label="Scroll down to Next Up event"
          >
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Next Up strip */}
      <TornEdge position="bottom" fillColor="#FFD23F" mustardBacking={true} height={40} />

      {/* =========================================================
          SECTION 2: NEXT UP STRIP
          Mustard band, ink text.
          Type badge, IST date/time, countdown in 6vw condensed numerals,
          state-aware button driven by mock clock.
      ========================================================= */}
      <section
        id="next-up-strip"
        className="relative bg-mustard halftone-mustard border-y-3 border-ink py-6 md:py-8 px-4 z-20 select-none"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Column: Badge, Title & IST Date/Time */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
              <ChessClock size="100%" isTicking={true} variant="countdown" />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="retro-badge bg-crimson text-cream text-xs">
                  NEXT UP
                </span>
                <span className="retro-badge bg-teal text-cream text-xs">
                  {nextEvent ? nextEvent.type : 'TOURNAMENT'}
                </span>
                <span className="font-sans text-xs md:text-sm font-semibold text-ink/80 tabular-nums">
                  {nextEvent ? `${formatISTDate(nextEvent.startAt)} · ${formatISTTime(nextEvent.startAt)} IST` : '14 Nov 2026 · 2:00 PM IST'}
                </span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink font-bold">
                {nextEvent ? nextEvent.title : 'Chitrakut Open Rapid Championship'}
              </h2>
            </div>
          </div>

          {/* Center Column: Countdown in ~6vw condensed numerals */}
          {nextEvent && (
            <div className="flex flex-col items-center">
              <CountdownTimer
                targetDate={nextEvent.startAt}
                referenceDate={siteSetting.mockCurrentTime}
                size="hero"
              />
            </div>
          )}

          {/* Right Column: State-aware action button */}
          <div className="flex items-center gap-3">
            {nextEvent ? (
              isCheckInOpen ? (
                <Link
                  href={`/events/${nextEvent.slug}`}
                  className="retro-btn bg-crimson text-cream hover:bg-crimson-dark px-6 py-3.5 text-sm md:text-base font-bold animate-pulse"
                >
                  JOIN SESSION NOW ⚡
                </Link>
              ) : (
                <Link
                  href={`/events/${nextEvent.slug}`}
                  className="retro-btn bg-saffron text-cream hover:bg-saffron-light px-6 py-3.5 text-sm md:text-base font-bold"
                >
                  REGISTER TO PLAY
                </Link>
              )
            ) : (
              <Link
                href="/events"
                className="retro-btn bg-ink text-cream hover:bg-ink-light px-6 py-3.5 text-sm md:text-base font-bold"
              >
                VIEW CALENDAR
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Section 3 */}
      <TornEdge position="bottom" fillColor="#008E9B" mustardBacking={true} height={40} />

      {/* =========================================================
          SECTION 3: "EVERY MOVE IS A RIOT" (reference 1)
          min-height 100vh, bright tropical teal with paisley/peacock pattern.
          Orange ribbon across top (full width, -3 deg, ~9vh, white Anton text).
          Knight sticker: height ~88vh (min 520px), width ~34vw, bleeding off left edge by ~5vw, rotated -3 deg.
          Headline clamp(72px, 11vw, 190px): "EVERY MOVE" white, "IS A RIOT" saffron, thick ink stroke.
          Pure white text cards flanking the statement for maximum contrast.
          Three tilted white cards along bottom right 60% (~19vw wide, ~30vh tall).
      ========================================================= */}
      <section className="relative min-h-screen w-full bg-teal py-16 md:py-24 overflow-hidden flex flex-col justify-between">
        {/* Paisley / Peacock SVG Pattern Tile */}
        <PaisleyPeacockPattern strokeColor="#FFFFFF" className="opacity-20" />

        {/* Orange Ribbon Across Top (full width, -3 degrees, ~9vh tall) */}
        <div className="relative w-[106%] -left-[3%] bg-saffron border-y-3 border-ink shadow-button py-2 md:py-3 -rotate-3 z-20 mb-8 select-none">
          <p className="font-headline text-white text-[clamp(16px,2.2vw,32px)] uppercase tracking-wide text-center leading-none font-bold">
            CHESS WAS BORN IN INDIA. JOIN THE GAME. MAKE YOUR MOVE.
          </p>
        </div>

        {/* Knight Sticker: height ~88vh (min 520px), width ~34vw, bleeding off left edge by ~5vw, rotated -3 deg */}
        <div
          className="absolute -left-[5vw] top-[14vh] h-[clamp(520px,88vh,880px)] w-[clamp(300px,34vw,520px)] z-25 pointer-events-none -rotate-3 select-none"
          aria-hidden="true"
        >
          <StickerImage
            src="/art/knight-sunglasses.png"
            fallbackName="knight"
            width={520}
            height={880}
            rotation={-3}
          />
        </div>

        {/* Headline & Content Grid */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:ml-[28vw] flex flex-col items-start">
            {/* Giant Headline: clamp(72px, 11vw, 190px) */}
            <div className="leading-[0.88] select-none">
              <h2 className="retro-headline text-[clamp(68px,11vw,180px)] block font-bold text-white">
                EVERY MOVE
              </h2>
              <h2 className="retro-headline-saffron text-[clamp(68px,11vw,180px)] block font-bold">
                IS A RIOT
              </h2>
            </div>

            {/* Pure White Paragraph Cards flanking the statement for crisp readability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-8 max-w-2xl font-sans">
              <div className="bg-white/95 p-5 border-3 border-ink shadow-card rounded">
                <p className="text-sm md:text-base leading-relaxed text-ink font-medium">
                  Shah-Maat isn&apos;t a silent library corner. We are Chennai’s boldest student collective—blending classical rigor with campus fire, time-scramble pressure, and unrelenting tactical energy.
                </p>
              </div>
              <div className="bg-white/95 p-5 border-3 border-ink shadow-card rounded">
                <p className="text-sm md:text-base leading-relaxed text-ink font-medium">
                  From Swiss rapid championships to Saturday Kaapi &amp; Check casual arenas, we prepare IIT Madras BS learners to calculate deep and strike without hesitation.
                </p>
              </div>
            </div>
          </div>

          {/* Three Tilted Pure White Cards along bottom right 60% (~19vw wide, ~30vh tall) - Reference Image 3 */}
          <div className="lg:ml-[30vw] grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 md:mt-16">
            {/* Card 1: PUZZLES (Reference 3: Stylized 4-piece Jigsaw Puzzle art) */}
            <Link
              href="/school"
              className="retro-card bg-white p-5 flex flex-col justify-between min-h-[260px] -rotate-2 hover:rotate-0 transition-transform group text-center"
            >
              <div className="flex flex-col items-center">
                {/* 4-piece interlocking jigsaw puzzle SVG */}
                <div className="w-20 h-20 mb-3 relative flex items-center justify-center -rotate-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[3px_3px_0px_#120B0C]" fill="none">
                    {/* Top Left Piece (Ink) */}
                    <path
                      d="M10 10 H45 C45 20 55 20 55 10 H50 V45 C40 45 40 55 50 55 V50 H10 Z"
                      fill="#120B0C"
                      stroke="#120B0C"
                      strokeWidth="2.5"
                    />
                    {/* Top Right Piece (Crimson) */}
                    <path
                      d="M50 10 H90 V50 H55 C55 40 45 40 45 50 H50 Z"
                      fill="#D81B28"
                      stroke="#120B0C"
                      strokeWidth="2.5"
                    />
                    {/* Bottom Left Piece (Mustard) */}
                    <path
                      d="M10 50 H45 C45 60 55 60 55 50 H50 V90 H10 Z"
                      fill="#FFD23F"
                      stroke="#120B0C"
                      strokeWidth="2.5"
                    />
                    {/* Bottom Right Piece (White) */}
                    <path
                      d="M50 50 H90 V90 H50 V55 C40 55 40 45 50 45 Z"
                      fill="#FFFFFF"
                      stroke="#120B0C"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-1 group-hover:text-crimson transition-colors font-bold">
                  PUZZLES
                </h3>
                <p className="font-sans text-xs font-bold text-ink/70 uppercase tracking-wider">
                  TACTICAL DRILLS &amp; CODICES
                </p>
              </div>
              <span className="font-headline text-xs uppercase text-crimson tracking-wider mt-4 font-bold">
                SOLVE PUZZLES →
              </span>
            </Link>

            {/* Card 2: ARENAS (Reference 3: King & Queen in Blazing Flames art) */}
            <Link
              href="/events"
              className="retro-card bg-white p-5 flex flex-col justify-between min-h-[260px] rotate-1 hover:rotate-0 transition-transform group text-center"
            >
              <div className="flex flex-col items-center">
                {/* Burning Chess Pieces SVG */}
                <div className="w-20 h-20 mb-3 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[3px_3px_0px_#120B0C]" fill="none">
                    {/* Flames */}
                    <path
                      d="M15 80 C15 50 25 35 35 45 C40 25 55 20 50 5 C65 20 75 35 70 50 C80 35 90 55 85 80 Z"
                      fill="#FF7A1A"
                      stroke="#120B0C"
                      strokeWidth="2"
                    />
                    <path
                      d="M25 80 C25 60 35 45 42 55 C46 40 56 35 52 25 C62 38 68 48 64 60 C72 50 78 65 75 80 Z"
                      fill="#FFD23F"
                    />
                    {/* King Silhouette */}
                    <path
                      d="M48 30 H52 V36 H56 V40 H52 V44 H48 V40 H44 V36 H48 Z 
                         M42 46 C42 46 36 50 38 62 C39 68 42 75 42 75 H58 C58 75 61 68 62 62 C64 50 58 46 58 46 L50 49 Z 
                         M36 75 H64 V80 H36 Z"
                      fill="#D81B28"
                      stroke="#120B0C"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-1 group-hover:text-crimson transition-colors font-bold">
                  ARENAS
                </h3>
                <p className="font-sans text-xs font-bold text-ink/70 uppercase tracking-wider">
                  BLITZ &amp; BULLET POOLS
                </p>
              </div>
              <span className="font-headline text-xs uppercase text-crimson tracking-wider mt-4 font-bold">
                ENTER ARENA →
              </span>
            </Link>

            {/* Card 3: TOURNAMENTS (Reference 3: Gold Championship Trophy with Pawns art) */}
            <Link
              href="/events"
              className="retro-card bg-white p-5 flex flex-col justify-between min-h-[260px] -rotate-1 hover:rotate-0 transition-transform group text-center"
            >
              <div className="flex flex-col items-center">
                {/* Trophy with Pawns SVG */}
                <div className="w-20 h-20 mb-3 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[3px_3px_0px_#120B0C]" fill="none">
                    {/* Left & Right flanking pawns */}
                    <circle cx="20" cy="58" r="6" fill="#120B0C" />
                    <path d="M14 78 C14 68 26 68 26 78 Z" fill="#120B0C" />
                    <circle cx="80" cy="58" r="6" fill="#120B0C" />
                    <path d="M74 78 C74 68 86 68 86 78 Z" fill="#120B0C" />
                    {/* Gold Trophy Cup */}
                    <path
                      d="M32 20 H68 V45 C68 58 58 66 50 67 C42 66 32 58 32 45 Z"
                      fill="#FFD23F"
                      stroke="#120B0C"
                      strokeWidth="2.5"
                    />
                    {/* Cup Handles */}
                    <path
                      d="M32 26 C22 26 22 42 32 44 M68 26 C78 26 78 42 68 44"
                      stroke="#120B0C"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    {/* Base */}
                    <path d="M46 67 H54 V75 H46 Z" fill="#FFD23F" stroke="#120B0C" strokeWidth="2" />
                    <rect x="36" y="75" width="28" height="8" rx="2" fill="#D81B28" stroke="#120B0C" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-1 group-hover:text-crimson transition-colors font-bold">
                  TOURNAMENTS
                </h3>
                <p className="font-sans text-xs font-bold text-ink/70 uppercase tracking-wider">
                  CAMPUS SWISS &amp; SIMULS
                </p>
              </div>
              <span className="font-headline text-xs uppercase text-crimson tracking-wider mt-4 font-bold">
                VIEW FIXTURES →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Stacked Cards Section */}
      <TornEdge position="bottom" fillColor="#120B0C" mustardBacking={true} height={40} />

      {/* =========================================================
          STACKED CARDS SECTION: "HOW THE RIOT UNFOLDS"
          GSAP ScrollTrigger Card Pinning & Scale-Down Animation
          Cards have className="c-card" with scale-down scrub on scroll
      ========================================================= */}
      <section
        id="how-it-works"
        className="relative w-full bg-[#120B0C] text-cream py-20 px-4 overflow-hidden"
      >
        {/* Ambient Halftone & Mandala Texture */}
        <div className="absolute inset-0 halftone-brown opacity-20 pointer-events-none" />
        <MandalaLinePattern strokeColor="#FFD23F" opacity={0.12} />

        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 relative z-10 select-none">
          <span className="retro-badge bg-mustard text-ink text-xs md:text-sm font-bold mb-3 inline-block">
            THE 5-STEP GRANDMASTER PATH
          </span>
          <h2 className="retro-headline text-[clamp(42px,7vw,92px)] text-white font-bold block leading-none">
            HOW THE RIOT UNFOLDS
          </h2>
          <p className="font-sans text-cream/90 text-sm md:text-lg max-w-2xl mx-auto mt-3 font-medium">
            From your first casual blitz roll-call to officiating university Swiss championships. Scroll to stack your progression deck.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative max-w-5xl mx-auto w-full flex flex-col items-center">
          {stepCards.map((card, index) => (
            <div
              key={card.step}
              className="c-card relative w-full min-h-[75vh] md:min-h-[82vh] flex items-center justify-center py-6 px-2 md:px-4 select-none"
              style={{ zIndex: index + 10 }}
            >
              <div
                className="relative w-full max-w-4xl p-6 md:p-10 border-4 border-ink shadow-[10px_10px_0px_#120B0C] rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transition-transform"
                style={{
                  backgroundColor: card.color,
                }}
              >
                {/* Halftone dot pattern overlay on card */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(18, 11, 12, 0.6) 15%, transparent 16%)',
                    backgroundSize: '12px 12px',
                  }}
                />

                {/* Left Column: Step & Description */}
                <div className="relative z-10 flex-1 flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-headline bg-ink text-white px-3.5 py-1 text-sm md:text-base border-2 border-white uppercase tracking-wider font-bold shadow-sm">
                      STEP {card.step}
                    </span>
                    <span className="font-headline text-white/95 text-xs md:text-sm uppercase tracking-widest font-bold">
                      {card.phase}
                    </span>
                  </div>

                  <h3 className="font-marker text-[clamp(30px,4.5vw,56px)] text-white leading-none mb-3 drop-shadow-[4px_4px_0px_#120B0C]">
                    {card.title}
                  </h3>

                  <p className="font-headline text-cream text-xs md:text-sm uppercase tracking-wider mb-4 font-bold">
                    {card.tagline}
                  </p>

                  <p className="font-sans text-white/95 text-sm md:text-base leading-relaxed mb-6 max-w-xl font-medium">
                    {card.description}
                  </p>

                  {/* Meta tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.meta.map((tag) => (
                      <span
                        key={tag}
                        className="retro-badge bg-white text-ink text-xs font-bold"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={card.buttonHref}
                    className="retro-btn bg-mustard hover:bg-mustard-light text-ink px-6 py-3 text-sm md:text-base font-bold shadow-button"
                  >
                    {card.buttonText} ↗
                  </Link>
                </div>

                {/* Right Column: Sticker Graphic */}
                <div className="relative z-10 w-[clamp(180px,26vw,280px)] aspect-square flex items-center justify-center shrink-0">
                  <StickerImage
                    src={card.sticker}
                    fallbackName="knight"
                    width={280}
                    height={280}
                    rotation={index % 2 === 0 ? 3 : -3}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Section 4 */}
      <TornEdge position="bottom" fillColor="#FF6B3D" mustardBacking={true} height={40} />

      {/* =========================================================
          SECTION 4: UPCOMING EVENTS (Coral Halftone #FF6B3D)
          3 cream cards (~28vw each) with colored type badge, format line,
          date/time in IST, prize or highlight line, and saffron "Register to Play" button.
      ========================================================= */}
      <section
        id="upcoming-events"
        className="relative bg-coral halftone-coral py-16 md:py-24 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="retro-badge bg-mustard text-ink mb-2">
                ACADEMIC &amp; COMPETITIVE TERM 2026
              </span>
              <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-wider text-ink">
                UPCOMING EVENTS &amp; CLASHES
              </h2>
            </div>
            <Link
              href="/events"
              className="retro-btn bg-cream hover:bg-ink hover:text-cream text-ink px-5 py-2.5 text-sm font-bold"
            >
              VIEW ALL EVENTS ↗
            </Link>
          </div>

          {/* Cards Grid */}
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.slice(0, 3).map((event, index) => {
                const rotations = [-1.5, 1.2, -1];
                const badgeColor =
                  event.type === 'tournament'
                    ? 'bg-crimson text-cream'
                    : event.type === 'simul'
                    ? 'bg-teal text-cream'
                    : 'bg-maroon text-cream';

                return (
                  <div
                    key={event.id}
                    className="retro-card p-6 flex flex-col justify-between"
                    style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`retro-badge ${badgeColor} text-xs`}>
                          {event.type}
                        </span>
                        <span className="font-sans text-xs font-bold text-ink/70 tabular-nums">
                          {formatISTDate(event.startAt)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-2">
                        {event.title}
                      </h3>

                      {/* Format Line */}
                      <p className="font-sans text-xs font-semibold text-saffron-dark uppercase tracking-wide mb-3">
                        {event.format}
                      </p>

                      {/* Date & Time Line in IST */}
                      <div className="bg-cream-dark/50 p-2.5 border border-ink/20 rounded mb-3 text-xs font-sans text-ink">
                        <p className="font-bold tabular-nums">
                          {formatISTTime(event.startAt)} - {formatISTTime(event.endAt)} IST
                        </p>
                        <p className="text-ink/75 truncate mt-0.5">{event.location}</p>
                      </div>

                      {/* Prize or Highlight Line */}
                      <p className="font-sans text-xs text-ink/80 italic mb-6">
                        ★ {event.prizePool || event.highlight}
                      </p>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/events/${event.slug}`}
                      className="retro-btn bg-saffron hover:bg-saffron-light text-cream py-3 text-center text-sm font-bold w-full"
                    >
                      REGISTER TO PLAY
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState
              title="No Upcoming Events Scheduled"
              message="Check back soon for the next tournament calendar release."
              actionText="View Calendar"
              actionHref="/calendar"
              icon="calendar"
            />
          )}
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Section 5 */}
      <TornEdge position="bottom" fillColor="#FFD23F" mustardBacking={true} height={40} />

      {/* =========================================================
          SECTION 5: RECENT RESULTS (Vibrant Canary Yellow Theme)
          Canary Yellow section with trophy sticker (~14vw) breaking out top-right.
          Pure white result cards with bold red medalist badge, winner, score line, and "View report".
      ========================================================= */}
      <section className="relative bg-mustard halftone-mustard text-ink py-16 md:py-24 px-4 overflow-hidden">
        {/* Trophy Sticker (~14vw) breaking out top-right */}
        <div
          className="absolute -right-[2vw] -top-[4vh] w-[clamp(120px,14vw,220px)] aspect-square z-25 pointer-events-none rotate-12 select-none"
          aria-hidden="true"
        >
          <StickerImage
            src="/art/trophy.png"
            fallbackName="trophy"
            width={220}
            height={220}
            rotation={12}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <span className="retro-badge bg-crimson text-white mb-2 font-bold">
              LAURELS &amp; ARBITER REPORTS
            </span>
            <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-wider text-ink font-bold">
              RECENT TOURNAMENT RESULTS
            </h2>
          </div>

          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.slice(0, 2).map((event, index) => {
                const champion = event.winners[0];
                return (
                  <div
                    key={event.id}
                    className="retro-card bg-white p-6 md:p-8 text-ink flex flex-col justify-between"
                    style={{ transform: index === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="retro-badge bg-crimson text-white text-xs font-bold">
                          GOLD MEDALIST
                        </span>
                        <span className="font-sans text-xs text-ink/80 font-bold tabular-nums">
                          {formatISTDate(event.startAt)}
                        </span>
                      </div>

                      <h3 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink mb-2 font-bold">
                        {event.title}
                      </h3>

                      <p className="font-sans text-xs font-bold text-crimson uppercase mb-4 tracking-wider">
                        {event.format}
                      </p>

                      {champion && (
                        <div className="bg-cream p-4 border-2 border-ink shadow-button rounded mb-4">
                          <span className="font-headline text-xs uppercase tracking-wider text-ink/80 block font-bold">
                            CHAMPION ({champion.house || 'Open Board'}):
                          </span>
                          <span className="font-headline text-2xl uppercase text-crimson block font-bold">
                            {champion.name}
                          </span>
                          <span className="font-sans text-xs font-bold text-ink tabular-nums">
                            Undefeated Score: {champion.score}
                          </span>
                        </div>
                      )}

                      <p className="font-sans text-xs md:text-sm text-ink/85 line-clamp-3 mb-6 font-medium">
                        {event.report}
                      </p>
                    </div>

                    <Link
                      href={`/events/${event.slug}`}
                      className="retro-btn bg-crimson hover:bg-crimson-dark text-white py-3 text-center text-sm font-bold shadow-button"
                    >
                      VIEW FULL REPORT &amp; STANDINGS →
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState
              title="No Past Results Found"
              message="Recent championship scorecards will appear once arbiter review concludes."
              icon="trophy"
            />
          )}
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Section 6 */}
      <TornEdge position="bottom" fillColor="#D81B28" mustardBacking={true} height={40} />

      {/* =========================================================
          SECTION 6: FEATURED STUDY RESOURCE, "KAAPI & CHECK" (reference 5)
          Crimson paisley background.
          Playfair headline "KAAPI & CHECK" in mustard with line "All the moves that are fit to print".
          Cream pinned-paper card ~50vw wide with two tape strips holding static chessboard preview (crimson/cream/ink squares).
          Filter-coffee-pour sticker on right (~32vw wide, cropped off right edge).
          Resource: "Endgame Mastery: The Rook & Pawn Codex".
      ========================================================= */}
      <section className="relative bg-crimson halftone-crimson text-cream py-16 md:py-24 px-4 overflow-hidden">
        {/* Paisley Line Pattern */}
        <PaisleyPeacockPattern strokeColor="#F6EAD3" />

        {/* Filter-Coffee-Pour Sticker on the Right (~32vw wide, cropped off right edge) */}
        <div
          className="absolute -right-[6vw] top-[15vh] w-[clamp(240px,32vw,460px)] aspect-square z-25 pointer-events-none rotate-6 select-none"
          aria-hidden="true"
        >
          <StickerImage
            src="/art/kaapi-pour.png"
            fallbackName="kaapi-pour"
            width={460}
            height={460}
            rotation={6}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header in Playfair Display 900 */}
          <div className="mb-10 max-w-2xl">
            <h2 className="font-playfair text-[clamp(44px,7vw,92px)] text-mustard font-black tracking-tight leading-none drop-shadow-[4px_4px_0px_#120B0C]">
              KAAPI &amp; CHECK
            </h2>
            <p className="font-sans text-cream/90 text-sm md:text-lg italic tracking-wide mt-2">
              All the moves that are fit to print.
            </p>
          </div>

          {/* Container for Pinned Note Cards & Main Pinned-Paper Card (Reference Image 2) */}
          <div className="relative flex flex-col lg:flex-row items-start gap-6 max-w-5xl">
            {/* Left Column: Pinned Mini Note Cards (Reference 2: STREAK & HINT) */}
            <div className="flex lg:flex-col gap-4 z-20">
              {/* Note Card 1: STREAK */}
              <div className="retro-card p-3.5 bg-cream border-3 border-ink shadow-card -rotate-3 hover:rotate-0 transition-transform w-[clamp(140px,18vw,200px)]">
                <span className="retro-badge bg-ink text-cream text-[10px] mb-2 block w-max">
                  STREAK
                </span>
                <span className="font-sans text-[10px] uppercase font-bold text-ink/60 block tabular-nums">
                  CAMPUS SPRINT
                </span>
                <div className="mt-1 space-y-0.5 text-xs font-mono font-bold text-ink">
                  <div className="flex justify-between">
                    <span>SOLVED:</span>
                    <span className="text-crimson">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ACCURACY:</span>
                    <span className="text-forest">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STREAKS:</span>
                    <span className="text-saffron-dark">5</span>
                  </div>
                </div>
              </div>

              {/* Note Card 2: HINT */}
              <div className="retro-card p-3.5 bg-cream border-3 border-ink shadow-card rotate-2 hover:rotate-0 transition-transform w-[clamp(140px,18vw,200px)]">
                <span className="retro-badge bg-ink text-cream text-[10px] mb-2 block w-max">
                  HINT
                </span>
                <span className="font-sans text-[10px] uppercase font-bold text-ink/60 block tabular-nums">
                  ROOK CODEX
                </span>
                <p className="font-headline text-xs uppercase tracking-wide text-ink font-bold leading-tight mt-1">
                  CUT THE ENEMY KING ALONG THE FILE
                </p>
              </div>
            </div>

            {/* Main Cream Pinned-Paper Card (~50vw wide) with Tape Strips */}
            <div className="relative flex-1 bg-cream border-3 border-ink p-6 md:p-8 text-ink shadow-card -rotate-1">
              {/* Top Tape Strips */}
              <div
                className="absolute -top-3 left-8 w-20 h-6 bg-[#E8D8A0]/90 border border-ink/40 -rotate-3 pointer-events-none shadow-sm"
                aria-hidden="true"
              />
              <div
                className="absolute -top-3 right-8 w-20 h-6 bg-[#E8D8A0]/90 border border-ink/40 rotate-3 pointer-events-none shadow-sm"
                aria-hidden="true"
              />

              {/* Chessboard + Badge Panel Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
                {/* 8x8 Tactical Chessboard Preview (crimson, cream, and ink squares) */}
                <div className="md:col-span-6 flex justify-center">
                  <div className="w-[clamp(200px,26vw,300px)] aspect-square border-4 border-ink bg-ink p-1 shadow-button">
                    <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                      {Array.from({ length: 64 }).map((_, i) => {
                        const row = Math.floor(i / 8);
                        const col = i % 8;
                        const isDark = (row + col) % 2 === 1;
                        // Some squares highlighted crimson like reference
                        const isRed = (row === 2 && col === 3) || (row === 3 && col === 4) || (row === 4 && col === 1) || (row === 5 && col === 5);
                        return (
                          <div
                            key={i}
                            className={`relative flex items-center justify-center ${
                              isRed ? 'bg-crimson text-cream' : isDark ? 'bg-ink text-cream' : 'bg-cream text-ink'
                            }`}
                          >
                            {/* Render tactical pieces on selected squares */}
                            {i === 3 && <span className="text-xs font-bold leading-none select-none">♛</span>}
                            {i === 27 && <span className="text-xs font-bold leading-none select-none">♙</span>}
                            {i === 28 && <span className="text-xs font-bold leading-none select-none">♟</span>}
                            {i === 36 && <span className="text-xs font-bold leading-none select-none">♙</span>}
                            {i === 60 && <span className="text-xs font-bold leading-none select-none">♚</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Interactive Badges & CTA Panel */}
                <div className="md:col-span-6 flex flex-col items-start gap-4">
                  {/* User interactive badges */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-ink border-2 border-ink shadow-sm flex items-center justify-center text-cream text-xs">
                        ♟
                      </div>
                      <div className="w-8 h-8 rounded-full bg-mustard border-2 border-ink shadow-sm flex items-center justify-center text-ink text-xs font-bold">
                        ♞
                      </div>
                      <div className="w-8 h-8 rounded-full bg-crimson border-2 border-ink shadow-sm flex items-center justify-center text-cream text-xs">
                        ♛
                      </div>
                    </div>
                    <span className="font-sans text-xs font-bold text-ink/70 uppercase tracking-wider block">
                      FEATURED CODEX · {featuredResource.level}
                    </span>
                    <h3 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink font-bold mt-1">
                      {featuredResource.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-ink/80 leading-relaxed">
                    {featuredResource.summary}
                  </p>

                  {/* Call-to-Action button with hard 6px black offset shadow */}
                  <Link
                    href={`/school/lesson/${featuredResource.slug}`}
                    className="retro-btn bg-saffron hover:bg-saffron-light text-cream px-6 py-3.5 text-sm md:text-base font-bold shadow-button w-full text-center"
                  >
                    START CODEX ANALYSIS →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Section 7 */}
      <TornEdge position="bottom" fillColor="#FFFDF8" mustardBacking={true} height={40} />

      {/* =========================================================
          SECTION 7: NUMBERS SECTION (Reference "Society by the Numbers") - Light & Bold Theme
          Crisp Warm White #FFFDF8 with faint gold mandala line art.
          Torn mustard edges top and bottom, about 90vh tall.
          Left 55%: "SOCIETY BY THE" in heavy ink sans at ~5vw,
          "NUMBERS" at ~17vw in Bold Red #D81B28 with hard dark shadow.
          Below: 2x2 stat grid with count-up animation on scroll.
          Right 45%: sticker illustration of students crowded around chessboard (~42vw wide, bleeding off bottom & right).
      ========================================================= */}
      <section className="relative min-h-[90vh] w-full bg-[#FFFDF8] halftone-brown py-16 md:py-24 px-4 overflow-hidden flex flex-col justify-center">
        {/* Faint Mandala Line Art in Gold */}
        <MandalaLinePattern strokeColor="#E8A51D" opacity={0.18} />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 55% Column */}
          <div className="lg:col-span-7 flex flex-col justify-center select-none">
            {/* Headline */}
            <span className="font-headline text-[clamp(24px,4vw,56px)] text-ink uppercase tracking-wide leading-none font-bold">
              SOCIETY BY THE
            </span>
            <h2 className="distressed-numeral text-crimson text-[clamp(52px,10vw,150px)] leading-[0.88] font-headline uppercase font-bold tracking-tight mb-8">
              NUMBERS
            </h2>

            {/* 2x2 Stat Grid in Bold Red & Ink */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 max-w-xl">
              <CountUpStat
                value={siteSetting.stats.members}
                suffix="+"
                label="ACTIVE MEMBERS"
                numeralColor="text-crimson"
                labelColor="text-ink"
              />
              <CountUpStat
                value={siteSetting.stats.eventsHeld}
                suffix="+"
                label="EVENTS HELD"
                numeralColor="text-crimson"
                labelColor="text-ink"
              />
              <CountUpStat
                value={siteSetting.stats.mentorSessions}
                suffix="+"
                label="MENTOR SESSIONS"
                numeralColor="text-crimson"
                labelColor="text-ink"
              />
              <CountUpStat
                value={siteSetting.stats.seasonsCompleted}
                suffix=""
                label="COMPETITIVE SEASONS"
                numeralColor="text-crimson"
                labelColor="text-ink"
              />
            </div>

            <div className="mt-8 text-xs font-sans text-ink/75 font-semibold italic">
              * Official IIT Madras BS degree chess statistics ({siteSetting.stats.isSampleData ? 'sample verification set' : 'verified'}).
            </div>
          </div>

          {/* Right 45% Column: Students Chess Sticker (~40vw wide, bleeding off bottom & right, rotated 2 deg) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div
              className="w-[clamp(260px,38vw,520px)] pointer-events-none rotate-2 select-none"
              aria-hidden="true"
            >
              <StickerImage
                src="/art/students-chess.png"
                fallbackName="students-chess"
                width={580}
                height={500}
                rotation={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Section 8 */}
      <TornEdge position="bottom" fillColor="#FF7A1A" mustardBacking={true} height={40} />

      {/* =========================================================
          SECTION 8: ARCHIVE SECTION (Reference "A Society That Remembers")
          Saffron-orange #FF7A1A with mandala line art and halftone.
          Torn mustard edges, about 80vh tall.
          Left: Large Canary Yellow organic blob shape (56vw wide, 66% height).
          Inside it: "A SOCIETY THAT REMEMBERS." in Playfair Display 900 (crimson, thin ink outline, clamp(48px,5.6vw,96px)).
          Under it: "ACHIEVEMENTS · REPORTS · RESOURCES · TENURES" in ink Anton (~2.4vw).
          Pure white button with ink border and hard shadow "OPEN THE ARCHIVE".
          Right: Crimson postage stamp (~39vw wide, 3 deg rotation, perforated edges, white border, hard shadow, dashed gold inner frame).
          Portrait sticker (Indian bride with pixel sunglasses) sitting on it.
      ========================================================= */}
      <section className="relative min-h-[80vh] w-full bg-saffron halftone-saffron py-16 md:py-24 px-4 overflow-hidden flex flex-col justify-center">
        {/* Mandala Line Pattern in gold */}
        <MandalaLinePattern strokeColor="#E8A51D" opacity={0.18} />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Organic Canary Yellow Blob Shape (~56vw wide) */}
          <div className="lg:col-span-7 flex items-center justify-start">
            <div className="relative w-full max-w-[clamp(320px,56vw,760px)] bg-mustard border-4 border-ink shadow-card p-8 md:p-12 rounded-[40px_100px_45px_110px] -rotate-1 select-none">
              {/* Headline: Playfair Display 900 in crimson with thin ink stroke */}
              <h2 className="font-playfair text-[clamp(44px,5.6vw,92px)] text-crimson font-black leading-[0.92] tracking-tight drop-shadow-[3px_3px_0px_#120B0C] mb-4">
                A SOCIETY THAT REMEMBERS.
              </h2>

              {/* Sub-label: ink Anton at ~2.4vw */}
              <p className="font-headline text-[clamp(15px,2.2vw,32px)] text-ink uppercase tracking-wider mb-8 font-bold leading-tight">
                ACHIEVEMENTS · REPORTS · RESOURCES · TENURES
              </p>

              {/* Pure White button with ink border and hard shadow */}
              <Link
                href="/events?tab=past"
                className="retro-btn bg-white text-ink hover:bg-crimson hover:text-white border-3 border-ink px-8 py-4 text-base md:text-lg font-bold tracking-wider shadow-card inline-block"
              >
                OPEN THE ARCHIVE →
              </Link>
            </div>
          </div>

          {/* Right Column: Crimson Postage Stamp (~39vw wide, 3 deg rotation) + Portrait Sticker */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[clamp(260px,38vw,480px)] rotate-3">
              {/* Crimson Postage Stamp Card */}
              <div className="archive-postage-stamp bg-crimson border-4 border-white p-6 shadow-card relative">
                {/* Paisley tile overlay inside stamp */}
                <PaisleyPeacockPattern strokeColor="#FFD23F" className="opacity-25" />

                {/* Inner Dashed Gold Frame */}
                <div className="border-2 border-dashed border-mustard p-4 relative z-10 flex flex-col items-center">
                  {/* Portrait Sticker breaking out slightly above stamp top */}
                  <div className="w-[clamp(180px,26vw,340px)] -mt-16 mb-4 pointer-events-none select-none -rotate-2">
                    <StickerImage
                      src="/art/archive-portrait.png"
                      fallbackName="archive-portrait"
                      width={340}
                      height={380}
                      rotation={-2}
                    />
                  </div>

                  <span className="font-headline text-mustard text-sm md:text-base uppercase tracking-widest text-center block font-bold">
                    HERITAGE ARCHIVES · 2024–2026
                  </span>
                  <span className="font-sans text-[10px] text-white/90 uppercase tracking-widest text-center block mt-1 font-bold">
                    PERPETUAL CHRONICLE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Section 9 */}
      <TornEdge position="bottom" fillColor="#FFFDF8" mustardBacking={true} height={40} />

      {/* =========================================================
          SECTION 9: COMMUNITY
          Warm White paper #FFFDF8.
          Five separate sticker-style buttons (Discord, Instagram, YouTube, WhatsApp, Google Space),
          each its own bright color, each ~17vw wide, tilted.
          URLs read from mock SiteSetting object, never hard-coded in components!
      ========================================================= */}
      <section id="community" className="relative bg-[#FFFDF8] py-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="retro-badge bg-mustard text-ink mb-3 font-bold">
            ALL ROADS LEAD TO THE BOARD
          </span>
          <h2 className="font-headline text-4xl md:text-6xl uppercase tracking-wider text-ink mb-4 font-bold">
            JOIN THE SHAH-MAAT COMMUNITY
          </h2>
          <p className="font-sans text-ink/80 max-w-xl mx-auto mb-12 text-sm md:text-base font-medium">
            Connect with hundreds of chess enthusiasts across all cohorts, degree stages, and time zones.
          </p>

          {/* Five separate sticker-style buttons, each ~17vw wide, tilted */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Discord */}
            <a
              href={siteSetting.socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-[#5865F2] hover:bg-[#4752C4] text-white w-[clamp(160px,17vw,240px)] py-5 text-center text-lg font-bold -rotate-2 hover:rotate-0 transition-transform shadow-button"
            >
              DISCORD ↗
            </a>

            {/* Instagram */}
            <a
              href={siteSetting.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-[#E1306C] hover:bg-[#C13584] text-white w-[clamp(160px,17vw,240px)] py-5 text-center text-lg font-bold rotate-1 hover:rotate-0 transition-transform shadow-button"
            >
              INSTAGRAM ↗
            </a>

            {/* YouTube */}
            <a
              href={siteSetting.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-[#FF0000] hover:bg-[#CC0000] text-white w-[clamp(160px,17vw,240px)] py-5 text-center text-lg font-bold -rotate-1 hover:rotate-0 transition-transform shadow-button"
            >
              YOUTUBE ↗
            </a>

            {/* WhatsApp */}
            <a
              href={siteSetting.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-whatsapp hover:bg-whatsapp-dark text-white w-[clamp(160px,17vw,240px)] py-5 text-center text-lg font-bold rotate-2 hover:rotate-0 transition-transform shadow-button"
            >
              WHATSAPP ↗
            </a>

            {/* Google Space */}
            <a
              href={siteSetting.socialLinks.googleSpace}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-teal hover:bg-teal-dark text-white w-[clamp(160px,17vw,240px)] py-5 text-center text-lg font-bold -rotate-2 hover:rotate-0 transition-transform shadow-button"
            >
              GOOGLE SPACE ↗
            </a>
          </div>
        </div>
      </section>

      {/* Torn Edge with Mustard Backing transition to Footer */}
      <TornEdge position="bottom" fillColor="#D81B28" mustardBacking={true} height={40} />
    </div>
  );
}
