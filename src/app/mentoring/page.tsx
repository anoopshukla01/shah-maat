'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { seasons, cohorts, mentorSessions, siteSetting } from '@/content/seed';
import { formatISTDate, formatISTTime } from '@/lib/date';
import { EmptyState } from '@/components/ui/EmptyState';

export default function MentoringPage() {
  const activeSeason = seasons.find((s) => s.status === 'active') || seasons[0];
  const upcomingSessions = mentorSessions.filter((s) => s.status === 'upcoming');
  const pastSessions = mentorSessions.filter((s) => s.status === 'completed');

  return (
    <div className="relative min-h-screen w-full bg-[#F4E1C1] py-12 md:py-20 px-4 overflow-hidden">
      {/* Atmospheric Mentoring Parchment & Clouds Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/art/mentoring-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#FFFDF8]/20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="retro-badge bg-crimson text-white mb-3 font-bold">
            STRUCTURED COACHING &amp; COHORTS
          </span>
          <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-wider text-ink mb-4 font-bold">
            THE MENTORSHIP GUILD
          </h1>
          <p className="font-sans text-base md:text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Personalized guidance from FIDE-rated arbiters and competitive veterans. Master practical tournament skills across structured semester cohorts.
          </p>
        </div>

        {/* Section 1: What It Is */}
        <div className="retro-card p-6 md:p-10 bg-white border-3 border-ink shadow-card mb-16 -rotate-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="retro-badge bg-crimson text-cream text-xs mb-2">
                ACADEMIC &amp; COMPETITIVE RIGOR
              </span>
              <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-wider text-ink mb-3">
                HOW OUR MENTORSHIP OPERATES
              </h2>
              <p className="font-sans text-sm md:text-base text-ink/85 leading-relaxed mb-4">
                We believe improvement in chess requires more than grinding blitz games. Our mentorship program assigns every member to a curated cohort based on rating bands, meeting weekly for interactive board sessions, engine-free calculation drills, and personalized game reviews.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-sans text-ink font-bold">
                <span className="bg-mustard/40 px-3 py-1 border border-ink rounded">✓ No Attendee Data Stored</span>
                <span className="bg-mustard/40 px-3 py-1 border border-ink rounded">✓ Weekly Live Sparring</span>
                <span className="bg-mustard/40 px-3 py-1 border border-ink rounded">✓ Engine Analysis Decoded</span>
              </div>
            </div>

            <div className="md:col-span-4 bg-cream-dark p-6 border-2 border-ink shadow-button text-center">
              <span className="font-headline text-xs uppercase text-ink/70 tracking-widest block mb-1">
                CURRENT ACTIVE TERM
              </span>
              <h3 className="font-headline text-2xl uppercase text-crimson mb-2 font-bold">
                {activeSeason.name}
              </h3>
              <p className="font-sans text-xs text-ink/80 mb-4">
                {activeSeason.description}
              </p>
              <Link
                href={`/mentoring/seasons/${activeSeason.slug}`}
                className="retro-btn bg-saffron hover:bg-saffron-light text-cream px-4 py-2 text-xs font-bold w-full"
              >
                VIEW FULL SEASON SYLLABUS →
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Cohorts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-ink">
            <div>
              <span className="retro-badge bg-mustard text-ink text-xs mb-1">
                THREE DEVELOPMENTAL TIERS
              </span>
              <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-wider text-ink">
                ACTIVE SEMESTER COHORTS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cohorts.map((cohort, index) => {
              const rotations = [-1.5, 1, -1];
              const levelColor =
                cohort.level === 'Beginner'
                  ? 'bg-olive text-cream'
                  : cohort.level === 'Intermediate'
                  ? 'bg-teal text-cream'
                  : 'bg-crimson text-cream';

              return (
                <div
                  key={cohort.id}
                  className="retro-card bg-white/95 backdrop-blur-xs p-6 md:p-8 flex flex-col justify-between"
                  style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`retro-badge ${levelColor} text-xs`}>
                        {cohort.level}
                      </span>
                      <span className="font-sans text-xs font-bold text-ink/70">
                        {cohort.mentorRating}
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-1">
                      {cohort.name}
                    </h3>

                    <p className="font-sans text-xs font-bold text-saffron-dark uppercase mb-3">
                      Mentor: {cohort.mentorName}
                    </p>

                    <div className="bg-cream-dark p-3 border border-ink/20 rounded mb-4 text-xs font-sans text-ink">
                      <p className="font-bold">🗓️ {cohort.schedule}</p>
                      <p className="text-ink/75 mt-1">Focus: {cohort.focus}</p>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-ink/80 leading-relaxed mb-6">
                      {cohort.description}
                    </p>
                  </div>

                  <Link
                    href="/join"
                    className="retro-btn bg-ink text-cream hover:bg-mustard hover:text-ink py-2.5 text-center text-xs font-bold w-full"
                  >
                    ENROLL VIA JOIN FORM →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Upcoming Sessions */}
        <div className="mb-16">
          <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink mb-6 pb-2 border-b-2 border-ink">
            UPCOMING LIVE MENTOR SESSIONS
          </h2>

          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((sess) => (
                <div
                  key={sess.id}
                  className="retro-card p-5 bg-cream border-3 border-ink flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="retro-badge bg-mustard text-ink text-[10px]">
                        {sess.cohortName}
                      </span>
                      <span className="font-sans text-xs font-bold text-ink/70 tabular-nums">
                        {formatISTDate(sess.scheduledAt)} · {formatISTTime(sess.scheduledAt)} IST
                      </span>
                    </div>
                    <h3 className="font-headline text-xl uppercase tracking-wider text-ink mb-1">
                      {sess.title}
                    </h3>
                    <p className="font-sans text-xs text-ink/80">
                      {sess.summary}
                    </p>
                  </div>

                  <a
                    href={siteSetting.socialLinks.googleSpace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn bg-saffron text-cream hover:bg-saffron-light px-5 py-2 text-xs font-bold flex-shrink-0"
                  >
                    JOIN MEETING ROOM ↗
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Upcoming Live Sessions"
              message="The next schedule will be confirmed by mentors following the weekend tournaments."
              icon="calendar"
            />
          )}
        </div>

        {/* Section 4: Session History (Notes & Recordings, No attendee data) */}
        <div>
          <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink mb-6 pb-2 border-b-2 border-ink">
            SESSION HISTORY &amp; ARCHIVED LECTURES
          </h2>

          {pastSessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastSessions.map((sess) => (
                <div
                  key={sess.id}
                  className="retro-card p-6 bg-cream border-3 border-ink flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="retro-badge bg-ink text-cream text-[10px]">
                        {sess.cohortName}
                      </span>
                      <span className="font-sans text-xs text-ink/70 font-semibold tabular-nums">
                        Concluded {formatISTDate(sess.scheduledAt)}
                      </span>
                    </div>

                    <h3 className="font-headline text-xl uppercase tracking-wider text-ink mb-2">
                      {sess.title}
                    </h3>

                    <p className="font-sans text-xs md:text-sm text-ink/80 mb-4">
                      {sess.summary}
                    </p>

                    {sess.notes && (
                      <div className="bg-cream-dark/60 p-3 border-l-3 border-crimson rounded text-xs font-sans text-ink/90 mb-4">
                        <strong>Mentor Notes: </strong>
                        {sess.notes}
                      </div>
                    )}
                  </div>

                  {sess.recordingUrl && (
                    <a
                      href={sess.recordingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn bg-crimson text-cream hover:bg-crimson-dark py-2 text-center text-xs font-bold"
                    >
                      WATCH RECORDING REPLAY 🎥
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Archived Sessions"
              message="Session recordings and study notes will be posted here as cohort modules conclude."
              icon="book"
            />
          )}
        </div>
      </div>
    </div>
  );
}
