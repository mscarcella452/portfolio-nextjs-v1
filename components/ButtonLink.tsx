import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "@styles/components/button.module.css";

type ButtonLinkProps = {
  variant?: "primary" | "secondary";
  href: string;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink = ({
  variant,
  href,
  className,
  children,
  ...rest
}: ButtonLinkProps) => {
  return (
    <Link
      className={clsx(
        variant === "primary" && styles.primaryButton,
        variant === "secondary" && styles.secondaryButton,
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
