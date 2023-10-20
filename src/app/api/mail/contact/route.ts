import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextApiRequest) => {
  try {

    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: "newtoktech@gmail.com", 
        pass: "bcev zkaw aulc altd", 
      },
    });


    const name:string = req.body.name;
    const companyName:string = req.body.companyName;
    const email:string = req.body.email;
    const message:string = req.body.message;


    const info = await transporter.sendMail({
        from: "newtoktech@gmail.com",
        to: "mumidlaj@gmail.com",
        subject: "Newtok Form Submission" ,
        text: name + companyName + message + email,
    });    

    return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 }
      );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};