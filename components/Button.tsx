import React from "react";
import clsx from "clsx";
import "@styles/components/button.css";
import { UIButtonProps } from "@/config/types/UI";
import Icon from "./Icon";

type ButtonProps = UIButtonProps & {
  children: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  className,
  onClick,
  variant,
  icon,
  children,
  ...rest
}: ButtonProps) => {
  const renderIcon = (iconType: "startIcon" | "endIcon") => {
    return (
      <Icon className={icon?.className} variant={icon?.variant}>
        {icon?.[iconType]}
      </Icon>
    );
  };
  return (
    <button
      className={clsx(
        "btn group",
        variant,
        { "gap-1": icon?.startIcon || icon?.endIcon },
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {icon?.startIcon && renderIcon("startIcon")}

      {children}

      {icon?.endIcon && renderIcon("endIcon")}
    </button>
  );
};

export default Button;
