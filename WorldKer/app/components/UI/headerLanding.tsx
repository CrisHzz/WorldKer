import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ButtonLanding from "./buttonLanding";
import Link from "next/link";
import Image from 'next/image';


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
              <Image
                src="/LogoWorldKer.png"
                alt="Logo WorldKer"
                className="h-8 sm:h-14 mr-3"
              />
              <div className="text-white text-lg sm:text-4xl font-figtree font-bold italic">
                WorldKer
              </div>
            </div>
          </Link>
            {(pathname === "/landing" || pathname === "/landing/EN") && (
            <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-2 sm:mt-0">
              <div className="flex-grow flex justify-center">
              <div className="flex space-x-4">
                <a
                href="#nosotros"
                className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                >
                {pathname === "/landing" ? "Sobre Nosotros" : "About Us"}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                href="#pilares"
                className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                >
                {pathname === "/landing" ? "Nuestros Pilares" : "Our Pillars"}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                href="#precios"
                className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                >
                {pathname === "/landing" ? "Precios" : "Pricing"}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                href="#contacto"
                className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                >
                {pathname === "/landing" ? "Contacto" : "Contact"}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </div>
              </div>
              <nav className="mt-2 sm:mt-0">
              <ul className="flex space-x-4">
                <li>
                <Link href="/landing">
                <button className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <Image
                  src="/spain.png"
                  alt="SPAIN Flag"
                  className="w-8 h-8 object-cover"
                  />
                </button>
                </Link>
                </li>
                <li>
                <Link href="/landing/EN">
                <button className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <Image
                  src="/usa.png"
                  alt="USA Flag"
                  className="w-8 h-8 object-cover"
                  />
                </button>
                </Link>
                </li>
                <li>
                <ButtonLanding href="/demo" text={pathname === "/landing" ? "Solicitar una demo" : "Request a demo"} />
                </li>
                <li>
                <ButtonLanding href="/sign-in" text={pathname === "/landing" ? "Iniciar sesión" : "Sign in"} />
                </li>
                <li>
                <ButtonLanding href="/sign-up" text={pathname === "/landing" ? "Registrarse" : "Sign up"} />
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
