"use client";

import React from "react";
import Link from "next/link";
import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";

const legalPolicies = [
  {
    title: "Protección de Datos Personales",
    content:
      "De acuerdo con la Ley 1581 de 2012, conocida como la Ley de Protección de Datos Personales, nos comprometemos a salvaguardar la privacidad de nuestros usuarios. La información personal recolectada será utilizada exclusivamente para los fines establecidos dentro de la comunidad y estará sujeta a los más altos estándares de seguridad. Los usuarios tienen el derecho a acceder, modificar, actualizar y solicitar la eliminación de sus datos en cualquier momento. Para ejercer estos derechos, pueden contactarnos a través de los canales oficiales de la plataforma.",
  },
  {
    title: "Propiedad Intelectual",
    content:
      "Todo contenido compartido dentro de esta plataforma debe respetar los derechos de propiedad intelectual establecidos por la Ley 23 de 1982 y las modificaciones introducidas por la Ley 1450 de 2011. Los usuarios deben garantizar que cualquier material publicado (texto, imágenes, ideas, etc.) es de su propiedad o que cuentan con la autorización del titular de los derechos. La infracción de estos derechos puede llevar a la eliminación del contenido y posibles acciones legales.",
  },
  {
    title: "Responsabilidad del Contenido",
    content:
      "Cada usuario es responsable del contenido que publica dentro de la comunidad. Según el Código Penal Colombiano (Ley 599 de 2000), artículos 220 y 221, está prohibido publicar contenido difamatorio, ofensivo o que atribuya falsamente hechos delictivos a otros miembros. También se prohíbe cualquier contenido que incite a la violencia o promueva el odio. El equipo de moderación se reserva el derecho de eliminar cualquier contenido que viole estas normativas y de tomar las medidas necesarias para mantener un ambiente seguro y respetuoso.",
  },
  {
    title: "Uso de la Plataforma",
    content:
      "El uso de esta plataforma debe ser conforme a lo establecido en la Ley 527 de 1999, que regula el comercio electrónico y el uso de medios digitales en Colombia. Cualquier comportamiento que implique el uso indebido de la plataforma, como el envío de publicidad no autorizada, spam o lenguaje inapropiado, será sancionado. Nos reservamos el derecho de suspender o eliminar cuentas que no cumplan con las normas de comportamiento de la comunidad.",
  },
  {
    title: "Privacidad y Confidencialidad",
    content:
      "Conforme a la Ley 1712 de 2014, toda la información compartida dentro de la plataforma es considerada privada y confidencial, especialmente cuando se trate de información sensible relacionada con los usuarios y sus empresas. El uso no autorizado o la divulgación de dicha información a terceros sin el consentimiento previo está estrictamente prohibido y puede dar lugar a sanciones legales. Los usuarios se comprometen a mantener la confidencialidad de la información interna y a no divulgarla fuera de los límites de la plataforma.",
  },
  {
    title: "Modificaciones de las Políticas",
    content:
      "Nos reservamos el derecho de modificar estas políticas de acuerdo con las necesidades de la plataforma y los cambios en la legislación colombiana, siempre en conformidad con el Artículo 15 de la Constitución Política de Colombia. Los usuarios serán notificados de cualquier cambio significativo y deberán aceptar las nuevas condiciones para continuar usando la plataforma.",
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
          Política Legal y Condiciones de Uso
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-justify text-gray-300">
          En cumplimiento con la legislación colombiana, esta comunidad en
          línea, dirigida a compartir conocimiento e ideas entre grandes
          empresas, está sujeta a las siguientes normas y regulaciones. Al hacer
          uso de esta plataforma, los usuarios aceptan los términos establecidos
          a continuación:
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
