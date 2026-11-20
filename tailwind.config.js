/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#04060e',
          900: '#080c1c',
          800: '#0f1530',
          700: '#182148',
          600: '#26315f',
        },
        fg: 'rgb(var(--fg) / <alpha-value>)',
        fg2: 'rgb(var(--fg2) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        base: 'rgb(var(--base) / <alpha-value>)',
        base2: 'rgb(var(--base2) / <alpha-value>)',
        base3: 'rgb(var(--base3) / <alpha-value>)',
        navy: { 800: '#14286b', 900: '#0b1a4a', 950: '#071233' },
        brand: {
          50: '#eff5ff',
          100: '#dbe8fe',
          300: '#93b8fd',
          400: '#4f86f7',
          500: '#2563eb',
          600: '#1e4fd1',
          700: '#1e3a8a',
        },
        aqua: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        lime: {
          400: '#b6f36a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-60px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,30px) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        blob: 'blob 18s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite',
      },
    },
  },
  plugins: [],
};
