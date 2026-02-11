import { FC } from "react";
import { Menu, Cross } from "@/shared/icons";
import styles from "./MenuButton.module.scss";

interface IMenuButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export const MenuButton: FC<IMenuButtonProps> = ({ isOpen, onClick }) => (
  <button className={styles["menu-button"]} onClick={onClick}>
    {isOpen ? <Cross /> : <Menu />}
  </button>
);
