import { FC, HTMLAttributes } from "react";
import styles from "./Button.module.scss";

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.button}>
      <span className={styles.text}>{children}</span>
    </button>
  );
};
