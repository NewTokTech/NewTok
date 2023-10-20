import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

type ResponseData = {
  message: string;
};
type Request = {
  name: string;
  companyName: string;
  email: string;
  message: string;
};

// eslint-disable-next-line import/no-anonymous-default-export
export const POST = async (req: any) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "newtoktech@gmail.com",
        pass: "bcev zkaw aulc altd",
      },
    });

    if (req.body !== null) {
      const name: string = req.body.name;
      const companyName: string = req.body.companyName;
      const email: string = req.body.email;
      const message: string = req.body.message;

      const info = await transporter.sendMail({
        from: "newtoktech@gmail.com",
        to: "mumidlaj@gmail.com",
        subject: "Newtok Form Submission",
        text: name + companyName + message + email,
      });

      NextResponse.json({
        status: 200,
        message: "Form submitted successfully",
      });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
