/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import test from "../../../public/svg/testmonials.svg";
import "./testimonials.css";
import Image from "next/image";

const Testimonials = () => {
    // const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
            color: "bg-primary",
            textOne: "TECHNOLOGY FOR ",
            textTwo:
                "Nobis minus voluptatibus pariatur dignissimos libero quaerat iure  SMART",
            textThree:
                "Nobis minus voluptatibus pariatur dignissimos libero quaerat iure  ",
            textP:
                "777777777777777777 APPLICATION AND PRODUCT DEVELOPMENT SERVICES0   dicta veniam  aspernatur quam mollitia.",
            textColor: "text-white",
            textColorOne: "text-dark",
            textColorTwo: "text-dark",
            copyright_social: "text-primary",
            padding: "pb-30",
        },
        {
            color: "bg-primary",
            textOne: "TECHNOLOGY FOR ",
            textTwo:
                "Nobis minus voluptatibus pariatur dignissimos libero quaerat iure  SMART",
            textThree:
                "Nobis minus voluptatibus pariatur dignissimos libero quaerat iure  ",
            textP:
                "88888888888 APPLICATION AND PRODUCT DEVELOPMENT SERVICES0   dicta veniam  aspernatur quam mollitia.",
            textColor: "text-white",
            textColorOne: "text-dark",
            textColorTwo: "text-dark",
            copyright_social: "text-primary",
        },
    ];

    const textArray = [
        "  “1Summitsoft has used Newtok Technologies for over 10 years to develop numerous titles for us. We have enjoyed this long relationship because of their quality, costs and onetime delivery of our products. They are extremely talented and easy to communicate with. I highly recommend them.”",
        "  “2Summitsoft has used Newtok Technologies for over 10 years to develop numerous titles for us. We have enjoyed this long relationship because of their quality, costs and onetime delivery of our products. They are extremely talented and easy to communicate with. I highly recommend them.”",
        "  “3Summitsoft has used Newtok Technologies for over 10 years to develop numerous titles for us. We have enjoyed this long relationship because of their quality, costs and onetime delivery of our products. They are extremely talented and easy to communicate with. I highly recommend them.”",
        "  “4Summitsoft has used Newtok Technologies for over 10 years to develop numerous titles for us. We have enjoyed this long relationship because of their quality, costs and onetime delivery of our products. They are extremely talented and easy to communicate with. I highly recommend them.”",
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
                            <div className="w-11/12 lg:w-10/12 bg-white shadow-lg ps-2 pe-2 pt-2   ">
                                <div className="justify-center flex">
                                    <h1 className="text-center pt-20 max-w-screen-sm font-bold">
                                        {textArray[currentIndex]}
                                    </h1>
                                </div>
                                <div className="justify-center flex mt-10">
                                    <p> <span>HEllo world</span> <span>HEllo world</span></p>
                                </div>


                                <div className="flex mt-10 w-full">
                                    <div className={`  h-2 w-3/12 ${currentIndex == 0 ? "bg-primary" : "bg-white"}`} ></div>
                                    <div className={`  h-2 w-3/12 ${currentIndex == 1 ? "bg-primary" : "bg-white"}`} ></div>
                                    <div className={`  h-2 w-3/12 ${currentIndex == 2 ? "bg-primary" : "bg-white"}`} ></div>
                                    <div className={`  h-2 w-3/12 ${currentIndex == 3 ? "bg-primary" : "bg-white"}`} ></div>
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
