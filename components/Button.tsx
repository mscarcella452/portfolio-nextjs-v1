import React from "react";
import styles from "@styles/components/button.module.css";

type ButtonProps = {
  children?: string;
  ariaLabel?: string; // The button label and aria-label
  className?: string;
  onClick?: () => void;
};

function Button({ onClick, ariaLabel, className, children }: ButtonProps) {
  return <button className='btn'>{children}</button>;
}

export default Button;
