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
     textColor: {
       primary: "#DFDFD8",
       secondary: "#6D6D72",
       light_gray: "#c5c5c7",
       title: "#F86465",
       text_light: "#3C3C43",
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
     borderColor: {
       semi: "#e7e7e8",
       secondary: "#333",

     },
     minHeight: {
       "60vh": "60vh",
     },
   },
  },
  plugins: [require("daisyui")],
}

