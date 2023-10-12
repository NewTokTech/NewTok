import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
     <section className='w-screen mx-auto mt-36 mb-10'>
            <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-semibold">
                <span className=''>About </span><span className='text-primary'>us</span>
            </h1>
            <div className='flex justify-center'>
                <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center font-light max-w-screen-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the   an unknown printer took a galley
                </p>
            </div>


            <div className="py-16 my-auto bg-white about text-secondary">
        <div className="m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 lg:flex lg:justify-center md:gap-6 lg:items-center lg:gap-12">
            {/* <ImageContainer /> */}
            <Image
              src={"/about/image4.svg"}
              alt="about 1"
              height={827}
              width={518}
            />
            <div className="md:7/12 lg:w-6/12 p-10">
              <h2 className="text-[18px] md:text-[24px] lg:text-[30px] font-semibold">
                Navigating Tomo
                <span className="text-primary">rrow{"'"}s Horizons: </span>
                <br />
                Crafting Digital E
                <span className="text-primary">xcellence at Newtok</span>
                <br />
                Technologies
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

              <button
                type="button"
                className="mt-10 py-2.5 px-12 mr-2 mb-5 text-sm font-medium text-primary focus:outline-none bg-white  border border-primary border-5 hover:bg-primary  hover:text-white transform transition-colors duration-300 ease-in-out"
              >
                MORE ABOUT US
              </button>
            </div>
          </div>
        </div>
      </div>
          
        </section>
    </>
  )
}

export default About