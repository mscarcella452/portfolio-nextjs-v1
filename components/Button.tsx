import React from "react";
import clsx from "clsx";
import styles from "@styles/components/button.module.css";

type ButtonProps = {
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset"; // For <button>
  className?: string; // Custom class names
  children: string; // Content inside the button
  // children: React.ReactNode; // Content inside the button
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  variant,
  type = "button",
  onClick,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "btn",
        {
          "primary-btn": variant === "primary",
          "secondary-btn": variant === "secondary",
        },
        className
      )}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
