/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", 'serif'],
        body: ["'Work Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}