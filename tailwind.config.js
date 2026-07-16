const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Warm neutral gray for a rustic, earthy feel
        gray: colors.stone,
        // Page + section backgrounds
        cream: {
          50: "#fdfbf7",
          100: "#f8f2e9",
          200: "#f0e6d6",
          300: "#e6d5bd"
        },
        // Saddle-brown — wordmark, headings, accents
        barn: {
          50: "#faf6f2",
          100: "#f0e6dc",
          200: "#e0cbb6",
          300: "#caa787",
          400: "#b0825d",
          500: "#9a6a44",
          600: "#845539",
          700: "#6d4530",
          800: "#5a3a2b",
          900: "#4b3126"
        },
        // Forest green — primary buttons, links, CTAs
        forest: {
          50: "#f3f7f3",
          100: "#e3ede4",
          200: "#c7dbc9",
          300: "#9fbfa3",
          400: "#6f9c75",
          500: "#4d7d54",
          600: "#3c6743",
          700: "#315537",
          800: "#29452e",
          900: "#233a28"
        },
        // Terracotta — secondary highlight
        clay: {
          400: "#c47a52",
          500: "#b3653f",
          600: "#9c5334"
        }
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
