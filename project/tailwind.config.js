/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          850: '#1a1a1a',
          900: '#141414',
          950: '#0a0a0a',
        },
        gold: {
          50: '#fdf8ec',
          100: '#faedcf',
          200: '#f4d89e',
          300: '#edbd6a',
          400: '#e7a544',
          500: '#d48a2a',
          600: '#b86d20',
          700: '#93531d',
          800: '#7a441e',
          900: '#66391d',
        },
        whatsapp: {
          DEFAULT: '#25d366',
          dark: '#1da851',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'zoom-bg': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'fade-up': 'fade-up 0.7s ease forwards',
        float: 'float 3s ease-in-out infinite',
        'zoom-bg': 'zoom-bg 12s ease-out forwards',
      },
    },
  },
  plugins: [],
};
