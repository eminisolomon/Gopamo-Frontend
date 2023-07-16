/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        '500': '0B10A5',
        'slate': {
          200: '#f5f5f5'
        }
      }
    },
  },
  plugins: [],
}