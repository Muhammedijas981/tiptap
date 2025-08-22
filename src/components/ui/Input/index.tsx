import React from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  type = "text",
  disabled = false,
  ...rest
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  );
};
