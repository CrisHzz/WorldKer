"use client";

import HeaderLanding from "@/app/components/UI/headerLanding";
import Stars from "@/app/components/UI/Stars";
import ButtonLanding from "@/app/components/UI/buttonLanding";

import GLBModel from "@/app/components/GLBModel";

export default function Home() {
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
        <section className="py-20 px-20 flex flex-col md:flex-row ml-10">
          <div className="container mx-auto flex flex-col justify-center flex-1 space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold mb-8 text-center md:text-left">
              ¡Alcanza el <br/>
              Universo
              <br /> en tu <br/>Empresa!
            </h2>
            <p className="text-lg leading-relaxed text-center md:text-left">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, veritatis repudiandae. Quos deserunt facilis nihil dolorum id nostrum tempore provident esse rerum enim necessitatibus, asperiores sint. Quidem officia libero voluptatibus.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <GLBModel position={[0, 0, 0]} />{" "}
            {/* Ajusta la posición según sea necesario */}
          </div>
        </section>

        {/* Nuestros Pilares */}
        <section className="py-16 px-2 bg-blue-900/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Nuestros Pilares</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pilar 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi aliquam illo magni fugiat perspiciatis consectetur saepe. Voluptatem accusantium adipisci quidem molestias laborum repudiandae, omnis, modi temporibus suscipit eveniet praesentium!
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Pilar 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellendus molestias debitis veritatis? Distinctio quasi laboriosam, harum sit expedita sequi ex fuga deserunt suscipit rerum? Quos illo beatae sint sit.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Pilar 3
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum, fugit molestiae omnis consequatur dignissimos rem eveniet incidunt, eum officia possimus eaque ad quos. Pariatur cumque ipsam exercitationem voluptatibus voluptatem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="py-16 px-4">
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
                <ButtonLanding text="Elegir Plan" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Plan Pro</h3>
                <p className="text-3xl font-bold mb-4">$199/mes</p>
                <ul className="mb-6">
                  <li>Todas las características del Plan Básico</li>
                  <li>Característica 4</li>
                  <li>Característica 5</li>
                </ul>
                <ButtonLanding text="Elegir Plan" />
              </div>
              <div className="bg-blue-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Plan Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Contactar</p>
                <ul className="mb-6">
                  <li>Todas las características del Plan Pro</li>
                  <li>Soporte 24/7</li>
                  <li>Personalización completa</li>
                </ul>
                <ButtonLanding text="Contactar" />
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-700 via-black to-blue-800">
          <div className="container mx-auto">{/* Contenido de contacto */}</div>
        </section>
      </main>
    </div>
  );
}
