// SVG Torn Zigzag Paper Edges with Mustard Backing Strip

import React from 'react';

interface TornEdgeProps {
  position?: 'top' | 'bottom';
  fillColor?: string;
  mustardBacking?: boolean;
  height?: number;
  className?: string;
  flipX?: boolean;
}

export const TornEdge: React.FC<TornEdgeProps> = ({
  position = 'bottom',
  fillColor = '#F6EAD3',
  mustardBacking = true,
  height = 40,
  className = '',
  flipX = false,
}) => {
  const isTop = position === 'top';

  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-20 pointer-events-none ${className}`}
      style={{
        height: `${height}px`,
        transform: `${flipX ? 'scaleX(-1)' : ''} ${isTop ? 'translateY(1px)' : 'translateY(-1px)'}`,
      }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full block"
        viewBox="0 0 1200 44"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isTop ? (
          <>
            {/* Mustard Backing Strip behind the tear */}
            {mustardBacking && (
              <path
                d="M0 0 L1200 0 L1200 18 
                   L1160 36 L1130 20 L1090 40 L1050 24 L1010 42 L980 22 L940 38 L900 21 
                   L860 40 L820 24 L780 41 L740 22 L700 39 L660 20 L620 40 L580 24 L540 42 
                   L500 23 L460 39 L420 21 L380 37 L340 24 L300 41 L260 21 L220 39 L180 22 
                   L140 40 L100 21 L60 38 L30 22 L0 34 Z"
                fill="#E8B730"
              />
            )}
            {/* Front Torn Surface */}
            <path
              d="M0 0 L1200 0 L1200 12 
                 L1160 28 L1130 14 L1090 32 L1050 18 L1010 35 L980 16 L940 30 L900 15 
                 L860 33 L820 18 L780 34 L740 16 L700 31 L660 14 L620 33 L580 18 L540 35 
                 L500 17 L460 32 L420 15 L380 30 L340 18 L300 34 L260 15 L220 32 L180 16 
                 L140 33 L100 15 L60 31 L30 16 L0 28 Z"
              fill={fillColor}
            />
          </>
        ) : (
          <>
            {/* Mustard Backing Strip behind the bottom tear */}
            {mustardBacking && (
              <path
                d="M0 44 L1200 44 L1200 22 
                   L1160 6 L1130 22 L1090 2 L1050 18 L1010 2 L980 20 L940 4 L900 21 
                   L860 2 L820 18 L780 2 L740 20 L700 4 L660 22 L620 2 L580 18 L540 2 
                   L500 19 L460 4 L420 21 L380 4 L340 18 L300 2 L260 21 L220 2 L180 20 
                   L140 2 L100 21 L60 4 L30 20 L0 8 Z"
                fill="#E8B730"
              />
            )}
            {/* Front Torn Surface */}
            <path
              d="M0 44 L1200 44 L1200 28 
                 L1160 12 L1130 26 L1090 8 L1050 22 L1010 6 L980 24 L940 10 L900 25 
                 L860 7 L820 22 L780 6 L740 24 L700 9 L660 26 L620 7 L580 22 L540 6 
                 L500 23 L460 8 L420 25 L380 10 L340 22 L300 6 L260 25 L220 8 L180 24 
                 L140 7 L100 25 L60 9 L30 24 L0 14 Z"
              fill={fillColor}
            />
          </>
        )}
      </svg>
    </div>
  );
};
