import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "primary-outline" | "secondary" | "secondary-outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "button" | "submit" | "reset"; // For <button>
  className?: string; // Custom class names
  children: string; // Content inside the button
  // children: React.ReactNode; // Content inside the button
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  variant,
  size,
  type = "button",
  onClick,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx("btn", `${variant}-btn`, `btn-${size}`, className)}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
