import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Header: React.FC = () => {
  const [alpha, setAlpha] = useState(0);

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
      <a href="index" className="w-fit text-2xl text-white">
        Soy Un Logo
      </a>
      <div>
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
      </div>
    </header>
  );
};

export default Header;
