const typography = require('@tailwindcss/typography');
const daisyui = require('daisyui');
const themes = require('daisyui/src/colors/themes');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes: [{ light: { ...themes['[data-theme=winter]'] } }, 'night'],
    darkTheme: 'night',
  },
};
