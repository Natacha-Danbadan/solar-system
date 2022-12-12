/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': "url('./assets/galaxy.gif')"
      },
      textShadow: {
        heading: "2px 1.5px 0px rgb(200 200 200 / 56%)"
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"]
      },
      spacing: {
        mobileHeight: "calc(100vh - 184px)",
        height: "calc(100vh - 184px)"
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
