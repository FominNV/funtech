"use client";
import { FC } from "react";
import clsx from "clsx";
import { Wave } from "@/shared/icons";
import styles from "./Logo.module.scss";

interface ILogoProps {
  theme?: "dark" | "white";
  onlyMobileTitle?: boolean;
}

export const Logo: FC<ILogoProps> = ({
  theme = "dark",
  onlyMobileTitle = theme,
}) => (
  <div
    className={clsx(styles.logo, styles[`logo--theme-${theme}`], {
      [styles[`logo--only-mobile`]]: onlyMobileTitle,
    })}
  >
    <Wave />
    <div className={styles.title}>DiveSea</div>
  </div>
);
