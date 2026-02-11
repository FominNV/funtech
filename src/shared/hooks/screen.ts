import { useEffect, useState } from "react";
import { BREAKPOINTS } from "../constants";

export const useIsMobile = (defaultValue: boolean = false): boolean => {
  const [isMobile, setIsMobile] = useState(defaultValue);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < BREAKPOINTS.LG);
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};
