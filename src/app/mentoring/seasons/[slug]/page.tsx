'use client';

import React from 'react';
import Link from 'next/link';
import { seasons, cohorts, mentorSessions } from '@/content/seed';
import { formatISTDate, formatISTTime } from '@/lib/date';
import { EmptyState } from '@/components/ui/EmptyState';

export default function SeasonDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const season = seasons.find((s) => s.slug === params.slug);

  if (!season) {
    return (
      <div className="min-h-screen bg-cream py-20 px-4">
        <EmptyState
          title="Season Not Found"
          message={`The mentorship season "${params.slug}" could not be located.`}
          actionText="Back to Mentoring"
          actionHref="/mentoring"
          icon="calendar"
        />
      </div>
    );
  }

  // Cohorts in this season
  const seasonCohorts = cohorts.filter((c) => c.seasonSlug === season.slug);

  return (
    <div className="relative min-h-screen w-full bg-cream py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 font-headline uppercase text-xs text-ink/70">
          <Link href="/mentoring" className="hover:text-crimson">MENTORING</Link>
          <span>/</span>
          <span className="text-crimson">{season.name}</span>
        </div>

        {/* Season Header */}
        <div className="retro-card p-6 md:p-10 bg-cream border-3 border-ink shadow-card mb-10 -rotate-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="retro-badge bg-crimson text-cream text-xs">
              TERM {season.number}
            </span>
            <span className={`retro-badge ${season.status === 'active' ? 'bg-saffron text-cream' : 'bg-ink text-cream'} text-xs`}>
              {season.status.toUpperCase()}
            </span>
          </div>

          <h1 className="font-headline text-3xl md:text-5xl uppercase tracking-wider text-ink mb-3">
            {season.name}
          </h1>

          <p className="font-sans text-base text-ink/80 leading-relaxed mb-4">
            {season.description}
          </p>

          <div className="text-xs font-sans text-ink/70 font-semibold tabular-nums">
            Term Duration: {formatISTDate(season.startAt)} — {formatISTDate(season.endAt)}
          </div>
        </div>

        {/* Cohorts in this season */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl uppercase tracking-wider text-ink mb-6 pb-2 border-b-2 border-ink">
            ENROLLED COHORTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonCohorts.map((cohort) => (
              <div
                key={cohort.id}
                className="retro-card p-6 bg-cream border-3 border-ink flex flex-col justify-between"
              >
                <div>
                  <span className="retro-badge bg-teal text-cream text-[10px] mb-2">
                    {cohort.level}
                  </span>
                  <h3 className="font-headline text-xl uppercase tracking-wider text-ink mb-1">
                    {cohort.name}
                  </h3>
                  <p className="font-sans text-xs font-bold text-saffron-dark mb-2">
                    {cohort.mentorName}
                  </p>
                  <p className="font-sans text-xs text-ink/80 leading-relaxed mb-4">
                    {cohort.focus}
                  </p>
                </div>

                <div className="text-[11px] font-sans text-ink/70 border-t border-ink/20 pt-3">
                  Schedule: {cohort.schedule}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/mentoring"
            className="retro-btn bg-cream hover:bg-mustard text-ink px-6 py-2.5 text-xs font-bold"
          >
            ← BACK TO MENTORING GUILD
          </Link>
        </div>
      </div>
    </div>
  );
}

