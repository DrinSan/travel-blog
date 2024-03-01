import { useEffect, useState } from "react";

const Mapa: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 100%;
          }
        }

        .dash-animation {
          stroke-dasharray: 4, 3; /* Ajusta estos valores según tu necesidad */
          animation: dash 60s linear infinite;
        }
      `}</style>
      <path
        className={animation ? "dash-animation" : ""}
        d="M103.5 440.6C10 383.2-65.5 171.8 135.4 51.2s294.7 30.3 366.4 92.3c29.1 25.2 72 58.1 136.9 22.7 91.4-49.9 289.6 5.4 272.9 169.5-18.3 180.5-127.9 190.5-192.7 202.5-63.7 11.8-177.5 35.7-259.2-29.5S297.4 443.3 257 456.2c-34.8 11-92.3 21.9-153.5-15.6z"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeDasharray="5.9911,5.9911"
      />
      <path
        className={animation ? "dash-animation" : ""}
        d="M133.9 389.7C86.4 358.4 1 188.4 191 105.2s256.9 48.5 317.1 95.7c24.4 19.2 69.5 29.1 128.4 1.4 63.8-30 243.7-2.2 233.7 131.1C859.9 470 740.3 476.7 681 483.8c-58.3 7-162 14.6-230.9-35.2-69-49.9-141.6-52-178.9-43.6-32.2 7.2-87.5 17.5-137.3-15.3z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeDasharray="6.0113,6.0113"
      />
      <path
        fill="none"
        stroke="currentColor"
        d="M165.3 331.3C127.7 304.4 71 175.8 241.2 136s214.9 60 261.7 99.4c19 16 56.8 27.1 109.6 13.9 90.2-22.6 221.6 34.2 187.1 116.1-37.9 90.1-123.3 83.3-174.7 82.4-50.5-.9-141-1-195.1-43.2s-116-50.9-148.7-48.7c-28.2 1.9-76.4 3.6-115.8-24.6z"
      />
      <path
        d="M190.4 300.3c-32-20.5-73.3-111.4 84-128.3s190 53.6 229.4 83.2c16 12 43.9 34.4 91.2 21.1 63.2-17.8 186.5 21.7 167.5 84.9-21.8 72.5-118.2 49.3-164.7 45.7-45.6-3.6-127.6-9.1-173.4-41s-101.1-41.5-130.9-42c-25.8-.5-69.6-2.1-103.1-23.6z"
        fill="none"
        className={animation ? "dash-animation" : ""}
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeDasharray="6.0206,6.0206"
      />
      <path
        d="M344 197.8c-1.2-.3-111.9-14.9-133.3 51.8s126.2 52 130.6 52.2c4.5.2 59-.4 102.9 29 43.9 29.4 60.5 7.9 62.6 3.9 2.1-4 10.5-30.5-4.4-42.1-14.8-11.7-79-76.7-158.4-94.8z"
        fill="none"
        stroke="currentColor"
        className={animation ? "dash-animation" : ""}
        strokeMiterlimit={10}
        strokeDasharray="5.9674,5.9674"
      />
      <path
        fill="none"
        stroke="currentColor"
        d="M299 231.1c-.4 0-38.5 3-34.5 33s49.2 11.5 50.7 11.2c1.5-.3 19-5.1 37.9 3.7 19 8.8 20.8-1.7 20.8-3.6 0-1.9-1.6-13.8-8.3-17.4-6.7-3.7-38.1-25.9-66.6-26.9z"
      />
      <path
        d="M676 312.9s-52.4-30.3-66.9 10.4 26 50.7 26 50.7 61.6 21 71.1-16.4c5.8-22.2-30.2-44.7-30.2-44.7z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        className={animation ? "dash-animation" : ""}
        strokeDasharray="5.8859,5.8859"
      />
      <path
        fill="none"
        stroke="currentColor"
        d="M474.6 300s-18.7-13.4-26.7-.7c-7.9 12.8 7.3 18.7 7.3 18.7s22.8 10.9 28.7-1.1c3.5-7.1-9.3-16.9-9.3-16.9z"
      />
      <path
        fill="none"
        stroke="currentColor"
        d="M580 136.5s31.7 7.8 37.5-12-17.9-19.8-17.9-19.8-36.4-2.6-39.6 15.2c-1.9 10.5 20 16.6 20 16.6z"
      />
      <path
        fill="none"
        stroke="currentColor"
        d="M549.7 147.1s45.3 21.4 72.2-4.6c26.9-26 8.7-55.5-15.9-51.7-18.9 3-40.8 7.7-66.4-15.2-10.6-9.4-39.8-23.5-44.1 5.4-4.7 31.6 54.2 66.1 54.2 66.1z"
      />
    </>
  );
};
export default Mapa;
