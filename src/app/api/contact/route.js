import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    // Update here your SendGrid API key
    api_key: "#",
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export async function POST(request) {
  const body = await request.json();

  // console.log(req.body)
  const { name, email, number, subject, message } = body;

  const data = {
    // Update here your email
    to: "example@gmail.com",
    from: email,
    subject: "Hi there",
    text: message,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${message} 
        `,
  };
  try {
    await mailer.sendMail(data);

    return NextResponse.json(
      { message: "Email send successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
