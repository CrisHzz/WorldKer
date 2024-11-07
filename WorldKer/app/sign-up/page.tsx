'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import HeaderLanding from "@/app/components/UI/headerLanding"
import Stars from "@/app/components/UI/Stars"
import BackgroundStars from "@/app/components/UI/backgroundStars"
import ButtonLanding from "@/app/components/UI/buttonLanding"
import { Mail, Lock, Building, CreditCard, Key, ArrowRight } from 'lucide-react'

export default function SignUp(): JSX.Element {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    nit: "",
    serial: "",
  })

  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://worlderk.onrender.com/api/v1/cruds/company/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
      let data
      const contentType = response.headers.get("content-type")
      if (contentType && contentType.includes("application/json")) {
        data = await response.json()
      } else {
        data = await response.text()
      }

      if (!response.ok) {
        throw new Error(data)
      }
      setMessage("Empresa creada exitosamente.")
      setTimeout(() => {
        router.push("/sign-in/company")
      }, 2000)
    } catch (error) {
      console.error("Error al enviar los datos del formulario:", error)
      setMessage("Error al crear la empresa. Por favor, inténtelo de nuevo.")
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-40">
        <BackgroundStars />
        <Stars />
        <div
          className="absolute inset-0 bg-gradient-radial from-blue-700/50 to-transparent"
          style={{ transform: "scale(1.2)" }}
        />
      </div>

      <div className="fixed top-0 w-full z-20">
        <HeaderLanding />
        <div className="absolute top-0 right-0 mt-4 mr-6 flex space-x-4">
          <ButtonLanding href="/demo" text="Solicitar una Demo" />
          <ButtonLanding href="/sign-in" text="Iniciar sesión" />
          <ButtonLanding href="/" text="Sobre nosotros" />
        </div>
      </div>

      <main className="relative text-white z-10 flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/20">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-white">
            Registro de Empresa
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Correo de la Empresa
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="empresa@ejemplo.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Contraseña
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Nombre de la Empresa
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nombre de la Empresa"
                />
              </div>
            </div>
            <div>
              <label htmlFor="nit" className="block text-sm font-medium text-gray-200">
                NIT
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="nit"
                  name="nit"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.nit}
                  onChange={handleChange}
                  required
                  placeholder="NIT de la Empresa"
                />
              </div>
            </div>
            <div>
              <label htmlFor="serial" className="block text-sm font-medium text-gray-200">
                Serial de Registro
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="serial"
                  name="serial"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={formData.serial}
                  onChange={handleChange}
                  required
                  placeholder="Serial de Registro"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ArrowRight className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                </span>
                Registrarse
              </button>
            </div>
          </form>
          {message && (
            <div
              className={`mt-4 p-3 rounded-md ${
                message.includes("exitosamente") ? "bg-green-500" : "bg-red-500"
              } text-white text-center text-sm font-medium animate-fade-in-down`}
            >
              {message}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}