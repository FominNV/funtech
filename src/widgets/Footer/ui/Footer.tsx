"use client";
import { FC, JSX } from "react";
import { Divider, Logo, MainContainer } from "@/shared";
import { ABOUT_LINKS } from "@/shared/constants";
import { useIsMobile } from "@/shared/hooks";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  const isMobile: boolean = useIsMobile();

  const currentYear: number = new Date().getFullYear();

  const copyrightText: string = isMobile
    ? `© ${currentYear} DiveSea All Rights Reserved.`
    : `© ${currentYear}`;

  const renderNavigateLinks: JSX.Element[] = ABOUT_LINKS.map((link, i) => (
    <li key={i} className={styles["list-item"]}>
      {link}
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <MainContainer>
        <div className={styles.content}>
          <Logo theme="white" onlyMobileTitle={false} />
          <ul className={styles.list}>{renderNavigateLinks}</ul>
        </div>
        <Divider />
        <div className={styles.copyright}>{copyrightText}</div>
      </MainContainer>
    </footer>
  );
};
