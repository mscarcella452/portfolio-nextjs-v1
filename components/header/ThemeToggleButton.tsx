import React from "react";
import useThemeToggle from "@/hooks/useThemeToggle";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeToggle();
  const iconClass =
    "w-5 h-5 text-primary hover:text-primary-dark transition-colors duration-300 ease-in-out";
  return (
    <button
      onClick={toggleTheme}
      className='h-full p-1'
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      aria-pressed={theme === "dark"}
    >
      {theme === "light" ? (
        <SunIcon className={iconClass} data-testid='light-icon' />
      ) : (
        <MoonIcon className={iconClass} data-testid='dark-icon' />
      )}
    </button>
  );
};

export default ThemeToggleButton;
