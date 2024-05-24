/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html",
],
  theme: {
    extend: {
      width:{
        main:'1220px'
      },
      backgroundColor:{
        main:'#ee3131'
      },
      color:{
        main:'#ee3131'

      }
    },
  },
  plugins: [],
}