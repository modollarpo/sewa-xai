import * as nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, text: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'user@example.com',
      pass: process.env.SMTP_PASS || 'password',
    },
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'noreply@sewa.com',
    to,
    subject,
    text,
  });
}
