"use client";
import { FC } from "react";
import { Provider } from "react-redux";
import "@styles/globals.scss";
import { store } from "@/shared/store";

export const MainProvider: FC<IParentComponent> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
