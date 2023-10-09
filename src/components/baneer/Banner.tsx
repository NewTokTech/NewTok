"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BannerImg from '../../../public/Img/NashPoint.jpg'
import BannerImgOne from '../../../public/Img/istockphoto-1365550676-2048x2048.jpg'
import BannerImgTwo from '../../../public/Img/tree-736885_1280.jpg'
import Icon from '../../../public/svg/banner.svg'

const slides = [BannerImg, BannerImgOne, BannerImgTwo];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  
    const goToSlide = (index: number) => {
      setCurrentSlide(index);
    };
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + slides.length) % slides.length+1
      );
    };
  
    const startAutoSlide = () => {
      if (!intervalId) {
        const newIntervalId = setInterval(() => {
          const nextSlideIndex = (currentSlide + 1) % slides.length;
          setCurrentSlide(nextSlideIndex);
        }, 3000); // Change slide every 5 seconds (adjust the duration as needed)
  
        setIntervalId(newIntervalId);
      }
    };
  
    const stopAutoSlide = () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  
    useEffect(() => {
      startAutoSlide();
      return () => {
        stopAutoSlide();
      };
    }, [currentSlide]);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <Image
              src={src}
              alt="Mountain Landscape"
              className="h-screen"
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-300"
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <Image src={Icon} alt="Mountain Landscape" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Banner;
