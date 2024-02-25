import { useEffect, useState } from "react";

const UseParallax = () => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    let currentTranslateY = 0;
    let requestId: number;

    const animateScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollMax = window.innerHeight;
      //  el nuevo valor de translateY
      const newTranslateY = Math.min(
        120,
        Math.round((scrollTop / scrollMax) * 120),
      );
      // Suavizamos
      currentTranslateY += (newTranslateY - currentTranslateY) * 0.1;
      // Actualizamos el estado
      setTranslateY(currentTranslateY);
      requestId = requestAnimationFrame(animateScroll);
    };

    animateScroll();
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return translateY;
};

export default UseParallax;
