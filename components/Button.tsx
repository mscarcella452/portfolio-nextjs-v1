import React from "react";
import clsx from "clsx";
import { UIColorVariantProps } from "@/config/types/UI";

type ButtonProps = UIColorVariantProps & {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant,
  color,
  size,
  onClick,
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "btn",
        `${color}-${variant}-variant`,
        `btn-${size}`,
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
