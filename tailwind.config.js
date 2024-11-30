/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      width: {
        '128': '38rem',
      },
      fontFamily: {
        mono:["Monoton", "serif"],
        my:["Sixtyfour Convergence", "sans-serif"],      
      },
    },
  },
  plugins: [],
}