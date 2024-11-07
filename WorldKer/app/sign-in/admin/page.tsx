'use client'

import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/navigation"
import Stars from "@/app/components/UI/Stars"
import BackgroundStars from "@/app/components/UI/backgroundStars"
import Link from "next/link"
import { ShieldCheck, Mail, Lock, ArrowLeft } from "lucide-react"

export default function Login(): JSX.Element {
  const [formData, setFormData] = useState<{
    email: string
    password: string
  }>({
    email: "",
    password: "",
  })

  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const verificarCorreo = async (email: string) => {
    try {
      const response = await fetch(
        `https://worlderk.onrender.com/api/v1/cruds/admin/get/email/${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Error al verificar el correo: ${response.statusText}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error en la verificación:", error)
      return null
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!formData || !formData.email) {
      console.error("El email no puede estar vacío")
      return
    }

    const data = await verificarCorreo(formData.email)

    if (data) {
      router.push("/company-management")
    } else {
      alert("El usuario no existe. Por favor, verifica tu correo electrónico.")
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#24243e] via-[#302b63] to-[#24243e]">
      <BackgroundStars />
      <Stars />
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <ShieldCheck className="h-12 w-12 text-[#573b8a]" />
              </div>
              <h2 className="text-[white] text-3xl font-extrabold text-center mb-6">
                Admin
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 bg-white/20 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#573b8a] text-white placeholder-gray-300"
                    aria-label="Correo Electrónico"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 bg-white/20 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#573b8a] text-white placeholder-gray-300"
                    aria-label="Contraseña"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 text-white bg-[#573b8a] text-lg font-bold rounded-lg cursor-pointer hover:bg-[#6d44b8] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#573b8a]"
                >
                  Iniciar Sesión
                </button>
              </form>
              <Link href="/landing">
                <button
                  className="w-full h-12 mt-4 text-white bg-gray-600 text-lg font-bold rounded-lg cursor-pointer hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2" /> Regresar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}