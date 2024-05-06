import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  console.log("REQUEST: ", {
    email,
    subject,
    message,
  });

  const emailContent = `
  <p>Thank you for contacting me. I'll respond to you as soon as I can. Have a nice day!</p>
  <p>New message submitted:</p>
    <h1>${subject}</h1>
    <p>${message}</p>
  `;
  try {
    const plainTextContent = "This is a plain text version of the email."; // Fallback text content

    const data = await resend.emails.send({
      from: `Jonathan Mendoza <${fromEmail}>`,
      to: [fromEmail, email],
      subject: subject,
      html: emailContent,
      text: plainTextContent,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
