import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "We're here to assist you with any inquiries, feedback, or assistance you might need. Your questions and comments are important to us, and we're committed to providing a swift and helpful response. Feel free to reach out through the provided contact details or the contact form below. We look forward to hearing from you and are ready to help in any way we can.",
};

const Contact = () => {
  return (
    <>
      <div className="mx-auto mt-36 mb-10">
        <h4 className="text-secondary lg:text-[18px] mt-5 text-center  font-semibold">
          CONTACT US
        </h4>
        <h1 className="text-secondary text-[30px] mt-5 text-center  font-semibold">
          GET IN <span className="text-primary">TOUCH</span>
        </h1>
        <div className="flex justify-center">
          <p className="lg:px-10 px-5 lg:mx-64 text-secondary lg:text-[16px] mt-5 mb-5 text-center  ">
            We{"'"}re here to assist you with any inquiries, feedback, or
            assistance you might need. Your questions and comments are important
            to us, and we{"'"}re committed to providing a swift and helpful
            response. Feel free to reach out through the provided contact
            details or the contact form below. We look forward to hearing from
            you and are ready to help in any way we can.
          </p>
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default Contact;
