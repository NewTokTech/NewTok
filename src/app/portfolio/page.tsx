/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import test from '../../../public/logo .png'
import hello from '../../../public/client/client2.png'
import Portfolio from '@/components/portfolio/Portfolio';
import PortfolioTwo from '@/components/portfolio/PortfolioTwo';

const page = () => {

    const imgArray = [
        test,
        hello,
        test
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
        }, 2000);
        return () => {
            clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imgArray, 2000]);

    return (
        <section className='w-screen mx-auto mt-36 mb-10'>
            <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
                <span className=''>Prot</span><span className='text-primary'>folio</span>
            </h1>
            <div className='flex justify-center'>
                <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center font-inter font-semibold max-w-screen-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the   an unknown printer took a galley
                </p>
            </div>


          <Portfolio/>
          <PortfolioTwo/>
          <Portfolio/>
        </section>
    )
}

export default page