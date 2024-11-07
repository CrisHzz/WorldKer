"use client";

import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";

export default function Demo() {
  const [email, setEmail] = useState("");
  const [serials, setSerials] = useState<number[]>([]);

  const generateUniqueSerial = () => {
    let serial;
    do {
      serial = Math.floor(100 + Math.random() * 999);
    } while (serials.includes(serial));
    setSerials([...serials, serial]);
    return serial;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const serial = generateUniqueSerial();

    try {
      const response = await fetch("https://worlderk.onrender.com/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: "Business Demo Series",
          body: `Serial: ${serial}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Correo enviado exitosamente");
      } else {
        console.error("Error al enviar el correo:", data);
        alert("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de red. No se pudo enviar el correo.");
    }
  };

  return (
    <main className="relative flex justify-center items-center min-h-screen">
      <BackgroundStars />
      <Stars />
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center w-full max-w-md z-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        <h1 className="mb-6 text-3xl md:text-4xl font-bold text-gray-800">
          Solicitar una demo
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 pl-10 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-xl text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="flex items-center justify-center">
              <Send className="mr-2" size={20} />
              Obtener serial
            </span>
          </button>
        </form>
      </div>
      <button
        className="fixed bottom-4 right-4 bg-gray-200 p-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300"
        onClick={() => window.history.back()}
      >
        Regresar
      </button>
    </main>
  );
}
