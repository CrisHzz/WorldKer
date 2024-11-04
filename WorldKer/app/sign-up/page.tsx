"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeaderLanding from "@/app/components/UI/headerLanding";
import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";
import ButtonLanding from "@/app/components/UI/buttonLanding";

export default function SignUp(): JSX.Element {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    nit: "",
    serial: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://worlderk.onrender.com/user/get/machetazo/${formData.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        throw new Error(data);
      }
      setMessage("Empresa creada exitosamente.");
      // Redirigir a la página principal después de un breve retraso
      setTimeout(() => {
        router.push("/home");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar los datos del formulario:", error);
      setMessage("Error al crear la empresa. Por favor, inténtelo de nuevo.");
    }
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
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

      <main className="relative text-white z-10 flex flex-col items-center justify-center h-full">
        <div className="relative z-10 bg-white shadow-xl rounded-lg p-4 w-full max-w-lg mt-20 border border-gray-300">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">
            Registro de Empresa
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Correo de la Empresa
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Nombre de la Empresa
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="nit" className="block text-gray-700">
                NIT
              </label>
              <input
                type="text"
                id="nit"
                name="nit"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                value={formData.nit}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="serial" className="block text-gray-700">
                Serial de Registro
              </label>
              <input
                type="text"
                id="serial"
                name="serial"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                value={formData.serial}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-800 text-white font-bold rounded-full hover:bg-blue-900 transition focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Registrarse
            </button>
          </form>
          {message && (
            <div
              className={`mt-4 p-2 rounded ${
                message.includes("exitosamente") ? "bg-green-500" : "bg-red-500"
              } text-white text-center`}
            >
              {message}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
