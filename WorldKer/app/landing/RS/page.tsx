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
              Достигни <br />
              Вселенной
              <br /> в своей <br />
              Компании!
            </h2>
            <p className="text-[20px] leading-relaxed text-center md:text-left">
              Мы <span className="font-bold">социальная сеть</span>{" "}
              для бизнеса, созданная специально для объединения сотрудников
              вашей компании. Здесь сотрудничество и профессиональный рост
              находят лучшее пространство. Постоянная обратная связь и свободное
              общение необходимы для роста. Делясь повседневным опытом, сотрудники
              учатся друг у друга, празднуют достижения и создают
              <span className="font-bold"> уникальную корпоративную культуру</span> 
              компании.
            </p>
            <div className="text-center md:text-left">
              <ButtonLanding href="/sign-up" text="Садись на ракету" />
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
            <h2 className="text-3xl font-bold mb-8">Наши принципы</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">
            Достигни успеха 🚀{" "}
          </h3>
          <p>
            Благодаря возможности взаимодействия, ваши сотрудники смогут
            <span className="font-bold"> выделиться </span> среди других,
            используя суперлайки. Те, кто показывает лучшие результаты или 
            совершает хорошие поступки, появятся на вкладке избранных.
          </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Социальность 🤝 </h3>
          <p>
            Ваши сотрудники смогут улучшить свои социальные навыки и
            познакомиться со своими коллегами более лично, увидеть, чем они 
            занимаются в повседневной жизни или как они продвигаются на пути 
            к корпоративному успеху.
          </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Разнообразие ♾️</h3>
          <p>
            Наше программное обеспечение предлагает открытый подход к любой
            <span className="font-bold"> корпоративной идентичности</span>,
            делая легким включение каждого. Персонализация профилей и наша система
            <span className="font-bold"> суперлайков (Ракет)</span> позволяет
            выделиться тем людям, которые больше всего стараются.
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
            <h2 className="text-3xl font-bold mb-8">Цены (USD)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">План Плутон 🔵 </h3>
          <p className="text-3xl font-bold mb-4">$139/месяц</p>
          <ul className="mb-6 list-disc list-inside">
            <li>Публикации пользователей.</li>
            <li>Планирование встреч.</li>
            <li>Идеально для 1-75 человек</li>
          </ul>
          <ButtonLanding href="/demo" text="Запросить демо" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">План Сатурн 🪐 </h3>
          <p className="text-3xl font-bold mb-4">$479/месяц</p>
          <ul className="mb-6 list-disc list-inside">
            <li>Все функции базового плана</li>
            <li>Скидка в последний месяц при годовой оплате</li>
            <li>Идеально для компаний от 76 до 375 человек</li>
          </ul>
          <ButtonLanding href="/demo" text="Запросить демо" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">План Юпитер 🟤</h3>
          <p className="text-3xl font-bold mb-4">Связаться</p>
          <ul className="mb-6 list-disc list-inside">
            <li>Все функции Pro плана</li>
            <li>Эксклюзивная поддержка</li>
            <li>Идеально для команд более 375 человек</li>
          </ul>
          <ButtonLanding href="/demo" text="Запросить демо" />
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
            <h2 className="text-3xl font-bold mb-5">Связаться</h2>
            <div className="mb-4">
              <p className="text-lg font-medium">WorldKer</p>
              <p className="text-sm">
          Cra. 87 #30-65, Медельин, Белен, Медельин, Антиокия (Офис)
              </p>
          <p className="text-sm">
          <a href="https://wa.link/minhup" className="hover:underline">
            Телефон: +57 310 7053966
          </a>
          </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
          <h3 className="text-xl font-semibold mb-4">
            <a href="/landing/tyc">Правила и условия</a>
          </h3>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4">
            <a href="/landing/data-control">Контроль данных</a>
          </h3>
              </div>
              <div>
          <h3 className="text-xl font-semibold mb-4">
            <a href="/landing/laws">Законы и нормативные акты</a>
          </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
