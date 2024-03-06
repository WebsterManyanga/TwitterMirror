/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C9EEB',
        secondary: '#687684',
        tertiary: '#E7ECF0'
      }
    },
  },
  plugins: [],
}