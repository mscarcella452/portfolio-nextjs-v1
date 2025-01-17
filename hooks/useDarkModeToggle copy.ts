import { useEffect, useState } from "react";

const useDarkModeToggle = (initialState: "light" | "dark" = "light") => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme as "light" | "dark";

    // Use system preference if no saved theme
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return systemTheme || initialState;
  });

  useEffect(() => {
    // Apply the theme to the <html> element
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Save the theme to localStorage
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light"); // Ensure the light class is removed
    } else {
      document.documentElement.classList.add("light"); // Explicitly add the "light" class
      document.documentElement.classList.remove("dark"); // Ensure the dark class is removed
    }
    localStorage.setItem("theme", newTheme); // Store the theme in localStorage
  };

  return { theme, toggleTheme };
};

export default useDarkModeToggle;
