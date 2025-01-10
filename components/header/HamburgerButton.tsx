import React from "react";
import clsx from "clsx";
import styles from "@styles/components/header.module.css";

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  display?: string;
};

function HamburgerButton({
  isOpen,
  onClick,
  display = "block",
}: HamburgerButtonProps) {
  // sr-only === 'close menu' or 'open menu' is visible for screen readers only
  // aria-hidden === meaningless for a screen reader

  const buttonLines: {
    label: string;
    initialClass: string;
    activeClass: string;
  }[] = [
    {
      label: "top",
      initialClass: "-translate-y-1.5",
      activeClass: "rotate-45",
    },
    { label: "middle", initialClass: "opacity-100", activeClass: "opacity-0" },
    {
      label: "bottom",
      initialClass: "translate-y-1.5",
      activeClass: "-rotate-45",
    },
  ];

  return (
    <button
      className={clsx("relative", "h-5 w-5", "focus:outline-none", display)}
      onClick={onClick}
      aria-label='Toggle navigation menu'
      aria-expanded={isOpen ? "true" : "false"}
    >
      {/* Accessible text for screen readers */}
      <div className='sr-only'>{isOpen ? "Close menu" : "Open menu"}</div>

      {buttonLines.map(({ label, initialClass, activeClass }, index) => (
        <div
          key={index}
          aria-hidden='true'
          role='presentation'
          aria-label={label}
          className={clsx(
            styles.hamburgerButtonLines,
            "h-0.5 w-5",
            "bg-[black]",
            isOpen ? activeClass : initialClass
          )}
        />
      ))}
    </button>
  );
}

export default HamburgerButton;
