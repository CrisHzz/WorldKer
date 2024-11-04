import { NextResponse } from "next/server";
import { sendMail } from "@/app/components/emailService";

export async function POST(request: Request) {
  // Obtiene el cuerpo de la solicitud
  const { to, subject, htmlContent } = await request.json();

  try {
    // Envía el correo utilizando la función sendMail
    await sendMail(to, subject, htmlContent);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
