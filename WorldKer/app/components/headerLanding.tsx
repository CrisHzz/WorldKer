import React from "react";
import ButtonLanding from "@/app/components/buttonLanding";

export default function HeaderLanding() {
  return (
    <div className="relative w-full overflow-hidden">
      <header className="bg-black/5 h-auto sm:h-[88px] w-full flex flex-col sm:flex-row items-center justify-between px-4 border border-white/10 backdrop-blur-[2px]">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <div className="flex items-center">
            <div className="text-white text-lg sm:text-2xl font-figtree font-bold mr-2">
              Logo
            </div>
            <div className="text-white text-lg sm:text-4xl font-figtree font-bold italic">
              WorldKer
            </div>
          </div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <button className="relative text-white hover:text-blue-300 font-figtree font-bold group">
              Sobre Nosotros
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button className="relative text-white hover:text-blue-300 font-figtree font-bold group">
              Nuestros Pilares
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button className="relative text-white hover:text-blue-300 font-figtree font-bold group">
              Precios
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button className="relative text-white hover:text-blue-300 font-figtree font-bold group">
              Contacto
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
          </div>
          <nav className="mt-2 sm:mt-0">
            <ul className="flex space-x-4">
              <li>
                <ButtonLanding href="/demo" text="Solicitar una demo" />
              </li>
              <li>
                <ButtonLanding href="/sign-in" text="Iniciar sesión" />
              </li>
              <li>
                <ButtonLanding href="/sign-up" text="Registrarse" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}