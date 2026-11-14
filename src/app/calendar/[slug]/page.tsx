'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { calendarItems, events, siteSetting } from '@/content/seed';
import { formatISTDate, formatISTTime, REFERENCE_DATE } from '@/lib/date';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { ChessClock } from '@/components/ui/ChessClock';
import { EmptyState } from '@/components/ui/EmptyState';

export default function CalendarDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = calendarItems.find((i) => i.slug === params.slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-cream py-20 px-4">
        <EmptyState
          title="Calendar Schedule Not Found"
          message={`We could not locate an event with slug "${params.slug}". It may have concluded or been rescheduled.`}
          actionText="Back to Calendar"
          actionHref="/calendar"
          icon="calendar"
        />
      </div>
    );
  }

  // Linked event if any
  const linkedEvent = events.find((e) => e.slug === item.eventSlug || e.slug === item.slug);

  // Check state-aware button
  const currentMs = REFERENCE_DATE.getTime();
  const opensAtMs = item.opensAt ? new Date(item.opensAt).getTime() : new Date(item.startAt).getTime() - 30 * 60 * 1000;
  const isSessionOpen = currentMs >= opensAtMs;

  return (
    <div className="relative min-h-screen w-full bg-[#001530] py-12 md:py-20 px-4 overflow-hidden">
      {/* =========================================================
          ATMOSPHERIC DEEP NAVY / PARCHMENT CLOUDS BACKGROUND
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
        {/* Soft edge gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001530]/30 via-transparent to-[#001530]/40" />
      </div>

      {/* Heritage Dome Accent in background */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-4 w-[clamp(260px,40vw,500px)] pointer-events-none select-none z-0 opacity-20 filter drop-shadow-[0px_4px_12px_rgba(0,0,0,0.4)]"
        aria-hidden="true"
      >
        <Image
          src="/art/heritage-dome.png"
          alt=""
          width={500}
          height={250}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 font-headline uppercase text-xs text-ink/80 bg-white/90 px-3 py-1.5 border-2 border-ink rounded w-max shadow-sm">
          <Link href="/calendar" className="hover:text-crimson font-bold">CALENDAR</Link>
          <span>/</span>
          <span className="text-crimson font-bold truncate max-w-xs">{item.title}</span>
        </div>

        {/* Hero Card */}
        <div className="retro-card p-6 md:p-10 bg-white/95 backdrop-blur-xs border-3 border-ink shadow-card mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="retro-badge bg-crimson text-cream text-xs">
              {item.type}
            </span>
            <span className="font-sans text-xs md:text-sm font-bold text-ink/70 tabular-nums">
              {formatISTDate(item.startAt)} · {formatISTTime(item.startAt)} - {formatISTTime(item.endAt)} IST
            </span>
          </div>

          <h1 className="font-headline text-3xl md:text-5xl uppercase tracking-wider text-ink mb-4">
            {item.title}
          </h1>

          <p className="font-sans text-sm md:text-base text-ink/80 leading-relaxed mb-8">
            {item.description}
          </p>

          {/* Countdown Block */}
          <div className="bg-mustard halftone-mustard border-3 border-ink p-6 mb-8 text-center rounded shadow-button">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8">
                <ChessClock size={32} isTicking={true} variant="countdown" />
              </div>
              <span className="font-headline text-xs uppercase tracking-wider text-ink font-bold">
                TIME REMAINING TO COMMENCEMENT:
              </span>
            </div>
            <CountdownTimer
              targetDate={item.startAt}
              referenceDate={siteSetting.mockCurrentTime}
              size="lg"
            />
          </div>

          {/* State-Aware Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-ink/20 pt-6">
            <div className="text-xs font-sans text-ink/75">
              <span>📍 Location: </span>
              <strong className="text-ink">{item.location}</strong>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {isSessionOpen ? (
                <a
                  href={linkedEvent?.registrationUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-crimson text-cream hover:bg-crimson-dark px-8 py-3.5 text-base font-bold animate-pulse w-full sm:w-auto text-center"
                >
                  JOIN SESSION NOW ⚡
                </a>
              ) : (
                <a
                  href={linkedEvent?.registrationUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-saffron hover:bg-saffron-light text-cream px-8 py-3.5 text-base font-bold w-full sm:w-auto text-center"
                >
                  REGISTER FOR THIS EVENT ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/calendar"
            className="retro-btn bg-cream hover:bg-mustard text-ink px-6 py-2.5 text-xs font-bold"
          >
            ← BACK TO ALL SCHEDULES
          </Link>
        </div>
      </div>
    </div>
  );
}

