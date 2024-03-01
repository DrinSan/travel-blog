import { useEffect, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

import Image from "next/image";
import TitleWriter from "./TitleWriter";
import UseParallax from "../../hooks/UseParallax";
import useTheme from "../../hooks/UseTheme";

interface itemCarousel {
  src: string;
  label: string;
  country: string;
  alt: string;
  index: number;
}
interface CarouselProps {
  items: itemCarousel[];
  theme: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, theme }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const translateY = UseParallax();

  return (
    <div className="relative h-screen">
      <ReactSimplyCarousel
        autoplay
        key={items.length}
        autoplayDelay={7999}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        className="w-full"
        containerProps={{
          className: "relative !h-full !w-full",
        }}
        dotsNav={{
          show: items.length > 1,
          containerProps: {
            className:
              "absolute z-30 flex gap-2 bottom-10 !justify-end px-7 md:px-10 lg:px-14 2xl:px-32",
          },
          itemBtnProps: {
            className:
              "w-5 sm:w-6 h-[6px] rounded-full bg-white/20 border border-[#110611]/70",
          },
          activeItemBtnProps: {
            className:
              "w-5 sm:w-6 h-[6px] rounded-full bg-primary border border-[#110611]/70",
          },
        }}
        speed={0}
        preventScrollOnSwipe
        disableSwipeByMouse={!(items.length > 1)}
        disableSwipeByTouch={!(items.length > 1)}
      >
        {items.map(({ src, label, alt, index, country }) => (
          <div key={index} className="relative h-full w-full min-w-[100vw]">
            {activeSlideIndex === index && (
              <div
                className="absolute left-2/4 top-2/4 z-10 -ml-12 mt-6 w-[410px] -translate-x-2/4 -translate-y-2/4 "
                style={{
                  transform: `translate(-50%,  calc(-50% - ${translateY}px))`,
                  transition: "transform 0.05s linear",
                }}
              >
                <TitleWriter text={label} />
              </div>
            )}
            {theme === "dark" ? (
              <Image
                aria-current={activeSlideIndex}
                alt={alt}
                src={`/img/dark/${src}`}
                width={1200}
                height={600}
                className={`absolute top-0 h-full w-full object-cover opacity-40${activeSlideIndex === index ? " animate-grown" : ""}`}
              />
            ) : (
              <Image
                aria-current={activeSlideIndex}
                alt={alt}
                src={`/img/light/${src}`}
                width={1200}
                height={600}
                className={`absolute top-0 h-full w-full object-cover opacity-60${activeSlideIndex === index ? " animate-grown" : ""}`}
              />
            )}
            <p className="absolute bottom-14 right-8 z-10 w-fit text-right text-2.5xs font-light tracking-[1.5px] text-white/80 md:right-11 lg:right-16 2xl:right-36">
              {alt}
              <span className="ml-1 font-medium">
                (<strong> {country} </strong>)
              </span>
            </p>
          </div>
        ))}
      </ReactSimplyCarousel>

      <h2
        className="absolute left-2/4 top-2/4 z-20 -mt-10 w-fit -translate-x-2/4 -translate-y-2/4 font-serif text-7xl  font-bold text-white"
        style={{
          transform: `translate(-50%,  calc(-50% - ${translateY}px))`,
          transition: "transform 0.05s linear",
        }}
      >
        Soy Texto fijo
      </h2>
    </div>
  );
};

export default Carousel;
