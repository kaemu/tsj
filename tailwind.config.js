/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jacques': ['Merriweather']
      },
      colors: {
        'blackjacques': '#18181B'
      }
    },
  },
  plugins: [],
}
