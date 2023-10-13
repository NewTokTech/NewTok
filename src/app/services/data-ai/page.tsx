// "use client";
// import ServiceContainer from "@/components/ServicesContainar/ServiceDataAiContainar";
// import ServiceMain from "@/components/servicePage/ServiceMain";
// import ServiceSecondPage from "@/components/servicePage/ServiceSecondPage";
// // import ServiceContainer from "@/components/servicePage/ServiceContainer";
// import Image from "next/image";
// import React, { useState } from "react";


// const servicesontent = [
//   {
//     position: "left",
//     img: '/services/service1.svg',
//     color: "bg-white",
//     HOne: " Heathcare",
//     HTwo: "Solutions",
//     text: [
//       {
//         H1: "Patient Management",
//         P: 'Seamlessly manage patient information and appointments to improve the quality of care.'
//       },
//       {
//         H1: "Clinical Trials Management",
//         P: 'Efficiently oversee and streamline the entire clinical trials process.'
//       },
//       {
//         H1: "Clinician Management",
//         P: "Optimize the management of healthcare professionals for better patient outcomes."
//       },
//       {
//         H1: " Operations Management",
//         P: "Enhance the overall operational efficiency of healthcare facilities."
//       }
//     ]
//   },
//   {
//     position: "right",
//     img: '/services/service2.svg',
//     color: "bg-white",
//     HOne: " Construction",
//     HTwo: " Solutions",
//     text: [{
//       H1: "Projects Management",
//       P: 'Control and monitor every aspect of your construction projects with ease.'
//     },
//     {
//       H1: "Vendor Management",
//       P: 'Streamline vendor relations and procurement for better project execution'
//     },
//     {
//       H1: "Contracts Management",
//       P: 'Ensure the seamless management of contracts and agreements.'
//     },
//     {
//       H1: " Purchase to Pay Management",
//       P: 'Simplify the procurement process from purchase to payment.'
//     },
//     ]
//   },
//   {
//     position: "left",
//     img: '/services/service3.svg',
//     color: "bg-white",
//     HOne: " Education",
//     HTwo: " Solutions",
//     text: [{
//       H1: "Student Enrollment & Engagement",
//       P: 'Enhance the student experience from enrollment to engagement.'
//     },
//     {
//       H1: "Operational Excellence",
//       P: 'Optimize educational processes and workflows for better outcomes.'
//     },
//     {
//       H1: "Innovations Management",
//       P: 'Foster innovation in educational practices.'
//     },
//     ]
//   },
//   {
//     position: "right",
//     img: '/services/service4.svg',
//     color: "bg-white",
//     HOne: " Construction",
//     HTwo: " Solutions",
//     text: [{
//       H1: "Accelerate Product Research",
//       P: 'Enhance product development and research.'
//     },
//     {
//       H1: "Innovations Management",
//       P: 'Facilitate the management of innovation and creativity.'
//     },
//     {
//       H1: "Logistics Management",
//       P: 'Optimize the movement of goods and materials.'
//     },
//     {
//       H1: "Assets Purchase and Management",
//       P: 'Efficiently handle assets procurement and lifecycle management.'
//     },
//     {
//       H1: "Field Service Management",
//       P: 'Streamline field operations for manufacturing facilities.'
//     },
//     {
//       H1: "Contracts Management",
//       P: 'Simplify contract management processes.'
//     },
//     ]
//   },
// ];



// const DataAI = () => {
//   const [pageShow, setPageShow] = useState(0);

//   const changePage = () => {
//     setPageShow(0);
//   };
//   const changePageSecont = () => {
//     setPageShow(1);
//   };

//   return (
//     <>
//       <ServiceMain componentA={} componentB={ } />
//     </>
//   )
// }

// export default DataAI


"use client";
import ServiceContainer from "@/components/ServicesContainar/ServiceContainer";
import ServiceSecondPage from "@/components/servicePage/ServiceSecondPage";
import Image from "next/image";
import React, { useState } from "react";


const DataAI = () => {
    const [pageShow, setPageShow] = useState(0);

    const changePage = () => {
        setPageShow(0);
    };
    const changePageSecont = () => {
        setPageShow(1);
    };

    return (
        <>
            <section className="w-screen mx-auto mt-36 ">
                <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-semibold">
                    <span className="">Digital </span>
                    <span className="text-primary">engineering</span>
                </h1>
                <div className="flex justify-center">
                    <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center font-light max-w-screen-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the an unknown printer took a galley
                    </p>
                </div>

                <div className="flex justify-center h-20 ">
                    <div className="lg:w-6/12 w-full sm:ms-2 sm:me-2 h-11  bg-white rounded-lg shadow-md flex items-end justify-center mb-40">
                        <div className="w-6/12 h-full " onClick={changePage}>
                            <h1 className="text-secondary text-center mt-3">
                                Enterprise solutions
                            </h1>
                            {pageShow == 0 && (
                                <div className="w-11/12 h-1 mt-1 bg-primary rounded-xl ms-4"></div>
                            )}
                        </div>

                        <div className="w-6/12 h-full" onClick={changePageSecont}>
                            <h1 className="text-secondary  text-center mt-3">
                                Application development
                            </h1>
                            {pageShow == 1 && (
                                <div className="w-11/12 h-1 bg-primary rounded-xl mt-1"></div>
                            )}
                        </div>
                    </div>
                </div>

                {pageShow == 0 && (
                    <>
                        <h1 className="text-secondary lg:text-[40px] mt-4 text-center font-semibold">
                            <span className="">On Time, Every Solution,</span>
                            <span className="text-primary">Every Enterprise</span>
                        </h1>
                        <div className="flex justify-center">
                            <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center font-light max-w-screen-sm">
                                At Newtok, we are at the forefront of revolutionizing enterprise
                                solutions across a multitude of industries, including health,
                                construction, education, manufacturing, and banking. Our mission
                                is to empower organizations by providing cutting-edge software
                                that streamlines operations, enhances productivity, and fosters
                                innovation. Our Comprehensive Enterprise Solutions
                            </p>
                        </div>

                        <h1 className="text-secondary lg:text-[40px] lg:mt-4 text-center font-semibold">
                            <span className="">Major</span>
                            <span className="text-primary"> Industries</span>
                        </h1>

                        <div className="space-y-0 md:space-y-32 mb-10">
                            <ServiceContainer />
                        </div>
                    </>
                )}

                {pageShow == 1 && (
                    <>
                        <h1 className="text-secondary lg:text-[40px] mt-4 text-center font-semibold">
                            <span className="">Unleash the Power</span>
                            <span className="text-primary">of Technology with Newtok</span>
                        </h1>
                        <div className="flex justify-center">
                            <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center font-light max-w-screen-sm">
                                At Newtok, we understand that in today{"'"}s fast-paced digital
                                world, the ability to develop and deploy applications quickly
                                can mean the difference between success and stagnation. That{"'"}s
                                why we offer a wide range of application development solutions
                                to cater to your diverse needs. Whether you prefer the speed and
                                simplicity of Low-Code/No-Code development or require the
                                precision and customization of Custom Application Development,
                                we have you covered.
                            </p>
                        </div>

                        <h1 className="text-secondary lg:text-[40px] lg:mt-4 text-center font-semibold">
                            <span className="">Low-Code/No-</span>
                            <span className="text-primary">Code Development</span>
                        </h1>
                        <ServiceContainer />
                    </>
                )}
            </section>
        </>
    );
}

export default DataAI