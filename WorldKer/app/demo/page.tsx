"use client";

import React, { useState } from "react";
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
    <main className="relative flex justify-center items-center min-h-screen bg-gray-100">
      <BackgroundStars />
      <Stars />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-16 rounded-lg shadow-lg text-center w-full max-w-md z-10">
          <h1 className="mb-5 text-4xl font-bold text-purple-900">
            Solicitar una demo
          </h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-3 mb-5 border border-gray-300 rounded-xl text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-indigo-400 text-white p-3 rounded-xl text-lg hover:bg-indigo-600 transition duration-300"
            >
              Obtener serial
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
