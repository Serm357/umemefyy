/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {},
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
      },
      daisyui: {
        themes: ["winter", "dim"],
      },
      // backgroundImage: {
      //   hero: "url('assets/images/collection-background.svg')",
      //   card: "url('assets/images/thumbnail-background.svg')",
      // },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
