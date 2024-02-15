/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        clifford: "#da373d",
        primary:"#00D991"
      },
    },
  },
  plugins: [],
};
