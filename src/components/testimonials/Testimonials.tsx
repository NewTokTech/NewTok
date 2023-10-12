/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import test from "../../../public/svg/testmonials.svg";
import "./testimonials.css";
import Image from "next/image";

const Testimonials = () => {

    const textArray = [
        { text1: "  “1Summitsoft has used Newtok Technologies for over 10 years to develop numerous titles for us. We have enjoyed this long relationship because of their quality, costs and onetime delivery of our products. They are extremely talented and easy to communicate with. I highly recommend them.”", text2: "Bruce H. Lowry, President and CEO,", text3: "Summitsoft Corporation, USA" },
        { text1: " “I am very pleased with your Project Management capability. Your team has excellent communication skills and a fast response, highest work quality and turnaround time. I can say that Newtok is a honest and decent group of people with the highest work ethic I have seen for development team.”", text2: "CEO, Straight Path International School", text3: "" },
        { text1: "  “I also wanted to tell you how pleased we are with your company’s development services. It is wonderful to work with your team and not have to worry anything”", text2: "MD, Micaza Holidays", text3: "" },
        { text1: " “I never have trouble with your services and the people I talk to always have good information. I’ll highly recommend Newtok to my other business friends!”", text2: "CEO, CIUDAD BUILDERS", text3: "" }
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
            <section id="section" className="w-screen h-screen m-0 p-0 relative">

                <div className="z-10 relative block mt-52">
                    <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
                        Service
                    </h1>
                    <p className="text-secondary lg:text-[18px] mt-5 mb-5 text-center font-inter font-semibold">
                        We have been working with some Fortune{" "}
                        <br className="lg:hidden block" /> 500+ clients
                    </p>

                    <>
                        <div className="flex justify-center">
                            <div className="w-11/12 lg:w-10/12 bg-white shadow-lg ps-2 pe-2 pt-2 ">
                                <div className="justify-center flex lg:h-52">
                                    <h1 className="text-center pt-20 max-w-screen-sm  font-bold">
                                        {textArray[currentIndex].text1}
                                    </h1>
                                </div>
                                <div className="justify-center flex mt-10">
                                    <p className="text-primary text-center"> <span>{textArray[currentIndex].text2}</span><br /><span>{textArray[currentIndex].text3}</span></p>
                                </div>
                                <div className="flex mt-10 w-full">
                                    <div className={`  h-1 w-3/12 ${currentIndex == 0 ? "bg-primary" : "bg-white"}`} ></div>
                                    <div className={`  h-1 w-3/12 ${currentIndex == 1 ? "bg-primary" : "bg-white"}`} ></div>
                                    <div className={`  h-1 w-3/12 ${currentIndex == 2 ? "bg-primary" : "bg-white"}`} ></div>
                                    <div className={`  h-1 w-3/12 ${currentIndex == 3 ? "bg-primary" : "bg-white"}`} ></div>
                                </div>

                            </div>

                        </div>
                    </>
                </div>

                <div className="absolute top-32 right-16 opacity-75">
                    <Image src={test} alt=""></Image>
                </div>

            </section>
        </>
    );
};

export default Testimonials;
