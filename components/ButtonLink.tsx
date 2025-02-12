import React from "react";
import Link from "next/link";
import clsx from "clsx";
import "@styles/components/button.css";
import "@styles/components/ui-elements.css";
import { UIColorVariantProps } from "@/config/types/UI";

type ButtonLinkProps = UIColorVariantProps & {
  href: string;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink = ({
  variant,
  color,
  size,
  href,
  className,
  children,
  ...rest
}: ButtonLinkProps) => {
  return (
    <Link
      className={clsx(
        "btn",
        `${color}-${variant}-variant`,
        `btn-${size}`,
        className
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
export default ButtonLink;
