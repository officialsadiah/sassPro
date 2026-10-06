/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#EEE4F9",
        'secondary': "#2C83BB",
        'offwhite': "#FFFFFF",
        'greenbg' : "#0D554C",
        'Forthclr' : "#112F42",
        'ppp' : "#495E6C",

      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};