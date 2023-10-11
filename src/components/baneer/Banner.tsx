/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BannerImg from "../../../public/svg/Group 239.svg";
import BannerImgone from "../../../public/svg/undraw_web_devices_re_m8sc.svg";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      img: BannerImg,
      color: "bg-white",
      textOne: "TECHNOLOGY FOR ",
      textTwo: "SMART",
      textThree: "INVENTIONS",
      textP: "SOFTWARE APPLICATION AND PRODUCT DEVELOPMENT SERVICES0",
      textColor: " text-secondary",
      textColorOne: "text-secondary",
      textColorTwo: "text-primary",
    },
    {
      img: BannerImgone,
      color: "bg-primary",
      textOne: "TECHNOLOGY FOR ",
      textTwo: "SMART",
      textThree: "LIVING",
      textP: "TURN KEY SOLUTIONS FOR HOME AND BUILDING AUTOMATION",
      textColor: "text-white",
      textColorOne: "text-dark",
      textColorTwo: "text-dark",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scrollToTop = () => {
    const scrollDuration = 1000; // Duration of the scroll animation in milliseconds
    const start = window.scrollY;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const t = Math.min(1, elapsedTime / scrollDuration);
      const scrollTo = start - start * t;

      window.scrollTo(0, scrollTo);

      if (t < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
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
      <div className="relative h-screen overflow-hidden">
        {images.map((data, index) => (
          <div
            key={index}
            className={`${data.color
              } absolute w-full h-screen transform transition-all ease-in-out duration-1000 ${index === activeIndex ? "opacity-0" : "opacity-100"
              }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 grid h-screen ">
              <div className="col-span-3 p-10 lg:flex lg:justify-end lg:items-center hidden">
                <h1 className="text-dark lg:text-[76px]  font-inter font-semibold">
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
                  <span className={`${data.textColor} mt-0 lg:text-[24px]`}>
                    {" "}
                    {data.textP}
                  </span>{" "}
                </h1>

              </div>
              <div className="absolute bottom-10 left-2 transform -rotate-90 text-gray-300 text-xs">© 2003 - 2023</div>

              {/* <button className="go-to-top" onClick={scrollToTop}>
                scroll up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 477.886 477.886"
                  style={{ backgroundColor: "new 0 0 477.886 477.886" }}
                  xmlSpace="preserve"
                  className="arrow"
                >
                  <g>
                    <g>
                      <path
                        style={{ fill: "#eaeaea" }}
                        d="M476.091,231.332c-1.654-3.318-4.343-6.008-7.662-7.662L24.695,1.804C16.264-2.41,6.013,1.01,1.8,9.442    c-1.185,2.371-1.801,4.986-1.8,7.637v443.733c-0.004,9.426,7.633,17.07,17.059,17.075c2.651,0.001,5.266-0.615,7.637-1.8    L468.429,254.22C476.865,250.015,480.295,239.768,476.091,231.332z"
                      />
                    </g>
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 409.6 409.6"
                  style={{ backgroundColor: "new 0 0 409.6 409.6" }}
                  xmlSpace="preserve"
                  className="first-line"
                >
                  <g>
                    <g>
                      <path
                        style={{ fill: "#eaeaea" }}
                        d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467    c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"
                      />
                    </g>
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 409.6 409.6"
                  style={{ backgroundColor: "new 0 0 409.6 409.6" }}
                  xmlSpace="preserve"
                  className="second-line"
                >
                  <g>
                    <g>
                      <path
                        style={{ fill: "#eaeaea" }}
                        d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467    c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"
                      />
                    </g>
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </button> */}

              <div
                className={`col-span-2 p-4 h-screen lg:mt-10 mt-0 flex justify-start items-center`}
              >
                <Image
                  // width={10}
                  src={data.img}
                  alt={`Slide ${index + 1}`}
                  className="object-cover lg:w-[411px] h-auto opacity-10 lg:opacity-100"
                />

                <div className=" col-span-3 p-10 flex justify-center items-center absolute lg:hidden ">
                  <h1 className="text-dark lg:text-[76px] text-[22px] font-inter  font-semibold">
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
                    <span className={`${data.textColor} mt-0 lg:text-[24px] text-[7px]`}>
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
    </div>
  );
};

export default Banner;
