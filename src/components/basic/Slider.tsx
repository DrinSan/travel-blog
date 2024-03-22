import React, { useEffect, useState } from "react";
import Image from "next/image";
import TitleWriter from "./TitleWriter";

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
    <div className="relative z-10" data-carousel="slide">
      <div className="top-0 h-screen overflow-hidden">
        {items.map(({ src, alt, index, country, label }) => (
          <div
            key={index}
            className={` w-full min-w-[100vw] ${currentSlider === index ? "z-10" : "z-0"}`}
          >
            {currentSlider === index && (
              <>
                <div className="fixed top-0 h-full w-full animate-grown">
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

                <div className="border-fronmDark absolute bottom-14 right-6 z-10 flex w-fit items-center rounded-sm border border-fromDark text-right font-sans text-2.5xs font-semibold tracking-[1.5px] text-fromDark backdrop-blur-md dark:border-white/50 dark:text-white dark:text-white/80 md:right-9 lg:right-14 2xl:right-32">
                  <p className="bg-white/10 px-2 pb-[1px] pt-[2px] dark:bg-fromDark/20">
                    {alt}
                  </p>
                  <h2 className="w-fit bg-fromDark px-2 pb-[1.5px] pt-[2px] font-medium text-white dark:bg-white/60 dark:text-fromDark">
                    <strong> {country} </strong>
                  </h2>
                </div>
                <div className="absolute left-2/4 top-2/4 z-10 -ml-14 mt-11 w-[430px] -translate-x-2/4 -translate-y-2/4 font-light ">
                  <TitleWriter text={label} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="absolute top-0 h-screen w-full">
        <h2 className="font-oswald absolute left-2/4 top-2/4 z-20 -mt-10 w-fit -translate-x-2/4 -translate-y-2/4 text-9xl font-normal text-fromDark dark:text-white">
          Trasumantes
        </h2>
      </div>

      <div className="absolute bottom-10 z-30 flex w-full !justify-end gap-2 px-7 md:px-10 lg:px-14 2xl:px-32">
        {items.map(({ index }) => (
          <button
            key={index}
            onClick={() => handleSliderChange(index)}
            type="button"
            title={`item-${index}`}
            className={`h-[6px] w-5 rounded-sm border border-[#110611]/70 sm:w-6${currentSlider === index ? " bg-primary" : " bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
