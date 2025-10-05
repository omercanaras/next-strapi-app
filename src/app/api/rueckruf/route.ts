import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import rueckrufConfig from "@/app/data/rueckrufservice.json";

export async function POST(req: Request) {
  const formData = await req.json();

  const htmlBody = `
    <h2>Neue Rückrufanfrage</h2>
    <ul>
      ${rueckrufConfig.fields
        .map((field) => {
          const value = formData[field.name] || "(leer)";
          return `<li><strong>${field.label}:</strong> ${value}</li>`;
        })
        .join("")}
    </ul>
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", // TLS mi değil mi
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Rückrufservice" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER,
    subject: "Neue Rückrufanfrage",
    html: htmlBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail hatası:", error);
    return NextResponse.json({ success: false, error });
  }
}
