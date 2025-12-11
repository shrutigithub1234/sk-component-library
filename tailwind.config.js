
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563eb",   // blue-600
          secondary: "#9333ea", // purple-600
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#0f172a",
        },
        text: {
          primary: "#0f172a",
          secondary: "#475569",
          inverted: "#ffffff",
        },
      },
    },
  },
  plugins: [],
}

