// tailwind.config.ts
import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx}', // Include any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e1f22',
        secondary: '#2b2d30',
        tertiary: '#26282e',
        accent: '#56a8f5',
        accentHover: '#3887a1',
        textBase: '#bcbec4',
        textMuted: '#6f737a',
        textError: '#f75464',
        textWarning: '#f2c55c',
        textSuccess: '#73bd79',
        textInfo: '#56a8f5',
        addedLines: '#549159',
        modifiedLines: '#375fad',
        deletedLines: '#868a91',
        caret: '#ced0d6',
        lineNumbers: '#4b5059',
        borderColor: '#393b40',
        silverLake: '#5D89BA',
        background: '#1e1f22',
        foreground: '#bcbec4',
      },
      textColor: {
        base: '#bcbec4',
        inverted: '#1e1f22',
      },
      textShadow: {
        md: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        lg: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        '3d': '3px 3px 5px rgba(0, 0, 0, 0.8), 2px 2px 10px rgba(255, 255, 255, 0.3)',
        glow: '0 0 5px rgba(255, 255, 255, 1), 0 0 10px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 255, 255, 0.5)',
      },
      animation: {
        typing: 'typing 4s steps(40, end) infinite, blink-caret 0.75s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-out-left': 'slideOutLeft 0.5s ease-out forwards',
        'enlarge-slide': 'enlargeSlide 0.5s forwards',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '70%': { width: '13ch' },
          '85%': { width: '13ch' },
          '100%': { width: '0' },
        },
        'blink-caret': {
          'from, to': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: '#4dabf7' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        enlargeSlide: {
          '0%': { transform: 'scale(1) translateX(0)' },
          '50%': { transform: 'scale(1.2) translateX(-50px)' },
          '100%': { transform: 'scale(1) translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    // Custom text shadow and animation utilities
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-md': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-3d': {
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.8), 2px 2px 10px rgba(255, 255, 255, 0.3)',
        },
        '.animate-fade-in': {
          animation: 'fadeIn 0.5s ease-in',
        },
        '.animate-slide-in-left': {
          animation: 'slideInLeft 0.5s ease-out forwards',
        },
        '.animate-slide-out-left': {
          animation: 'slideOutLeft 0.5s ease-out forwards',
        },
        '.animate-enlarge-slide': {
          animation: 'enlargeSlide 0.5s forwards',
        },
      };

      // Use correct options for addUtilities
      addUtilities(newUtilities, { respectPrefix: false, respectImportant: true });
    }),
  ],
};

export default config;
