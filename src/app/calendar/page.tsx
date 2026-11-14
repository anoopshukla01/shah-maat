'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { calendarItems } from '@/content/seed';
import { CalendarItem, EventType } from '@/types';
import { formatISTDate, formatISTTime } from '@/lib/date';
import { EmptyState } from '@/components/ui/EmptyState';

type FilterType = 'all' | EventType;
type ViewMode = 'agenda' | 'month';

export default function CalendarPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('agenda');

  const filterChips: Array<{ label: string; value: FilterType }> = [
    { label: 'ALL SCHEDULES', value: 'all' },
    { label: 'TOURNAMENTS', value: 'tournament' },
    { label: 'SIMULS', value: 'simul' },
    { label: 'INTER-HOUSE CLASHES', value: 'clash' },
    { label: 'MASTERCLASSES', value: 'lecture' },
    { label: 'KAAPI & CHECK', value: 'open-play' },
  ];

  const filteredItems = calendarItems.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.type === selectedFilter;
  });

  // Helper to build Google Calendar URL
  const getGoogleCalendarUrl = (item: CalendarItem) => {
    const startIso = new Date(item.startAt).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endIso = new Date(item.endAt).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = encodeURIComponent(`Shah-Maat: ${item.title}`);
    const details = encodeURIComponent(item.description);
    const location = encodeURIComponent(item.location);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  return (
    <div className="relative min-h-screen w-full bg-[#001530] py-12 md:py-20 px-4 overflow-hidden">
      {/* =========================================================
          ATMOSPHERIC DEEP NAVY / PARCHMENT CLOUDS BACKGROUND
          Full-bleed fixed canvas with subtle paper grain & vignette
      ========================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/art/calendar-clouds-bg.jpg"
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
        {/* Soft edge gradient to integrate seamlessly into dark borders */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001530]/30 via-transparent to-[#001530]/40" />
      </div>

      {/* =========================================================
          PAGE GRAPHICS (User Supplied Assets)
      ========================================================= */}

      {/* 1. Heritage Rotunda Dome Building (Center Header Watermark) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-4 md:top-8 w-[clamp(280px,46vw,620px)] pointer-events-none select-none z-0 opacity-25 md:opacity-35 filter drop-shadow-[0px_4px_12px_rgba(0,0,0,0.4)]"
        aria-hidden="true"
      >
        <Image
          src="/art/heritage-dome.png"
          alt=""
          width={620}
          height={310}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 2. Vintage Etched Clouds (Floating across Header Left/Center) */}
      <div
        className="absolute -left-12 sm:left-4 top-16 md:top-20 w-[clamp(200px,32vw,440px)] pointer-events-none select-none z-0 opacity-40 md:opacity-55 filter drop-shadow-[0px_2px_8px_rgba(0,0,0,0.25)] hidden sm:block"
        aria-hidden="true"
      >
        <Image
          src="/art/vintage-etched-clouds.png"
          alt=""
          width={440}
          height={147}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 3. Ancient Strategy Codex & Compass (Top Right Accent) */}
      <div
        className="absolute -right-8 md:right-4 top-12 md:top-14 w-[clamp(170px,22vw,300px)] pointer-events-none select-none z-0 rotate-6 opacity-85 md:opacity-95 drop-shadow-[8px_8px_0px_#120B0C]"
        aria-hidden="true"
      >
        <Image
          src="/art/ancient-chess-book.png"
          alt=""
          width={300}
          height={200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 4. Golden Chess Pieces Lineup (Spanning across Bottom Background) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[clamp(320px,85vw,1000px)] pointer-events-none select-none z-0 opacity-25 md:opacity-35 filter drop-shadow-[0px_4px_12px_rgba(0,0,0,0.4)]"
        aria-hidden="true"
      >
        <Image
          src="/art/chess-pieces-lineup.png"
          alt=""
          width={1000}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="retro-badge bg-mustard text-ink mb-2 font-bold shadow-button">
              SEMESTER SCHEDULE · TERM II 2026
            </span>
            <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-wider text-ink font-bold drop-shadow-[2px_2px_0px_rgba(255,255,255,0.7)]">
              CALENDAR OF EVENTS
            </h1>
          </div>

          {/* View Toggle (Agenda vs Month) */}
          <div className="flex items-center gap-2 bg-white/95 p-1.5 border-2 border-ink rounded shadow-button">
            <button
              onClick={() => setViewMode('agenda')}
              className={`retro-btn px-4 py-1.5 text-xs font-bold ${
                viewMode === 'agenda' ? 'bg-crimson text-white' : 'bg-white text-ink'
              }`}
            >
              AGENDA VIEW
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`retro-btn px-4 py-1.5 text-xs font-bold ${
                viewMode === 'month' ? 'bg-crimson text-white' : 'bg-white text-ink'
              }`}
            >
              MONTH VIEW
            </button>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b-2 border-ink/20">
          {filterChips.map((chip) => {
            const isSelected = selectedFilter === chip.value;
            return (
              <button
                key={chip.value}
                onClick={() => setSelectedFilter(chip.value)}
                className={`retro-btn px-3.5 py-1.5 text-xs font-bold tracking-wider ${
                  isSelected
                    ? 'bg-saffron text-cream'
                    : 'bg-cream text-ink hover:bg-mustard'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Agenda View (Default) */}
        {viewMode === 'agenda' && (
          <div className="space-y-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => {
                const rotations = [-1, 0.8, -0.7, 1];
                const badgeColor =
                  item.type === 'tournament'
                    ? 'bg-crimson text-cream'
                    : item.type === 'simul'
                    ? 'bg-teal text-cream'
                    : item.type === 'clash'
                    ? 'bg-maroon text-cream'
                    : item.type === 'lecture'
                    ? 'bg-olive text-cream'
                    : 'bg-mustard text-ink';

                return (
                  <div
                    key={item.id}
                    className="retro-card bg-white/95 backdrop-blur-xs p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                  >
                    {/* Left: Date Block + Info */}
                    <div className="flex flex-col sm:flex-row items-start gap-5">
                      {/* Date Badge */}
                      <div className="bg-mustard border-3 border-ink shadow-button px-4 py-3 flex flex-col items-center justify-center min-w-[90px] text-center flex-shrink-0">
                        <span className="font-headline text-2xl text-ink leading-none font-bold">
                          {new Date(item.startAt).toLocaleDateString('en-US', { day: 'numeric', timeZone: 'Asia/Kolkata' })}
                        </span>
                        <span className="font-headline text-xs text-ink uppercase tracking-wider">
                          {new Date(item.startAt).toLocaleDateString('en-US', { month: 'short', timeZone: 'Asia/Kolkata' })}
                        </span>
                        <span className="font-sans text-[10px] text-ink/70 font-semibold uppercase">
                          {new Date(item.startAt).toLocaleDateString('en-US', { weekday: 'short', timeZone: 'Asia/Kolkata' })}
                        </span>
                      </div>

                      {/* Event Details */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`retro-badge ${badgeColor} text-[10px]`}>
                            {item.type}
                          </span>
                          <span className="font-sans text-xs text-ink/75 font-semibold tabular-nums">
                            {formatISTTime(item.startAt)} - {formatISTTime(item.endAt)} IST
                          </span>
                        </div>
                        <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink mb-1">
                          {item.title}
                        </h2>
                        <p className="font-sans text-xs text-saffron-dark font-bold mb-2">
                          📍 {item.location}
                        </p>
                        <p className="font-sans text-xs md:text-sm text-ink/80 max-w-xl leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                      <a
                        href={getGoogleCalendarUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-btn bg-cream hover:bg-cream-dark text-ink px-4 py-2 text-xs font-bold w-full sm:w-auto text-center"
                        title="Add to Google Calendar"
                      >
                        + ADD TO CALENDAR
                      </a>
                      <Link
                        href={`/calendar/${item.slug}`}
                        className="retro-btn bg-saffron hover:bg-saffron-light text-cream px-5 py-2 text-xs font-bold w-full sm:w-auto text-center"
                      >
                        DETAILS &amp; COUNTDOWN →
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <EmptyState
                title="No Events Found"
                message="No calendar items match the selected filter category."
                actionText="Reset Filters"
                actionHref="/calendar"
                icon="calendar"
              />
            )}
          </div>
        )}

        {/* Month View (November / December 2026) */}
        {viewMode === 'month' && (
          <div className="retro-card p-6 md:p-8 bg-white/95 backdrop-blur-xs border-3 border-ink shadow-card">
            <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-ink">
              <h2 className="font-headline text-3xl uppercase text-ink">
                NOVEMBER 2026
              </h2>
              <span className="retro-badge bg-mustard text-ink text-xs">
                TODAY: 2 NOV 2026
              </span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2 text-center font-headline text-xs uppercase mb-2">
              <span className="text-crimson">SUN</span>
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span className="text-teal">SAT</span>
            </div>

            <div className="grid grid-cols-7 gap-2 font-sans text-xs">
              {/* Nov 2026 starts on Sunday Nov 1 */}
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const isToday = day === 2;
                // Check if any events fall on this day
                const dayEvents = calendarItems.filter((item) => {
                  const d = new Date(item.startAt);
                  return (
                    d.getFullYear() === 2026 &&
                    d.getMonth() === 10 && // Nov is month 10 (0-indexed)
                    d.getDate() === day
                  );
                });

                return (
                  <div
                    key={day}
                    className={`min-h-[88px] p-1.5 border-2 border-ink/40 flex flex-col justify-between ${
                      isToday
                        ? 'bg-saffron/20 border-saffron font-bold'
                        : dayEvents.length > 0
                        ? 'bg-mustard/20 border-ink'
                        : 'bg-cream-light'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-headline text-sm ${isToday ? 'text-saffron-dark' : 'text-ink'}`}>
                        {day}
                      </span>
                      {isToday && (
                        <span className="text-[9px] bg-saffron text-cream px-1 font-bold">
                          TODAY
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1 mt-1">
                      {dayEvents.map((evt) => (
                        <Link
                          key={evt.id}
                          href={`/calendar/${evt.slug}`}
                          className="bg-ink text-cream text-[9px] p-1 truncate rounded hover:bg-crimson font-headline uppercase"
                          title={evt.title}
                        >
                          {evt.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

