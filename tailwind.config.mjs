/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mustard: {
          DEFAULT: '#FFD23F',
          dark: '#E6B71E',
          light: '#FFE073',
        },
        saffron: {
          DEFAULT: '#FF7A1A',
          dark: '#E65A00',
          light: '#FFA154',
        },
        coral: {
          DEFAULT: '#FF6B3D',
          dark: '#E64E1F',
          light: '#FF8861',
        },
        crimson: {
          DEFAULT: '#D81B28',
          dark: '#B8121E',
          light: '#F03542',
        },
        maroon: {
          DEFAULT: '#941A24',
          warm: '#B82834',
          dark: '#680E16',
        },
        teal: {
          DEFAULT: '#008E9B',
          dark: '#006E78',
          light: '#1FB2C0',
        },
        forest: {
          DEFAULT: '#1E7548',
          dark: '#135432',
          light: '#2E9861',
        },
        olivegold: {
          DEFAULT: '#FFD23F',
          dark: '#E6B71E',
        },
        darkbrown: {
          DEFAULT: '#FFF9ED',
          dark: '#F0E2C8',
        },
        retroblack: {
          DEFAULT: '#D81B28',
          light: '#E82B38',
        },
        pink: {
          DEFAULT: '#D81B28',
          light: '#FF5C67',
          dark: '#B8121E',
        },
        cream: {
          DEFAULT: '#FFF9ED',
          dark: '#F4E5CC',
          light: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#120B0C',
          light: '#251819',
        },
        redsquare: {
          DEFAULT: '#D81B28',
        },
        goldline: {
          DEFAULT: '#E8A51D',
        },
        olive: {
          DEFAULT: '#A8A02E',
          dark: '#898224',
        },
        brick: {
          DEFAULT: '#B84A32',
          dark: '#963B26',
        },
        fuchsia: {
          DEFAULT: '#C42FA8',
          dark: '#A2248A',
        },
        violet: {
          DEFAULT: '#7B4BD6',
          dark: '#6238AF',
        },
        blue: {
          DEFAULT: '#2F6FD8',
          dark: '#2255A8',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1EBE5D',
        },
      },
      fontFamily: {
        blackletter: ['var(--font-pirata)', 'serif'],
        headline: ['var(--font-anton)', 'sans-serif'],
        marker: ['var(--font-marker)', 'cursive'],
        playfair: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        headline: '0.015em',
        'headline-wide': '0.02em',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        card: '8px 8px 0px #120B0C',
        'card-hover': '10px 10px 0px #120B0C',
        button: '6px 6px 0px #120B0C',
        'button-active': '2px 2px 0px #120B0C',
        pill: '3px 3px 0px #120B0C',
        sticker: '8px 8px 0px #120B0C',
      },
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tick: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        wobble: 'wobble 4s ease-in-out infinite',
        float: 'float 3.5s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        tick: 'tick 60s steps(60) infinite',
      },
    },
  },
  plugins: [],
};
