"use client";

import React from "react";
import Image from "next/image";
import clint1 from "../../../public/client/Untitled-1 1.png"
import clint2 from "../../../public/client/Untitled-1-removebg-preview.png"
import clint3 from "../../../public/client/Untitled-1.png"
import clint4 from "../../../public/client/client1.png"
import clint5 from "../../../public/client/client2.png"
import clint6 from "../../../public/client/client3.png"
import clint7 from "../../../public/client/client4.png"
import clint8 from "../../../public/client/client5.png"

const OurClients = () => {
  return (
    // <div className="flex justify-center w-screen">
    //   <div className="w-full ">
    //     <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
    //       Our Clients
    //     </h1>
    //     <p className="text-secondary lg:text-[18px] mt-5 text-center font-inter font-semibold">
    //       We have been working with some Fortune 500+ clients
    //     </p>
    //     <div className=" flex justify-center ">
    //     <div className="bg-blue-200 flex justify-center items-center w-30">Item 1</div>
    //     <div className="bg-blue-200 flex justify-center items-center">Item 1</div>
    //     <div className="bg-blue-200 flex justify-center items-center">Item 1</div>
    //     <div className="bg-blue-200 flex justify-center items-center">Item 1</div>
    //     <div className="bg-blue-200 flex justify-center items-center">Item 1</div>
    //     <div className="bg-blue-200 flex justify-center items-center">Item 1</div>
    //     <div className="bg-blue-200 flex justify-center items-center">Item 1</div>
    //     <div className="bg-blue-200 flex justify-center items-center">Item 1</div>
    //     </div>
    //   </div>
    // </div>
      <div className="container mx-auto mt-10">
    <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
          Our Clients
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <div className="bg-blue-200 p-4 flex justify-center items-center"><Image src="" alt=""></Image></div>
            <div className="bg-blue-200 p-4 flex justify-center items-center"><Image src="" alt=""></Image></div>                    
                <div className="bg-blue-200 p-4 flex justify-center items-center"><Image src="" alt=""></Image></div>
            <div className="bg-blue-200 p-4 flex justify-center items-center"><Image src="" alt=""></Image></div>          
            <div className="bg-blue-200 p-4 flex justify-center items-center"><Image src="" alt=""></Image></div>          
              <div className="bg-blue-200 p-4 flex justify-center items-center"><Image src="" alt=""></Image></div>            
              <div className="bg-blue-200 p-4 flex justify-center items-center"><Image src="" alt=""></Image></div>           
               <div className="bg-blue-200 p-4 flex justify-center items-center"><Image src="" alt=""></Image></div>      
              </div>
    </div>
  );
};

export default OurClients;
