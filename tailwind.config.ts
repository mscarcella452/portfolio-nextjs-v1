import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./features/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.{html,js}", // if you have HTML or JS files in the public folder
    "./styles/**/*.css",
  ],

  darkMode: "selector", // Enables dark mode via the 'dark' class on the <html> element
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    // fontSize: {
    //   sm: "0.8rem",
    //   base: "1rem",
    //   xl: "1.25rem",
    //   "2xl": "1.563rem",
    //   "3xl": "1.953rem",
    //   "4xl": "2.441rem",
    //   "5xl": "3.052rem",
    // },

    colors: {
      white: "#FFFFFF",
      black: "#3f3e3e",

      transparent: "transparent",
      current: "currentColor", // Used for borders or icons matching text color
      textColor: {
        DEFAULT: "#3f3e3e",
        dark: "#F9FAFB",
      },
      // Primary Color
      primary: {
        light: "#5393bf", // Light shade
        DEFAULT: "#30638e", // medium blue-teal
        dark: "#234968", // Dark shade
        contrast: "#f0f0f0", // Contrast text shade
      },

      // Secondary Color
      secondary: {
        light: "#e7828e", // Light shade
        DEFAULT: "#d1495b", // reddish-pink
        dark: "#a13345", // Dark shade
        contrast: "#f0f0f0", // Contrast text shade
      },

      // Neutral Colors
      neutral: {
        light: "#F3F4F6", // Light gray (used for background)
        DEFAULT: "#9CA3AF", // Medium gray (used for text or borders)
        dark: "#374151", // Dark gray (headings or accents)
        contrast: "#f0f0f0", // Contrast text shade
      },

      // Accent Colors
      accent: {
        light: "#f3c878", // Light shade
        DEFAULT: "#edae49", // Warm Mustard Yellow
        dark: "#c98b3b", // Dark shade
        contrast: "#f0f0f0", // Contrast text shade
      },

      // Background Colors
      background: {
        light: "#F9FAFB", // Light background for sections
        DEFAULT: "#FFFFFF", // Default white background for cards/containers
        dark: "#111827", // Dark background (dark mode)
      },
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-lato)"], // Body text
        secondary: ["var(--font-league-spartan)", "sans-serif"], // Headings
        // secondary: ["var(--font-montserrat)"], // Headings
        accent: ["var(--font-archivo)"], // Accent font
      },
      spacing: {
        header: "60px",
        navbarHeight: "60px",
        heroSection: "calc(100vh - 60px)",
        navmenuHeight: "100vh",
      },
      // container: {
      //   center: true, // Centers the container by default
      //   padding: "2rem", // Adds padding inside the container
      //   screens: {
      //     sm: "100%", // 100% width for small screens
      //     md: "768px", // Medium screen max-width
      //     lg: "1024px", // Large screen max-width
      //     xl: "1280px", // Extra large screen max-width
      //   },
      //   'lg': {
      //     padding: "3rem", // larger padding
      //     maxWidth: "1024px", // maximum width for large screens
      //   },
      // },
    },
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".primary-solid-variant": {
          "@apply text-primary-contrast bg-primary hover:bg-primary-dark dark:bg-primary-dark hover:dark:bg-primary":
            {},
        },
      });
    },
  ],
} satisfies Config;

// Color Palette Breakdown:
// Primary Colors:

// Light: #4F46E5 — For lighter elements such as buttons, links, or accents.
// DEFAULT: #3B82F6 — The main brand color for calls to action, buttons, etc.
// Dark: #1E3A8A — For darker variants of the primary color (e.g., deep blue for hover or focus states).
// Secondary Colors:

// Light: #FACC15 — A light yellow for background highlights or soft accents.
// DEFAULT: #F59E0B — Your main secondary color (yellow), for buttons or key elements.
// Dark: #B45309 — A dark, burnt orange for hover states or emphasized text.
// Neutral Colors:

// Light: #F3F4F6 — Soft gray for light backgrounds.
// DEFAULT: #9CA3AF — Medium gray for text or borders.
// Dark: #374151 — Dark gray for headings or strong accents.
// Success, Error, Warning, and Info Colors:

// These are predefined colors for status messages like success, error, warnings, or informational messages.
// They have a light, DEFAULT, and dark shade for flexibility.
// Background Colors:

// Light: #F9FAFB — Light background for sections (great for light mode).
// DEFAULT: #FFFFFF — A clean, white background (default for most containers).
// Dark: #111827 — A dark background for dark mode.
