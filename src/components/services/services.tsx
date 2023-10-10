/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import icon from "../../../public/svg/services/icon.svg"
import icon1 from '../../../public/svg/services/IconOne.svg'
import icon2 from '../../../public/svg/services/iconTwo.svg'

function Service() {
  return (
    <div className="container mx-auto mt-10">
      {/* <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
        Our Clients
      </h1>
      <p className="text-secondary lg:text-[18px] mt-5 text-center font-inter font-semibold">
        We have been working with some Fortune 500+ clients
      </p> */}
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
          {/* one */}

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
            <div className="flex flex-col items-center pb-10">
              <Image
                className="w-24 h-24 mb-3 "
                src={icon}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              DIGITAL
              
               ENGINEERING
              </h5>
              <span className="text-sm text-gray-500 text-center">
              Go to this step by step guideline process on how to certify for
                your weekly benefits:
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>

          {/* two */}
          
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
            <div className="flex flex-col items-center pb-10">
              <Image
                className="w-24 h-24 mb-3 "
                src={icon}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 text-center">
              Go to this step by step guideline process on how to certify for
                your weekly benefits:
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>

          {/* three */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <div className="flex flex-col items-center pb-10">
            <Image
              className="w-24 h-24 mb-3 "
              src={icon}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 text-center">
            Go to this step by step guideline process on how to certify for
              your weekly benefits:
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Service;
