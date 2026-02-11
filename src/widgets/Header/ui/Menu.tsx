import { FC, JSX } from "react";
import clsx from "clsx";
import { Divider, MainContainer } from "@/shared";
import { NAVIGATE_LINKS } from "@/shared/constants";
import styles from "./Menu.module.scss";

interface IMenuProps {
  isOpen?: boolean;
}

export const Menu: FC<IMenuProps> = ({ isOpen }) => {
  const renderNavigateLinks: JSX.Element[] = NAVIGATE_LINKS.map((link, i) => (
    <li key={i} className={styles["list-item"]}>
      {link}
    </li>
  ));

  return (
    <div className={clsx(styles.menu, { [styles["menu--opened"]]: isOpen })}>
      <MainContainer>
        <div>
          <Divider />
          <ul className={styles.list}>{renderNavigateLinks}</ul>
        </div>
      </MainContainer>
    </div>
  );
};
