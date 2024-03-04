import React, { useEffect, useState } from "react";
import Image from "next/image";
import TitleWriter from "./TitleWriter";
import UseParallax from "../../hooks/UseParallax";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

const INIT_INTERVAL = 8000;

interface itemSlider {
  src: string;
  label: string;
  country: string;
  alt: string;
  index: number;
}

interface SliderProps {
  items: itemSlider[];
  theme: string;
}

const Slider: React.FC<SliderProps> = ({ items, theme }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  // const translateY = UseParallax();

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    const changeCurrentSlider = (position: number): void => {
      const totalSlider = items.length - 1 || 0;
      setCurrentSlider(position);
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        setCurrentSlider((currentData) =>
          currentData === totalSlider ? 0 : currentData + 1,
        );
      }, INIT_INTERVAL);
    };
    changeCurrentSlider(currentSlider);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [items]);
  const handleSliderChange = (position: number) => {
    setCurrentSlider(position);
  };

  return (
    <div className="relative z-10 h-[200vh]" data-carousel="slide">
      <div className="fixed top-0 h-screen overflow-hidden">
        {items.map(({ src, alt, index, country }) => (
          <div
            key={index}
            className={`top-0  w-full min-w-[100vw] ${currentSlider === index ? "z-10" : "z-0"}`}
          >
            {currentSlider === index && (
              <>
                <div className="h-full w-full animate-grown">
                  <Image
                    loading="lazy"
                    aria-current={currentSlider}
                    alt={alt}
                    src={`/img/slider/${src}`}
                    width={1400}
                    height={1013}
                    className={`h-full w-full object-cover opacity-0 ${theme === "dark" ? " animate-fadeDark" : " animate-fade"}`}
                  />
                </div>

                <p
                  className={`absolute bottom-14 right-6 z-10 w-fit rounded-md bg-fromDark/50 p-1 px-2 text-right text-2.5xs font-light tracking-[1.5px] text-white dark:text-white/80 md:right-9 lg:right-14 2xl:right-32`}
                >
                  {alt}
                  <span className="ml-1 font-medium">
                    (<strong> {country} </strong>)
                  </span>
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      <section className="absolute top-0 h-screen w-full">
        <h2 className="absolute left-2/4 top-2/4 z-20 -mt-10 w-fit -translate-x-2/4 -translate-y-2/4 font-serif text-7xl font-bold text-fromDark dark:text-white">
          Soy Texto fijo
        </h2>
        {items.map(({ label, index }) => (
          <>
            {currentSlider === index && (
              <div className="absolute left-2/4 top-2/4 z-10 -ml-12 mt-6 w-[410px] -translate-x-2/4 -translate-y-2/4 ">
                <TitleWriter text={label} />
              </div>
            )}
          </>
        ))}
      </section>

      <div className="absolute bottom-10 z-30 flex w-full !justify-end gap-2 px-7 md:px-10 lg:px-14 2xl:px-32">
        {items.map(({ index }) => (
          <button
            key={index}
            onClick={() => handleSliderChange(index)}
            type="button"
            title={`item-${index}`}
            className={`h-[6px] w-5 rounded-full border border-[#110611]/70 sm:w-6${currentSlider === index ? " bg-primary" : " bg-white/20"}`}
          />
        ))}
      </div>

      <section className="absolute top-[100vh] flex h-screen w-full flex-col items-center justify-center border-t border-t-rose-500 bg-rose-500/40">
        {theme === "dark" ? (
          <h1 className="mb-8 text-8xl text-white">hola panchis</h1>
        ) : (
          <h1 className="mb-8 text-8xl text-black">hola drins</h1>
        )}

        <p className="text-lg tracking-wider text-white">
          los relatos de una panch - por sandra f.f.
        </p>
        <p className="mb-4 text-lg tracking-wider text-white">
          los relatos de una panch - por sandra f.f.
        </p>
        <p className="text-lg tracking-wider text-white">
          testing de funcionamiento
        </p>
      </section>
    </div>
  );
};

export default Slider;
