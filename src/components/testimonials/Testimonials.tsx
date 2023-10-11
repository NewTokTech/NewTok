"use client"
import React, { useEffect, useState } from "react";
import test from '../../../public/logo .png'
import './testimonials.css'
import Image from "next/image";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
            color: "bg-white",
            textOne: "TECHNOLOGY FOR ",
            textTwo: "SMART",
            textThree: "INVENTIONS",
            textP: "SOFTWARE APPLICATION AND PRODUCT DEVELOPMENT SERVICES0    Asperiores nemo possimus nesciunt dicta veniam  aspernatur quam mollitia.",
            textColor: " text-secondary",
            textColorOne: "text-secondary",
            textColorTwo: "text-primary",
            copyright_social: "text-dark"
        },
        {

            color: "bg-primary",
            textOne: "TECHNOLOGY FOR ",
            textTwo: "Nobis minus voluptatibus pariatur dignissimos libero quaerat iure  SMART",
            textThree: "Nobis minus voluptatibus pariatur dignissimos libero quaerat iure  ",
            textP: "777777777777777777 APPLICATION AND PRODUCT DEVELOPMENT SERVICES0   dicta veniam  aspernatur quam mollitia.",
            textColor: "text-white",
            textColorOne: "text-dark",
            textColorTwo: "text-dark",
            copyright_social: "text-primary"
        },
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };


    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(slideInterval); // Clean up the interval on component unmount
        };
    }, []);

    return (
        <>
            <section id='section' className='w-screen h-screen m-0 p-0'>
                <div>
                    <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
                        Service
                    </h1>
                    <p className="text-secondary lg:text-[18px] mt-5 mb-5 text-center font-inter font-semibold">
                        We have been working with  some Fortune <br className="lg:hidden block" /> 500+ clients
                    </p>

                    <>
                        <div className="flex justify-center">
                            <div className="md:7/12 lg:w-10/12 bg-white shadow-lg p-20">
                                {images.map((data, index) => (
                                    <div
                                        key={index}
                                        className={`
                                             absolute w-full h-screen transform transition-all ease-in-out duration-1000 ${index === activeIndex ? "opacity-0" : "opacity-100"
                                            }`}
                                    >
                                        <p className="mt-6 text-gray-600 max-lg:">
                                            {data.textP}
                                        </p>
                                    </div>
                                ))}



                                {/* <p className="mt-4 text-gray-600">
                                    Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
                                    expedita at? Asperiores nemo possimus nesciunt dicta veniam
                                    aspernatur quam mollitia.
                                </p> */}


                            </div>

                        </div>
                    </>

                </div>

            </section>
        </>
    )
}

export default Testimonials