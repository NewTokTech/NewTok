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
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Button from "../common/Button";

const OurClients = () => {
  return (
    <div className=" mx-auto mt-10">

      <h1 className="text-secondary lg:text-[40px] text-[30px] mt-5 text-center font-semibold">
        <span className="text-secondary">Our</span> <span className="text-primary"> Clients</span>

      </h1>
      <p className="text-secondary lg:text-[18px]  mt-5 text-center  font-semibold">
        An Ecosystem of Trusted Collaborators.
      </p>
      <div className="flex flex-wrap mx-auto justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-4 ">
          <div className="p-4 flex flex-col items-center pt-12">
            <Image src={client8} alt="sorry" className="w-36" />
          </div>
          <div className="p-4 flex flex-col items-center pt-16">
            <Image src={client5} alt="" className="w-42" />
          </div>
          <div className="p-4 flex flex-col items-center pt-16">
            <Image src={client7} alt="" className="w-40" />
          </div>
          <div className="p-4 flex flex-col items-center pt-8">
            <Image src={client6} alt="" className="w-36" />
          </div>

          <div className="p-4 flex flex-col items-center pt-14">
            <Image src={client4} alt="" className="w-36" />
          </div>

          <div className="p-4 xl:flex flex-col items-center hidden ">
            {/* <Image src={client3} alt="" className="w-40" /> */}
          </div>

          <div className="p-4 flex flex-col items-center">
            <Image src={client2} alt="" className="w-40" />
          </div>

          <div className="p-4 flex flex-col items-center ">
            <Image src={client1} alt="" className="w-40" />
          </div>

          <div className="p-4 flex flex-col items-center ">
            <Image src={client3} alt="" className="w-40" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button link="/about" text="SEE ALL" />
      </div>
    </div>
  );
};

export default OurClients;
