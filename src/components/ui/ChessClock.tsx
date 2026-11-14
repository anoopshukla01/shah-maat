'use client';

import React, { useEffect, useState } from 'react';

interface ChessClockProps {
  size?: number | string;
  className?: string;
  showHands?: boolean;
  isTicking?: boolean;
  timeDisplay?: string; // for Next Up strip countdown display
  variant?: 'logo' | 'hero' | 'countdown';
  rotation?: number;
}

export const ChessClock: React.FC<ChessClockProps> = ({
  size = 120,
  className = '',
  showHands = true,
  isTicking = true,
  timeDisplay,
  variant = 'hero',
  rotation = 0,
}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isTicking) return;
    const interval = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTicking]);

  // Second hand angle
  const secondHandAngle = (seconds * 6) % 360;
  // Minute hand angle
  const minuteHandAngle = (Math.floor(seconds / 5) * 6 + 135) % 360;
  // Hour hand angle
  const hourHandAngle = 240;

  const ringText = 'LEARN · EVENTS · COMMUNITY · JOIN · ';

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
      }}
      aria-label="Vintage Chess Clock"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular TextPath for the ring text */}
          <path
            id="clock-text-path"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
          {/* Subtle wood-grain / brass radial gradient for vintage housing */}
          <radialGradient id="clock-housing" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#6E260E" />
            <stop offset="90%" stopColor="#4A1806" />
            <stop offset="100%" stopColor="#120B0C" />
          </radialGradient>
          <radialGradient id="clock-dial" cx="50%" cy="50%" r="50%">
            <stop offset="85%" stopColor="#F6EAD3" />
            <stop offset="100%" stopColor="#EAD7B5" />
          </radialGradient>
        </defs>

        {/* Vintage Top Buttons (dual plungers on chess clocks) */}
        {variant !== 'logo' && (
          <g id="clock-plungers">
            <rect x="52" y="4" width="24" height="12" rx="3" fill="#E8B730" stroke="#120B0C" strokeWidth="2.5" />
            <rect x="124" y="8" width="24" height="12" rx="3" fill="#B3123C" stroke="#120B0C" strokeWidth="2.5" />
          </g>
        )}

        {/* Outer Brown Housing Ring */}
        <circle cx="100" cy="106" r="88" fill="url(#clock-housing)" stroke="#120B0C" strokeWidth="4" />
        <circle cx="100" cy="106" r="80" fill="#4A1806" stroke="#E8B730" strokeWidth="1.5" />

        {/* Cream Inner Dial */}
        <circle cx="100" cy="106" r="68" fill="url(#clock-dial)" stroke="#120B0C" strokeWidth="3" />

        {/* Ring Text along TextPath: LEARN · EVENTS · COMMUNITY · JOIN · */}
        <text
          fill="#120B0C"
          fontSize="9.5"
          fontFamily="var(--font-anton), sans-serif"
          fontWeight="bold"
          letterSpacing="1.5"
        >
          <textPath href="#clock-text-path" startOffset="0%">
            {ringText}
          </textPath>
        </text>

        {/* Hour markers (12 ticks) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          return (
            <line
              key={i}
              x1="100"
              y1="46"
              x2="100"
              y2={i % 3 === 0 ? "54" : "50"}
              stroke="#120B0C"
              strokeWidth={i % 3 === 0 ? "3" : "1.5"}
              transform={`rotate(${angle} 100 106)`}
            />
          );
        })}

        {/* Optional Digital / Countdown Center Display (used in Next Up strip) */}
        {timeDisplay ? (
          <text
            x="100"
            y="114"
            textAnchor="middle"
            fill="#120B0C"
            fontFamily="var(--font-anton), sans-serif"
            fontSize="18"
            letterSpacing="0.05em"
          >
            {timeDisplay}
          </text>
        ) : (
          showHands && (
            <g id="clock-hands">
              {/* Hour Hand */}
              <line
                x1="100"
                y1="106"
                x2="100"
                y2="76"
                stroke="#120B0C"
                strokeWidth="4.5"
                strokeLinecap="round"
                transform={`rotate(${hourHandAngle} 100 106)`}
              />
              {/* Minute Hand */}
              <line
                x1="100"
                y1="106"
                x2="100"
                y2="64"
                stroke="#120B0C"
                strokeWidth="3.5"
                strokeLinecap="round"
                transform={`rotate(${minuteHandAngle} 100 106)`}
              />
              {/* Red Ticking Second Hand */}
              <line
                x1="100"
                y1="116"
                x2="100"
                y2="56"
                stroke="#B3123C"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  transformOrigin: '100px 106px',
                  transform: `rotate(${secondHandAngle}deg)`,
                  transition: 'transform 0.15s cubic-bezier(0.4, 2.08, 0.55, 0.44)',
                }}
              />
            </g>
          )
        )}

        {/* Center Cap Pin */}
        <circle cx="100" cy="106" r="4.5" fill="#E8B730" stroke="#120B0C" strokeWidth="2" />
      </svg>
    </div>
  );
};

