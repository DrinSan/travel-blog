/* eslint-disable react/no-unescaped-entities */
import Slider from "../components/basic/Slider";
import MainLayout from "../components/layout/MainLayout";

import useTheme from "../hooks/UseTheme";
import { NextPage } from "../model/react";
import Image from "next/image";
import Link from "next/link";

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
            className="right- absolute top-7 z-[1] aspect-square h-[1px] w-[1px] origin-center  rounded-full bg-white  transition-all duration-[500ms] aria-hidden:scale-[2000] aria-hidden:opacity-100 sm:aria-hidden:scale-[3000] md:right-10  lg:right-14 lg:aria-hidden:scale-[4000] 2xl:right-32 3xl:duration-700 3xl:aria-hidden:scale-[7000]"
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
        <section className="relative z-30 flex w-full flex-col items-center justify-center overflow-hidden bg-white py-28 text-fromDark  dark:border-white/20  dark:bg-fromDark dark:text-white/90">
          <article className="relative z-10 max-w-7xl px-7 md:px-10 lg:px-14 2xl:px-32">
            <div className="mb-8">
              <h2 className="font-oswald relative z-10 mb-3 text-5xl text-white">
                Quíenes somos?
              </h2>
              <h3 className="font-articleSerif text-xl italic tracking-wide text-primary">
                "La Aventura es solo mala planificación" – Roald Amudsen.
              </h3>
            </div>
            <div className="mb-6 max-w-5xl font-sans tracking-wider">
              <p className="mb-3">
                Sandra y Adri. Desde hace ya muchos años, nuestra pasión por
                viajar, descubrir y conocer nos ha llevado a realizar
                expediciones por más de 30 países. Lejos de las rutas turísticas
                convencionales, buscamos descubrir el verdadero corazón de las
                comunidades locales y las tradiciones de las etnias que
                encontramos en nuestro camino.
              </p>
              <p>
                No se trata solo de marcar destinos en un mapa, sino de
                sumergirse en la esencia misma de cada comunidad que encontramos
                en nuestro camino, vivir experiencias únicas y forjar conexiones
                genuinas en cada lugar que exploramos.
              </p>
            </div>
            <Link
              href="#"
              title="saber mas"
              className="font-oswald text-wide rounded-full bg-primary px-8 pb-2 pt-1 font-semibold text-fromDark"
            >
              Saber mas
            </Link>
          </article>

          <Image
            src="/img/light/viaje_Marruecos.jpg"
            alt="Marruecos_Fez"
            className="animate-fadeLinear absolute w-full object-cover opacity-30"
            width={1400}
            height={1013}
          />
          <span className="absolute right-0 block h-full w-4/5 bg-gradient-to-tl from-fromDark via-fromDark/70 to-transparent" />
        </section>
        <section className="relative z-30 h-screen w-full bg-fromDark">
          <div className="flex max-w-7xl gap-5 px-7 md:px-10 lg:px-14 2xl:px-32">
            <div className="group/articleCard relative h-[340px] w-64 overflow-hidden rounded-lg border border-[#301930] transition-transform duration-300 hover:scale-105">
              <Image
                src="/img/articles/desierto.jpg"
                alt="desierto"
                width={600}
                height={300}
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 h-fit w-full border-t border-t-[#301930] bg-[#180c18]/85 px-4  pb-5 pt-6 text-white backdrop-blur-sm">
                <div className="flex items-center gap-2 font-sans text-xs font-bold text-primary">
                  <h4>Adrian Rodriguez</h4>
                  <span className="block h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <p>Mar 2024</p>
                </div>
                <h2 className="font-oswald mb-2 text-xl font-medium tracking-wide text-white">
                  Las puertas del Sahara
                </h2>
                <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover/articleCard:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="text-2sm mb-3 line-clamp-3 font-sans font-medium leading-[18px] tracking-wide opacity-0 transition-opacity delay-200 duration-300 group-hover/articleCard:opacity-100">
                      Soy una breve descripcion del contenido del articulo no
                      debe ser mayor q tres lineas
                    </p>
                    <div className="relative h-[22px]">
                      <Link
                        href="#"
                        className=" absolute -translate-x-full rounded-full bg-primary px-4 pb-0.5 font-sans text-sm font-bold text-fromDark opacity-0 transition-all delay-300 duration-300 group-hover/articleCard:translate-x-0 group-hover/articleCard:opacity-100"
                      >
                        Leer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group/articleCard relative h-[340px] w-64 overflow-hidden rounded-lg border border-[#301930] transition-transform duration-300 hover:scale-105">
              <Image
                src="/img/articles/desierto.jpg"
                alt="desierto"
                width={600}
                height={300}
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 h-fit w-full border-t border-t-[#301930] bg-[#180c18]/85 px-4  pb-5 pt-6 text-white backdrop-blur-sm">
                <div className="flex items-center gap-2 font-sans text-xs font-bold text-primary">
                  <h4>Adrian Rodriguez</h4>
                  <span className="block h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <p>Mar 2024</p>
                </div>
                <h2 className="font-oswald mb-2 text-xl font-medium tracking-wide text-white">
                  Las puertas del Sahara
                </h2>
                <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover/articleCard:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="text-2sm mb-3 line-clamp-3 font-sans font-medium leading-[18px] tracking-wide opacity-0 transition-opacity delay-200 duration-300 group-hover/articleCard:opacity-100">
                      Soy una breve descripcion del contenido del articulo no
                      debe ser mayor q tres lineas
                    </p>
                    <div className="relative h-[22px]">
                      <Link
                        href="#"
                        className=" absolute -translate-x-full rounded-full bg-primary px-4 pb-0.5 font-sans text-sm font-bold text-fromDark opacity-0 transition-all delay-300 duration-300 group-hover/articleCard:translate-x-0 group-hover/articleCard:opacity-100"
                      >
                        Leer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group/articleCard relative h-[340px] w-64 overflow-hidden rounded-lg border border-[#301930] transition-transform duration-300 hover:scale-105">
              <Image
                src="/img/articles/desierto.jpg"
                alt="desierto"
                width={600}
                height={300}
                className="h-full object-cover"
              />
              <div className="absolute bottom-0 h-fit w-full border-t border-t-[#301930] bg-[#180c18]/85 px-4  pb-5 pt-6 text-white backdrop-blur-sm">
                <div className="flex items-center gap-2 font-sans text-xs font-bold text-primary">
                  <h4>Adrian Rodriguez</h4>
                  <span className="block h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <p>Mar 2024</p>
                </div>
                <h2 className="font-oswald mb-2 text-xl font-medium tracking-wide text-white">
                  Las puertas del Sahara
                </h2>
                <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover/articleCard:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="text-2sm mb-3 line-clamp-3 font-sans font-medium leading-[18px] tracking-wide opacity-0 transition-opacity delay-200 duration-300 group-hover/articleCard:opacity-100">
                      Soy una breve descripcion del contenido del articulo no
                      debe ser mayor q tres lineas
                    </p>
                    <div className="relative h-[22px]">
                      <Link
                        href="#"
                        className=" absolute -translate-x-full rounded-full bg-primary px-4 pb-0.5 font-sans text-sm font-bold text-fromDark opacity-0 transition-all delay-300 duration-300 group-hover/articleCard:translate-x-0 group-hover/articleCard:opacity-100"
                      >
                        Leer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Index;
