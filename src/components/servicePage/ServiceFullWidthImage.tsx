import Image from "next/image";
import React from "react";

const ServiceFullWidthImage = () => {
  return (
    <>
      <div className="relative py-10 lg:mx-52 ">
        <div
          className="lg:mx-32 rounded-xl bg-white about text-secondary"
          style={{ boxShadow: "0px -3px 11px 0px rgba(0, 0, 0, 0.25) inset" }}
        >
          <div className="m-auto lg:px-6 md:px-12 xl:px-6">
            <div
              className={`space-y-6 md:space-y-0 lg:flex lg:justify-center md:gap-6 lg:items-center lg:gap-12`}
            >
              <Image
                src={"/services/serviceFullWidth.svg"}
                alt="about 1"
                width={940}
                height={485}
                className={`absolute bottom-0 md:top-0 md:left-0 z-40 scale-75 opacity-50 lg:opacity-100 lg:scale-100 overflow-visible `}
              />

              <div className="w-full p-10 md:pt-48">
             
                <div className="flex flex-col justify-center align-center items-center text-secondary z-50 relative lg:pt-32 lg:px-5">
                  <div className="">
                    At Newtok, our core focus is process automation. We believe
                    in the power of automation to transform how businesses
                    operate. Our solutions are designed to streamline and
                    simplify complex processes, reducing manual efforts,
                    minimizing errors, and improving overall efficiency. We
                    understand that every industry has unique challenges and
                    requirements. That{"'"}s why we offer tailor-made solutions that
                    can be adapted to your specific needs. Our team of experts
                    will work closely with you to ensure that our software
                    seamlessly integrates into your existing infrastructure.
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

export default ServiceFullWidthImage;
