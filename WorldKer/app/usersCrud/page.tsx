"use client";

import { useEffect, useRef, RefObject, useState } from "react";
import Stars from "../components/UI/Stars";



export default function Home() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [editingUserIndex, setEditingUserIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, company, idNumber, password };

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
  };

  const handleDelete = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const userToEdit = users[index];
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setCompany(userToEdit.company);
    setIdNumber(userToEdit.idNumber);
    setPassword(userToEdit.password);
    setEditingUserIndex(index);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-950 relative overflow-hidden">
      <Stars /> 
      <div className="stars"></div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
        <form className="flex gap-4 bg-white p-6 rounded-lg shadow-md w-full max-w-5xl justify-center" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Crear Usuario</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[120px]"
            required
          />
         
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[120px]"
            required
          />
          <input
            type="text"
            placeholder="Cédula"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[120px]"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[120px]"
            required
          />
          <input
            type="text"
            placeholder="Empresa"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[120px]"
            required
          />
          <button type="submit" className="bg-pink-300 text-white p-2 rounded hover:bg-pink-500 transition duration-200 flex-shrink-0">
            {editingUserIndex !== null ? "Actualizar Usuario" : "Crear Usuario"}
          </button>
        </form>

        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Usuarios</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cédula</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.idNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-yellow-500 hover:text-yellow-600"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
