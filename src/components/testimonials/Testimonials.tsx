"use client";
import React, { useEffect, useState } from "react";
import "./testimonials.css";
import Image from "next/image";
import Button from "../common/Button";
import { BiSolidChevronRight } from "react-icons/bi";

const Testimonials = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const textArray = [
    {
      text1:
        "Summitsoft has used Newtok Technologies for over 10 years to develop numerous titles for us. We have enjoyed this long relationship because of their quality, costs and onetime delivery of our products. They are extremely talented and easy to communicate with. I highly recommend them.",
      designation: "President and CEO,Summitsoft Corporation, USA ",
      author: "Bruce H. Lowry",
    },
    {
      text1:
        "I am very pleased with your Project Management capability. Your team has excellent communication skills and a fast response, highest work quality and turnaround time. I can say that Newtok is a honest and decent group of people with the highest work ethic I have seen for development team.",
      designation: "Straight Path International School",
      author: "CEO",
    },
    {
      text1:
        " I also wanted to tell you how pleased we are with your company’s development services. It is wonderful to work with your team and not have to worry anything",
      designation: "Micaza Holidays",
      author: "CEO",
    },
    {
      text1:
        "I never have trouble with your services and the people I talk to always have good information. I’ll highly recommend Newtok to my other business friends!",
      designation: "CIUDAD BUILDERS",
      author: "CEO",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [textArray, 5000]);

  return (
    <>
      {/* <section id="section" className="w-screen h-full m-0 p-0 relative">
        <div className="flex justify-center ">
          <Button link="/services" text="EXPLORE ALL OUR SERVICES" />
        </div>
        <div className="z-10 relative block mt-52 mb-9">
          <>
            <h1 className="text-secondary text-[28px] md:text-[40px] lg:ms-36 ms-10 mt-5 mb-5 text-start font-semibold">
              <span> What Our</span>
              <span className="text-primary"> Clients Say About Us</span>
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
      </section> */}

      <div className="h-screen flex flex-col justify-center">
        <div className="lg:mx-32 lg:flex justify-center lg:h-[420px] h-[600px] text-secondary">
          <div className="lg:w-2/5 w-full h-full hidden lg:block">
            <div className="flex flex-col justify-center p-5 h-full w-full">
              <h1 className="text-[28px] font-semibold w-1/2 pt-5">
                What Our{" "}
                <span className="text-primary">Clients Say About Us</span>{" "}
              </h1>

              <p className="text-[16px] text-secondary pt-7">
                Our success is built on the success of our clients. Your
                satisfaction is our measure of achievement.
              </p>

              <div className="flex items-center justify-items-center pt-16">
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % textArray.length)
                  }
                  className="px-4 py-2 text-sm font-medium text-center text-primary hover:shadow-primary hover:shadow-sm hover:scale-105 transform ease-in-out transition-all duration-300"
                >
                <span className="flex justify-between align-middle items-center">  NEXT <BiSolidChevronRight /></span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:rounded-lg lg:w-3/5 w-full bg-primary/50 h-full relative flex flex-col justify-center align-middle items-start lg:p-10">
            <Image
              src={"/testimonials/rightQuote.svg"}
              height={57}
              width={63}
              alt="right quote"
              className="absolute left-[40px] top-[55px]"
            />

            <Image
              src={"/testimonials/leftQuote.svg"}
              height={57}
              width={63}
              alt="left quote"
              className="absolute right-[40px] bottom-[55px]"
            />

            <div className="my-auto mx-10 pl-10">
              <div className="says border-l border-l-primary px-7 py-4">
                <p className="text-[#263238] font-semibold">
                  {textArray[currentIndex].text1}
                </p>
              </div>

              <div className="names pl-7 pt-5 text-black">
                <div className="author">
                  <h1 className="font-bold">
                    {textArray[currentIndex].author}
                  </h1>
                </div>
                <div className="designation">
                  <h4 className="font-semibold">
                    {textArray[currentIndex].designation}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
