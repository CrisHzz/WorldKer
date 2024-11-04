"use client";

import React from "react";
import Link from "next/link";
import Stars from "@/app/components/UI/Stars";
import BackgroundStars from "@/app/components/UI/backgroundStars";

const privacyPolicies = [
  {
    title: "Recolección de Datos",
    content:
      "WorldKer recopila datos personales como nombre, correo electrónico, información profesional y cualquier otro dato proporcionado por los usuarios al registrarse o completar su perfil. Estos datos son utilizados exclusivamente para los fines específicos de la plataforma: conectar a profesionales, gestionar interacciones y colaborar en proyectos.",
  },
  {
    title: "Uso de Datos",
    content:
      "Los datos proporcionados son utilizados para ofrecer servicios dentro de la plataforma, incluyendo la personalización de la experiencia del usuario y el envío de notificaciones relevantes. También pueden ser utilizados para mejorar la seguridad de la plataforma, por ejemplo, para detectar actividades sospechosas.",
  },
  {
    title: "Seguridad de los Datos",
    content:
      "WorldKer implementa medidas de seguridad técnicas y organizativas para proteger los datos personales de accesos no autorizados, pérdida o alteración. Estas medidas incluyen el cifrado de datos, control de accesos y la implementación de procedimientos de seguridad para garantizar la protección de la información.",
  },
  {
    title: "Acceso y Corrección de Datos",
    content:
      "En conformidad con la Ley 1581 de 2012, los usuarios tienen el derecho de acceder, modificar, corregir y solicitar la eliminación de sus datos personales. Para ejercer estos derechos, pueden enviar una solicitud a través de los canales de atención al usuario de WorldKer.",
  },
  {
    title: "Consentimiento para el Tratamiento de Datos",
    content:
      "Al utilizar WorldKer, los usuarios consienten el tratamiento de sus datos de acuerdo con estos Términos y la Política de Privacidad. El tratamiento incluye la recolección, almacenamiento, uso y procesamiento de los datos para los fines establecidos en la plataforma.",
  },
  {
    title: "Divulgación de Información a Terceros",
    content:
      "WorldKer no compartirá los datos personales con terceros sin el consentimiento explícito de los usuarios, salvo que sea requerido por ley o en cumplimiento de una obligación legal.",
  },
  {
    title: "Eliminación de Datos",
    content:
      "Los usuarios pueden solicitar la eliminación de su cuenta y de todos los datos asociados en cualquier momento. Esta solicitud se puede hacer a través del soporte de WorldKer y será atendida de acuerdo con las leyes colombianas aplicables.",
  },
  {
    title: "Modificaciones a la Política de Privacidad",
    content:
      "WorldKer se reserva el derecho de actualizar su Política de Privacidad para adaptarse a cambios en la legislación o mejoras en la plataforma. Cualquier modificación será notificada a los usuarios para que continúen utilizando la plataforma bajo las nuevas condiciones.",
  },
];

export default function ControlDatosPrivacidad() {
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
          Control de Datos y Privacidad
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-justify text-gray-300">
          En cumplimiento con la legislación colombiana, WorldKer se compromete
          a proteger los datos personales de sus usuarios, respetando los
          principios de privacidad y confidencialidad de acuerdo con la Ley 1581
          de 2012. A continuación, se presentan nuestras políticas de privacidad
          y control de datos:
        </p>

        <ol className="list-decimal list-inside text-gray-300 space-y-6">
          {privacyPolicies.map((policy, index) => (
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
          Al utilizar WorldKer, los usuarios aceptan estas políticas y el
          tratamiento de sus datos personales conforme a la legislación
          colombiana.
        </p>
      </main>
    </div>
  );
}
