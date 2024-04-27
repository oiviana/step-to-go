import { EmailTemplate } from "@/app/components/EmailTest/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST() {
  try {
    const {data} = await resend.emails.send({
      from: `Enviado por: <onboarding@resend.dev>`,
      to: ["vianalucas80@gmail.com"],
      subject: "teste",
      text:"",
      react: EmailTemplate({ firstName: "Usuáriooo" }),   
    });

    return NextResponse.json({data})
  } catch (error) {
    return NextResponse.json({ error });
  }
}
