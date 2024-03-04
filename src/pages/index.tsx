import { useEffect } from "react";
import { api } from "~/utils/api";
import Carousel from "../components/basic/Carousel";
import Slider from "../components/basic/Slider";
import MainLayout from "../components/layout/MainLayout";
import UseParallax from "../hooks/UseParallax";
import useTheme from "../hooks/UseTheme";
import { NextPage } from "../model/react";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

const Index: NextPage = () => {
  const { theme, toggleTheme } = useTheme();

  // useEffect(() => {
  //   // Llama a toggleTheme cada vez que theme cambie
  //   toggleTheme();
  // }, [theme, toggleTheme]); // Agrega theme y toggleTheme como dependencias

  console.log(theme);
  return (
    <>
      <MainLayout
        description="pagina de viajes de aventura fuera de ruta"
        title="viajando-home"
        theme={theme}
        toggleTheme={toggleTheme}
        className="relative bg-white dark:bg-gradient-to-b dark:from-fromDark dark:to-[#110611]"
      >
        <section className="relative h-fit overflow-hidden bg-fromDark">
          <div
            aria-hidden={theme === "light"}
            className="xl right- absolute top-7 z-[1] aspect-square h-[1px] w-[1px] origin-center  rounded-full bg-white  transition-all duration-[500ms] aria-hidden:scale-[2000] aria-hidden:opacity-100 sm:aria-hidden:scale-[3000] md:right-10  lg:right-14 lg:aria-hidden:scale-[4000] 2xl:right-32 3xl:duration-700 3xl:aria-hidden:scale-[7000]"
          />

          <Slider
            theme={theme}
            items={[
              {
                src: "viaje_Fez_Marruecos.jpg",
                label: "Culturas únicas",
                alt: "Caldereros de Fez",
                country: "Marruecos",
                index: 0,
              },
              {
                src: "viaje_Marrakesh_Marruecos.jpg",
                label: "Vivencias inolvidables",
                alt: "Mercado en Marrakech",
                country: "Marruecos",
                index: 1,
              },
              {
                src: "viaje_Atlas_Marruecos.jpg",
                label: "Lugares de ensueño",
                alt: "Mujeres del Argán en el Atlas",
                country: "Marruecos",
                index: 2,
              },
            ]}
          />
        </section>

        <div className="relative flex min-h-screen flex-col items-center justify-center bg-purple-900">
          <h1 className="text-8xl text-white">hola panchis</h1>
          <p className="text-white">
            los relatos de una panch - por sandra f.f.
          </p>
          <p className="mb-4 text-white">
            los relatos de una panch - por sandra f.f.
          </p>
          <p className="text-white">testing de funcionamiento</p>
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
