import type { Config } from "tailwindcss";

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
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
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
      black: "#000000",
      transparent: "transparent",
      current: "currentColor", // Used for borders or icons matching text color

      // Primary Color
      primary: {
        light: "#4F46E5", // Light shade
        DEFAULT: "#3B82F6", // Main primary color (blue)
        dark: "#1E3A8A", // Dark variant (deep blue)
      },

      // Secondary Color
      secondary: {
        light: "#FACC15", // Light shade (yellow)
        DEFAULT: "#F59E0B", // Main secondary color (yellow)
        dark: "#B45309", // Dark variant (burnt orange)
      },

      // Neutral Colors
      neutral: {
        light: "#F3F4F6", // Light gray (used for background)
        DEFAULT: "#9CA3AF", // Medium gray (used for text or borders)
        dark: "#374151", // Dark gray (headings or accents)
      },

      // Success Colors
      success: {
        light: "#D1FAE5", // Light green (success alerts)
        DEFAULT: "#10B981", // Green (success messages/buttons)
        dark: "#047857", // Dark green (for emphasis)
      },

      // Error Colors
      error: {
        light: "#FEE2E2", // Light red (error alerts)
        DEFAULT: "#EF4444", // Red (error messages/buttons)
        dark: "#B91C1C", // Dark red (emphasis)
      },

      // Warning Colors
      warning: {
        light: "#FEF3C7", // Light yellow (warning alerts)
        DEFAULT: "#F59E0B", // Yellow (warning messages/buttons)
        dark: "#B45309", // Dark yellow (for emphasis)
      },

      // Info Colors
      info: {
        light: "#DBEAFE", // Light blue (informational messages)
        DEFAULT: "#3B82F6", // Blue (informational messages/links)
        dark: "#1E3A8A", // Dark blue (for emphasis)
      },

      // Background Colors
      background: {
        light: "#F9FAFB", // Light background for sections
        DEFAULT: "#FFFFFF", // Default white background for cards/containers
        dark: "#111827", // Dark background (dark mode)
      },
    },
    extend: {
      spacing: {
        header: "60px",
        navbarHeight: "60px",
        heroSection: "calc(100vh - 60px)",
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
