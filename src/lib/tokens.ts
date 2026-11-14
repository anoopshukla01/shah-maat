// Shah-Maat Design Tokens
// Retro Indian Poster Art Direction Palette - Light, Bold & Punchy (Red, Orange, Yellow, White)

export const COLORS = {
  // Brand Surfaces & Headers
  mustard: '#FFD23F',       // Canary yellow / mustard (torn-edge strips, marquee bands, hero accents)
  mustardDark: '#F4BA1C',   // Deep golden yellow
  saffronOrange: '#FF7A1A', // Archive section & bold ribbons
  saffronBright: '#FF6E14', // High-energy poster orange
  coral: '#FF6B3D',         // Upcoming events & join page halftone
  crimson: '#D81B28',       // Bold poster red (headlines, Kaapi section, footer)
  crimsonDark: '#B81420',   // Deep bold red
  crimsonLight: '#E82B38',  // Vivid fiery red
  teal: '#008E9B',          // Riot section bright tropical teal
  forest: '#1E7548',        // Vivid foliage emerald green
  oliveGold: '#FFD23F',     // Bright gold archive blob shape
  lightSurface: '#FFFDF8',  // Crisp light paper surface
  white: '#FFFFFF',         // Pure white cards & badges
  cream: '#FFF9ED',         // Warm sun-kissed paper
  ink: '#120B0C',           // Heavy outlines, borders, text
  redSquare: '#D81B28',     // Chessboard red square

  // Step-Card Colours
  olive: '#C9B02A',
  brick: '#D83B25',
  fuchsia: '#D82B96',
  violet: '#854AE0',
  blue: '#2B72E8',

  // Pattern Accents
  goldLineArt: '#E8A51D',   // 18% opacity for mandalas on light surfaces
  whatsapp: '#25D366',
} as const;

export const TYPOGRAPHY = {
  wordmark: 'var(--font-pirata), serif',
  headline: 'var(--font-anton), sans-serif',
  serifHeadline: 'var(--font-playfair), serif',
  stepCardTitle: 'var(--font-marker), cursive',
  body: 'var(--font-inter), sans-serif',
} as const;

export const SHADOWS = {
  card: '8px 8px 0px #120B0C',
  button: '6px 6px 0px #120B0C',
  sticker: 'drop-shadow(3px 0 #fff) drop-shadow(-3px 0 #fff) drop-shadow(0 3px #fff) drop-shadow(0 -3px #fff) drop-shadow(8px 8px 0 #120B0C)',
} as const;

