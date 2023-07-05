/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
   extend: {
     screens: {
       xs: "360px",
       sm: "480px",
       md: "547px",
       lg: "768px",
       xl: "1024px",
       mxl: "1352px",
       xxl: "1680px",
     },
     fontFamily: {
       "noto-sans": ["Noto Sans", "sans-serif"],
     },
     width: {
       "12/12": "95%",
     },
     backgroundColor: {
      main_dark: "#1E1E20",
      pink_primary: "#F86465",
      pink_secondary: "#c94f51",
      priority: "#313136",
      task: "#F6F6F7",
      task_dark: "#252529",
      highlight: "#e2e2e3"
    },
   },
  },
//   require("daisyui")
  plugins: [],
}

