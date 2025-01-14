import React from "react";
import clsx from "clsx";

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

  return (
    <button
      className={clsx("h-5 w-5", display)}
      onClick={onClick}
      aria-label='Toggle navigation menu'
      aria-expanded={isOpen}
    >
      {/* Accessible text for screen readers */}
      <div className='sr-only' role='status'>
        Navigation menu is currently {isOpen ? "open" : "closed"}.
      </div>

      <HamburgerLine transition={isOpen ? "rotate-45" : "-translate-y-1.5"} />
      <HamburgerLine transition={isOpen ? "opacity-0" : "opacity-100"} />
      <HamburgerLine transition={isOpen ? "-rotate-45" : "translate-y-1.5"} />
    </button>
  );
}

export default HamburgerButton;

const HamburgerLine = ({ transition }: { transition: string }) => {
  return (
    <div
      aria-hidden='true'
      data-testid='hamburger-line'
      className={clsx(
        "absolute transition duration-300 ease-in-out h-0.5 w-5 bg-black",
        transition
      )}
    />
  );
};
