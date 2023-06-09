/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade","forest","luxury","halloween","night","synthwave"],
    darkTheme:"night"
  },
}

