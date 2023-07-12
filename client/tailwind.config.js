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
        "noto-sans": ["Noto Sans", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      width: {
        "12/12": "95%",
      },
      backgroundColor: {
        main_dark: "#191E24",
        pink_primary: "#F86465",
        pink_secondary: "#c94f51",
        priority: "#313136",
        task: "#F6F6F7",
        task_dark: "#252529",
        highlight: "#e2e2e3",
      },
    },
  },
  //   require("daisyui")
  plugins: [require("daisyui")],
};
