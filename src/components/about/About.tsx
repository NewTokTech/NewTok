import React, { useEffect, useState } from "react";
import "./about.css";
import ImageContainer from "./ImageContainer";
import Image from "next/image";
import Button from "../common/Button";

const About = () => {
  return (
    <>
      <div className="py-16 my-auto bg-white about text-secondary">
        <div className="m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 lg:flex lg:justify-center md:gap-6 lg:items-center lg:gap-12">
            {/* <ImageContainer /> */}
            <Image
              src={"/about/image4.svg"}
              alt="about 1"
              height={827}
              width={518}
            />
            <div className="md:7/12 lg:w-6/12 p-10">
              <h2 className="text-[18px] md:text-[24px] lg:text-[30px] font-semibold">
                Navigating Tomo
                <span className="text-primary">rrow{"'"}s Horizons: </span>
                <br />
                Crafting Digital E
                <span className="text-primary">xcellence at Newtok</span>
                <br />
                Technologies
              </h2>
              <p className="mt-6 text-[14px] font-[500] leading-5">
                Welcome to Newtok Technologies, where we redefine software
                solutions with innovation. Since our 2003 inception, we{"'"}ve
                crafted digital transformation for enterprises through custom
                application development and IT services. We{"'"}re not just
                developers; we{"'"}re your digital partners, dedicated to
                forging unique solutions that set you apart. Join us in
                exploring the limitless possibilities of technology. Welcome to
                Newtok Technologies, where digital excellence awaits.
              </p>

             <Button link="/about" text="MORE ABOUT US"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
