"use client";

import React from "react";
import Image from "next/image";
import client1 from "../../../public/client/Untitled-1 1.png";
import client2 from "../../../public/client/Untitled-1-removebg-preview.png";
import client3 from "../../../public/client/Untitled-1.png";
import client4 from "../../../public/client/client1.png";
import client5 from "../../../public/client/client2.png";
import client6 from "../../../public/client/client3.png";
import client7 from "../../../public/client/client4.png";
import client8 from "../../../public/client/client5.png";

const OurClients = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
        Our Clients
      </h1>
      <p className="text-secondary lg:text-[18px] mt-5 text-center font-inter font-semibold">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 ">
          <div className="bg-blue-200 p-4 flex flex-col items-center">
            <Image src={client1} alt="" />
          </div>
          <div className="bg-blue-200 p-4 flex flex-col items-center">
            <Image src={client2} alt="" />
          </div>
          <div className="bg-blue-200 p-4 flex flex-col items-center">
            <Image src={client3} alt="" />
          </div>
          <div className="bg-blue-200 p-4 flex flex-col items-center">
            <Image src={client4} alt="" />
          </div>
          <div className="bg-blue-200 p-4 flex flex-col items-center">
            <Image src={client5} alt="" />
          </div>
          <div className="bg-blue-200 p-4 flex flex-col items-center">
            <Image src={client6} alt="" />
          </div>
          <div className="bg-blue-200 p-4 flex flex-col items-center">
            <Image src={client7} alt="" />
          </div>
          <div className="bg-blue-200 p-4 flex flex-col items-center">
            <Image src={client8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
