import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./features/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.{html,js}", // if you have HTML or JS files in the public folder
    "./styles/**/*.css",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      black: "#333",
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
        secondary: {
          main: "#8492a6",
          dark: "#273444",
          light: "#ffc82c",
        },
      },

      spacing: {
        navbarHeight: "60px",
        navmenuHeight: "100vh",
      },
      container: {
        center: true, // Centers the container by default
        padding: "2rem", // Adds padding inside the container
        screens: {
          sm: "100%", // 100% width for small screens
          md: "768px", // Medium screen max-width
          lg: "1024px", // Large screen max-width
          xl: "1280px", // Extra large screen max-width
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
