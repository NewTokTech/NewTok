import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: " We are committed to 100% customer satisfaction. We measure our success in terms of the success of our customers.",
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
            We are committed to 100% customer satisfaction. We measure our success in terms of the success of our customers.


          </p>
        </div>

        <div className="relative py-10 my-16 lg:mx-52 ">
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
                  className="absolute right-0 bottom-0 z-40 overflow-visible"
                />

                <div className="md:7/12 lg:w-7/12 p-10">
                  <h2 className="text-[30px] font-semibold pb-5">
                    What <span className="text-primary"> we do?</span>
                  </h2>

                  <div className="flex flex-col justify-center align-center items-center text-secondary z-50 relative">
                    <div className="">
                      <p className="font-semibold text-secondary text-[16px]">
                        A leading technology specialist company, Newtok
                        Technologies Pvt Ltd has been offering digital solutions
                        in software since 2003. The company mainly works on the
                        design, development and implementation of software
                        solutions and products.
                        <br />
                        <br />
                        Over the years, Newtok has emerged as a leader in the
                        field of turnkey integrated solutions. One of our major
                        achievements has been the setting up of a new division
                        for Building Automation, complete with end-to-end
                        services including design, supply, installation and
                        maintenance.
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
                  className="absolute left-0 bottom-0 z-40 overflow-visible"
                />

                <div className="md:7/12 lg:w-7/12 p-10">
                  <h2 className="text-[30px] font-semibold pb-5">
                    Our <span className="text-primary"> origin</span>
                  </h2>

                  <div className="flex flex-col justify-center align-center items-center text-secondary z-50 relative">
                    <div className="">
                      <p className="font-semibold text-secondary text-[16px]">
                        Newtok Technologies Pvt Ltd was set up in 2003 with the
                        aim of providing viable and affordable turnkey
                        solutions. With the passage of time, the company has
                        adapted to the latest technology and given due
                        importance to research and development. In 2004, Newtok
                        began work on developing software for MAC OSX. Keeping
                        in mind the global interest in automation and control,
                        the company also recently started a Dedicated Automation
                        division.
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
                  className="absolute right-0 bottom-0 z-40 overflow-visible"
                />

                <div className="md:7/12 lg:w-7/12 p-10">
                  <div className="">
                    <h2 className="text-[30px] font-semibold pb-5">
                      Vis <span className="text-primary">ion</span>
                    </h2>

                    <div className="text-secondary z-50 relative">
                      <div className="">
                        <p className="font-semibold text-secondary text-[16px]">
                          Our vision is simple and twofold—develop the best
                          products possible and become the market leader in IT
                          and Automation technologies by offering the best in
                          products as well as services.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <h2 className="text-[30px] font-semibold pb-5">
                        Miss <span className="text-primary">ion</span>
                      </h2>

                      <div className="text-secondary z-50 relative">
                        <div className="">
                          <p className="font-semibold text-secondary text-[16px]">
                            The company’s mission is to surpass the client’s
                            expectations by offering top-class and latest
                            turnkey integrated solutions in the IT and
                            Automation fields respectively.
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
