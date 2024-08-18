/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: 'rgba(5, 5, 19, 100%)',
        },
      },
    },
  },
  plugins: [],
};
