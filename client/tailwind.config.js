/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255, 255, 255, 0.25)',
        'glass-border': 'rgba(255, 255, 255, 0.18)',
      },
      boxShadow: {
        'neumorph': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neumorph-inset': 'inset 2px 2px 5px #d1d9e6, inset -2px -2px 5px #ffffff',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};