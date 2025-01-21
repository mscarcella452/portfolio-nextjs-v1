import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "@styles/components/button.module.css";
import "@styles/components/button.css";

type ButtonLinkProps = {
  variant?: "primary" | "primary-outline" | "secondary" | "secondary-outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  href: string;
  className?: string;
  children: string;
  // children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink = ({
  variant,
  size,
  href,
  className,
  children,
  ...rest
}: ButtonLinkProps) => {
  return (
    <Link
      className={clsx("btn", `${variant}-btn`, `btn-${size}`, className)}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
