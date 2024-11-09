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
              Alcance o <br />
              Universo
              <br /> em sua <br />
              Empresa!
            </h2>
            <p className="text-[20px] leading-relaxed text-center md:text-left">
              Somos uma{" "}
              <span className="font-bold">Rede Social</span> corporativa exclusivamente
              projetada para conectar os membros da sua empresa. Aqui, a colaboração
              e o crescimento profissional encontram seu melhor espaço. Feedback constante
              e comunicação fluida são essenciais para o crescimento. Ao compartilhar experiências
              diárias, os funcionários aprendem uns com os outros, celebram
              conquistas e dão à empresa uma única
              <span className="font-bold"> identidade cultural</span>.
            </p>
            <div className="text-center md:text-left">
              <ButtonLanding href="/sign-up" text="Entre no foguete" />
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
            <h2 className="text-3xl font-bold mb-8">Nossos Pilares</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">
            Alcance o Sucesso 🚀{" "}
          </h3>
          <p>
            Graças à forma de interação, seus funcionários poderão
            <span className="font-bold"> se destacar </span> entre
            si usando superlikes. Aqueles com melhor desempenho
            ou que fazem boas ações aparecerão na aba em destaque.
          </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Social 🤝 </h3>
          <p>
            Seus funcionários poderão melhorar suas habilidades sociais e
            conhecer seus colegas de trabalho de uma forma mais pessoal. Eles
            verão o que fazem em seu dia a dia ou talvez vejam como estão
            progredindo em seu caminho para o sucesso empresarial.
          </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Diversidade ♾️</h3>
          <p>
            Nosso software oferece uma proposta aberta a qualquer
            <span className="font-bold"> identidade empresarial</span>, tornando
            fácil incluir qualquer pessoa. A personalização do perfil e nosso
            recurso de <span className="font-bold">superlikes (Foguetes)</span>{" "}
            ajuda aqueles que mais se esforçam a se destacar.
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
            <h2 className="text-3xl font-bold mb-8">Preços (USD)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Plano Plutão 🔵 </h3>
          <p className="text-3xl font-bold mb-4">$139/mês</p>
          <ul className="mb-6 list-disc list-inside">
            <li>Postagens de usuários</li>
            <li>Agendamento de reuniões</li>
            <li>Ideal para 1 a 75 pessoas</li>
          </ul>
          <ButtonLanding href="/demo" text="Solicitar demo" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Plano Saturno 🪐 </h3>
          <p className="text-3xl font-bold mb-4">$479/mês</p>
          <ul className="mb-6 list-disc list-inside">
            <li>Todos os recursos do Plano Básico</li>
            <li>Desconto no último mês com cobrança anual</li>
            <li>Ideal para empresas com 76 a 375 pessoas</li>
          </ul>
          <ButtonLanding href="/demo" text="Solicitar demo" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Plano Júpiter 🟤</h3>
          <p className="text-3xl font-bold mb-4">Contate-nos</p>
          <ul className="mb-6 list-disc list-inside">
            <li>Todos os recursos do Plano Pro</li>
            <li>Suporte premium</li>
            <li>Ideal para equipes de 375+</li>
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
          className="py-10 px-8 bg-gradient-to-r from-blue-700 via-black to-blue-800 mt-20"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-5">Contate-Nos</h2>
            <div className="mb-4">
              <p className="text-lg font-medium">WorldKer</p>
              <p className="text-sm">
          Rua 87 #30-65, Medellín, Belén, Medellín, Antioquia (O
          escritório)
              </p>
              <p className="text-sm">
          <a href="https://wa.link/minhup" className="hover:underline">
            Telefone: +57 310 7053966
          </a>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
          <h3 className="text-xl font-semibold mb-4">
            <a href="/landing/tyc">Termos e Condições</a>
          </h3>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4">
            <a href="/landing/data-control">Controle de Dados</a>
          </h3>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4">
            <a href="/landing/laws">Leis e Regulamentos</a>
          </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
