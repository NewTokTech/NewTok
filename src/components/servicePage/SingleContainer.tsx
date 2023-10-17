/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";


interface ServiceContent {
  position: string;
  img: string;
  Hthree: string;
  HOne: string;
  HTwo: string;
  text: Array<{
    H1: string;
    P: string;
  }>;
}

const SingleContainer = (props: ServiceContent) => {
  const { img, HOne, HTwo, text, position } = props;
  return (
    <>
    
      <div className="relative  sxl:mx-52 ">
        <Image
          src={img}
          alt="about 1"
          width={687}
          height={498}
          className={`scale-75 sxl:hidden block  sxl:scale-90 overflow-visible -mb-10`}
        />
        <div className="sxl:mx-10 rounded-sxl bg-white about mx-5 sxl:min-w-[519px] sxl:min-h-[400px] text-secondary" style={{ boxShadow: "0px -3px 11px 0px rgba(0, 0, 0, 0.25) inset" }}>
          <div className="m-auto px-6 md:px-12 sxl:px-6 sxl:my-16">
            <div className={`sxl:space-y-6 md:space-y-0 sxl:flex  ${position === 'left' ? 'sxl:justify-end' : 'sxl:justify-start'} md:gap-6 sxl:items-center sxl:gap-12`}>
              <Image
                src={img}
                alt="about 1"
                width={600}
                height={498}
                className={`absolute  bottom-0 sxl:block hidden scale-75 sxl:scale-100 overflow-visible ${position === 'left' ? '-left-4 ' : 'right-0'}`}
              />

              <div className="md:7/12 sxl:w-6/12 p-10  z-[999]">

                <h2 className="text-[30px] font-semibold ">
                  {HOne} <span className="text-primary"> {HTwo}</span>
                </h2>

                <div className="flex flex-col sxl:justify-center sxl:align-center sxl:items-center text-secondary relative">
                  {text.map((value, index) => {
                    return (
                      <div className="" key={value.H1}>
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
