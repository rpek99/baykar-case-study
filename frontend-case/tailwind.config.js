/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'background-rgba': 'rgba(255, 251, 235, 1)',
        'coffe-rgba': 'rgba(120, 53, 15, 1)',
        'second-background': 'rgba(254, 243, 199, 1)',
        'blue-background': 'rgba(15, 23, 42, 1)',
        'scroll-background': 'rgba(253, 230, 138, 1)',
        'map-background': 'rgba(120, 53, 15, 1)'
      }
    },
  },
  plugins: [],
}
