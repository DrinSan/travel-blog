import { api } from "~/utils/api";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <MainLayout className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
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
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
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
