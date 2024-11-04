"use client";

import React, { useEffect, useState } from "react";
import PlatformHeader from "@/app/components/UI/platformHeader";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    bio: "",
    rocketsReceived: 0,
    followers: 0,
    following: 0,
    available_rockets: 0,
  });

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
          setProfileData({
            name: data.data.name || "",
            email: data.data.email || "",
            bio: data.data.bio || "",
            rocketsReceived: data.data.rockets_received || {},
            followers: data.data.followers || 0,
            following: data.data.following || 0,
            available_rockets: data.data.available_rockets || 0,
          });
        })
        .catch((error) => console.error("Error fetching profile data:", error));
    } else {
      console.error("No email found in localStorage");
    }
  }, []);
  return (
    <div>
      <PlatformHeader>
        {/* Contenedor Principal de la Sección de Perfil */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full my-8 space-y-4 md:space-y-0 md:space-x-8">
          {/* Información de Perfil */}
          <div className="flex flex-col space-y-4 w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Información de Perfil
            </h2>
            <div className="bg-gray-800/80 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-white mb-2">
                Nombre Completo
              </h2>
              <div className="text-white bg-gray-900/60 p-2 rounded">
                {profileData.name}
              </div>
            </div>
            <div className="bg-gray-800/80 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-white mb-2">
                Correo Electrónico
              </h2>
              <div className="text-white bg-gray-900/60 p-2 rounded">
                {profileData.email}
              </div>
            </div>
            <div className="bg-gray-800/80 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-white mb-2">Bio</h2>
              <div className="text-white bg-gray-900/60 p-2 rounded">
                {profileData.bio}
              </div>
            </div>
            {/* Estadísticas Generales */}
            <div className="bg-gray-800/80 p-4 rounded-lg shadow-md space-y-2">
              <h2 className="text-xl font-semibold text-white mb-2">
                Estadísticas
              </h2>
              <div className="flex justify-between text-white">
                <div>
                  <h3 className="text-sm font-semibold">Rockets received</h3>
                  <p className="text-lg">
                    {Object.entries(profileData.rocketsReceived).map(
                      ([key, value]) => (
                        <li key={key}>{value}</li>
                      )
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Seguidores</h3>
                  <p className="text-lg">{profileData.followers}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Siguiendo</h3>
                  <p className="text-lg">{profileData.following}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contador de Rockets */}
          <div className="bg-gray-800/80 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
            <span className="text-5xl font-bold text-primary">
              {profileData.available_rockets}
            </span>{" "}
            {/* Aquí sería donde pongan el número de Rockets */}
            <span className="text-xl text-white block">Rockets</span>
          </div>

          {/* Posts del Perfil */}
          <div className="w-full md:w-1/3 flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Posts del Perfil
            </h2>
            <div className="grid grid-cols-1 gap-4">{}</div>
          </div>
        </div>
      </PlatformHeader>
    </div>
  );
}
