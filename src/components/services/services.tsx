/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import icon from "../../../public/svg/services/icon.svg";
import icon1 from "../../../public/svg/services/IconOne.svg";
import icon2 from "../../../public/svg/services/iconTwo.svg";

function Service() {
  return (
    <div className=" mx-auto mt-10 mb-10">
      <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
        Service
      </h1>
      <p className="text-secondary lg:text-[18px] mt-5 mb-5 text-center font-inter font-semibold">
        We have been working with  some Fortune <br className="lg:hidden block" /> 500+ clients
      </p>
      <div className=" mx-auto flex justify-center mt-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          {/* one */}

          <div className="w-full max-w-sm bg-white   shadow-md ps-10 pe-10 pt-2 pb-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <Image
                className="w-24 h-24 mb-3 "
                src={icon}
                alt="Bonnie image"
              />
              <h5 className="mb-1  text-xl font-medium text-gray-900 dark:text-white ">
                <span className="ms-14 text-secondary text-[36px]"> DIGITAL</span>
                <br />
                <span className=" text-primary text-[36px] text-center"> ENGINEERING</span>
              </h5>
              <span className="text-sm text-secondary text-center">
                We have been working with some Fortune
                <br />
                500+ clientsWe have been working with <br />
                some Fortune
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-primary  hover:text-secondary  hover:border  hover:bg-primary  hover:text-white  hover:duration-75"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>

          {/* two */}

          <div className="w-full  bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10">
            <div className="flex flex-col items-center pb-10 pt-10">
              <Image
                className="w-24 h-24 mb-3 "
                src={icon1}
                alt="Bonnie image"
              />
              <h5 className="mb-1  text-xl font-medium text-gray-900 dark:text-white mb-9">
                <span className="text-center text-secondary text-[36px]"> DATA</span>
                {/* <br /> */}
                <span className=" text-primary text-[36px]"> & AI</span>
              </h5>
              <span className="text-sm text-secondary text-center">
                We have been working with some Fortune
                <br />
                500+ clientsWe have been working with <br />
                some Fortune
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-primary  hover:text-secondary  hover:border  hover:bg-primary  hover:text-white"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>

          {/* three */}
          <div className="w-full  bg-white  rounded-lg shadow p-10" >
            <div className="flex flex-col items-center pb-10 pt-10">
              <Image
                className="w-24 h-24 mb-3 "
                src={icon2}
                alt="Bonnie image"
              />
              <h5 className="mb-1  text-xl font-medium text-gray-900 dark:text-white mb-9">
                <span className="text-center text-secondary text-[36px]">EXPER</span>
                {/* <br /> */}
                <span className=" text-primary text-[36px]">IENCE</span>
              </h5>
              <span className="text-sm text-secondary text-center">
                We have been working with some Fortune
                <br />
                500+ clientsWe have been working with <br />
                some Fortune
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-primary  hover:text-secondary  hover:border  hover:bg-primary  hover:text-white"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="py-2.5 mb-5 px-5 mr-2 mb-2 text-sm font-medium text-primary focus:outline-none bg-white  border border-primary border-5  hover:text-secondary "
        >
          EXPLORE OUR SERVICES
        </button>
      </div>
    </div>
  );
}

export default Service;
