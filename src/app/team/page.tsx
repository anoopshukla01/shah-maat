'use client';

import React, { useState } from 'react';
import { teamMembers } from '@/content/seed';
import { TeamMember } from '@/types';
import { StickerImage } from '@/components/ui/StickerImage';
import { EmptyState } from '@/components/ui/EmptyState';

type TenureKey = 'All' | '2026-2027' | '2025-2026' | 'Founding 2024-2025';

export default function TeamPage() {
  const [selectedTenure, setSelectedTenure] = useState<TenureKey>('2026-2027');

  const tenureOptions: TenureKey[] = [
    '2026-2027',
    '2025-2026',
    'Founding 2024-2025',
    'All',
  ];

  const filteredMembers =
    selectedTenure === 'All'
      ? teamMembers
      : teamMembers.filter((m) => m.tenure === selectedTenure);

  return (
    <div className="relative min-h-screen w-full bg-[#FFFDF8] py-12 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="retro-badge bg-mustard text-ink mb-3 font-bold">
            SOCIETY LEADERSHIP &amp; ARBITERS
          </span>
          <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-wider text-ink mb-4 font-bold">
            THE CHESS COUNCIL
          </h1>
          <p className="font-sans text-base md:text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Meet the student arbiters, tournament directors, curriculum leads, and coaches steering the Shah-Maat collective.
          </p>

          {/* Tenure Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {tenureOptions.map((tenure) => {
              const isSelected = selectedTenure === tenure;
              return (
                <button
                  key={tenure}
                  onClick={() => setSelectedTenure(tenure)}
                  className={`retro-btn px-5 py-2 text-xs md:text-sm font-bold tracking-wider ${
                    isSelected
                      ? 'bg-crimson text-white shadow-button-active scale-105'
                      : 'bg-white text-ink hover:bg-mustard'
                  }`}
                >
                  {tenure === 'All' ? 'ALL TENURES' : `COUNCIL ${tenure}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member: TeamMember, index: number) => {
              const rotations = [-1.5, 1, -1, 1.5];
              return (
                <div
                  key={member.id}
                  className="retro-card p-6 flex flex-col justify-between"
                  style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                >
                  <div>
                    {/* Member Avatar / Sticker Accent */}
                    <div className="w-24 h-24 mx-auto mb-4 bg-cream-dark border-3 border-ink rounded-full p-2 flex items-center justify-center shadow-button overflow-hidden">
                      <StickerImage
                        src={member.photoUrl}
                        fallbackName="knight"
                        width={90}
                        height={90}
                      />
                    </div>

                    {/* Member Tenure & House Badges */}
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="retro-badge bg-mustard text-ink text-[10px]">
                        {member.tenure}
                      </span>
                      {member.house && (
                        <span className="retro-badge bg-teal text-cream text-[10px]">
                          {member.house}
                        </span>
                      )}
                    </div>

                    {/* Name & Role */}
                    <h3 className="font-headline text-xl uppercase tracking-wider text-ink text-center mb-1">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs font-bold text-saffron-dark text-center uppercase tracking-wide mb-3">
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className="font-sans text-xs text-ink/80 text-center leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {/* Profile & Social Links */}
                  <div className="border-t border-ink/20 pt-4 flex items-center justify-center gap-3">
                    {member.links.lichess && (
                      <a
                        href={member.links.lichess}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-badge bg-cream text-ink text-xs hover:bg-mustard"
                        title="Lichess Profile"
                      >
                        Lichess
                      </a>
                    )}
                    {member.links.chesscom && (
                      <a
                        href={member.links.chesscom}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-badge bg-cream text-ink text-xs hover:bg-mustard"
                        title="Chess.com Profile"
                      >
                        Chess.com
                      </a>
                    )}
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-badge bg-cream text-ink text-xs hover:bg-mustard"
                        title="GitHub"
                      >
                        GitHub
                      </a>
                    )}
                    {member.links.email && (
                      <a
                        href={member.links.email}
                        className="retro-badge bg-cream text-ink text-xs hover:bg-mustard"
                        title="Contact Email"
                      >
                        Email
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <EmptyState
            title="No Members Found in this Tenure"
            message="No team member records are currently listed for the selected academic tenure."
            icon="chess"
          />
        )}
      </div>
    </div>
  );
}

