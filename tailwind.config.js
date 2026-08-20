/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#070E1A',
          800: '#0A192F',
          700: '#0F172A',
          600: '#1E293B',
          500: '#334155',
        },
        electric: {
          500: '#0066FF',
          400: '#2563EB',
          300: '#38BDF8',
          200: '#00D2FF',
        },
        ice: {
          50: '#F8FAFC',
          100: '#F0F4F8',
          200: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
