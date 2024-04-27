import { EmailTemplate } from "@/app/components/EmailTest/email-template";
import { NextResponse } from "next/server";
import type { NextApiRequest} from 'next'
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req: NextApiRequest,) {
  try {
    const { name, email, message } = req.body;
    const {data} = await resend.emails.send({
      from: `Enviado por: <onboarding@resend.dev>`,
      to: ["vianalucas80@gmail.com"],
      subject: `Email enviado por ${email}`,
      text:"",
      react: EmailTemplate({ firstName: name, email, message}),   
    });

    return NextResponse.json({data})
  } catch (error) {
    return NextResponse.json({ error });
  }
}
