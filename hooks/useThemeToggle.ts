import { useState, useEffect } from "react";

const useThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Default to light theme

  useEffect(() => {
    // Check localStorage for a saved theme or fallback to system preference
    const savedTheme = localStorage.getItem("theme");
    let initialTheme: "light" | "dark" = "light"; // Default value

    if (savedTheme) {
      initialTheme = savedTheme as "light" | "dark";
    } else {
      // If no theme is saved, use system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      initialTheme = systemTheme;
    }

    // Set the theme state and apply it to the document
    setTheme(initialTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme); // Apply the theme to the document
  }, []); // Run only once when the component mounts

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark"); // Remove both theme classes
    document.documentElement.classList.add(newTheme); // Add the new theme class

    localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
  };

  return { theme, toggleTheme }; // Return theme and toggle function for the Navbar
};

export default useThemeToggle;
