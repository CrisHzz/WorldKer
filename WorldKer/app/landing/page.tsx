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
              Somos una <span className="font-bold">Red Social</span>{" "}
              empresarial diseñada exclusivamente para conectar a los miembros
              de tu empresa. Aquí, la colaboración y el crecimiento profesional
              encuentran su mejor espacio. La retroalimentación constante y una
              comunicación fluida son esenciales para crecer. Al compartir
              experiencias diarias, los empleados aprenden unos de otros,
              celebran logros y dan una
              <span className="font-bold"> identidad cultural</span> única a la
              empresa.
            </p>
            <div className="text-center md:text-left">
              <ButtonLanding href="/sign-up" text="Subete al cohete" />
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
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">
                  Alcanza el exito 🚀{" "}
                </h3>
                <p>
                  Gracias a la forma de interactuar tus empleados podran
                  <span className="font-bold"> destacarse </span> entre si
                  usando los superlikes, aquellos que tengan un mejor
                  rendimiento o hagan buenas acciones saldran en la pestaña de
                  destacados.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">Social 🤝 </h3>
                <p>
                  Tus empleados podran mejorar sus habilidades sociales y
                  conocer a sus compañeros de trabajo de una manera mas
                  personal, veran lo que hacen en su dia a dia o quizas ver como
                  van avazando en su camino hacia el exito empresarial.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">Diverso ♾️</h3>
                <p>
                  Nuestro software brinda una propuesta abierta a cualquier
                  <span className="font-bold"> identidad empresarial</span>{" "}
                  haciendo que sea fácil su inclusión con cualquiera, la
                  personalización de perfiles y nuestro identificativo de{" "}
                  <span className="font-bold">superlikes (Cohetes)</span> hace
                  que las personas que más se esfuerzan por destacar.
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
                <h3 className="text-xl font-semibold mb-4">Plan Pluton 🔵 </h3>
                <p className="text-3xl font-bold mb-4">$139/mes</p>
                <ul className="mb-6 list-disc list-inside">
                  <li>Publicaciones de los usuarios.</li>
                  <li>Agendamiento de reuniones.</li>
                  <li>Ideal de 1 a 75 personas</li>
                </ul>
                <ButtonLanding href="/demo" text="Solicitar demo" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Plan Saturno 🪐 </h3>
                <p className="text-3xl font-bold mb-4">$479/mes</p>
                <ul className="mb-6 list-disc list-inside">
                  <li>Todas las características del Plan Básico</li>
                  <li>Descuento en el ultimo mes con facturacion anual</li>
                  <li>Ideal para empresas de 76 a 375 personas</li>
                </ul>
                <ButtonLanding href="/demo" text="Solicitar demo" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Plan Jupyter 🟤</h3>
                <p className="text-3xl font-bold mb-4">Contactar</p>
                <ul className="mb-6 list-disc list-inside">
                  <li>Todas las características del Plan Pro</li>
                  <li>Soporte mas exclusivo</li>
                  <li>ideal para equipos de + 375</li>
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
          className="py-10 px-8 bg-gradient-to-r from-blue-700 via-black to-blue-800 mt-20" // Añadido mt-20 para mayor separación
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-5">Contáctanos</h2>
            <div className="mb-4">
              <p className="text-lg font-medium">WorldKer</p>
              <p className="text-sm">
                Cra. 87 #30-65, Medellín, Belén, Medellín, Antioquia (La office)
              </p>
              <p className="text-sm">Número de Teléfono: +57 310 7053966</p>
              <p>C</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="/landing/tyc">Términos y Condiciones</a>
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="/landing/data-control">Control de Datos</a>
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="/landing/laws">Leyes y Regulaciones</a>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
