"use client";
import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";
import { useState } from "react";
import Link from "next/link";

interface User {
  name: string;
  email: string;
  company: string;
  idNumber: string;
  password: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [editingUserIndex, setEditingUserIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { name, email, company, idNumber, password };

    try {
      const response = await fetch(
        "https://undefinedprojectbackend.onrender.com/user/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
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

      console.log("Datos del formulario enviados:", data);

      if (editingUserIndex !== null) {
        const updatedUsers = [...users];
        updatedUsers[editingUserIndex] = newUser;
        setUsers(updatedUsers);
        setEditingUserIndex(null);
      } else {
        setUsers((prevUsers) => [...prevUsers, newUser]);
      }

      setName("");
      setEmail("");
      setCompany("");
      setIdNumber("");
      setPassword("");
    } catch (error) {
      console.error("Error al enviar los datos del formulario:", error);
    }
  };

  const handleDelete = (index: number) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    const userToEdit = users[index];
    setName(userToEdit.name || "");
    setEmail(userToEdit.email || "");
    setCompany(userToEdit.company || "");
    setIdNumber(userToEdit.idNumber || "");
    setPassword(userToEdit.password || "");
    setEditingUserIndex(index);
  };

  const handleFetchUsers = async () => {
    try {
      const response = await fetch(
        "https://undefinedprojectbackend.onrender.com/user/get/all",
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

      setUsers(data);
      console.log("Usuarios obtenidos:", data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  const handleUpdateUser = async (id: string) => {
    const updatedUser = { name, email, company, idNumber, password };

    try {
      const response = await fetch(
        `https://undefinedprojectbackend.onrender.com/api/v1/cruds/company/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      }

      console.log("Usuario actualizado:", data);
      // Actualizar la lista de usuarios después de la actualización
      handleFetchUsers();
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundStars />
      <Stars />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
          <form className="mb-8" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Crear Usuario
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Cédula"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-pink-300 text-white p-2 rounded hover:bg-pink-500 transition duration-200"
            >
              {editingUserIndex !== null
                ? "Actualizar Usuario"
                : "Crear Usuario"}
            </button>

            <button
              type="button"
              onClick={handleFetchUsers}
              className="mt-4 bg-pink-300 text-white p-2 rounded hover:bg-pink-500 transition duration-200 ml-2"
            >
              Ver todos los usuarios
            </button>

            <button
              type="button"
              className="mt-4 bg-pink-300 text-white p-2 rounded hover:bg-pink-500 transition duration-200 ml-2"
            >
              <Link href="/landing">Salir</Link>
            </button>
          </form>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Usuarios
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cédula
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Empresa
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.idNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <button
                          onClick={() => handleEdit(index)}
                          className="text-yellow-500 hover:text-yellow-600 mr-2"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-500 hover:text-red-600"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
