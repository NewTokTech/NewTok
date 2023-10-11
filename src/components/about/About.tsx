"use client";

import React, { useEffect, useState } from "react";
import "./about.css";
import Image from "next/image";

const About = () => {
  const images = [
    "/about/image1.svg",
    "/about/image2.svg",
    "/about/image3.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index with wrapping
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <>
        <div className="py-16 bg-white">
      <div className="container px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            {images.map((image, index) => (
              <div
                key={index}
                className={`transform transition-transform ease-in-out duration-300  ${currentIndex === index ? 'opacity-100 translate-x-0 scale-100 block' : 'opacity-0 -translate-x-4 scale-0 hidden'}`}
      
              >
                <Image
                  src={image}
                  alt="image"
                  loading="lazy"
                  width={873}
                  height={590}
                />
              </div>
            ))}

          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Nuxt development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque autem!
              Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
