import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

export const metadata: Metadata = {
  title: "Contact",
  description: "Don't worry about it getting too long. We know your awesome ideas take time to explain; the more we learn about it the better we can help you out. We would love to hear all about your project. Connect with us through the contact form for a free initial project consultation. Contact us and see what",
}

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
          <p className="px-10 lg:mx-64 text-secondary lg:text-[16px] mt-5 mb-5 text-center  ">
          We're here to assist you with any inquiries, feedback, or assistance you might need. Your questions and comments are important to us, and we're committed to providing a swift and helpful response. Feel free to reach out through the provided contact details or the contact form below. We look forward to hearing from you and are ready to help in any way we can.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg lg:mx-32 relative sm:items-center sm:pt-0 pb-5">
        <div className="flex flex-col md:flex-row items-center md:items-start ">
          <div className="w-full md:w-2/5 h-full my-auto">
            <div className="sm:rounded-lg bg-secondary text-white h-full relative py-16">
              <div className="pb-10 px-10">
                <h1 className="text-[28px] font-semibold tracking-tight text-white">
                  Contact Information
                </h1>
                <p className="text-[18px]  mt-2 text-white/75">
                  Say something to start a live chat!
                </p>
              </div>

              <div className="pt-20 flex flex-col space-y-10 px-10 pb-28">
                <div className="flex items-center space-x-5 mt-8 font-thin">
                  <FaPhoneVolume />
                  <div className="ml-4 text-md tracking-wide">
                    <a href="tel:+917012935874" target="_blank">
                      +91 7012935874
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-5 mt-4 font-thin">
                  <GrMail />
                  <div className="ml-4 text-md tracking-wide w-40">
                    <a href="mailto:info@newtoktech.com" target="_blank">
                      info@newtoktech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-5 mt-2 font-thin">
                  <FaLocationDot />
                  <div className="ml-4 text-md tracking-wide">
                    Newtok Technologies Pvt Ltd.
                    <br />
                    Malappuram, Kerala, India
                  </div>
                </div>
              </div>

              <Image
                className="absolute bottom-0 right-0"
                src={"/contact/round.svg"}
                width={208}
                height={209}
                alt="round"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 px-4">
            <form className="w-full py-40 relative">
              <Image
                src={"/contact/send.svg"}
                alt="send icon"
                width={265}
                height={218}
                className="absolute lg:top-0 lg:rotate-0 hidden lg:right-0 "
              />

              <div className="flex justify-between">
                <div className="flex flex-col relative z-0 w-full px-1">
                  <input
                    name="name"
                    type="name"
                    id="name"
                    placeholder=""
                    className="w-100 mt-2 py-2 peer block w-full appearance-none border-0 border-b border-black bg-transparent text-sm focus:border-primary focus:outline-none focus:ring-0"
                  />

                  <label
                    htmlFor="name"
                    className="absolute top-2 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-b duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                  >
                    Full Name
                  </label>
                </div>

                <div className="flex flex-col relative z-0 w-full px-1">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Optional"
                    className="w-100 mt-2 py-2 peer block w-full appearance-none border-0 border-b border-black bg-transparent text-sm focus:border-primary focus:outline-none focus:ring-0 placeholder-transparent  focus:placeholder-gray-500 focus:placeholder-opacity-100 transform transition-colors duration-300 ease-in-out"
                  />
                  <label
                    htmlFor="companyName"
                    className="absolute top-2 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-b duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                  >
                    Company Name
                  </label>
                </div>
              </div>

              <div className="flex flex-col mt-5 relative px-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  className="w-100 mt-2 py-2 peer block w-full appearance-none border-0 border-b border-black bg-transparent text-sm focus:border-primary focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="email"
                  className="absolute top-2 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-b duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Email
                </label>
              </div>
              <div className="flex flex-col mt-5 relative">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message"
                  className="w-100 mt-2 py-2 peer block w-full appearance-none border-0 border-b border-black bg-transparent text-sm focus:border-primary focus:outline-none focus:ring-0 placeholder-transparent focus:placeholder-gray-500 focus:placeholder-opacity-100 transform transition-colors duration-300 ease-in-out"
                ></textarea>

                <label
                  htmlFor="message"
                  className="absolute top-2 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-b duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Message
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="md:px-10 bg-primary hover:bg-blue-dark text-white py-3 px-8 mt-3 hover:bg-white hover:text-primary border-primary border transition ease-in-out duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
