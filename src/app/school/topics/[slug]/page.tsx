'use client';

import React from 'react';
import Link from 'next/link';
import { topics, learningResources } from '@/content/seed';
import { EmptyState } from '@/components/ui/EmptyState';

export default function TopicDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) {
    return (
      <div className="min-h-screen bg-cream py-20 px-4">
        <EmptyState
          title="Topic Not Found"
          message={`The topic "${params.slug}" could not be located in our curriculum.`}
          actionText="Back to School"
          actionHref="/school"
          icon="book"
        />
      </div>
    );
  }

  // Find resources belonging to this topic
  const resources = learningResources.filter((r) => r.topicSlug === topic.slug);

  return (
    <div className="relative min-h-screen w-full bg-cream py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 font-headline uppercase text-xs text-ink/70">
          <Link href="/school" className="hover:text-crimson">SCHOOL OF CHESS</Link>
          <span>/</span>
          <span className="text-crimson">{topic.title}</span>
        </div>

        {/* Topic Header Card */}
        <div className="retro-card p-6 md:p-10 bg-cream border-3 border-ink shadow-card mb-10 -rotate-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="retro-badge bg-saffron text-cream text-xs">
              {topic.category}
            </span>
            <span className="retro-badge bg-teal text-cream text-xs">
              {topic.level}
            </span>
          </div>

          <h1 className="font-headline text-3xl md:text-5xl uppercase tracking-wider text-ink mb-3">
            {topic.title}
          </h1>

          <p className="font-sans text-base text-ink/80 leading-relaxed max-w-2xl">
            {topic.description}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl uppercase tracking-wider text-ink mb-6 pb-2 border-b-2 border-ink">
            AVAILABLE STUDY MODULES ({resources.length})
          </h2>

          {resources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((res) => (
                <div
                  key={res.id}
                  className="retro-card p-6 bg-cream border-3 border-ink flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="retro-badge bg-crimson text-cream text-xs">
                        {res.kind.toUpperCase()}
                      </span>
                      <span className="font-sans text-xs text-ink/70 font-semibold">
                        {res.readTimeMinutes} min read
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-2">
                      {res.title}
                    </h3>

                    <p className="font-sans text-sm text-ink/80 mb-6 leading-relaxed">
                      {res.summary}
                    </p>
                  </div>

                  <Link
                    href={`/school/${res.kind}/${res.slug}`}
                    className="retro-btn bg-saffron hover:bg-saffron-light text-cream py-2.5 text-center text-xs font-bold"
                  >
                    START STUDYING →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Study Modules Yet"
              message="Our curriculum arbiters are compiling lessons and annotated games for this topic."
              actionText="Explore Other Topics"
              actionHref="/school"
              icon="book"
            />
          )}
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/school"
            className="retro-btn bg-cream hover:bg-mustard text-ink px-6 py-2.5 text-xs font-bold"
          >
            ← BACK TO ALL TOPICS
          </Link>
        </div>
      </div>
    </div>
  );
}

