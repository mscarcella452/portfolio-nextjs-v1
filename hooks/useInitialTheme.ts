// hooks/useInitialTheme.ts
import { useEffect, useState } from "react";

export const useInitialTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null); // Start with null

  useEffect(() => {
    // Check localStorage for the saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
      document.documentElement.classList.add(savedTheme); // Apply the saved theme to the document
    } else {
      // Fallback to system preference if no saved theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme); // Apply system theme to the document
    }
  }, []); // Run only once on component mount

  return theme; // Return the theme state
};
