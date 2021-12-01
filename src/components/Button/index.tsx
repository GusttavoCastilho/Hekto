import React, { ButtonHTMLAttributes } from "react";

import styles from "../../styles/Button.module.scss";

type ButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium";
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, size = "medium", icon, ...rest }: ButtonProps) => {
  return (
    <button className={styles[size]} {...rest}>
      {children && <label>{children}</label>}
      {icon && icon}
    </button>
  );
};

export default Button;
