'use client'

import { useRouter } from "next/navigation"
import Stars from "@/app/components/UI/Stars"
import BackgroundStars from "@/app/components/UI/backgroundStars"
import { Building2, User, ShieldCheck, ArrowLeft } from "lucide-react"

export default function ChooseLogin() {
  const router = useRouter()

  const handleRedirect = (path: string) => {
    router.push(path)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <BackgroundStars />
      <Stars />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl">
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white">
              Elige una opción para iniciar sesión
            </h1>
            <p className="mt-2 text-center text-sm text-gray-300">
              Selecciona el tipo de cuenta con la que deseas acceder
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <button
              onClick={() => handleRedirect("/sign-in/company")}
              className="group relative flex w-full justify-center items-center px-4 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-[#573b8a] hover:bg-[#6d44b8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#573b8a] transition-all duration-200 ease-in-out"
            >
              <Building2 className="mr-2 h-5 w-5" />
              Empresa
            </button>
            <button
              onClick={() => handleRedirect("/sign-in/user")}
              className="group relative flex w-full justify-center items-center px-4 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-[#573b8a] hover:bg-[#6d44b8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#573b8a] transition-all duration-200 ease-in-out"
            >
              <User className="mr-2 h-5 w-5" />
              Usuario
            </button>
            <button
              onClick={() => handleRedirect("/sign-in/admin")}
              className="group relative flex w-full justify-center items-center px-4 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-[#573b8a] hover:bg-[#6d44b8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#573b8a] transition-all duration-200 ease-in-out"
            >
              <ShieldCheck className="mr-2 h-5 w-5" />
              Admin
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => router.back()}
        className="fixed bottom-4 right-4 flex items-center px-4 py-2 bg-[#573b8a] text-white rounded-full hover:bg-[#6d44b8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#573b8a] transition-all duration-200 ease-in-out"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Regresar
      </button>
    </div>
  )
}