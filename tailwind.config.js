/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        carbon: { 950: '#050508', 900: '#0a0a0f', 800: '#111118', 700: '#1a1a24', 600: '#252535', 500: '#33334a' },
        electric: { DEFAULT: '#6ee7ff', dim: '#3bc8e8', dark: '#1a8ba0' },
        ember: { DEFAULT: '#ff6b35', dim: '#cc5528' },
        sage: { DEFAULT: '#6fff9e', dim: '#3dd668' },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(110,231,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,255,0.03) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(110,231,255,0.15), transparent)',
      },
      backgroundSize: { grid: '60px 60px' },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        glow: { from: { boxShadow: '0 0 20px rgba(110,231,255,0.3)' }, to: { boxShadow: '0 0 40px rgba(110,231,255,0.6)' } },
      },
    },
  },
  plugins: [],
}
