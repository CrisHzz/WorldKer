"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";
import Link from "next/link";

export default function Login(): JSX.Element {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
      );

      if (!response.ok) {
        throw new Error(`Error al verificar el correo: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la verificación:", error);
      return null; // O algún valor que indique error
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Verificar que formData esté definido y tenga la propiedad email
    if (!formData || !formData.email) {
      console.error("El email no puede estar vacío");
      return;
    }

    // Llamar a verificarCorreo para verificar el email
    const data = await verificarCorreo(formData.email);

    if (data) {
      router.push("/company-management");
    } else {
      alert("El usuario no existe. Por favor, verifica tu correo electrónico.");
    }
  };

  const goBack = (): void => {
    router.back();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#24243e] via-[#302b63] to-[#24243e]">
      <BackgroundStars />
      <Stars />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[350px] bg-gradient-to-b from-[#302b63] via-[#24243e] to-[#302b63] rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gray-100 rounded-[20px] p-8 text-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-[#573b8a] text-3xl font-bold mb-6">
                Iniciar Sesión <br /> Admin
              </h2>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 bg-[#e0dede] px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#573b8a]"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 bg-[#e0dede] px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#573b8a]"
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 text-white bg-[#573b8a] text-lg font-bold rounded cursor-pointer hover:bg-[#6d44b8] transition-colors duration-300"
              >
                Iniciar Sesión
              </button>
            </form>
            <button
              onClick={goBack}
              className="w-full h-12 mt-4 text-white bg-[#573b8a] text-lg font-bold rounded cursor-pointer hover:bg-[#6d44b8] transition-colors duration-300"
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
