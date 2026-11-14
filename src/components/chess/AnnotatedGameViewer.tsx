'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Chess } from 'chess.js';
import { ChessMoveCommentary } from '@/types';

// Dynamic import of Chessboard to prevent SSR issues
const Chessboard = dynamic(
  () => import('react-chessboard').then((mod) => mod.Chessboard),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square bg-cream border-3 border-ink flex items-center justify-center font-headline text-ink text-xl">
        LOADING CHESSBOARD...
      </div>
    ),
  }
);

interface AnnotatedGameViewerProps {
  initialFen?: string;
  pgn?: string;
  moves?: ChessMoveCommentary[];
  title?: string;
  className?: string;
}

export const AnnotatedGameViewer: React.FC<AnnotatedGameViewerProps> = ({
  initialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  moves = [],
  title = 'Interactive Annotated Master Game',
  className = '',
}) => {
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
  const [boardOrientation, setBoardOrientation] = useState<'white' | 'black'>('white');
  const [isPlaying, setIsPlaying] = useState(false);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reconstruct game states for each move
  const gameHistory = useMemo(() => {
    const chess = new Chess(initialFen);
    const history: Array<{
      san: string;
      fen: string;
      comment?: string;
      moveNumber: number;
      isWhite: boolean;
    }> = [];

    moves.forEach((m, idx) => {
      try {
        const result = chess.move(m.san);
        if (result) {
          history.push({
            san: m.san,
            fen: chess.fen(),
            comment: m.comment,
            moveNumber: Math.floor(idx / 2) + 1,
            isWhite: idx % 2 === 0,
          });
        }
      } catch (err) {
        console.warn(`Invalid move at ${idx}:`, m.san);
      }
    });

    return history;
  }, [initialFen, moves]);

  // Determine current FEN position
  const currentFen = useMemo(() => {
    if (currentMoveIndex < 0 || currentMoveIndex >= gameHistory.length) {
      return initialFen;
    }
    return gameHistory[currentMoveIndex].fen;
  }, [currentMoveIndex, gameHistory, initialFen]);

  // Current commentary
  const currentCommentary = useMemo(() => {
    if (currentMoveIndex < 0 || currentMoveIndex >= gameHistory.length) {
      return 'Initial starting position. Use the playback controls below or click any move in the notation box to navigate the game.';
    }
    const move = gameHistory[currentMoveIndex];
    const prefix = `${move.moveNumber}.${move.isWhite ? '' : '..'}${move.san}: `;
    return move.comment ? prefix + move.comment : `${prefix}Move executed on the board.`;
  }, [currentMoveIndex, gameHistory]);

  // Handlers for navigation
  const goToStart = () => {
    setIsPlaying(false);
    setCurrentMoveIndex(-1);
  };

  const goPrev = () => {
    setIsPlaying(false);
    setCurrentMoveIndex((prev) => Math.max(-1, prev - 1));
  };

  const goNext = () => {
    setIsPlaying(false);
    setCurrentMoveIndex((prev) => Math.min(gameHistory.length - 1, prev + 1));
  };

  const goToEnd = () => {
    setIsPlaying(false);
    setCurrentMoveIndex(gameHistory.length - 1);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Auto-play loop
  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        setCurrentMoveIndex((prev) => {
          if (prev >= gameHistory.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1400);
    } else {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    }
    return () => {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    };
  }, [isPlaying, gameHistory.length]);

  return (
    <div className={`retro-card p-4 md:p-6 bg-cream border-3 border-ink shadow-card ${className}`}>
      {title && (
        <div className="flex items-center justify-between border-b-2 border-ink pb-3 mb-4">
          <h4 className="font-headline text-xl md:text-2xl uppercase tracking-wider text-ink">
            {title}
          </h4>
          <span className="retro-badge bg-mustard text-ink text-xs">
            ANNOTATED VIEWER
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Board Display */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-[460px] border-3 border-ink shadow-button bg-cream p-1.5 rounded-sm">
            <Chessboard
              position={currentFen}
              boardOrientation={boardOrientation}
              arePiecesDraggable={false}
              customBoardStyle={{
                borderRadius: '2px',
                boxShadow: 'none',
              }}
              customDarkSquareStyle={{ backgroundColor: '#1B6F73' }}
              customLightSquareStyle={{ backgroundColor: '#F6EAD3' }}
            />
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 w-full">
            <button
              onClick={goToStart}
              disabled={currentMoveIndex === -1}
              className="retro-btn bg-cream hover:bg-mustard text-ink px-3 py-1.5 text-xs font-bold disabled:opacity-40"
              title="First move"
              aria-label="First move"
            >
              |&lt;
            </button>
            <button
              onClick={goPrev}
              disabled={currentMoveIndex === -1}
              className="retro-btn bg-cream hover:bg-mustard text-ink px-3 py-1.5 text-xs font-bold disabled:opacity-40"
              title="Previous move"
              aria-label="Previous move"
            >
              &lt;
            </button>
            <button
              onClick={togglePlay}
              className={`retro-btn px-4 py-1.5 text-xs font-bold ${
                isPlaying ? 'bg-crimson text-cream' : 'bg-saffron text-cream'
              }`}
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause auto-play' : 'Play auto-play'}
            >
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </button>
            <button
              onClick={goNext}
              disabled={currentMoveIndex >= gameHistory.length - 1}
              className="retro-btn bg-cream hover:bg-mustard text-ink px-3 py-1.5 text-xs font-bold disabled:opacity-40"
              title="Next move"
              aria-label="Next move"
            >
              &gt;
            </button>
            <button
              onClick={goToEnd}
              disabled={currentMoveIndex >= gameHistory.length - 1}
              className="retro-btn bg-cream hover:bg-mustard text-ink px-3 py-1.5 text-xs font-bold disabled:opacity-40"
              title="Last move"
              aria-label="Last move"
            >
              &gt;|
            </button>
            <button
              onClick={() =>
                setBoardOrientation((prev) => (prev === 'white' ? 'black' : 'white'))
              }
              className="retro-btn bg-teal text-cream hover:bg-teal-dark px-3 py-1.5 text-xs font-bold"
              title="Flip board"
              aria-label="Flip board"
            >
              FLIP
            </button>
          </div>
        </div>

        {/* Move List and Commentary Panel */}
        <div className="lg:col-span-5 flex flex-col gap-4 w-full">
          {/* Active Commentary Box */}
          <div className="bg-cream-light border-3 border-ink p-4 shadow-button rounded-sm min-h-[120px]">
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-ink/20">
              <span className="font-headline text-xs tracking-wider uppercase text-saffron-dark font-bold">
                Grandmaster Notes
              </span>
              <span className="font-sans text-xs text-ink/60 tabular-nums">
                {currentMoveIndex >= 0 ? `Move ${currentMoveIndex + 1} of ${gameHistory.length}` : 'Start'}
              </span>
            </div>
            <p className="font-sans text-sm md:text-base text-ink leading-relaxed">
              {currentCommentary}
            </p>
          </div>

          {/* Move Notation Sheet */}
          <div className="bg-cream border-3 border-ink p-3 rounded-sm shadow-card max-h-[260px] overflow-y-auto">
            <h5 className="font-headline text-xs uppercase tracking-wider text-ink mb-2">
              Tournament Scorecard
            </h5>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 font-sans text-xs tabular-nums">
              {Array.from({ length: Math.ceil(gameHistory.length / 2) }).map((_, roundIdx) => {
                const whiteMoveIdx = roundIdx * 2;
                const blackMoveIdx = whiteMoveIdx + 1;
                const whiteMove = gameHistory[whiteMoveIdx];
                const blackMove = gameHistory[blackMoveIdx];

                return (
                  <React.Fragment key={roundIdx}>
                    <div className="flex items-center gap-1 col-span-2 py-0.5 border-b border-ink/10">
                      <span className="w-8 text-ink/50 font-bold">
                        {roundIdx + 1}.
                      </span>
                      {whiteMove && (
                        <button
                          onClick={() => {
                            setIsPlaying(false);
                            setCurrentMoveIndex(whiteMoveIdx);
                          }}
                          className={`flex-1 text-left px-2 py-0.5 rounded font-medium transition-colors ${
                            currentMoveIndex === whiteMoveIdx
                              ? 'bg-mustard text-ink font-bold border border-ink'
                              : 'hover:bg-cream-dark text-ink'
                          }`}
                        >
                          {whiteMove.san}
                        </button>
                      )}
                      {blackMove && (
                        <button
                          onClick={() => {
                            setIsPlaying(false);
                            setCurrentMoveIndex(blackMoveIdx);
                          }}
                          className={`flex-1 text-left px-2 py-0.5 rounded font-medium transition-colors ${
                            currentMoveIndex === blackMoveIdx
                              ? 'bg-mustard text-ink font-bold border border-ink'
                              : 'hover:bg-cream-dark text-ink'
                          }`}
                        >
                          {blackMove.san}
                        </button>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

