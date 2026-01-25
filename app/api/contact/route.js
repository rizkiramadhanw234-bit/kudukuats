import nodemailer from "nodemailer";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // SMTP Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // send email
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Message",
      html: `<h2>New Message from Portfolio Kudukuats</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`,
    });

    // auto reply
    await transporter.sendMail({
      from: `"Muhammad Rizki Ramadhan" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for Your Message!",
      html: `
        <h3>Hi ${name},</h3>
        <p>Thanks for reaching out!</p>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <br>
        <p>Regards,<br><strong>Muhammad Rizki Ramadhan</strong></p>
      `,
    });

    return Response.json(
      { success: true, message: "Email Sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Email Error:", error);
    return Response.json({ error: "Failed to send Email" }, { status: 500 });
  }
}
