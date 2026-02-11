import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  const isScrolledY: boolean = scrollPosition.y !== 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPosition, isScrolledY };
};
