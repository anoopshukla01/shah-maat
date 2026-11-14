'use client';

import React, { useState, useEffect } from 'react';
import { getCountdownParts } from '@/lib/date';

interface CountdownTimerProps {
  targetDate: string | Date;
  referenceDate?: string | Date;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  referenceDate,
  className = '',
  size = 'md',
}) => {
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState(() =>
    getCountdownParts(targetDate, referenceDate)
  );

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCountdown(getCountdownParts(targetDate, referenceDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate, referenceDate]);

  const pad = (n: number) => String(n).padStart(2, '0');

  if (countdown.isPast) {
    return (
      <div className={`font-headline uppercase tracking-wider text-crimson ${className}`}>
        LIVE NOW · IN PROGRESS
      </div>
    );
  }

  // Size variations
  if (size === 'hero' || size === 'lg') {
    return (
      <div className={`flex items-baseline gap-2 md:gap-4 font-headline uppercase select-none ${className}`}>
        <div className="flex flex-col items-center">
          <span className="text-[clamp(32px,5.5vw,72px)] leading-none text-ink tabular-nums font-bold">
            {pad(countdown.days)}
          </span>
          <span className="text-[clamp(10px,1vw,14px)] font-sans tracking-widest text-ink/75 font-semibold">
            DAYS
          </span>
        </div>
        <span className="text-[clamp(28px,4vw,56px)] leading-none text-ink/60 font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-[clamp(32px,5.5vw,72px)] leading-none text-ink tabular-nums font-bold">
            {pad(countdown.hours)}
          </span>
          <span className="text-[clamp(10px,1vw,14px)] font-sans tracking-widest text-ink/75 font-semibold">
            HRS
          </span>
        </div>
        <span className="text-[clamp(28px,4vw,56px)] leading-none text-ink/60 font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-[clamp(32px,5.5vw,72px)] leading-none text-ink tabular-nums font-bold">
            {pad(countdown.minutes)}
          </span>
          <span className="text-[clamp(10px,1vw,14px)] font-sans tracking-widest text-ink/75 font-semibold">
            MIN
          </span>
        </div>
        <span className="text-[clamp(28px,4vw,56px)] leading-none text-ink/60 font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-[clamp(32px,5.5vw,72px)] leading-none text-crimson tabular-nums font-bold">
            {pad(countdown.seconds)}
          </span>
          <span className="text-[clamp(10px,1vw,14px)] font-sans tracking-widest text-crimson/80 font-semibold">
            SEC
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1.5 font-headline text-lg tabular-nums text-ink ${className}`}>
      <span>{pad(countdown.days)}d</span>:
      <span>{pad(countdown.hours)}h</span>:
      <span>{pad(countdown.minutes)}m</span>:
      <span className="text-crimson">{pad(countdown.seconds)}s</span>
    </div>
  );
};

