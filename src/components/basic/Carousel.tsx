import { useEffect, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

import Image from "next/image";
import Arrow from "../icons/Arrow";
import SvgWrapper from "./SvgWrapper";
import TitleWriter from "./TitleWriter";
import UseParallax from "../../hooks/UseParallax";

interface itemCarousel {
  src: string;
  label: string;
  alt: string;
  index: number;
}
interface CarouselProps {
  items: itemCarousel[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const translateY = UseParallax();

  return (
    <div className="relative h-screen">
      {/* <span className="absolute top-0 z-10 block h-[20%] w-full bg-gradient-to-b from-[#110611] to-transparent" /> */}
      <ReactSimplyCarousel
        autoplay
        autoplayDelay={7999}
        key={items.length}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        className="w-full"
        containerProps={{
          className: "relative !h-full !w-full",
        }}
        // forwardBtnProps={{
        //   show: true,
        //   className:
        //     "mx-5 md:mx-10 absolute top-2/4 -translate-y-[30px] right-0 z-30 flex h-6 sm:h-10 w-6 sm:w-10 items-center justify-center rounded-full border-2 border-white/70 bg-white/10 transition-all duration-300 hover:border-white hover:bg-white/50 cursor-pointer group focus:outline-none",
        //   children: (
        //     <SvgWrapper className="ml-[1px] w-4 -rotate-90  stroke-white/70 transition-all duration-300 group-hover:stroke-white sm:w-7">
        //       <Arrow />
        //     </SvgWrapper>
        //   ),
        // }}
        // backwardBtnProps={{
        //   show: true,
        //   className:
        //     "mx-5 md:mx-10 absolute top-2/4 -translate-y-[30px] left-0 z-30 flex h-6 sm:h-10 w-6 sm:w-10 items-center justify-center rounded-full border-2 border-white/70 bg-white/10 transition-all duration-300 hover:border-white hover:bg-white/50 cursor-pointer group focus:outline-none",
        //   children: (
        //     <SvgWrapper className="-ml-[2px] w-4 rotate-90 stroke-white/70 transition-all duration-300 group-hover:stroke-white sm:w-7">
        //       <Arrow />
        //     </SvgWrapper>
        //   ),
        // }}
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
              "w-5 sm:w-6 h-[6px] rounded-full bg-rose-400 border border-[#110611]/70",
          },
        }}
        speed={0}
        preventScrollOnSwipe
        disableSwipeByMouse={!(items.length > 1)}
        disableSwipeByTouch={!(items.length > 1)}
      >
        {items.map(({ src, label, alt, index }) => (
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
            <Image
              aria-current={activeSlideIndex}
              alt={alt}
              src={`/img/${src}`}
              width={1200}
              height={600}
              className={`absolute top-0 h-full w-full object-cover opacity-40${activeSlideIndex === index ? " animate-grown" : ""}`}
            />
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
