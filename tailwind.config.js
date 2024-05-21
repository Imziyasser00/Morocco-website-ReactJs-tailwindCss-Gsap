/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Mred : "#EB1C26",
        Mgreen: "#2EA347",
        
      }
    },
  },
  plugins: [],
}