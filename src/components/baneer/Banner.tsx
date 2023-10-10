/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BannerImg from "../../../public/svg/Group 239.svg";
import BannerImgone from "../../../public/svg/undraw_web_devices_re_m8sc.svg";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [{img:BannerImg,color:"bg-white",textOne:"TECHNOLOGY FOR ",textTwo:"SMART" ,textThree:"INVENTIONS",textP:"SOFTWARE APPLICATION AND PRODUCT DEVELOPMENT SERVICES"},
  {img:BannerImgone,color:"bg-primary",textOne:"TECHNOLOGY FOR ",textTwo:"SMART" ,textThree:"INVENTIONS",textP:"SOFTWARE APPLICATION AND PRODUCT DEVELOPMENT SERVICES"}];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(slideInterval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Carousel wrapper */}
      <div className="relative h-screen overflow-hidden rounded-lg ">
        {images.map((data, index) => (
          <div
            key={index}
            className={`${data.color} absolute w-full h-screen transform transition-transform ${
              index === activeIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 grid h-screen">
              <div className="col-span-3 p-10 flex justify-center items-center">
                <h1 className="text-dark lg:text-[60px] font-inter font-semibold">{data.textOne} <br/> {data.textTwo} <span className="text-green-500">{data.textThree}</span>  <br/><span className="text-sm">{data.textP}</span> </h1>
              </div>
           
              <div className={`col-span-2 p-4 h-screen lg:mt-10 flex justify-start items-center`}>
                <Image
                  width={10}
                  src={data.img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover lg:w-[411px] h-auto "
                />
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Banner;
