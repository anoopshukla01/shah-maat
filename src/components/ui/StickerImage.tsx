'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface StickerImageProps {
  src: string;
  fallbackName?:
    | 'knight'
    | 'trophy'
    | 'pawns'
    | 'queen'
    | 'king-pawn-cluster'
    | 'rangoli-wheel'
    | 'book-knight'
    | 'kaapi-pour'
    | 'clock'
    | 'students-chess'
    | 'archive-portrait'
    | 'footer-board'
    | 'knight-badge';
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  rotation?: number; // degrees
  priority?: boolean;
}

export const StickerImage: React.FC<StickerImageProps> = ({
  src,
  fallbackName = 'knight',
  alt = '',
  width = 300,
  height = 300,
  className = '',
  rotation = 0,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  // Fallback SVG rendering if any image asset is missing
  const renderSvgFallback = () => {
    switch (fallbackName) {
      case 'students-chess':
        return (
          <svg viewBox="0 0 120 100" className="w-full h-full" fill="none">
            {/* Table */}
            <rect x="20" y="65" width="80" height="25" fill="#2A1512" stroke="#120B0C" strokeWidth="4" />
            {/* Chessboard */}
            <rect x="35" y="55" width="50" height="15" fill="#F6EAD3" stroke="#120B0C" strokeWidth="3" />
            {/* Student silhouettes */}
            <circle cx="28" cy="35" r="14" fill="#D9808C" stroke="#120B0C" strokeWidth="3" />
            <path d="M12 65 C12 45 44 45 44 65 Z" fill="#9A8A2E" stroke="#120B0C" strokeWidth="3" />
            <circle cx="92" cy="35" r="14" fill="#E8B730" stroke="#120B0C" strokeWidth="3" />
            <path d="M76 65 C76 45 108 45 108 65 Z" fill="#1B6F73" stroke="#120B0C" strokeWidth="3" />
            <circle cx="60" cy="28" r="12" fill="#F6EAD3" stroke="#120B0C" strokeWidth="3" />
            <path d="M46 55 C46 40 74 40 74 55 Z" fill="#C8143C" stroke="#120B0C" strokeWidth="3" />
          </svg>
        );
      case 'archive-portrait':
        return (
          <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
            {/* Dupatta drape */}
            <path d="M20 120 C15 70 25 30 50 20 C75 30 85 70 80 120 Z" fill="#C8143C" stroke="#120B0C" strokeWidth="4" />
            {/* Face */}
            <ellipse cx="50" cy="55" rx="22" ry="26" fill="#F6EAD3" stroke="#120B0C" strokeWidth="3" />
            {/* Pixel Sunglasses */}
            <rect x="34" y="48" width="14" height="8" fill="#120B0C" />
            <rect x="52" y="48" width="14" height="8" fill="#120B0C" />
            <line x1="48" y1="52" x2="52" y2="52" stroke="#120B0C" strokeWidth="2" />
            {/* Maang tikka */}
            <circle cx="50" cy="33" r="3" fill="#E8B730" stroke="#120B0C" strokeWidth="1.5" />
          </svg>
        );
      case 'footer-board':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <rect x="5" y="5" width="90" height="90" rx="10" fill="#F6EAD3" stroke="#120B0C" strokeWidth="4" />
            <g transform="translate(15,15)">
              <rect width="70" height="70" fill="#120B0C" />
              <rect x="0" y="0" width="35" height="35" fill="#C8302A" />
              <rect x="35" y="35" width="35" height="35" fill="#C8302A" />
              <rect x="35" y="0" width="35" height="35" fill="#F6EAD3" />
              <rect x="0" y="35" width="35" height="35" fill="#F6EAD3" />
            </g>
          </svg>
        );
      case 'knight-badge':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="44" fill="#E8B730" stroke="#120B0C" strokeWidth="4" />
            <circle cx="50" cy="50" r="34" fill="#C8143C" stroke="#120B0C" strokeWidth="3" />
            <path d="M42 68 C42 55 46 45 52 38 C50 35 46 28 52 20 C60 22 66 26 68 34 C72 42 70 55 68 68 Z" fill="#F6EAD3" stroke="#120B0C" strokeWidth="2.5" />
          </svg>
        );
      case 'trophy':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <path d="M25 20 H75 V45 C75 60 60 70 50 72 C40 70 25 60 25 45 Z" fill="#E8B730" stroke="#120B0C" strokeWidth="4" />
            <path d="M25 28 C15 28 10 38 10 46 C10 54 22 56 26 50" stroke="#120B0C" strokeWidth="4" fill="none" />
            <path d="M75 28 C85 28 90 38 90 46 C90 54 78 56 74 50" stroke="#120B0C" strokeWidth="4" fill="none" />
            <rect x="42" y="72" width="16" height="14" fill="#C8143C" stroke="#120B0C" strokeWidth="4" />
            <rect x="30" y="86" width="40" height="10" fill="#1B6F73" stroke="#120B0C" strokeWidth="4" />
          </svg>
        );
      case 'pawns':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="25" r="14" fill="#E8B730" stroke="#120B0C" strokeWidth="4" />
            <path d="M35 48 C35 38 65 38 65 48 C65 58 60 72 70 82 H30 C40 72 35 58 35 48 Z" fill="#FF7A1A" stroke="#120B0C" strokeWidth="4" />
            <rect x="25" y="82" width="50" height="12" rx="4" fill="#120B0C" />
          </svg>
        );
      case 'queen':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <path d="M20 75 L25 35 L40 55 L50 25 L60 55 L75 35 L80 75 Z" fill="#C42FA8" stroke="#120B0C" strokeWidth="4" />
            <circle cx="25" cy="30" r="4" fill="#E8B730" stroke="#120B0C" strokeWidth="2" />
            <circle cx="50" cy="20" r="4" fill="#E8B730" stroke="#120B0C" strokeWidth="2" />
            <circle cx="75" cy="30" r="4" fill="#E8B730" stroke="#120B0C" strokeWidth="2" />
            <rect x="18" y="75" width="64" height="14" fill="#4A1220" stroke="#120B0C" strokeWidth="4" />
          </svg>
        );
      case 'rangoli-wheel':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="44" fill="#E8B730" stroke="#120B0C" strokeWidth="4" />
            <circle cx="50" cy="50" r="32" fill="#FF7A1A" stroke="#120B0C" strokeWidth="3" />
            <circle cx="50" cy="50" r="18" fill="#1B6F73" stroke="#120B0C" strokeWidth="3" />
            <circle cx="50" cy="50" r="8" fill="#F6EAD3" />
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="6"
                x2="50"
                y2="94"
                stroke="#120B0C"
                strokeWidth="2.5"
                transform={`rotate(${i * 22.5} 50 50)`}
              />
            ))}
          </svg>
        );
      case 'book-knight':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <rect x="15" y="25" width="70" height="60" rx="4" fill="#1F4D3A" stroke="#120B0C" strokeWidth="4" />
            <path d="M15 32 H85 M15 78 H85" stroke="#E8B730" strokeWidth="3" />
            <path d="M40 50 C40 40 55 35 60 45 C65 55 50 65 40 65 Z" fill="#F6EAD3" stroke="#120B0C" strokeWidth="3" />
          </svg>
        );
      case 'kaapi-pour':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <path d="M35 15 L65 15 L58 45 L42 45 Z" fill="#E8B730" stroke="#120B0C" strokeWidth="3" />
            <path d="M50 45 Q 65 65 55 80" stroke="#4A1220" strokeWidth="6" strokeLinecap="round" />
            <path d="M50 45 Q 65 65 55 80" stroke="#F6EAD3" strokeWidth="2" strokeDasharray="3 3" />
            <ellipse cx="55" cy="85" rx="30" ry="12" fill="#E8B730" stroke="#120B0C" strokeWidth="3" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <path
              d="M30 85 C30 75 35 60 45 50 C40 45 35 35 45 20 C55 22 65 25 70 35 C75 45 75 65 75 85 Z"
              fill="#E8B730"
              stroke="#120B0C"
              strokeWidth="4"
            />
            <rect x="42" y="32" width="16" height="8" rx="2" fill="#120B0C" />
            <rect x="60" y="32" width="16" height="8" rx="2" fill="#120B0C" />
            <line x1="58" y1="36" x2="60" y2="36" stroke="#120B0C" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative inline-block select-none pointer-events-none sticker ${className}`}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
      }}
      aria-hidden="true"
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-auto object-contain pointer-events-auto"
          onError={() => setHasError(true)}
        />
      ) : (
        <div style={{ width: `${width}px`, height: `${height}px` }} className="pointer-events-auto">
          {renderSvgFallback()}
        </div>
      )}
    </div>
  );
};
