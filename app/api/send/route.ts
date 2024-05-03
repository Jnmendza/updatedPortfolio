import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const emailContent = EmailTemplate({ firstName: "Jonathan" });
    const plainTextContent = "This is a plain text version of the email."; // Fallback text content

    const data = await resend.emails.send({
      from: `Jonathan <${process.env.FROM_EMAIL}>`,
      to: [`${process.env.FROM_EMAIL}`],
      subject: "Hello world",
      react: emailContent,
      text: plainTextContent,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
