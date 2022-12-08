/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'x-gray': '#212121',
        'x-white': '#C7C7C7',
        'x-red': '#CB0424',
      },
    },
  },
  plugins: [],
}
