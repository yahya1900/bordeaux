/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          50: "#fff7f7",
          100: "#ffe5e6",
          700: "#8b1f32",
          800: "#6d071a",
          900: "#40000a",
        },
        gold: {
          100: "#fff1bd",
          400: "#e9c349",
          700: "#735c00",
        },
        ink: "#1c1b1b",
        paper: "#fcf9f6",
        linen: "#f2ece4",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(109, 7, 26, 0.10)",
        lift: "0 18px 35px rgba(64, 0, 10, 0.14)",
      },
    },
  },
  plugins: [],
};
