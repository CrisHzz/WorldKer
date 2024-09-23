"use client";

import { useEffect, useRef, RefObject, useState } from "react";
import HeaderLanding from "@/app/components/UI/headerLanding";
import Stars from "@/app/components/UI/Stars";
import ButtonLanding from "@/app/components/UI/buttonLanding";
import GLBModel from "@/app/components/GLBModel";

interface SectionRefs {
  nosotros: RefObject<HTMLElement>;
  pilares: RefObject<HTMLElement>;
  precios: RefObject<HTMLElement>;
  contacto: RefObject<HTMLElement>;
}

export default function Home(): JSX.Element {
  const sectionRefs: SectionRefs = {
    nosotros: useRef<HTMLElement>(null),
    pilares: useRef<HTMLElement>(null),
    precios: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  };

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLAnchorElement;
      const id = target.getAttribute("href")?.slice(1);
      if (id) {
        const element = sectionRefs[id as keyof SectionRefs].current;
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
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

      <HeaderLanding />

      <main className="relative text-white">
        {/* Sobre Nosotros */}
        <section
          ref={sectionRefs.nosotros}
          id="nosotros"
          className={`py-20 px-20 flex flex-col md:flex-row ml-10 transition-all duration-1000 ease-in-out ${
            currentSection === "nosotros"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto flex flex-col justify-center flex-1 space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-[90px] font-bold mb-8 text-center md:text-left">
              ¡Alcanza el <br />
              Universo
              <br /> en tu <br />
              Empresa!
            </h2>
            <p className="text-[20px] leading-relaxed text-center md:text-left">
              Somos una <span className="font-bold">Red Social</span> empresarial diseñada exclusivamente para
              conectar a los miembros de tu empresa. Aquí, la colaboración y el
              crecimiento profesional encuentran su mejor espacio. La
              retroalimentación constante y una comunicación fluida son
              esenciales para crecer. Al compartir experiencias diarias, los
              empleados aprenden unos de otros, celebran logros y dan una
              <span className="font-bold"> identidad cultural</span> única a la empresa.
            </p>
            <div className="text-center md:text-left">
              <ButtonLanding href="/demo" text="Subete al cohete" />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <GLBModel position={[0, 0, 0]} />
          </div>
        </section>

        {/* Nuestros Pilares */}
        <section
          ref={sectionRefs.pilares}
          id="pilares"
          className={`py-16 px-2 bg-blue-900/30 transition-all duration-1000 ease-in-out ${
            currentSection === "pilares"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Nuestros Pilares</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pilar 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  commodi aliquam illo magni fugiat perspiciatis consectetur
                  saepe. Voluptatem accusantium adipisci quidem molestias
                  laborum repudiandae, omnis, modi temporibus suscipit eveniet
                  praesentium!
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pilar 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  repellendus molestias debitis veritatis? Distinctio quasi
                  laboriosam, harum sit expedita sequi ex fuga deserunt suscipit
                  rerum? Quos illo beatae sint sit.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pilar 3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime earum, fugit molestiae omnis consequatur dignissimos
                  rem eveniet incidunt, eum officia possimus eaque ad quos.
                  Pariatur cumque ipsam exercitationem voluptatibus voluptatem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section
          ref={sectionRefs.precios}
          id="precios"
          className={`py-16 px-4 transition-all duration-1000 ease-in-out ${
            currentSection === "precios"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Precios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Plan Básico</h3>
                <p className="text-3xl font-bold mb-4">$99/mes</p>
                <ul className="mb-6">
                  <li>Característica 1</li>
                  <li>Característica 2</li>
                  <li>Característica 3</li>
                </ul>
                <ButtonLanding href="/demo" text="Solicitar demo" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Plan Pro</h3>
                <p className="text-3xl font-bold mb-4">$199/mes</p>
                <ul className="mb-6">
                  <li>Todas las características del Plan Básico</li>
                  <li>Característica 4</li>
                  <li>Característica 5</li>
                </ul>
                <ButtonLanding href="/demo" text="Solicitar demo" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Plan Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Contactar</p>
                <ul className="mb-6">
                  <li>Todas las características del Plan Pro</li>
                  <li>Soporte 24/7</li>
                  <li>Personalización completa</li>
                </ul>
                <ButtonLanding href="/demo" text="Solicitar demo" />
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section
          ref={sectionRefs.contacto}
          id="contacto"
          className={`py-16 px-4 bg-gradient-to-r from-blue-700 via-black to-blue-800 transition-all duration-1000 ease-in-out ${
            currentSection === "contacto"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto">{/* Contenido de contacto */}</div>
        </section>
      </main>
    </div>
  );
}
