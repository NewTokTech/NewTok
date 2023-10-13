/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import icon from "../../../public/svg/services/icon.svg";
import icon1 from "../../../public/svg/services/IconOne.svg";
import icon2 from "../../../public/svg/services/iconTwo.svg";
import Link from "next/link";
import ServiceFullWidthImage from "../servicePage/ServiceFullWidthImage";

function Service() {
  return (
    <>
      <div className=" mx-auto mt-16">
        <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-semibold">
          Service
        </h1>
        <p className="text-secondary lg:text-[18px] mt-5 mb-5 text-center font-semibold">
          We have been working with some Fortune{" "}
          <br className="lg:hidden block" /> 500+ clients
        </p>
        <div className=" mx-auto flex justify-center md:my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
            <div className="w-full max-w-xs bg-white shadow-md px-10 pt-2 pb-2 rounded-lg">
              <div className="flex flex-col items-center pt-10">
                <Image className="w-24 h-24 mb-3 " src={icon} alt="🙏 IMAGE" />
                <h5 className="text-xl font-medium text-center">
                  <span className="text-secondary text-[28px]"> DIGITAL</span>
                  <br />
                  <span className=" text-primary text-center text-[28px]">
                    {" "}
                    ENGINEERING
                  </span>
                </h5>
                <span className="text-sm text-secondary text-center">
                  Unlock the power of technology with our enterprise solutions
                  and app development.
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <Link
                    href="/digital-engineering"
                    className="px-4 py-2 text-sm font-medium text-center text-primary hover:shadow-primary hover:shadow-sm hover:scale-105 transform ease-in-out transition-all duration-300"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xs bg-white shadow-md px-10 pt-2 pb-2 rounded-lg">
              <div className="flex flex-col items-center pt-10">
                <Image className="w-24 h-24 mb-3 " src={icon1} alt="🙏 IMAGE" />
                <h5 className="text-xl font-medium text-[28px] text-center">
                  <span className="text-center text-secondary text-[28px]">
                    {" "}
                    DATA &
                  </span>
                  <br />
                  <span className=" text-primary text-[28px]">AI/ML</span>
                </h5>
                <span className="text-sm text-secondary text-center">
                  Turn data into insights with our Data Engineering and Advanced
                  Analytics.
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <Link
                    href="/data-ai"
                    className="px-4 py-2 text-sm font-medium text-center text-primary hover:shadow-primary hover:shadow-sm hover:scale-105 transform ease-in-out transition-all duration-300"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xs bg-white shadow-md px-10 pt-2 pb-2 rounded-lg">
              <div className="flex flex-col items-center pb-5 pt-10">
                <Image className="w-24 h-24 mb-3 " src={icon2} alt="🙏 IMAGE" />
                <h5 className="text-xl font-medium text-center">
                  <span className="text-center text-secondary text-[28px]">
                    DIGITAL
                  </span>
                  <br />
                  <span className=" text-primary text-[28px]">EXPERIENCE</span>
                </h5>
                <span className="text-sm text-secondary text-center">
                  Elevate user experiences with UI/UX design and digital
                  commerce solutions.
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <Link
                    href="/digital-commerce"
                    className="px-4 py-2 text-sm font-medium text-center text-primary hover:shadow-primary hover:shadow-sm hover:scale-105 transform ease-in-out transition-all duration-300"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
