/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import test from "../../../public/svg/testmonials.svg";
import "./testimonials.css";
import Image from "next/image";
import Button from "../common/Button";

const Testimonials = () => {
  const textArray = [
    {
      text1:
        "  “Summitsoft has used Newtok Technologies for over 10 years to develop numerous titles for us. We have enjoyed this long relationship because of their quality, costs and onetime delivery of our products. They are extremely talented and easy to communicate with. I highly recommend them.”",
      text2: "Bruce H. Lowry, President and CEO,Summitsoft Corporation, USA ",
    },
    {
      text1:
        " “I am very pleased with your Project Management capability. Your team has excellent communication skills and a fast response, highest work quality and turnaround time. I can say that Newtok is a honest and decent group of people with the highest work ethic I have seen for development team.”",
      text2: "CEO, Straight Path International School",
    },
    {
      text1:
        "  “I also wanted to tell you how pleased we are with your company’s development services. It is wonderful to work with your team and not have to worry anything”",
      text2: "MD, Micaza Holidays",
    },
    {
      text1:
        " “I never have trouble with your services and the people I talk to always have good information. I’ll highly recommend Newtok to my other business friends!”",
      text2: "CEO, CIUDAD BUILDERS",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [textArray, 2000]);

  return (
    <>
      <section id="section" className="w-screen h-full m-0 p-0 relative">
        <div className="flex justify-center ">
          <Button link="/services" text="EXPLORE ALL OUR SERVICES" />
        </div>
        <div className="z-10 relative block mt-52 mb-9">
          <>
            <h1 className="text-secondary lg:text-[40px] lg:ms-36 ms-10 mt-5  mb-5 text-start  font-semibold">
              <span> What Our</span>
              <span className="text-primary">Clients Say About Us</span>
            </h1>
            <div className="flex justify-center">
              <div className="w-11/12 lg:w-10/12 bg-white shadow-lg ps-2 pe-2 pt-2 ">
                <div className="justify-center flex  lg:h-[300px] h-[300px] items-center">
                  <h1 className="text-center pt-20 lg:max-w-screen-md  max-w-screen-sm font-bold">
                    {textArray[currentIndex].text1}
                  </h1>
                </div>
                <div className="justify-center flex items-center">
                  <p className="text-primary text-center">
                    {" "}
                    <span>{textArray[currentIndex].text2}</span>
                    <br />
                  </p>
                </div>
                <div className="flex mt-10 w-full ms-0">
                  <div
                    className={`  h-1 w-3/12 ${
                      currentIndex == 0 ? "bg-primary" : "bg-white"
                    }`}
                  ></div>
                  <div
                    className={`  h-1 w-3/12 ${
                      currentIndex == 1 ? "bg-primary" : "bg-white"
                    }`}
                  ></div>
                  <div
                    className={`  h-1 w-3/12 ${
                      currentIndex == 2 ? "bg-primary" : "bg-white"
                    }`}
                  ></div>
                  <div
                    className={`  h-1 w-3/12 ${
                      currentIndex == 3 ? "bg-primary" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </>
        </div>

        <div className="absolute top-32 right-16 lg:opacity-75 opacity-10">
          <Image src={test} alt=""></Image>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
