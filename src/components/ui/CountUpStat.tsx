'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CountUpStatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  numeralColor?: string;
  labelColor?: string;
}

export const CountUpStat: React.FC<CountUpStatProps> = ({
  value,
  suffix = '+',
  label,
  duration = 1600,
  numeralColor = 'text-crimson',
  labelColor = 'text-ink',
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, value]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, value, duration]);

  return (
    <div ref={elementRef} className="flex flex-col select-none">
      <span className={`distressed-numeral ${numeralColor} text-[clamp(48px,8vw,110px)] leading-[0.9] font-bold tabular-nums`}>
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className={`font-headline text-[clamp(14px,1.9vw,28px)] ${labelColor} uppercase tracking-wider mt-1 font-bold`}>
        {label}
      </span>
    </div>
  );
};

