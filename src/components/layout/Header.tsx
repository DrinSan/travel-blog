import React, { useEffect, useState } from "react";
import useTheme from "../../hooks/UseTheme";
import { Theme, ThemeInfo } from "../../model/react";
import SvgWrapper from "../basic/SvgWrapper";
import Dark from "../icons/Dark";
import Light from "../icons/Light";
import NavItem from "./NavItem";

interface HeaderProps {
  toggleTheme: () => void;
  theme: Theme;
}
const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [alpha, setAlpha] = useState(0);

  const themes: ThemeInfo[] = [
    {
      theme: "light",
      img: (
        <SvgWrapper className="hidden w-[19px] text-primary dark:block">
          <Dark />
        </SvgWrapper>
      ),
    },
    {
      theme: "dark",
      img: (
        <SvgWrapper className="block w-[21px] text-primary dark:hidden">
          <Light />
        </SvgWrapper>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.38; // El 38% de la altura de la ventana
      // Calculamos el nuevo valor de alpha
      const newAlpha = Math.min(1, scrollTop / scrollThreshold);
      // Actualizamos alpha
      setAlpha(newAlpha);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="bo fixed left-0 top-0 z-40 flex w-full items-center justify-between border-b border-white/10 px-7 py-2 backdrop-blur-[2px] md:px-10 lg:px-14 2xl:px-32"
      style={{
        backgroundColor: `rgba(17, 6, 17, ${alpha})`,
        transition: "background-color 0.05s linear", // Agregamos una transición suave
      }}
    >
      <a href="index" className="w-fit text-2xl text-gray-500 dark:text-white">
        Soy Un Logo
      </a>
      <div className="flex gap-3">
        <nav>
          <ul className="flex w-fit items-center gap-3">
            <NavItem
              items={[
                { href: "#", title: "Nosotros" },
                { href: "#", title: "Paises" },
                { href: "#", title: "contacto" },
              ]}
            />
          </ul>
        </nav>
        <div className="relative h-7 w-7">
          {themes.map((t) => {
            return (
              <button
                key={t.theme}
                aria-current={theme === t.theme ? "false" : "true"}
                className=" aria-current:text-primary absolute p-2 transition-all duration-300"
                type="button"
                title={theme}
                onClick={toggleTheme}
              >
                {t.img}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
function capitalize(theme: string) {
  throw new Error("Function not implemented.");
}
