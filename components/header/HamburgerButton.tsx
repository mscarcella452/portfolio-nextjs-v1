import React from "react";
import clsx from "clsx";
import styles from "@styles/components/header.module.css";

type SizeProp = `h-${number} w-${number}`;

type HamburgerButtonProps = {
  isOpen: boolean; // Indicates whether the hamburger menu is open
  onClick: () => void; // Function to handle button clicks
  buttonSize?: SizeProp; // Optional: Custom size for the button (e.g., 'h-5 w-5')
  lineSize?: SizeProp; // Optional: Custom size for the lines (e.g., 'h-1 w-6')
  lineColor?: string; // Optional: Custom color for the lines (e.g., 'black', '#000')
  display?: string; // Optional: CSS display property (e.g., 'block', 'flex')
};

const buttonLines: { base: string; active: string }[] = [
  { base: "-translate-y-1.5", active: "rotate-45" },
  { base: "opacity-100", active: "opacity-0" },
  { base: "translate-y-1.5", active: "-rotate-45" },
];

function HamburgerButton({
  isOpen,
  onClick,
  buttonSize = "h-5 w-5", // Default button size
  lineSize = "h-0.5 w-5", // Default button size
  lineColor = "bg-[black]", // Default line color
  display = "block",
}: HamburgerButtonProps) {
  // sr-only === 'close menu' or 'open menu' is visible for screen readers only
  // aria-hidden === meaningless for a screen reader
  return (
    <button
      className={clsx("relative", buttonSize, display, "focus:outline-none")}
      onClick={onClick}
      aria-label='Toggle navigation menu'
      aria-expanded={isOpen ? "true" : "false"}
    >
      {/* Accessible text for screen readers */}
      <div className='sr-only'>{isOpen ? "Close menu" : "Open menu"}</div>

      {buttonLines.map((transition, index) => (
        <div
          key={index}
          aria-hidden='true'
          className={clsx(
            styles.hamburgerButtonLines,
            lineSize,
            lineColor,
            isOpen ? transition.active : transition.base
          )}
        />
      ))}
    </button>
  );
}

export default HamburgerButton;
