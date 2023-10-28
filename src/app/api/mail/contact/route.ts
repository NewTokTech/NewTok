import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";
import * as fs from "fs";
import path from "path";

export const POST = async (req: NextRequest) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "newtoktech@gmail.com",
        pass: "bcev zkaw aulc altd",
      },
    });
    const body = await req.json();
    
    const name: string = body.data.name;
    const companyName: string = body.data.companyName;
    const email: string = body.data.email;
    const message: string = body.data.message;

    const templatePath = path.join(
      process.cwd(),
      "public",
      "mail-template.html"
    );

    const emailTemplate: string = fs.readFileSync(templatePath, "utf8");

    const currentDatetime: Date = new Date();
    const formattedDatetime: string = currentDatetime.toLocaleString();

    const emailData: Record<string, string> = {
      email_placeholder: email,
      name_placeholder: name,
      company_placeholder: companyName,
      date_placeholder: formattedDatetime,
      message_placeholder: message,
    };

    const emailContent: string = emailTemplate.replace(
      /\{(\w+)\}/g,
      (match: string, placeholder: string) => {
        return emailData[placeholder] || match;
      }
    );

    const info = await transporter.sendMail({
      from: "newtoktech@gmail.com",
      to: "info@newtoktech.com",
      subject: "Newtok Form Submission",
      html: emailContent,
    });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
