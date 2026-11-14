// Reusable retro empty state component that maintains the aesthetic

import React from 'react';
import Link from 'next/link';

interface EmptyStateProps {
  title?: string;
  message?: string;
  actionText?: string;
  actionHref?: string;
  className?: string;
  icon?: 'chess' | 'calendar' | 'trophy' | 'book';
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Entries Found',
  message = 'There are no active records in this section right now. Check back soon for fresh tournament announcements.',
  actionText,
  actionHref,
  className = '',
  icon = 'chess',
}) => {
  return (
    <div
      className={`retro-card p-6 md:p-8 text-center max-w-xl mx-auto my-6 ${className}`}
      role="status"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-mustard rounded-full border-3 border-ink flex items-center justify-center shadow-button">
        {icon === 'calendar' ? (
          <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ) : icon === 'trophy' ? (
          <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
            <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
            <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        )}
      </div>

      <h3 className="font-headline text-2xl uppercase tracking-wider text-ink mb-2">
        {title}
      </h3>
      <p className="font-sans text-ink/80 text-sm md:text-base mb-6 leading-relaxed">
        {message}
      </p>

      {actionText && actionHref && (
        <Link
          href={actionHref}
          className="retro-btn bg-saffron hover:bg-saffron-light text-cream px-6 py-2.5 text-sm"
        >
          {actionText}
        </Link>
      )}
    </div>
  );
};

