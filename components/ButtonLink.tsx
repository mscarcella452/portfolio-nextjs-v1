import React from "react";
import Link from "next/link";
import clsx from "clsx";
import "@styles/components/button.css";
import { UIButtonProps } from "@/config/types/UI";
import Icon from "./Icon";

type ButtonLinkProps = UIButtonProps & {
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink = ({
  className,
  variant,
  href,
  icon,
  children,
  ...rest
}: ButtonLinkProps) => {
  const renderIcon = (iconType: "startIcon" | "endIcon") => {
    return (
      <Icon className={icon?.className} variant={icon?.variant}>
        {icon?.[iconType]}
      </Icon>
    );
  };
  return (
    <Link
      className={clsx(
        "btn group",
        variant,
        { "gap-1": icon?.startIcon || icon?.endIcon },
        className
      )}
      href={href}
      {...rest}
    >
      {icon?.startIcon && renderIcon("startIcon")}

      {children}

      {icon?.endIcon && renderIcon("endIcon")}
    </Link>
  );
};
export default ButtonLink;
