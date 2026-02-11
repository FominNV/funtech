import { FC } from "react";
import styles from "./MainContainer.module.scss";

export const MainContainer: FC<IParentComponent> = ({ children }) => (
  <div className={styles["main-container"]}>{children}</div>
);
