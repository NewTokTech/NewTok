import ServiceContainer from "@/components/servicePage/ServiceContainer";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="w-screen mx-auto mt-36 mb-10">
        <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-semibold">
          <span className="">About </span>
          <span className="text-primary">us</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center font-light max-w-screen-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the an unknown printer took a galley
          </p>
        </div>

        <ServiceContainer />
      </section>
    </>
  );
};

export default Services;
