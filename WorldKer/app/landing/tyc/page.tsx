"use client";

import React from "react";
import Link from "next/link";
import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";

const legalPolicies = [
  {
    title: "Aceptación de los Términos",
    content:
      "Al acceder o utilizar WorldKer, el usuario acepta cumplir con estos Términos y Condiciones de Uso. Si no está de acuerdo con alguno de los términos, no debe utilizar la plataforma.",
  },
  {
    title: "Descripción del Servicio",
    content:
      "WorldKer es una plataforma que permite a profesionales y empresas conectarse, compartir conocimientos y colaborar en proyectos. Los usuarios pueden crear perfiles, compartir publicaciones, enviar mensajes y establecer contactos profesionales.",
  },
  {
    title: "Cuentas de Usuario",
    content:
      "Para acceder a ciertas funcionalidades, los usuarios deben crear una cuenta proporcionando información precisa y actualizada. Los usuarios son responsables de mantener la confidencialidad de su cuenta y contraseña, y de cualquier actividad realizada desde su cuenta. Está prohibido crear cuentas falsas o proporcionar información falsa.",
  },
  {
    title: "Uso Aceptable",
    content:
      "Los usuarios deben utilizar la plataforma de manera profesional y respetuosa. Abstenerse de publicar contenido que sea ofensivo, ilegal o que viole los derechos de terceros. No realizar actividades fraudulentas, ilegales, o que perjudiquen el buen funcionamiento de la plataforma.",
  },
  {
    title: "Contenido Generado por el Usuario",
    content:
      "Los usuarios son los propietarios de los derechos sobre el contenido que publican. Sin embargo, al publicar contenido en la plataforma, otorgan a WorldKer una licencia no exclusiva, mundial y libre de regalías para usar, mostrar y distribuir dicho contenido dentro de la plataforma. El usuario es responsable de asegurarse de que su contenido no infringe los derechos de propiedad intelectual de terceros.",
  },
  {
    title: "Privacidad",
    content:
      "El uso de la plataforma está sujeto a nuestra Política de Privacidad, que describe cómo recopilamos, usamos y protegemos los datos personales de los usuarios.",
  },
  {
    title: "Propiedad Intelectual",
    content:
      "Todo el contenido y software utilizado en la plataforma, incluidos los diseños, logotipos, gráficos y textos, son propiedad de WorldKer o de sus licenciantes y están protegidos por derechos de propiedad intelectual. Está prohibido reproducir, distribuir o explotar de cualquier forma el contenido sin autorización previa.",
  },
  {
    title: "Prohibiciones",
    content:
      "Los usuarios no pueden usar la plataforma para acosar, intimidar o amenazar a otros usuarios. No pueden recopilar datos de otros usuarios sin su consentimiento, ni hacer uso de la plataforma para promover actividades ilícitas.",
  },
  {
    title: "Terminación del Servicio",
    content:
      "WorldKer se reserva el derecho a suspender o cancelar el acceso de un usuario si este incumple los términos o si su comportamiento pone en riesgo la seguridad o integridad de la plataforma.",
  },
  {
    title: "Limitación de Responsabilidad",
    content:
      "WorldKer no será responsable por cualquier daño, pérdida o perjuicio que se derive del uso de la plataforma, incluida la pérdida de datos o el acceso no autorizado a las cuentas.",
  },
  {
    title: "Modificaciones",
    content:
      "Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los usuarios serán notificados de los cambios a través de la plataforma o por correo electrónico.",
  },
  {
    title: "Ley Aplicable",
    content:
      "Estos Términos se regirán e interpretarán de acuerdo con las leyes de Colombia.",
  },
  {
    title: "Contacto",
    content:
      "Para cualquier duda o consulta sobre estos Términos, por favor póngase en contacto con nosotros en [correo electrónico].",
  },
];

export default function PoliticaLegal() {
  return (
    <div className="relative w-full overflow-hidden bg-black min-h-screen text-white">
      <BackgroundStars />
      <Stars />
      <Link href="/landing">
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          Regresar
        </div>
      </Link>
      <main className="relative z-10 p-4 md:p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Términos y Condiciones de Uso
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-justify text-gray-300">
          En cumplimiento con la legislación colombiana, WorldKer se rige por
          los siguientes términos. Al utilizar esta plataforma, los usuarios
          aceptan las siguientes condiciones:
        </p>

        <ol className="list-decimal list-inside text-gray-300 space-y-6">
          {legalPolicies.map((policy, index) => (
            <li key={index}>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-2">
                {policy.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed ml-6">
                {policy.content}
              </p>
            </li>
          ))}
        </ol>

        <p className="text-base md:text-lg mt-8 text-center">
          Al participar en esta comunidad, los usuarios aceptan estos términos y
          se comprometen a cumplir con la legislación colombiana vigente.
        </p>
      </main>
    </div>
  );
}
