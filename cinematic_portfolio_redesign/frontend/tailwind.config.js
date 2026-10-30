/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03050a',
          900: '#060a14',
          850: '#0a1020',
          800: '#0e172e',
          700: '#172346',
        },
        cosmic: {
          blue: '#38bdf8',
          cyan: '#06b6d4',
          brand: '#0549a8',
          violet: '#8b5cf6',
          purple: '#6d28d9',
          accent: '#a855f7',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"PT Sans"', 'sans-serif'],
        sans: ['"Inter"', '"DM Sans"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
