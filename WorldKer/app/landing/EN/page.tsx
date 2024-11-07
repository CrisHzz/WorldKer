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
  });

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
              Reach the <br />
              Universe
              <br /> in your <br />
              Company!
            </h2>
            <p className="text-[20px] leading-relaxed text-center md:text-left">
              We are a corporate{" "}
              <span className="font-bold">Social Network</span> exclusively
              designed to connect members of your company. Here, collaboration
              and professional growth find their best space. Constant feedback
              and fluid communication are essential for growth. By sharing daily
              experiences, employees learn from each other, celebrate
              achievements and give the company a unique
              <span className="font-bold"> cultural identity</span>.
            </p>
            <div className="text-center md:text-left">
              <ButtonLanding href="/sign-up" text="Hop on the rocket" />
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
                  Reach Success 🚀{" "}
                </h3>
                <p>
                  Thanks to the way of interacting, your employees will be able
                  to
                  <span className="font-bold"> stand out </span> among
                  themselves using superlikes. Those who have better performance
                  or do good actions will appear in the featured tab.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">Social 🤝 </h3>
                <p>
                  Your employees will be able to
                   improve their social skills and
                  get to know their coworkers in a more personal way. They&apos;ll
                  see what they do in their daily lives or maybe see how they&apos;re
                  progressing on their path to business success.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">Diverse ♾️</h3>
                <p>
                  Our software provides an open proposal to any
                  <span className="font-bold"> business identity</span>, making
                  it easy to include anyone. Profile customization and our
                  <span className="font-bold"> superlikes (Rockets)</span>{" "}
                  feature helps those who strive the most to stand out.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">Diverse ♾️</h3>
                <p>
                  Our software provides an open proposal to any
                  <span className="font-bold"> business identity</span>, making
                  it easy to include anyone. Profile customization and our
                  <span className="font-bold"> superlikes (Rockets)</span>{" "}
                  feature helps those who strive the most to stand out.
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
            <h2 className="text-3xl font-bold mb-8">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pluto Plan 🔵 </h3>
                <p className="text-3xl font-bold mb-4">$139/month</p>
                <ul className="mb-6 list-disc list-inside">
                  <li>User posts</li>
                  <li>Meeting scheduling</li>
                  <li>Ideal for 1 to 75 people</li>
                </ul>
                <ButtonLanding href="/demo" text="Request demo" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Saturn Plan 🪐 </h3>
                <p className="text-3xl font-bold mb-4">$479/month</p>
                <ul className="mb-6 list-disc list-inside">
                  <li>All Basic Plan features</li>
                  <li>Last month discount with annual billing</li>
                  <li>Ideal for companies with 76 to 375 people</li>
                </ul>
                <ButtonLanding href="/demo" text="Request demo" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Jupiter Plan 🟤</h3>
                <p className="text-3xl font-bold mb-4">Contact us</p>
                <ul className="mb-6 list-disc list-inside">
                  <li>All Pro Plan features</li>
                  <li>Premium support</li>
                  <li>Ideal for teams of 375+</li>
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
            <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
            <div className="mb-4">
              <p className="text-lg font-medium">WorldKer</p>
              <p className="text-sm">
                87th Street #30-65, Medellín, Belén, Medellín, Antioquia (The
                office)
              </p>
              <p className="text-sm">
                <a href="https://wa.link/minhup" className="hover:underline">
                  Phone Number: +57 310 7053966
                </a>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="/landing/tyc">Terms and Conditions</a>
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="/landing/data-control">Data Control</a>
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="/landing/laws">Laws and Regulations</a>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
