import Image from "next/image";
import React from "react";

const SingleContainer = () => {
  return (
    <>
      <div className="relative py-10 my-16 lg:mx-52 ">
        <div className="lg:mx-10 rounded-xl bg-white about text-secondary" style={{ boxShadow: "0px -3px 11px 0px rgba(0, 0, 0, 0.25) inset"}}>
          <div className="m-auto px-6 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 lg:flex lg:justify-end md:gap-6 lg:items-center lg:gap-12">
              <Image
                src={"/services/service1.svg"}
                alt="about 1"
                width={734}
                height={591}
                className="absolute left-0 bottom-0 z-40 overflow-visible"
              />

              <div className="md:7/12 lg:w-6/12 p-10">
                <h2 className="text-[30px] font-semibold pb-5">
                  Heathcare <span className="text-primary"> Solutions</span>
                </h2>

                <div className="flex flex-col justify-center align-center items-center text-secondary z-50 relative">
                 
                  <div className="">
                    <span className="font-bold">Patient Management: </span>
                    <span className="font-light">
                       Seamlessly manage patient information and appointments to
                      improve the quality of care.
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Patient Management: </span>
                    <span>
                       Seamlessly manage patient information and appointments to
                      improve the quality of care.
                    </span>
                  </div>
                  <div className="">
                    <span className="font-bold">Patient Management: </span>
                    <span>
                       Seamlessly manage patient information and appointments to
                      improve the quality of care.
                    </span>
                  </div>

                  <div className="">
                    <span className="font-bold">Patient Management: </span>
                    <span>
                       Seamlessly manage patient information and appointments to
                      improve the quality of care.
                    </span>
                  </div>

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
