import React from 'react'
import Image from "next/image";
import test from '../../../public/logo .png'
import './testimonials.css'
import backgroundImg from '../../../public/Img/Rectangle 730.png'
const imageUrl = backgroundImg;

const Testimonials = () => {
    return (
        <>
            <section id='section' className='w-screen h-[500px] m-0 p-0'>
                <div>
                    <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
                        Service
                    </h1>
                    <p className="text-secondary lg:text-[18px] mt-5 mb-5 text-center font-inter font-semibold">
                        We have been working with  some Fortune <br className="lg:hidden block" /> 500+ clients
                    </p>
                </div>

            </section>
        </>
    )
}

export default Testimonials