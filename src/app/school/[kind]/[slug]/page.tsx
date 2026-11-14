'use client';

import React from 'react';
import Link from 'next/link';
import { learningResources } from '@/content/seed';
import { AnnotatedGameViewer } from '@/components/chess/AnnotatedGameViewer';
import { StickerImage } from '@/components/ui/StickerImage';
import { EmptyState } from '@/components/ui/EmptyState';

export default function ResourceDetailPage({
  params,
}: {
  params: { kind: string; slug: string };
}) {
  const resource = learningResources.find((r) => r.slug === params.slug);

  if (!resource) {
    return (
      <div className="min-h-screen bg-cream py-20 px-4">
        <EmptyState
          title="Study Resource Not Found"
          message={`We could not locate a study module matching "${params.slug}".`}
          actionText="Back to School of Chess"
          actionHref="/school"
          icon="book"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-cream py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 font-headline uppercase text-xs text-ink/70">
          <Link href="/school" className="hover:text-crimson">SCHOOL</Link>
          <span>/</span>
          <span className="text-saffron-dark font-bold">{resource.kind.toUpperCase()}</span>
          <span>/</span>
          <span className="text-crimson truncate max-w-xs">{resource.title}</span>
        </div>

        {/* Resource Header Card */}
        <div className="retro-card p-6 md:p-8 bg-cream border-3 border-ink shadow-card mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="retro-badge bg-crimson text-cream text-xs">
                {resource.kind.toUpperCase()}
              </span>
              <span className="retro-badge bg-teal text-cream text-xs">
                {resource.level}
              </span>
            </div>
            <span className="font-sans text-xs text-ink/75 font-semibold">
              By {resource.author} · {resource.readTimeMinutes} min
            </span>
          </div>

          <h1 className="font-headline text-3xl md:text-5xl uppercase tracking-wider text-ink mb-3">
            {resource.title}
          </h1>

          <p className="font-sans text-base text-ink/80 leading-relaxed">
            {resource.summary}
          </p>
        </div>

        {/* =========================================================
            TEMPLATE 1: ANNOTATED GAME (react-chessboard + chess.js)
        ========================================================= */}
        {resource.kind === 'annotated-game' && (
          <div className="space-y-8">
            <AnnotatedGameViewer
              initialFen={resource.initialFen}
              moves={resource.moves || []}
              title={resource.title}
            />

            <div className="retro-card p-6 bg-cream border-3 border-ink shadow-button">
              <h3 className="font-headline text-xl uppercase tracking-wider text-ink mb-3 pb-2 border-b border-ink/20">
                MASTER GAME PGN NOTATION
              </h3>
              <pre className="font-mono text-xs bg-cream-dark p-4 border border-ink/30 rounded overflow-x-auto text-ink/90 whitespace-pre-wrap leading-relaxed">
                {resource.pgn || '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7...'}
              </pre>
            </div>
          </div>
        )}

        {/* =========================================================
            TEMPLATE 2: VIDEO LECTURE
        ========================================================= */}
        {resource.kind === 'video' && (
          <div className="space-y-8">
            <div className="retro-card p-4 md:p-6 bg-ink text-cream border-3 border-ink shadow-card">
              {/* Responsive Video Container */}
              <div className="relative w-full aspect-video bg-black border-2 border-cream/30 rounded overflow-hidden shadow-button">
                {resource.videoUrl ? (
                  <iframe
                    src={resource.videoUrl}
                    title={resource.title}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center font-headline text-xl text-cream">
                    VIDEO BROADCAST PLACEHOLDER
                  </div>
                )}
              </div>
            </div>

            <div className="retro-card p-6 md:p-8 bg-cream border-3 border-ink shadow-card">
              <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-3 pb-2 border-b-2 border-ink">
                LECTURE NOTES &amp; TRANSCRIPT SYNOPSIS
              </h3>
              <div className="prose max-w-none font-sans text-sm md:text-base text-ink/85 leading-relaxed whitespace-pre-line">
                {resource.content}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            TEMPLATE 3: BOOK RETROSPECTIVE
        ========================================================= */}
        {resource.kind === 'book' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 bg-cream-dark p-6 border-3 border-ink shadow-card text-center">
                <div className="w-48 mx-auto mb-4">
                  <StickerImage
                    src={resource.bookCover || '/art/tactics-book.png'}
                    fallbackName="book-knight"
                    width={200}
                    height={260}
                  />
                </div>
                <span className="retro-badge bg-mustard text-ink text-xs mb-2">
                  CURATED MONOGRAPH
                </span>
                <p className="font-sans text-xs text-ink/70">
                  Recommended for {resource.level} players
                </p>
              </div>

              <div className="md:col-span-8 retro-card p-6 md:p-8 bg-cream border-3 border-ink shadow-card">
                <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-4 pb-2 border-b-2 border-ink">
                  CRITICAL ESSAY &amp; RETROSPECTIVE
                </h3>
                <div className="font-sans text-sm md:text-base text-ink/85 leading-relaxed whitespace-pre-line">
                  {resource.content}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            TEMPLATE 4: CODEX LESSON
        ========================================================= */}
        {resource.kind === 'lesson' && (
          <div className="retro-card p-6 md:p-10 bg-cream border-3 border-ink shadow-card">
            <div className="font-sans text-base md:text-lg text-ink/90 leading-relaxed whitespace-pre-line">
              {resource.content}
            </div>

            <div className="mt-10 pt-6 border-t-2 border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-sans text-ink/60">
                Official curriculum codex published by Shah-Maat Academic Division.
              </div>
              <Link
                href="/school"
                className="retro-btn bg-saffron text-cream hover:bg-saffron-light px-6 py-2.5 text-xs font-bold"
              >
                BROWSE MORE LESSONS →
              </Link>
            </div>
          </div>
        )}

        {/* =========================================================
            TEMPLATE 5: PRACTICE & DRILLS
        ========================================================= */}
        {resource.kind === 'practice' && (
          <div className="space-y-8">
            <div className="retro-card p-6 md:p-8 bg-cream border-3 border-ink shadow-card">
              <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-4 pb-2 border-b-2 border-ink">
                PRACTICAL DRILLS &amp; EXERCISES
              </h3>
              <div className="font-sans text-sm md:text-base text-ink/85 leading-relaxed whitespace-pre-line mb-8">
                {resource.content}
              </div>

              <div className="bg-mustard/20 p-4 border-2 border-ink rounded shadow-button">
                <h4 className="font-headline text-base uppercase text-ink mb-2">
                  CHECKLIST BEFORE SUBMITTING ROUND RESULTS:
                </h4>
                <ul className="space-y-1.5 font-sans text-xs text-ink/80 list-disc list-inside">
                  <li>Did you look for king-queen alignment pins?</li>
                  <li>Are all your minor pieces defended twice?</li>
                  <li>Did you maintain active rooks along open files?</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/school"
            className="retro-btn bg-cream hover:bg-mustard text-ink px-6 py-2.5 text-xs font-bold"
          >
            ← BACK TO SCHOOL OF CHESS
          </Link>
        </div>
      </div>
    </div>
  );
}

