/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      buttonPadding: '20px',   // this is named css 
      colors: {
        customColor: '#ff5722', // Custom color
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'], // Custom font family
        serif: ['Merriweather', 'serif'],
      },
      fontSize:{
        big: '41px'
      }
    },
  },
  plugins: [],
}

