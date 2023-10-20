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
        to: "info@newtoktech.com",
        subject: "Newtok Form Submission",
        text: name + companyName + message + email,
      });

      return NextResponse.json({ message:"Form submitted successfully" }, { status: 200 })
    }
  } catch (error) {
    console.error("Error sending email:", error);
   
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
}
};
