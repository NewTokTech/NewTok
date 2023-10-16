"use client";
import React, { useEffect, useState } from "react";
import "./preloader.css";

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
      <div className="absolute h-screen w-screen flex justify-center items-center bg-white">
      <div className="lds-facebook"><div></div><div></div><div></div></div>
      </div>
    </>
  );
};

export default Preloader;
