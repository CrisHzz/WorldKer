import React from 'react'
import PlatformHeader from '@/app/components/UI/platformHeader'

export default function Profile() {
  return (
    <div>
      <PlatformHeader>
        {/* Contenedor Principal de la Sección de Perfil */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full my-8 space-y-4 md:space-y-0 md:space-x-8">

          {/* Información de Perfil */}
          <div className="flex flex-col space-y-4 w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-white mb-4">Información de Perfil</h2>
            <div className="bg-gray-800/80 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-white mb-2">Nombre Completo</h2>
              <div className="text-white bg-gray-900/60 p-2 rounded">[Nombre]</div>
            </div>
            <div className="bg-gray-800/80 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-white mb-2">Correo Electrónico</h2>
              <div className="text-white bg-gray-900/60 p-2 rounded">[Correo]</div>
            </div>
            <div className="bg-gray-800/80 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-white mb-2">Dirección</h2>
              <div className="text-white bg-gray-900/60 p-2 rounded">[Dirección]</div>
            </div>
            {/* Estadísticas Generales */}
            <div className="bg-gray-800/80 p-4 rounded-lg shadow-md space-y-2">
              <h2 className="text-xl font-semibold text-white mb-2">Estadísticas</h2>
              <div className="flex justify-between text-white">
                <div>
                  <h3 className="text-sm font-semibold">Posts Totales</h3>
                  <p className="text-lg">[]</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Seguidores</h3>
                  <p className="text-lg">[]</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Siguiendo</h3>
                  <p className="text-lg">[]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contador de Rockets */}
          <div className="bg-gray-800/80 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
            <span className="text-5xl font-bold text-primary">[]</span>  {/* Aquí sería donde pongan el número de Rockets */}
            <span className="text-xl text-white block">Rockets</span>
          </div>

          {/* Posts del Perfil */}
          <div className="w-full md:w-1/3 flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold text-white mb-4">Posts del Perfil</h2>
            <div className="grid grid-cols-1 gap-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-gray-900/80 p-6 rounded-lg shadow-md">
                  <h3 className="text-white font-bold">Post #{index + 1}</h3>
                  <p className="text-white mt-2">Este es el contenido del post. Puede incluir texto, imágenes u otros elementos.</p>
                  <span className="text-primary font-semibold mt-2 block">[Número de Rockets] Rockets</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PlatformHeader>
    </div>
  )
}
