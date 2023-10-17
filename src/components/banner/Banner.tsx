/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./banner.css";
import {
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Baneer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      img: "/svg/undraw_web_devices_re_m8sc.svg",
      color: "bg-primary",
      textOne: "TECHNOLOGY FOR ",
      textTwo: "ENTERPRISE ",
      textThree: "SOLUTIONS",
      textP: "BUSINESS PROCESS AUTOMATION AND SOLUTIONS",
      textColor: "text-white",
      textColorOne: "text-dark",
      textColorTwo: "text-dark",
      copyright_social: "text-white",
    },

    {
      img: "/svg/Group 239.svg",
      color: "bg-white",
      textOne: "TECHNOLOGY FOR ",
      textTwo: "SMART ",
      textThree: "INVENTIONS",
      textP: "SOFTWARE APPLICATION AND PRODUCT DEVELOPMENT SERVICES",
      textColor: " text-secondary",
      textColorOne: "text-secondary",
      textColorTwo: "text-primary",
      copyright_social: "text-primary",
    },

    {
      img: "/svg/undraw_web_devices_re_m8sc.svg",
      color: "bg-secondary",
      textOne: "TECHNOLOGY FOR",
      textTwo: "USER ",
      textThree: "EXPERIENCES",
      textP: "EXPERIENCE THROUGH INNOVATIVE DESIGN THAT CAPTIVATES",
      textColor: "text-white",
      textColorOne: "text-dark",
      textColorTwo: "text-dark",
      copyright_social: "text-white",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-screen banner">
      <div className="relative h-screen overflow-hidden">
        {images.map((data, index) => (
          <div
            key={index}
            className={`${
              data.color
            } absolute w-full h-screen transform transition-all ease-in-out duration-1000 ${
              index === activeIndex ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className=" flex justify-between h-screen ">
              <div className="col-span-3 p-10 lg:flex lg:justify-end lg:items-center hidden">
                <h1 className="text-dark xl:text-[76px] lg:text-[50px] font-semibold text">
                  <span className={`${data.textColor} mt-0`}>
                    {data.textOne}
                  </span>
                  <br />
                  <span className={`${data.textColorOne} mt-0`}>
                    {data.textTwo}
                  </span>
                  <span className="mr-2"></span>
                  <span className={`${data.textColorTwo} mt-0 `}>
                    {data.textThree}
                  </span>
                  <br />
                  <span className={`${data.textColor} mt-0 lg:text-[24px]`}>
                    {data.textP}
                  </span>
                </h1>
              </div>

              <div
                className={`col-span-2 p-4 h-screen lg:mt-10 mt-0 flex justify-start items-center`}
              >
                <Image
                  width={500}
                  height={500}
                  src={data.img}
                  alt={`Slide ${index + 1} 🙏`}
                  className="object-cover lg:w-[411px] h-auto opacity-10 lg:opacity-100"
                />

                <div className=" col-span-3 p-10 flex justify-center absolute lg:hidden ">
                  <h1 className="text-dark text-3xl text-center font-semibold">
                    <span className={`${data.textColor} mt-0`}>
                      {data.textOne}{" "}
                    </span>
                    <br />
                    <span className={`${data.textColorOne} mt-0`}>
                      {data.textTwo}
                    </span>
                    <span className="mr-2">{/* Add space here */}</span>
                    <span className={`${data.textColorTwo} mt-0`}>
                      {data.textThree}
                    </span>
                    <br />
                    <span
                      className={`${data.textColor} mt-0 lg:text-[24px] text-[7px]`}
                    >
                      {" "}
                      {data.textP}
                    </span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <ul className="social text-white">
        <li>
          <a
            href="https://www.facebook.com/newtoksoft/"
            className="facebook"
            target="_blank"
          >
            <RiFacebookFill />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/newtoktech"
            className="instagram"
            target="_blank"
          >
            <RiInstagramFill />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/newtok-technologies-pvt-ltd-india/"
            className="linkedin"
            target="_blank"
          >
            <RiLinkedinFill />
          </a>
        </li>

        <li>
          <a href="https://x.com/" className="twitter" target="_blank">
            <RiTwitterXFill />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Baneer;
