import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ButtonLanding from "./buttonLanding";
import Link from "next/link";

export default function HeaderLanding() {
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      const yOffset = -88; // Altura del encabezado
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange, false);

    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <header className="bg-black/5 h-auto sm:h-[88px] w-full flex flex-col sm:flex-row items-center justify-between px-4 border border-white/10 backdrop-blur-[2px]">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <div className="flex items-center">
              <img
                src="/LogoWorldKer.png"
                alt="Logo WorldKer"
                className="h-8 sm:h-14 mr-3"
              />
              <div className="text-white text-lg sm:text-4xl font-figtree font-bold italic">
                WorldKer
              </div>
            </div>
          </Link>
          {pathname === "/landing" && (
            <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-2 sm:mt-0">
              <div className="flex-grow flex justify-center">
                <div className="flex space-x-4">
                  <a
                    href="#nosotros"
                    className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                  >
                    Sobre Nosotros
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a
                    href="#pilares"
                    className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                  >
                    Nuestros Pilares
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a
                    href="#precios"
                    className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                  >
                    Precios
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a
                    href="#contacto"
                    className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                  >
                    Contacto
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </div>
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
          )}
        </div>
      </header>
    </div>
  );
}
