import { useEffect } from "react";
import { api } from "~/utils/api";
import Carousel from "../components/basic/Carousel";
import MainLayout from "../components/layout/MainLayout";
import useTheme from "../hooks/UseTheme";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { theme, toggleTheme } = useTheme();

  // useEffect(() => {
  //   // Llama a toggleTheme cada vez que theme cambie
  //   toggleTheme();
  // }, [theme, toggleTheme]); // Agrega theme y toggleTheme como dependencias

  console.log(theme);
  return (
    <>
      <MainLayout
        theme={theme}
        toggleTheme={toggleTheme}
        className="bg-white dark:bg-gradient-to-b dark:from-fromDark dark:to-[#110611]"
      >
        <Carousel
          theme={theme}
          items={[
            {
              src: "viaje1.jpeg",
              label: "Culturas únicas",
              alt: "Caldereros de Fez",
              country: "Marruecos",
              index: 0,
            },
            {
              src: "viaje2.jpeg",
              label: "Vivencias inolvidables",
              alt: "Mercado en Marrakech",
              country: "Marruecos",
              index: 1,
            },
            {
              src: "viaje3.jpeg",
              label: "Lugares de ensueño",
              alt: "Mujeres del Argán en el Atlas",
              country: "Marruecos",
              index: 2,
            },
          ]}
        />
        <div className="flex min-h-screen flex-col items-center justify-center">
          {theme === "dark" ? (
            <h1 className="mb-8 text-8xl text-white">hola panchis</h1>
          ) : (
            <h1 className="mb-8 text-8xl text-black">hola drins</h1>
          )}

          <p className="text-white">
            los relatos de una panch - por sandra f.f.
          </p>
          <p className="mb-4 text-white">
            los relatos de una panch - por sandra f.f.
          </p>
          <p className="text-white">testing de funcionamiento</p>
        </div>
        <div className="flex min-h-screen flex-col items-center justify-center">
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
}
