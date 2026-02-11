import { FC } from "react";
import "@styles/normalize.scss";

export const MainProvider: FC<IParentComponent> = ({ children }) => (
  <>{children}</>
);
