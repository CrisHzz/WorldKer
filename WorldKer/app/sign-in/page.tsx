"use client";
import { useRouter } from "next/navigation";
import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";

const ChooseLogin: React.FC = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <BackgroundStars />
      <Stars />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold mb-8">
          Elige una opción para iniciar sesión
        </h1>
        <div className="flex gap-8">
          <button
            onClick={() => handleRedirect("/sign-in/company")}
            className="px-8 py-4 text-xl bg-[#573b8a] text-white rounded-md hover:bg-[#6d44b8] transition-colors duration-200"
          >
            Empresa
          </button>
          <button
            onClick={() => handleRedirect("/sign-in/user")}
            className="px-8 py-4 text-xl bg-[#573b8a] text-white rounded-md hover:bg-[#6d44b8] transition-colors duration-200"
          >
            Usuario
          </button>
          <button
            onClick={() => handleRedirect("/sign-in/admin")}
            className="px-8 py-4 text-xl bg-[#573b8a] text-white rounded-md hover:bg-[#6d44b8] transition-colors duration-200"
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseLogin;
