"use client";

import React, { useState } from "react";

const CompanyRegistrationForm: React.FC = () => {
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: companyEmail,
        subject: "¡Bienvenido a nuestro sistema!",
        htmlContent: `<p>Gracias por registrarte, ${companyName}!</p>`,
      }),
    });

    if (response.ok) {
      alert("Correo enviado!");
    } else {
      alert("Error enviando el correo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="companyEmail"
          className="block text-sm font-medium text-gray-700"
        >
          Email de la Empresa:
        </label>
        <input
          type="email"
          id="companyEmail"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre de la Empresa:
        </label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Enviar Correo de Registro
      </button>
    </form>
  );
};

export default CompanyRegistrationForm;
