/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#2748A8',
          dark: '#152a63',
        },
        secondary: '#3B82F6',
        accent: '#60A5FA',
        surface: '#F8FAFC',
        ink: '#0F172A',
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(30, 58, 138, 0.15)',
        softer: '0 4px 20px -6px rgba(30, 58, 138, 0.10)',
        glow: '0 0 0 1px rgba(96, 165, 250, 0.15), 0 12px 40px -10px rgba(59, 130, 246, 0.35)',
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
      },
      animation: {
        'gradient-slow': 'gradientShift 14s ease-in-out infinite',
        'float-slow': 'floatY 8s ease-in-out infinite',
        'float-slower': 'floatY 11s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.08)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
