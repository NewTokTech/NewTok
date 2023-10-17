"use client";

import React, { useEffect, useState } from "react";
import AnimatedSvg from "./AnimatedSvg";
import { useRouter } from 'next/navigation';


const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [hide, setHide] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 3000);
  }, []);

  return hide ? (
    children
  ) : (
    <>
      <div className="absolute h-screen w-screen flex justify-center items-center bg-primary/50">
        <div className="m-auto">
          <AnimatedSvg />
        </div>
      </div>
    </>
  );
};

export default Preloader;
