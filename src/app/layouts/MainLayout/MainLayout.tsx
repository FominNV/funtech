import { Header } from "@/widgets";
import { FC } from "react";

export const MainLayout: FC<IParentComponent> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
