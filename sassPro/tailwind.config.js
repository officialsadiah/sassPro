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