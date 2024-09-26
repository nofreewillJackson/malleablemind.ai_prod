import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        typing: 'typing 4s steps(40, end) infinite, blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '70%': { width: '9ch' },
          '85%': { width: '9ch' },
          '100%': { width: '0' },
        },
        'blink-caret': {
          'from, to': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: '#4dabf7' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
