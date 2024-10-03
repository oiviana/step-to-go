import { NextResponse, NextRequest } from "next/server";
import { EmailFormProps } from "@/components/EmailForm";
import { mailOptions, transporter } from "@/services/nodemailer";

export async function POST(req: NextRequest) {

  try {
    const body: EmailFormProps = await req.json();

    await transporter.sendMail({
      ...mailOptions,
      subject: `Você recebeu um email de ${body.name}`,
      text: `${body.message}`,
      html: `
      <p>Name: ${body.name} </p>
      <p>Email: ${body.email} </p>
      <p>Message: ${body.message} </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("There's something wrong ", err);
    return NextResponse.error();
  }
}
