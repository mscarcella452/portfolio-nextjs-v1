import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  as?: "button" | "link"; // Determines the type of element
  variant?: "primary" | "secondary"; // Styling variants
  type?: "button" | "submit" | "reset"; // For <button>
  href?: string; // For <a> links
  className?: string; // Custom class names
  children: React.ReactNode; // Content inside the button
} & React.ButtonHTMLAttributes<HTMLButtonElement> & // Props for <button>
  React.AnchorHTMLAttributes<HTMLAnchorElement>; // Props for <a>

function Button({
  as = "button",
  variant = "primary",
  type = "button",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const primaryColorClass = "bg-primary-main hover:bg-primary-dark text-black";
  const secondaryColorClass =
    "bg-secondary-main hover:bg-secondary-dark text-black";
  const colorClassName =
    variant === "primary" ? primaryColorClass : secondaryColorClass;

  const computedClasses = clsx(
    "btn p-1 rounded transition-colors duration-300",
    colorClassName,
    className
  );
  const link = as === "link";
  if (link) {
    return (
      <Link className={computedClasses} href={href!} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={computedClasses} type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
