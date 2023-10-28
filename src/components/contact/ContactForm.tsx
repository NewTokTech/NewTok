"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    name: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEdit = async (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = async () => {
    setLoading(true);
    await axios
      .post("/api/mail/contact", { data: formData })
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          setSuccessMessage(res.data.message);
          resetFormData();
          setLoading(false);
        } else {
          setErrorMessage(res.data.message);
        }
      })
      .catch((res) => {
        setErrorMessage(
          "Form Submission Unsuccessfull!, please contact info@newtoktech.com."
        );
      });
    setLoading(false);
  };

  const resetFormData = () => {
    setFormData({
      email: "",
      companyName: "",
      name: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-white rounded-lg lg:mx-32 relative sm:items-center sm:pt-0 pb-5">
        <div className="flex flex-col md:flex-row items-center md:items-start ">
          <div className="w-full md:w-2/5 h-full my-auto">
            <div className="sm:rounded-lg bg-secondary text-white h-full relative py-16">
              <div className="pb-10 px-10">
                <h1 className="text-[28px] font-semibold tracking-tight text-white">
                  Contact Information
                </h1>
                <p className="text-[18px]  mt-2 text-white/75">
                  We{"'"}re just a message away – reach out to us for all your
                  inquiries and needs.
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
                    onChange={handleEdit}
                    name="name"
                    type="name"
                    value={formData.name}
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
                    onChange={handleEdit}
                    type="text"
                    name="companyName"
                    value={formData.companyName}
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
                  onChange={handleEdit}
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
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
                  onChange={handleEdit}
                  name="message"
                  value={formData.message}
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
              <div className="flex justify-between">
                <p className="py-3">
                  {errorMessage && (
                    <span className="text-red-800">{errorMessage}</span>
                  )}

                  {successMessage && (
                    <span className="text-green-800">{successMessage}</span>
                  )}
                </p>
                <button
                  onClick={formSubmit}
                  type="button"
                  disabled={loading}
                  className="disabled:opacity-50 md:px-10 bg-primary hover:bg-blue-dark text-white py-3 px-8 mt-3 hover:bg-white hover:text-primary border-primary border transition ease-in-out duration-300"
                >
                  {!loading ? 'Send Message' : 'Sending...'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
