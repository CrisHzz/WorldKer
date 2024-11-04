"use client";

import React, { useState } from "react";

const UserRegistrationForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: userEmail,
          subject: "Registro de Usuario",
          htmlContent: `<p>¡Bienvenido, ${userName}!</p>`,
        }),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error enviando el correo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="userEmail"
          className="block text-sm font-medium text-gray-700"
        >
          Email del Usuario:
        </label>
        <input
          type="email"
          id="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="userName"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre del Usuario:
        </label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Enviar Correo de Registro de Usuario
      </button>
    </form>
  );
};

export default UserRegistrationForm;
