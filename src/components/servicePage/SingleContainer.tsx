/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";


interface ServiceContent {
  position: string;
  img: string;
  color: string;
  HOne: string;
  HTwo: string;
  text: Array<{
    H1: string;
    P: string;
  }>;
}


const SingleContainer = (props: ServiceContent) => {
  const { img, color, HOne, HTwo, text, position } = props;
  return (
    <>
      <div className="relative py-10 lg:mx-52 ">
        <div className="lg:mx-10 rounded-xl bg-white about min-w-[519px] text-secondary" style={{ boxShadow: "0px -3px 11px 0px rgba(0, 0, 0, 0.25) inset" }}>
          <div className="m-auto px-6 md:px-12 xl:px-6">
            <div className={`space-y-6 md:space-y-0 lg:flex  ${position === 'left' ? 'lg:justify-end' : 'lg:justify-start'} md:gap-6 lg:items-center lg:gap-12`}>
              <Image
                src={img}
                alt="about 1"
                width={687}
                height={498}
                className={`absolute bottom-0 z-40 scale-75 opacity-50 lg:opacity-100 lg:scale-100 overflow-visible ${position === 'left' ? 'left-0' : 'right-0'}`}
              />

              <div className="md:7/12 lg:w-6/12 p-10">
                <h2 className="text-[30px] font-semibold pb-5">
                  {HOne} <span className="text-primary"> {HTwo}</span>
                </h2>

                <div className="flex flex-col justify-center align-center items-center text-secondary z-50 relative">
                  {text.map((value, index) => {
                    return (
                      <div className="">
                        <span className="font-bold">{value.H1}: </span>
                        <span>
                          {value.P}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleContainer;
