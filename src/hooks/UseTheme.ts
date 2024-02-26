import { useCallback, useEffect, useState } from "react";
import { Theme } from "../model/react";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark"); // Establecemos "dark" como el tema por defecto

  const toggleTheme = useCallback(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      root.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme;

    if (localTheme) {
      setTheme(localTheme);
      const root = window.document.documentElement;
      if (localTheme === "dark") {
        root.classList.add("dark");
      }
    }
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
