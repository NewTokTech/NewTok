"use client";
import React, { useState } from "react";

interface ParentComponentProps {
  componentA: React.ReactElement;
  componentB: React.ReactElement;
  heading: string
  headingTwo: string
  Paragraph: string
  btnOne: string
  btnTwo: string

}

const ServiceMain: React.FC<ParentComponentProps> = (props) => {

  const [pageShow, setPageShow] = useState(0);

  const changePage = () => {
    setPageShow(0);
    console.log("0");
    
  };
  const changePageSecont = () => {
    setPageShow(1);
    console.log("1");
    
  };

  return (
    <>
      <section className="w-screen mx-auto mt-36 ">
        <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-semibold">
          <span className="">{props.heading} </span>
          <span className="text-primary">{props.headingTwo}</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-secondary lg:text-[15px] mt-5 mb-5 px-4 text-center font-light max-w-screen-sm">
            {props.Paragraph}
          </p>
        </div>

        <div className="flex justify-center h-20 mx-1">
          <div className="lg:w-6/12 w-full sm:ms-2 sm:me-2 h-11  bg-white rounded-lg shadow-md flex items-end justify-center mb-40">
            <div className="w-6/12 h-full " onClick={changePage}>
              <h1 className="text-secondary text-center mt-3 lg:text-[16px] text-[12px] ">
                {props.btnOne}
              </h1>
              {pageShow == 0 && (
                <div className="w-11/12 h-1 mt-1 bg-primary rounded-xl xl:ms-5">

                </div>
              )}
            </div>

            <div className="w-6/12 h-full" onClick={changePageSecont}>
              <h1 className="text-secondary  text-center mt-3  lg:text-[16px] text-[12px]">
                {props.btnTwo}
              </h1>
              {pageShow == 1 && (
                <div className="w-11/12 h-1 bg-primary rounded-xl mt-1 "></div>
              )}
            </div>
          </div>
        </div>

        {pageShow == 0 && (
          <>
            <div className="space-y-0 md:space-y-32 mb-10">
              {props.componentA}
            </div>
          </>
        )}

        {pageShow == 1 && (
          <>
            {props.componentB}
          </>
        )}
      </section>
    </>
  )
}

export default ServiceMain