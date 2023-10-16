"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  images: string[];
}
const PortfolioImages = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <>

    {
        images.map((img, idx) => (
            <Image
            src={img}
            key={idx}
            alt={"portfolio" + idx}
            height={400}
            width={400}
            className={`absolute max-h-[300px] max-w-[120px] lg:max-w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 lg:w-5/12 transition-all duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 ': 'opacity-0'}`}
          />
        ))
    }
    
    </>
  );
};

export default PortfolioImages;
