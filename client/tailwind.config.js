/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      gradiant:{
        gradiant:"linear-gradient(to right bottom, #09203f, #1b3454, #2d4a69, #3f607f, #537895);"
      }
    },
  },
  plugins: [],
}
