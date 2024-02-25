import { api } from "~/utils/api";
import Carousel from "../components/basic/Carousel";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <MainLayout className="bg-gradient-to-b from-[#110611] to-[#110611]">
        <Carousel
          items={[
            {
              src: "viaje1.jpeg",
              label: "Culturas únicas",
              alt: "caldereros de Fez (Marruecos)",
              index: 0,
            },
            {
              src: "viaje2.jpeg",
              label: "Vivencias inolvidables",
              alt: "mercado marrakech (Marruecos)",
              index: 1,
            },
            {
              src: "viaje3.jpeg",
              label: "Lugares de ensueño",
              alt: "caldereros de Fez (Marruecos)",
              index: 2,
            },
          ]}
        />
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="mb-8 text-8xl text-white">hola panchis</h1>
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
