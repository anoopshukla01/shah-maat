'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { events } from '@/content/seed';
import { Event } from '@/types';
import { formatISTDate, formatISTTime } from '@/lib/date';
import { EmptyState } from '@/components/ui/EmptyState';

type TabKey = 'upcoming' | 'past';

function EventsContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'past' ? 'past' : 'upcoming';
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);

  useEffect(() => {
    if (searchParams.get('tab') === 'past') {
      setActiveTab('past');
    }
  }, [searchParams]);

  const upcoming = events.filter((e) => e.status === 'upcoming');
  const past = events.filter((e) => e.status === 'completed');

  const activeEvents = activeTab === 'upcoming' ? upcoming : past;

  return (
    <div className="relative min-h-screen w-full bg-[#FCC129] py-12 md:py-20 px-4 overflow-hidden">
      {/* =========================================================
          ATMOSPHERIC GOLDEN CLOUDS BACKGROUND
          Full-bleed fixed canvas with subtle paper grain & soft vignette
      ========================================================= */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="retro-badge bg-crimson text-white mb-3 font-bold shadow-button">
            COMPETITIVE TOUR &amp; ARENAS
          </span>
          <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-wider text-ink mb-4 font-bold drop-shadow-[2px_2px_0px_rgba(255,255,255,0.7)]">
            CHAMPIONSHIPS &amp; CLASHES
          </h1>
          <p className="font-sans text-base md:text-lg text-ink/90 max-w-2xl mx-auto leading-relaxed font-semibold">
            Swiss rapid tournaments, simul exhibitions against grandmasters, and fierce inter-house collegiate rivalries.
          </p>

          {/* Upcoming / Past Tabs Switcher */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`retro-btn px-6 py-2.5 text-sm font-bold tracking-wider ${
                activeTab === 'upcoming'
                  ? 'bg-saffron text-white shadow-button-active scale-105'
                  : 'bg-white/95 text-ink hover:bg-mustard shadow-button'
              }`}
            >
              UPCOMING SCHEDULE ({upcoming.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`retro-btn px-6 py-2.5 text-sm font-bold tracking-wider ${
                activeTab === 'past'
                  ? 'bg-crimson text-white shadow-button-active scale-105'
                  : 'bg-white/95 text-ink hover:bg-mustard shadow-button'
              }`}
            >
              PAST RESULTS &amp; ARCHIVES ({past.length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        {activeEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeEvents.map((event: Event, index: number) => {
              const rotations = [-1.5, 1, -1, 1.5];
              const badgeColor =
                event.type === 'tournament'
                  ? 'bg-crimson text-white'
                  : event.type === 'simul'
                  ? 'bg-teal text-white'
                  : 'bg-mustard text-ink';

              return (
                <div
                  key={event.id}
                  className="retro-card bg-white p-6 md:p-8 flex flex-col justify-between"
                  style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                >
                  <div>
                    {/* Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`retro-badge ${badgeColor} text-xs`}>
                        {event.type}
                      </span>
                      <span className="font-sans text-xs font-bold text-ink/75 tabular-nums">
                        {formatISTDate(event.startAt)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink mb-2">
                      {event.title}
                    </h3>

                    {/* Format Line */}
                    <p className="font-sans text-xs font-bold text-saffron-dark uppercase tracking-wide mb-3">
                      {event.format}
                    </p>

                    {/* Time & Venue */}
                    <div className="bg-cream-dark/60 p-3 border border-ink/20 rounded mb-4 text-xs font-sans text-ink">
                      <p className="font-bold tabular-nums">
                        {formatISTTime(event.startAt)} - {formatISTTime(event.endAt)} IST
                      </p>
                      <p className="text-ink/75 mt-0.5">{event.location}</p>
                    </div>

                    {/* Highlight / Prize Line */}
                    <p className="font-sans text-xs md:text-sm text-ink/80 italic mb-6">
                      ★ {event.prizePool || event.highlight}
                      {event.isSampleData && (
                        <span className="text-[10px] text-ink/50 ml-1 font-sans not-italic">
                          (Sample data)
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Actions */}
                  <Link
                    href={`/events/${event.slug}`}
                    className={`retro-btn py-3 text-center text-sm font-bold w-full ${
                      activeTab === 'upcoming'
                        ? 'bg-saffron hover:bg-saffron-light text-cream'
                        : 'bg-ink hover:bg-ink-light text-cream'
                    }`}
                  >
                    {activeTab === 'upcoming' ? 'VIEW RULES & REGISTER →' : 'VIEW WINNERS & REPORT →'}
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <EmptyState
            title={activeTab === 'upcoming' ? 'No Upcoming Events' : 'No Past Records'}
            message={
              activeTab === 'upcoming'
                ? 'All current semester tournaments have concluded. New fixtures will be published shortly.'
                : 'Archived results are being consolidated by our tournament arbiters.'
            }
            actionText="Browse Calendar"
            actionHref="/calendar"
            icon="trophy"
          />
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream p-12 text-center font-headline text-2xl text-ink">LOADING FIXTURES...</div>}>
      <EventsContent />
    </Suspense>
  );
}

