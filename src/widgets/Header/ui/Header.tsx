"use client";
import { FC, JSX, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { Logo, MainContainer, MenuButton } from "@/shared";
import { NAVIGATE_LINKS } from "@/shared/constants";
import { useIsMobile, useScroll } from "@/shared/hooks";
import styles from "./Header.module.scss";
import { Menu } from "./Menu";

export const Header: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isMobile: boolean = useIsMobile();
  const { isScrolledY } = useScroll();

  const handleToggleMenu = useCallback(() => setShowMenu((prev) => !prev), []);

  const renderNavigateLinks: JSX.Element[] = NAVIGATE_LINKS.map((link, i) => (
    <li key={i} className={styles["list-item"]}>
      <span className={styles["list-item-fake-text"]}>{link}</span>
      <span className={styles["list-item-text"]}>{link}</span>
    </li>
  ));

  useEffect(() => {
    const linksNode: HTMLElement | null = document.querySelector(
      `.${styles.links}`,
    );

    if (!linksNode) {
      return;
    }

    gsap.to(linksNode, {
      y: 0,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <header
        className={clsx(styles.header, {
          [styles["header--fixed"]]: isScrolledY,
        })}
      >
        <MainContainer>
          <div className={styles.content}>
            <nav className={styles.links}>
              <Logo />
              {!isMobile && (
                <ul className={styles.list}>{renderNavigateLinks}</ul>
              )}
            </nav>
            {isMobile && (
              <MenuButton isOpen={showMenu} onClick={handleToggleMenu} />
            )}
          </div>
        </MainContainer>
      </header>
      {isMobile && <Menu isOpen={showMenu} />}
    </>
  );
};
