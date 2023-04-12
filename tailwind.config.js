const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('children', ('& > *'))
    },),
  ],
};
