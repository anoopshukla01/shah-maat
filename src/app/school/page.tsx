'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { topics, learningResources } from '@/content/seed';
import { ResourceLevel } from '@/types';
import { EmptyState } from '@/components/ui/EmptyState';

type FilterLevel = 'All' | ResourceLevel;

export default function SchoolPage() {
  const [selectedLevel, setSelectedLevel] = useState<FilterLevel>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter topics based on level and search
  const filteredTopics = topics.filter((t) => {
    const matchesLevel = selectedLevel === 'All' || t.level === selectedLevel;
    const matchesSearch =
      searchQuery.trim() === '' ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="relative min-h-screen w-full bg-[#F6EAD3] py-12 md:py-20 px-4 overflow-hidden">
      {/* Atmospheric School of Chess Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/art/school-chess-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom opacity-85"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(17, 17, 17, 0.14) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6EAD3]/80 via-[#F6EAD3]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="retro-badge bg-crimson text-white mb-3 font-bold">
            ACADEMY &amp; CHESS CODICES
          </span>
          <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-wider text-ink mb-4 font-bold">
            SCHOOL OF CHESS
          </h1>
          <p className="font-sans text-base md:text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed font-medium">
            From basic pawn tactics to deep grandmaster annotated classics. Master the sixty-four squares at your own pace.
          </p>

          {/* Search Bar & Level Filters */}
          <div className="mt-8 max-w-xl mx-auto flex flex-col gap-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, endgames, tactics, or openings..."
                className="w-full bg-white border-3 border-ink px-4 py-3 text-sm font-sans text-ink shadow-button focus:outline-none focus:ring-2 focus:ring-saffron"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-ink/60 hover:text-ink"
                >
                  CLEAR ✕
                </button>
              )}
            </div>

            {/* Level Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as FilterLevel[]).map((level) => {
                const isSelected = selectedLevel === level;
                return (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`retro-btn px-4 py-1.5 text-xs font-bold ${
                      isSelected
                        ? 'bg-crimson text-white shadow-button-active scale-105'
                        : 'bg-white text-ink hover:bg-mustard'
                    }`}
                  >
                    {level === 'All' ? 'ALL LEVELS' : `${level.toUpperCase()}`}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-ink">
            <h2 className="font-headline text-2xl md:text-3xl uppercase tracking-wider text-ink">
              CURRICULUM TOPICS ({filteredTopics.length})
            </h2>
          </div>

          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTopics.map((topic, index) => {
                const rotations = [-1.5, 1, -1, 1.2];
                const levelColor =
                  topic.level === 'Beginner'
                    ? 'bg-olive text-cream'
                    : topic.level === 'Intermediate'
                    ? 'bg-teal text-cream'
                    : 'bg-crimson text-cream';

                return (
                  <Link
                    key={topic.id}
                    href={`/school/topics/${topic.slug}`}
                    className="retro-card bg-white/95 backdrop-blur-xs p-6 md:p-8 flex flex-col justify-between group"
                    style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`retro-badge ${levelColor} text-[10px]`}>
                          {topic.level}
                        </span>
                        <span className="retro-badge bg-cream-dark text-ink text-[10px]">
                          {topic.resourceCount} RESOURCES
                        </span>
                      </div>

                      <span className="font-headline text-xs font-bold text-saffron-dark uppercase block mb-1">
                        {topic.category}
                      </span>

                      <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-2 group-hover:text-crimson transition-colors">
                        {topic.title}
                      </h3>

                      <p className="font-sans text-xs md:text-sm text-ink/80 leading-relaxed mb-6">
                        {topic.description}
                      </p>
                    </div>

                    <span className="font-headline text-xs uppercase tracking-wider text-saffron flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      EXPLORE TOPIC RESOURCES →
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <EmptyState
              title="No Topics Match Your Search"
              message={`We couldn't find any curriculum topics matching "${searchQuery}".`}
              actionText="Reset Search"
              actionHref="/school"
              icon="book"
            />
          )}
        </div>

        {/* Featured Study Modules Carousel / Grid */}
        <div className="retro-card p-6 md:p-8 bg-mustard halftone-mustard border-3 border-ink shadow-card">
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-ink">
            <div>
              <span className="retro-badge bg-crimson text-cream text-[10px] mb-1">
                HAND-PICKED CODICES
              </span>
              <h2 className="font-headline text-3xl uppercase tracking-wider text-ink">
                FEATURED STUDY MODULES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningResources.map((res) => (
              <Link
                key={res.id}
                href={`/school/${res.kind}/${res.slug}`}
                className="retro-card p-5 bg-cream flex flex-col justify-between hover:bg-cream-light"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="retro-badge bg-ink text-cream text-[10px]">
                      {res.kind.toUpperCase()}
                    </span>
                    <span className="font-sans text-xs text-ink/70 font-semibold">
                      {res.readTimeMinutes} min
                    </span>
                  </div>

                  <h3 className="font-headline text-xl uppercase tracking-wider text-ink mb-1">
                    {res.title}
                  </h3>

                  <p className="font-sans text-xs text-ink/80 line-clamp-2 mb-4">
                    {res.summary}
                  </p>
                </div>

                <span className="font-headline text-xs uppercase text-crimson font-bold">
                  OPEN STUDY MODULE →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

