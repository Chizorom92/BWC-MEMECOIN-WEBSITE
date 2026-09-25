/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0908',        // primary background — near-black, warm not blue
        charcoal: '#14100F',    // secondary surface
        ember: '#1C1210',       // card surface, warm dark
        crimson: '#8F1C1F',     // deep, muted brand red
        blood: '#C81E2C',       // aggressive accent red
        flare: '#FF3B3B',       // bright glow / hover red
        bone: '#F3EDE4',        // off-white foreground
        ash: '#8A8079',         // muted secondary text
        line: '#2A2220',        // hairline borders
        bull: '#2FB86E',        // bullish green, used sparingly
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-ember': 'radial-gradient(circle at 50% 0%, rgba(200,30,44,0.18), rgba(10,9,8,0) 60%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
        ticker: 'ticker 30s linear infinite',
        drawLine: 'drawLine 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
