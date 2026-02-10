import { FC } from "react";
import "../shared/styles/modules.scss";

export const MainProvider: FC<IParentComponent> = ({ children }) => (
  <>{children}</>
);
