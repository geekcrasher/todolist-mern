/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "480px",
        sm: "547px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        mxl: "1352px",
        xxl: "1680px",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      width: {
        "12/12": "95%",
      },
      backgroundColor: {
        spinel: "#262C39",
        black_pearl: "#20252E",
        wool: "#1A1E25",
      },
      textColor: {
         low: "#8AD3F6",
         medium: "#D0FE59",
         high: "#FF4A88",
         carbon: "#797D8B",
         accent: "#00D1A7"
      }
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],

};
