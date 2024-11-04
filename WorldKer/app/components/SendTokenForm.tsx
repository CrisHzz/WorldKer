"use client";

import React, { useState } from "react";

// Define una constante para la URL de la API
const API_URL = "/api/send-email";

const TokenForm: React.FC = () => {
  const [tokenEmail, setTokenEmail] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Prepara el contenido del correo
    const emailData = {
      to: tokenEmail,
      subject: "Tu token de registro de empleados",
      htmlContent: `<p>Tu token es: <strong>${token}</strong></p>`,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert("Token enviado exitosamente!");
      } else {
        alert("Error al enviar el token");
      }
    } catch (error) {
      console.error("Error enviando el token:", error);
      alert("Error enviando el token");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="tokenEmail"
          className="block text-sm font-medium text-gray-700"
        >
          Email de la Empresa:
        </label>
        <input
          type="email"
          id="tokenEmail"
          value={tokenEmail}
          onChange={(e) => setTokenEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="token"
          className="block text-sm font-medium text-gray-700"
        >
          Token:
        </label>
        <input
          type="text"
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Enviar Token
      </button>
    </form>
  );
};

export default TokenForm;
