// SVG Tile patterns for retro Indian surfaces (Paisley, Peacock, Mandala, Kolam)

import React from 'react';

export const PaisleyPeacockPattern: React.FC<{ className?: string; strokeColor?: string }> = ({
  className = '',
  strokeColor = '#F6EAD3',
}) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none opacity-20 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <defs>
      <pattern id="paisley-peacock-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
        {/* Paisley teardrop base */}
        <path
          d="M 20,40 C 20,20 40,10 50,25 C 60,40 50,55 35,55 C 25,55 20,48 20,40 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.75"
        />
        {/* Internal peacock eye motif */}
        <circle cx="38" cy="34" r="5" fill="none" stroke={strokeColor} strokeWidth="1.5" />
        <circle cx="38" cy="34" r="2" fill={strokeColor} />
        <path
          d="M 38,29 C 45,29 48,34 48,38"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        {/* Feather flourishes */}
        <path
          d="M 50,25 C 55,18 68,18 70,28 C 65,34 58,32 50,25 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <path d="M 60,23 L 64,21" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 63,26 L 68,25" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        {/* Secondary floral dot cluster */}
        <circle cx="10" cy="70" r="1.5" fill={strokeColor} />
        <circle cx="15" cy="75" r="1.5" fill={strokeColor} />
        <circle cx="70" cy="65" r="2" fill={strokeColor} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#paisley-peacock-pattern)" />
  </svg>
);

export const MandalaLinePattern: React.FC<{
  className?: string;
  strokeColor?: string;
  opacity?: number;
}> = ({ className = '', strokeColor = '#C9A227', opacity = 0.15 }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <defs>
      <pattern id="mandala-grid-pattern" width="140" height="140" patternUnits="userSpaceOnUse">
        {/* Center concentric sacred circles */}
        <circle cx="70" cy="70" r="58" fill="none" stroke={strokeColor} strokeWidth="1.2" />
        <circle cx="70" cy="70" r="46" fill="none" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="70" cy="70" r="32" fill="none" stroke={strokeColor} strokeWidth="1.5" />
        <circle cx="70" cy="70" r="18" fill="none" stroke={strokeColor} strokeWidth="1.2" />
        <circle cx="70" cy="70" r="6" fill={strokeColor} />

        {/* 8-Petal Lotus geometry */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45;
          return (
            <g key={i} transform={`rotate(${angle} 70 70)`}>
              <path
                d="M 70,38 C 62,25 78,25 70,12 C 62,25 78,25 70,38 Z"
                fill="none"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              <line x1="70" y1="38" x2="70" y2="12" stroke={strokeColor} strokeWidth="0.8" />
              <circle cx="70" cy="8" r="2" fill={strokeColor} />
            </g>
          );
        })}

        {/* Diagonal corner connector flourishes */}
        <circle cx="0" cy="0" r="18" fill="none" stroke={strokeColor} strokeWidth="1.2" />
        <circle cx="140" cy="0" r="18" fill="none" stroke={strokeColor} strokeWidth="1.2" />
        <circle cx="0" cy="140" r="18" fill="none" stroke={strokeColor} strokeWidth="1.2" />
        <circle cx="140" cy="140" r="18" fill="none" stroke={strokeColor} strokeWidth="1.2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mandala-grid-pattern)" />
  </svg>
);

export const KolamPattern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none opacity-20 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <defs>
      <pattern id="kolam-grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="3" fill="#120B0C" />
        <circle cx="0" cy="0" r="3" fill="#120B0C" />
        <circle cx="60" cy="0" r="3" fill="#120B0C" />
        <circle cx="0" cy="60" r="3" fill="#120B0C" />
        <circle cx="60" cy="60" r="3" fill="#120B0C" />
        <path
          d="M 0,30 Q 30,0 60,30 Q 30,60 0,30"
          fill="none"
          stroke="#120B0C"
          strokeWidth="1.5"
        />
        <path
          d="M 30,0 Q 60,30 30,60 Q 0,30 30,0"
          fill="none"
          stroke="#120B0C"
          strokeWidth="1.5"
          strokeDasharray="2,3"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#kolam-grid-pattern)" />
  </svg>
);
