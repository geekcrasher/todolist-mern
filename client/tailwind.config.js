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
      textColor: {
         lightgray: "#8E949A",
         accent_light: "#00D1A7",
         accent_dark: "#058e85",
      },
      backgroundColor: {
        main_dark: "#191E24",
        pink_primary: "#F86465",
        pink_secondary: "#c94f51",
        priority: "#313136",
        task: "#F9FBFA",
        task_dark: "#252529",
        highlight: "#e2e2e3",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],

};
