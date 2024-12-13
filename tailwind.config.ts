import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./features/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.{html,js}", // if you have HTML or JS files in the public folder
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    extend: {
      colors: {
        primary: {
          main: "#1fb6ff",
          dark: "#ff7849",
          light: "#ff49db",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
