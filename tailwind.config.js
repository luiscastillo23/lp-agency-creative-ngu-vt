/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        charcoal: {
          DEFAULT: '#111111',
          light: '#161616',
        },
        flame: {
          primary: '#FF3B00',
          secondary: '#FF5500',
          deep: '#CC2200',
        },
        muted: '#A1A1AA',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'orange-glow': '0 0 35px rgba(255, 59, 0, 0.45)',
        'card-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
