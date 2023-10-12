import React from 'react'
import Image from "next/image";
import test from '../../../public/logo .png'
import hello from '../../../public/client/client2.png'

const Portfolio = () => {
    return (
        <div className="p-0 text-secondary">
            <div className="m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 lg:flex lg:justify-center md:gap-6 lg:items-center lg:gap-12">
                    {/* <ImageContainer /> */}


                    <div className="md:7/12 lg:w-5/12 hidden lg:block">
                        <div className='flex justify-end'>
                            <Image
                                src={"/about/image4.svg"}
                                alt="about 1"
                                height={200}
                                width={200}
                                className='lg:w-5/12'
                            />
                            <Image
                                src={"/about/image4.svg"}
                                alt="about 1"
                                height={200}
                                width={200}
                                className='lg:w-5/12  ms-5'
                            />
                        </div>
                        <div className='flex justify-end'>
                            <Image
                                src={"/about/image4.svg"}
                                alt="about 1"
                                height={200}
                                width={200}
                                className='lg:w-5/12  '
                            />
                            <Image
                                src={"/about/image4.svg"}
                                alt="about 1"
                                height={200}
                                width={200}
                                className='lg:w-5/12 ms-5'
                            />
                        </div>
                    </div>

                    <div className="md:7/12 lg:w-6/12 xl:p-20 ">
                        <h2 className="text-[18px] md:text-[24px] lg:text-[30px] font-semibold xl:mt-10 mt-0 lg:block flex justify-center">
                            LOGO DESIGN <br />
                            <span className="text-primary">STUDIO </span>

                        </h2>
                        <h2 className='mt-5'>

                            <span className='lg:block hidden'> Client</span>
                            <br />
                            <span className='text-lg lg:block flex justify-center '> SummitSoftCorp, USA</span>

                        </h2>
                        <p className="mt-6 text-[14px] font-[500] leading-5">
                            Welcome to Newtok Technologies, where we redefine software
                            solutions with innovation. Since our 2003 inception, we{"'"}ve
                            crafted digital transformation for enterprises through custom
                            application development and IT services. We{"'"}re not just
                            developers; we{"'"}re your digital partners, dedicated to
                            forging unique solutions that set you apart. Join us in
                            exploring the limitless possibilities of technology. Welcome to
                            Newtok Technologies, where digital excellence awaits.
                        </p>

                    </div>
                </div>
                {/* <div className="md:7/12 lg:w-12/12 ">
            <div className='flex justify-center h-60'>

                <Image
                    src={imgArray[currentIndex]}
                    alt="about 1"
                    height={200}
                    width={200}
                    className='w-7/12  ms-5'
                />
            </div>

        </div> */}
            </div>
        </div>
    )
}

export default Portfolio