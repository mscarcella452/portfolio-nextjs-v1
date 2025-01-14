import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "@styles/components/button.module.css";
import "@styles/components/button.css";

type ButtonLinkProps = {
  variant?: "primary" | "secondary";
  href: string;
  className?: string;
  children: string;
  // children: React.ReactNode;
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
        "btn",
        {
          "primary-btn": variant === "primary",
          "secondary-btn": variant === "secondary",
        },
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
