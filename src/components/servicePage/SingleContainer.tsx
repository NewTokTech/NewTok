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
    
      <div className="relative  xl:mx-52 ">
        <Image
          src={img}
          alt="about 1"
          width={687}
          height={498}
          className={`scale-75 xl:hidden block  xl:scale-90 overflow-visible -mb-10`}
        />
        <div className="xl:mx-10 rounded-xl bg-white about mx-5 xl:min-w-[519px] xl:min-h-[400px] text-secondary" style={{ boxShadow: "0px -3px 11px 0px rgba(0, 0, 0, 0.25) inset" }}>
          <div className="m-auto px-6 md:px-12 xl:px-6 xl:my-16">
            <div className={`xl:space-y-6 md:space-y-0 xl:flex  ${position === 'left' ? 'xl:justify-end' : 'xl:justify-start'} md:gap-6 xl:items-center xl:gap-12`}>
              <Image
                src={img}
                alt="about 1"
                width={600}
                height={498}
                className={`absolute  bottom-0 xl:block hidden scale-75 sxl:scale-100 overflow-visible ${position === 'left' ? '-left-4 ' : 'right-0'}`}
              />

              <div className="md:7/12 xl:w-6/12 py-10 px-2 z-[60]">

                <h2 className="text-[30px] font-semibold ">
                  {HOne} <span className="text-primary"> {HTwo}</span>
                </h2>

                <div className="flex flex-col xl:justify-center text-secondary relative">
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
