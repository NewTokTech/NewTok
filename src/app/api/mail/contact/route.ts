import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string;
};
interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        name: string
        companyName: string
        email: string
        message: string
    };
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === "POST") {
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

        res.status(200).json({ message: "Form submitted successfully" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(200).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ message: "Only POST is allowed!" });
  }
}
