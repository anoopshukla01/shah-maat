'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { events, siteSetting } from '@/content/seed';
import { Event } from '@/types';
import { formatISTDate, formatISTTime, formatISTRange, REFERENCE_DATE } from '@/lib/date';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { StickerImage } from '@/components/ui/StickerImage';
import { EmptyState } from '@/components/ui/EmptyState';

type DisplayState = 'before' | 'during' | 'after';

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = events.find((e) => e.slug === params.slug);

  // Initial display state based on event status
  const defaultState: DisplayState =
    event?.status === 'completed'
      ? 'after'
      : event?.status === 'live'
      ? 'during'
      : 'before';

  const [activeState, setActiveState] = useState<DisplayState>(defaultState);

  if (!event) {
    return (
      <div className="min-h-screen bg-cream py-20 px-4">
        <EmptyState
          title="Championship Event Not Found"
          message={`Could not locate a tournament matching "${params.slug}". Check the events index for active entries.`}
          actionText="View All Events"
          actionHref="/events"
          icon="trophy"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[#FCC129] py-12 md:py-20 px-4 overflow-hidden">
      {/* Atmospheric Golden Clouds Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/art/golden-clouds-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle vintage paper grain texture overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(rgba(18, 11, 12, 0.25) 12%, transparent 13%)',
            backgroundSize: '14px 14px',
          }}
        />
        {/* Soft edge gradient to integrate seamlessly into page layout */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCC129]/20 via-transparent to-[#FCC129]/30" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Breadcrumb & State Preview Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b-2 border-ink/20">
          <div className="flex items-center gap-2 font-headline uppercase text-xs text-ink/70">
            <Link href="/events" className="hover:text-crimson">EVENTS</Link>
            <span>/</span>
            <span className="text-crimson truncate max-w-xs">{event.title}</span>
          </div>

          {/* Reviewer State Preview Switcher */}
          <div className="flex items-center gap-1.5 bg-cream-dark p-1 border-2 border-ink rounded shadow-button">
            <span className="font-headline text-[10px] text-ink/70 uppercase px-2">
              PREVIEW STATE:
            </span>
            <button
              onClick={() => setActiveState('before')}
              className={`retro-btn px-2.5 py-1 text-[11px] font-bold ${
                activeState === 'before' ? 'bg-saffron text-cream' : 'bg-cream text-ink'
              }`}
            >
              BEFORE
            </button>
            <button
              onClick={() => setActiveState('during')}
              className={`retro-btn px-2.5 py-1 text-[11px] font-bold ${
                activeState === 'during' ? 'bg-crimson text-cream' : 'bg-cream text-ink'
              }`}
            >
              DURING (LIVE)
            </button>
            <button
              onClick={() => setActiveState('after')}
              className={`retro-btn px-2.5 py-1 text-[11px] font-bold ${
                activeState === 'after' ? 'bg-forest text-cream' : 'bg-cream text-ink'
              }`}
            >
              AFTER (RESULTS)
            </button>
          </div>
        </div>

        {/* Hero Banner Header */}
        <div className="retro-card p-6 md:p-8 bg-cream border-3 border-ink shadow-card mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="retro-badge bg-crimson text-cream text-xs">
                {event.type}
              </span>
              <span className="retro-badge bg-mustard text-ink text-xs">
                {event.format}
              </span>
            </div>
            <span className="font-sans text-xs md:text-sm font-bold text-ink/75 tabular-nums">
              {formatISTRange(event.startAt, event.endAt)}
            </span>
          </div>

          <h1 className="font-headline text-3xl md:text-5xl uppercase tracking-wider text-ink mb-2">
            {event.title}
          </h1>

          <p className="font-sans text-sm md:text-base text-saffron-dark font-bold mb-4">
            📍 Venue: {event.location}
          </p>

          <p className="font-sans text-sm md:text-base text-ink/80 leading-relaxed max-w-3xl">
            {event.highlight}
          </p>

          {event.prizePool && (
            <div className="mt-4 inline-block bg-mustard/30 border border-ink/30 px-3 py-1.5 rounded text-xs font-sans text-ink">
              <strong>Sample Honors:</strong> {event.prizePool}
            </div>
          )}
        </div>

        {/* =========================================================
            STATE 1: BEFORE STATE (Rules, Countdown, Registration)
        ========================================================= */}
        {activeState === 'before' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Countdown Banner */}
            <div className="bg-mustard halftone-mustard border-3 border-ink p-6 md:p-8 rounded text-center shadow-card">
              <span className="font-headline text-sm uppercase tracking-wider text-ink font-bold block mb-2">
                TIME UNTIL FIRST ROUND COMMENCEMENT:
              </span>
              <CountdownTimer
                targetDate={event.startAt}
                referenceDate={siteSetting.mockCurrentTime}
                size="lg"
              />
            </div>

            {/* Official Tournament Rules */}
            <div className="retro-card p-6 md:p-8 bg-cream border-3 border-ink shadow-card">
              <div className="flex items-center gap-2 border-b-2 border-ink pb-3 mb-4">
                <span className="text-xl">📜</span>
                <h2 className="font-headline text-2xl uppercase tracking-wider text-ink">
                  OFFICIAL ARBITER REGULATIONS &amp; RULES
                </h2>
              </div>

              <ul className="space-y-3 font-sans text-sm md:text-base text-ink/85">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-saffron text-cream flex items-center justify-center font-bold text-xs flex-shrink-0 border border-ink mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration CTA Card */}
            <div className="bg-saffron p-6 md:p-8 border-3 border-ink shadow-card text-center text-cream">
              <h3 className="font-headline text-2xl md:text-3xl uppercase tracking-wider mb-2">
                READY TO JOIN THE ARENA?
              </h3>
              <p className="font-sans text-sm md:text-base text-cream/90 max-w-lg mx-auto mb-6">
                Seat allocations are confirmed via student roll verification. All ratings seeded as per standard Swiss formulas.
              </p>
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn bg-ink text-cream hover:bg-cream hover:text-ink px-8 py-4 text-base font-bold tracking-wider shadow-button inline-block"
              >
                COMPLETE EVENT REGISTRATION ↗
              </a>
            </div>
          </div>
        )}

        {/* =========================================================
            STATE 2: DURING STATE (Live Banner, Stream, Real-Time Updates)
        ========================================================= */}
        {activeState === 'during' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Pulsing Live Banner */}
            <div className="bg-crimson halftone-crimson text-cream border-3 border-ink p-6 md:p-8 rounded text-center shadow-card">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cream text-crimson font-headline text-sm rounded-full mb-3 animate-pulse border-2 border-ink">
                <span className="w-3 h-3 rounded-full bg-crimson" />
                TOURNAMENT CURRENTLY IN PROGRESS
              </div>
              <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-wider text-cream mb-2">
                ROUNDS ARE ACTIVE ON LICHESS ARENA
              </h2>
              <p className="font-sans text-sm md:text-base text-cream/90 max-w-xl mx-auto mb-6">
                Follow top boards live or join the community commentary stage on Discord voice.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={siteSetting.socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-cream text-ink hover:bg-mustard px-6 py-3 text-sm font-bold"
                >
                  DISCORD LIVE STREAM STAGE 🎙️
                </a>
                <a
                  href="https://lichess.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-mustard text-ink hover:bg-saffron hover:text-cream px-6 py-3 text-sm font-bold"
                >
                  VIEW TOP BOARDS ON LICHESS ↗
                </a>
              </div>
            </div>

            {/* Real-Time Arbiter Updates Log */}
            <div className="retro-card p-6 md:p-8 bg-cream border-3 border-ink shadow-card">
              <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-4 pb-2 border-b-2 border-ink">
                CHIEF ARBITER DISPATCHES
              </h3>
              <div className="space-y-4">
                {event.updates.length > 0 ? (
                  event.updates.map((upd, i) => (
                    <div key={i} className="p-3 bg-cream-dark/50 border-l-4 border-crimson text-sm font-sans">
                      <span className="font-headline text-xs text-crimson block mb-0.5 tabular-nums">
                        {formatISTDate(upd.time)} · {formatISTTime(upd.time)} IST
                      </span>
                      <p className="text-ink font-medium">{upd.message}</p>
                    </div>
                  ))
                ) : (
                  <p className="font-sans text-xs text-ink/70">
                    No active incident dispatches yet. Fair-play checks underway.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            STATE 3: AFTER STATE (Winners, Results Table, Gallery, Report, Lessons)
        ========================================================= */}
        {activeState === 'after' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Winners Podium */}
            <div className="retro-card p-6 md:p-8 bg-mustard halftone-mustard border-3 border-ink shadow-card">
              <span className="retro-badge bg-crimson text-cream text-xs mb-3">
                OFFICIAL PODIUM
              </span>
              <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-wider text-ink mb-6">
                CHAMPIONS &amp; MEDALISTS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {event.winners.length > 0 ? (
                  event.winners.map((winner) => (
                    <div
                      key={winner.rank}
                      className="bg-cream border-3 border-ink p-5 shadow-button rounded"
                    >
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-mustard border-2 border-ink flex items-center justify-center font-headline text-xl text-ink font-bold">
                        {winner.rank === 1 ? '🥇' : winner.rank === 2 ? '🥈' : '🥉'}
                      </div>
                      <span className="retro-badge bg-ink text-cream text-[10px] mb-2">
                        RANK {winner.rank} · {winner.house || 'Open'}
                      </span>
                      <h4 className="font-headline text-xl uppercase text-crimson mb-1 font-bold">
                        {winner.name}
                      </h4>
                      <p className="font-sans text-xs font-bold text-ink tabular-nums">
                        Score: {winner.score}
                      </p>
                      <p className="font-sans text-[11px] text-ink/60 mt-1">
                        {winner.prize}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-4 font-sans text-sm text-ink/70">
                    Podium records are currently being verified by arbiters.
                  </div>
                )}
              </div>
            </div>

            {/* Results Table */}
            <div className="retro-card p-6 md:p-8 bg-cream border-3 border-ink shadow-card">
              <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-4 pb-2 border-b-2 border-ink">
                FINAL STANDINGS TABLE
              </h3>

              {event.resultsTable.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-ink bg-cream-dark font-headline uppercase tracking-wider text-xs">
                        <th className="py-2.5 px-3">Rank</th>
                        <th className="py-2.5 px-3">Player Handle</th>
                        <th className="py-2.5 px-3">House</th>
                        <th className="py-2.5 px-3 text-right">Points</th>
                        <th className="py-2.5 px-3 text-right">Buchholz</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/20">
                      {event.resultsTable.map((row) => (
                        <tr key={row.rank} className="hover:bg-cream-dark/40 tabular-nums">
                          <td className="py-2 px-3 font-bold">{row.rank}</td>
                          <td className="py-2 px-3 font-medium text-ink">{row.player}</td>
                          <td className="py-2 px-3">
                            <span className="retro-badge bg-teal/20 text-ink text-[10px]">
                              {row.house}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-right font-bold text-crimson">
                            {row.points.toFixed(1)}
                          </td>
                          <td className="py-2 px-3 text-right text-ink/75">
                            {row.buchholz.toFixed(1)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="font-sans text-xs text-ink/70">
                  Detailed standings will appear after tiebreak calculations.
                </p>
              )}
            </div>

            {/* Arbiter Report & Strategic Lessons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Report */}
              <div className="retro-card p-6 bg-cream border-3 border-ink shadow-card">
                <h4 className="font-headline text-xl uppercase tracking-wider text-ink mb-3 pb-2 border-b border-ink/20">
                  ARBITER TOURNAMENT REPORT
                </h4>
                <p className="font-sans text-sm text-ink/80 leading-relaxed">
                  {event.report || 'The tournament completed smoothly across all 5 Swiss rounds with full fair-play compliance.'}
                </p>
              </div>

              {/* Lessons Learned */}
              <div className="retro-card p-6 bg-forest text-cream border-3 border-ink shadow-card">
                <h4 className="font-headline text-xl uppercase tracking-wider text-cream mb-3 pb-2 border-b border-cream/20">
                  TACTICAL LESSONS FROM THE GAMES
                </h4>
                <ul className="space-y-2 font-sans text-xs md:text-sm text-cream/90">
                  {event.lessons && event.lessons.length > 0 ? (
                    event.lessons.map((lesson, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-mustard font-bold">★</span>
                        <span>{lesson}</span>
                      </li>
                    ))
                  ) : (
                    <li>Precision in knight outposts in rapid time controls is decisive.</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Photo / Art Gallery */}
            {event.gallery.length > 0 && (
              <div className="retro-card p-6 bg-cream border-3 border-ink shadow-card">
                <h4 className="font-headline text-xl uppercase tracking-wider text-ink mb-4">
                  TOURNAMENT POSTER &amp; MOMENT GALLERY
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {event.gallery.map((imgSrc, idx) => (
                    <div key={idx} className="border-2 border-ink p-2 bg-cream-dark shadow-button">
                      <StickerImage src={imgSrc} width={300} height={200} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="retro-btn bg-cream hover:bg-mustard text-ink px-6 py-2.5 text-xs font-bold"
          >
            ← BACK TO ALL TOURNAMENTS
          </Link>
        </div>
      </div>
    </div>
  );
}

