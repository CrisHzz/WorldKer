"use client";

import React, { useEffect, useState } from "react";
import { User, Mail, Rocket, Users, UserPlus, Edit2, Save } from "lucide-react";
import PlatformHeader from "@/app/components/UI/platformHeader";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    id: "",
    name: "",
    email: "",
    bio: "",
    rocketsReceived: 0,
    followers: 0,
    following: 0,
    available_rockets: 0,
  });
  const [editableBio, setEditableBio] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      fetch(`https://worlderk.onrender.com/user/get/machetazo/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Asegurarse de que data.data existe y es un objeto
          if (data?.data && typeof data.data === 'object') {
            setProfileData({
              id: String(data.data.id || ""),
              name: String(data.data.name || ""),
              email: String(data.data.email || ""),
              bio: String(data.data.bio || ""),
              rocketsReceived: Number(data.data.rocketsReceived || 0),
              followers: Number(data.data.followers || 0),
              following: Number(data.data.following || 0),
              available_rockets: Number(data.data.available_rockets || 0),
            });
            setEditableBio(String(data.data.bio || ""));
          }
        })
        .catch((error) => console.error("Error fetching profile data:", error));
    } else {
      console.error("No email found in localStorage");
    }
  }, []);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableBio(e.target.value);
  };

  const handleBioSave = () => {
    // Asegurarse de que el ID es una cadena válida
    if (!profileData.id) return;

    fetch(`https://worlderk.onrender.com/user/update/${profileData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bio: editableBio }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProfileData((prevData) => ({
          ...prevData,
          bio: editableBio,
        }));
        setIsEditing(false);
        console.log("Bio updated successfully:", data);
      })
      .catch((error) => console.error("Error updating bio:", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <PlatformHeader>
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                      {profileData.name ? String(profileData.name).charAt(0) : ''}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{String(profileData.name)}</h2>
                      <p className="text-gray-400 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {String(profileData.email)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center mb-2">
                        <User className="w-5 h-5 mr-2" />
                        Biografía
                      </h3>
                      {isEditing ? (
                        <div className="space-y-2">
                          <textarea
                            value={String(editableBio)}
                            onChange={handleBioChange}
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2"
                            rows={4}
                          />
                          <button
                            onClick={handleBioSave}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            Guardar
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <p className="text-gray-300">{String(profileData.bio) || "No hay biografía aún."}</p>
                          <button
                            onClick={() => setIsEditing(true)}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            <Edit2 className="w-4 h-4" />
                            <span className="sr-only">Editar biografía</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <Rocket className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                        <p className="text-2xl font-bold">{Number(profileData.rocketsReceived)}</p>
                        <p className="text-sm text-gray-400">Rockets Recibidos</p>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                        <p className="text-2xl font-bold">{Number(profileData.followers)}</p>
                        <p className="text-sm text-gray-400">Seguidores</p>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <UserPlus className="w-8 h-8 mx-auto mb-2 text-green-400" />
                        <p className="text-2xl font-bold">{Number(profileData.following)}</p>
                        <p className="text-sm text-gray-400">Siguiendo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Mis Posts</h3>
                <p className="text-gray-400">Aquí se mostrarán tus posts recientes.</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold flex items-center mb-4">
                  <Rocket className="w-6 h-6 mr-2 text-yellow-400" />
                  Mis Rockets
                </h3>
                <div className="text-center">
                  <p className="text-5xl font-bold text-yellow-400">{Number(profileData.available_rockets)}</p>
                  <p className="text-gray-400 mt-2">Rockets Disponibles</p>
                </div>
                <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded">
                  Enviar un Rocket
                </button>
              </div>
            </div>
          </div>
        </main>
      </PlatformHeader>
    </div>
  );
}