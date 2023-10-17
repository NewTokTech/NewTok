/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are committed to 100% customer satisfaction. We measure our success in terms of the success of our customers.",
};

const About = () => {
  return (
    <>
      <section className="w-screen mx-auto mt-36 mb-10">

        <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-semibold">
          <span className="">About </span>
          <span className="text-primary">us</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center max-w-screen-sm">
            Discover Ours – A Journey of Innovation, Excellence, and the Passion to Transform Ideas into Reality. Learn about the People, Values, and the Vision That Drive Us Forward.
          </p>
        </div>

        <div className="relative py-10 my-16 lg:mx-52">
          <div
            className="lg:mx-10 rounded-xl bg-white about text-secondary"
            style={{ boxShadow: "0px -3px 11px 0px rgba(0, 0, 0, 0.25) inset" }}
          >
            <div className="m-auto px-6 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 lg:flex lg:justify-start md:gap-6 lg:items-center lg:gap-12">
                <Image
                  src={"/aboutPage/image1.svg"}
                  alt="about 1"
                  width={500}
                  height={500}
                  className="absolute right-0 bottom-0 z-40 overflow-visible lg:opacity-100 opacity-10"
                />

                <div className="md:7/12 lg:w-7/12 p-10">
                  <h2 className="text-[30px] font-semibold pb-5">
                    What <span className="text-primary"> we do?</span>
                  </h2>

                  <div className="flex flex-col justify-center align-center items-center text-secondary z-50 relative">
                    <div className="">
                      <p className="font-semibold text-secondary text-[16px]">
                        A leading technology specialist company, Newtok Technologies Pvt Ltd, has been at the forefront of delivering innovative digital solutions since 2003. With a relentless focus on design, development, and implementation, we have pioneered cutting-edge software solutions and products for a wide array of industries.
                        <br />
                        <br />
                        We craft user-centric designs that seamlessly blend aesthetics with functionality, ensuring that every software solution we create offers a superior user experience. Our expert team of developers brings ideas to life with the latest technology stacks, turning concepts into robust, high-performance software products.
                        We're more than just a technology company; we're your partner in digital transformation, committed to driving innovation, efficiency, and success across diverse industries
                        {/* <br />
                        <br />
                        Newtok mainly provides turnkey services for residential
                        and commercial projects. The company is in charge of
                        Automation solutions & systems for Home Automation,
                        Building Management, Hotel room Management, Building
                        Security & Access Control, Pro Audio, Lighting Control
                        and other related Extra Low Voltage Systems. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-10 my-16 lg:mx-52 ">
          <div
            className="lg:mx-10 rounded-xl bg-white about text-secondary"
            style={{ boxShadow: "0px -3px 11px 0px rgba(0, 0, 0, 0.25) inset" }}
          >
            <div className="m-auto px-6 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 lg:flex lg:justify-end md:gap-6 lg:items-center lg:gap-12">
                <Image
                  src={"/aboutPage/image2.svg"}
                  alt="about 1"
                  width={500}
                  height={500}
                  className="absolute left-0 bottom-0 z-40 overflow-visible lg:opacity-100 opacity-10"
                />

                <div className="md:7/12 lg:w-7/12 p-10">
                  <h2 className="text-[30px] font-semibold pb-5">
                    Our <span className="text-primary"> origin</span>
                  </h2>

                  <div className="flex flex-col justify-center align-center items-center text-secondary z-50 relative">
                    <div className="">
                      <p className="font-semibold text-secondary text-[16px]">
                        <span>Founded in 2003, Newtok Technologies Pvt Ltd embarked on a mission to provide viable and affordable turnkey solutions. Over the years, we've evolved and adapted to the ever-changing landscape of technology, placing a strong emphasis on research and development.</span>
                        <br />
                       <br />
                        <span>In 2004, Newtok took a significant step forward by initiating software development for MAC OSX. This marked the beginning of our journey into the world of technology.</span>
                        <br />
                       <br />
                        <span>Today, our story encompasses not only our history but also our commitment to innovation and excellence. We've expanded our expertise to offer comprehensive enterprise solutions, empowering organizations to thrive in the digital era. Our dedication to staying ahead has led us to embrace low code development, streamlining software creation and deployment.</span>
                       <br />
                       <br />
                       <span>Additionally, we've harnessed the power of Artificial Intelligence (AI) to propel our clients into a future of intelligent automation and data-driven decision-making. Our origin is a testament to our drive to create a better, more efficient, and technologically advanced world</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-10 my-16 lg:mx-52 ">
          <div
            className="lg:mx-10 rounded-xl bg-white about text-secondary"
            style={{ boxShadow: "0px -3px 11px 0px rgba(0, 0, 0, 0.25) inset" }}
          >
            <div className="m-auto px-6 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 lg:flex lg:justify-start md:gap-6 lg:items-center lg:gap-12">
                <Image
                  src={"/aboutPage/image3.svg"}
                  alt="about 1"
                  width={500}
                  height={500}
                  className="absolute right-0 bottom-0 z-40 overflow-visible lg:opacity-100 opacity-10"
                />

                <div className="md:7/12 lg:w-7/12 p-10">
                  <div className="">
                    <h2 className="text-[30px] font-semibold pb-5">
                      Vis<span className="text-primary">ion</span>
                    </h2>

                    <div className="text-secondary z-50 relative">
                      <div className="">
                        <p className="font-semibold text-secondary text-[16px]">
                        Our vision is clear and twofold — to create exceptional products and lead the IT industry by delivering unparalleled solutions and services. We aim to be the forefront innovators and the trusted choice for our clients, setting new standards of excellence in technology.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <h2 className="text-[30px] font-semibold pb-5">
                        Miss<span className="text-primary">ion</span>
                      </h2>

                      <div className="text-secondary z-50 relative">
                        <div className="">
                          <p className="font-semibold text-secondary text-[16px]">
                          Our mission is to continuously innovate and provide cutting-edge technology solutions that empower our clients to achieve their goals. We're dedicated to exceeding expectations through the delivery of top-tier products and services, setting the standard for excellence in the IT industry. Our commitment is to foster growth, build lasting relationships, and drive positive change through technology.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
