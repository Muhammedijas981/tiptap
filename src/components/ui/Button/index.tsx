import React from "react";
import classNames from "clsx";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  ...rest
}) => {
  const btnClass = classNames(styles.button, styles[variant], styles[size], {
    [styles.disabled]: disabled,
  });

  return (
    <button
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
