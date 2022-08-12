/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Catamaran", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#090909",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        primary: {
          DEFAULT: "#1C5AF6",
        },
        alt: {
          DEFAULT: "#FF900E",
        },
      },
      backgroundImage: {
        kekego: "url('../images/kekego-bg.png')",
      },
    },
  },
  plugins: [],
}
