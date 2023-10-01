/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#36454F",
        secondary: "#f5f5f5",
        info: "#0437F2"
      }
    },
  },
  plugins: [],
}