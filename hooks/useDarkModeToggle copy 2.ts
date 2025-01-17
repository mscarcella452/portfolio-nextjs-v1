import { useState, useEffect } from "react";

const useDarkModeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Ensure we're in the browser environment
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      // Check localStorage for saved theme preference
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme as "light" | "dark";

      // Use system preference if no saved theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      return systemTheme;
    }
    return "light"; // Default to "light" theme if no browser or localStorage available
  });

  useEffect(() => {
    // Ensure we're in the browser before accessing `localStorage` and `document`
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      // Apply the theme to the <html> element
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme); // Save the theme to localStorage
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      // Ensure we're in the browser before manipulating document classes
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      document.documentElement.classList.toggle("light", newTheme === "light");
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", newTheme); // Store the theme in localStorage
    }
  };

  return { theme, toggleTheme };
};

export default useDarkModeToggle;
