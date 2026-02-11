import { FC } from "react";
import { Footer, Header } from "@/widgets";
import styles from "./MainLayout.module.scss";

export const MainLayout: FC<IParentComponent> = ({ children }) => (
  <div className={styles["main-layout"]}>
    <Header />
    <main className={styles.content}>{children}</main>
    <Footer />
  </div>
);
