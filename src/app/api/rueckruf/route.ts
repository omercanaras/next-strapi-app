import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import rueckrufConfig from "@/app/data/rueckrufservice.json"; // JSON'dan alanları alacağız

export async function POST(req: Request) {
  const formData = await req.json();

  // Form alanlarını JSON'dan oku ve HTML formatına dönüştür
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

  // Mail gönderici yapılandırması (örnek Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Rückrufservice" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER, // Sana gönderilsin
    subject: "Neue Rückrufanfrage",
    html: htmlBody
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail hatası:", error);
    return NextResponse.json({ success: false, error });
  }
}
