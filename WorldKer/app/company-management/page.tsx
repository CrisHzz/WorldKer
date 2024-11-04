"use client";

import React, { useState } from "react";
import Stars from "@/app/components/UI/Stars";
import Modal from "@/app/components/UI/Modal";

interface Company {
  id: number;
  name: string;
  status: string;
}

export default function CompanyManagement() {
  const [companies, setCompanies] = useState<Company[]>([]);

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (id: number) => {
    const filteredCompanies = companies.filter((company) => company.id === id);

    try {
      const response = await fetch(
        `https://worlderk.onrender.com/api/v1/cruds/company/${filteredCompanies[0].id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Verificar si la respuesta tiene contenido antes de analizarla como JSON
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(data.message || JSON.stringify(data));
      }

      // Actualizar la lista de empresas después de la eliminación
      setCompanies((prevCompanies) =>
        prevCompanies.filter((company) => company.id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar la empresa:", error);
    }
  };

  const handleLogout = () => {
    window.location.href = "/landing"; // Redirige a la página de inicio
  };

  const handleFetchCompanies = async () => {
    try {
      const response = await fetch(
        "https://worlderk.onrender.com/api/v1/cruds/company/get/all",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      }

      setCompanies(data);
    } catch (error) {
      console.error("Error al obtener las emmpresas:", error);
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      <Stars />

      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0 bg-gradient-radial from-blue-700/50 to-transparent"
          style={{ transform: "scale(1.2)" }}
        />
        <div
          className="absolute inset-0 bg-gradient-radial from-blue-700/80 to-transparent"
          style={{ transform: "translate(20%, 20%) scale(1.5)" }}
        />
        <div
          className="absolute inset-0 bg-gradient-radial from-blue-700/30 to-transparent"
          style={{ transform: "translate(-20%, -20%) scale(1.8)" }}
        />
      </div>

      <div className="relative z-10 flex flex-row h-full p-4 text-white justify-center items-start mt-8 space-x-10">
        {/* Aside Menu */}
        <aside className="w-1/4 bg-purple-900/60 rounded-lg shadow-lg p-4 h-[90vh]">
          <h2 className="text-2xl font-bold mb-4">Companies</h2>

          <button
            className="mt-4 bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded transition"
            onClick={handleLogout}
          >
            Salir
          </button>
          <button
            className="mt-4 bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded transition ml-2"
            onClick={handleFetchCompanies}
          >
            Ver todas las empreas
          </button>
        </aside>

        {/* Article Section for Table */}
        <article className="relative flex-1 bg-purple-800/60 rounded-lg overflow-hidden shadow-lg p-4 h-[90vh]">
          <h1 className="text-5xl font-bold mb-8 text-center">
            Company Management CRUD
          </h1>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-purple-600 py-2 px-4 text-lg text-left">
                  ID
                </th>
                <th className="border-b-2 border-purple-600 py-2 px-4 text-lg text-left">
                  Name
                </th>
                <th className="border-b-2 border-purple-600 py-2 px-4 text-lg text-left">
                  Status
                </th>
                <th className="border-b-2 border-purple-600 py-2 px-4 text-lg text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.id} className="hover:bg-purple-600 transition">
                  <td className="border-b border-purple-600 py-2 px-4 text-left">
                    {company.id}
                  </td>
                  <td className="border-b border-purple-600 py-2 px-4 text-left">
                    {company.name}
                  </td>
                  <td className="border-b border-purple-600 py-2 px-4 text-left">
                    {company.status}
                  </td>
                  <td className="border-b border-purple-600 py-2 px-4 text-left">
                    <button
                      className="mr-4 bg-red-600 hover:bg-red-800 text-white py-1 px-3 rounded transition"
                      onClick={() => handleDelete(company.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal Component */}
          {selectedCompany && (
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              companyName={selectedCompany.name}
            />
          )}
        </article>
      </div>
    </main>
  );
}
