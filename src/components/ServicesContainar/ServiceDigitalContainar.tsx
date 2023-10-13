import React from 'react'
import SingleContainer from '../servicePage/SingleContainer'
import ServiceWhyUs from '../servicePage/ServiceWhyUs';


const servicesontent = [
    {
        position: "left",
        img: '/services/service1.svg',
        color: "bg-white",
        HOne: " Heathcare",
        HTwo: "Solutions",
        text: [
            {
                H1: "Patient Management",
                P: 'Seamlessly manage patient information and appointments to improve the quality of care.'
            },
            {
                H1: "Clinical Trials Management",
                P: 'Efficiently oversee and streamline the entire clinical trials process.'
            },
            {
                H1: "Clinician Management",
                P: "Optimize the management of healthcare professionals for better patient outcomes."
            },
            {
                H1: " Operations Management",
                P: "Enhance the overall operational efficiency of healthcare facilities."
            }
        ]
    },
    {
        position: "right",
        img: '/services/service2.svg',
        color: "bg-white",
        HOne: " Construction",
        HTwo: " Solutions",
        text: [{
            H1: "Projects Management",
            P: 'Control and monitor every aspect of your construction projects with ease.'
        },
        {
            H1: "Vendor Management",
            P: 'Streamline vendor relations and procurement for better project execution'
        },
        {
            H1: "Contracts Management",
            P: 'Ensure the seamless management of contracts and agreements.'
        },
        {
            H1: " Purchase to Pay Management",
            P: 'Simplify the procurement process from purchase to payment.'
        },
        ]
    },
    {
        position: "left",
        img: '/services/service3.svg',
        color: "bg-white",
        HOne: " Education",
        HTwo: " Solutions",
        text: [{
            H1: "Student Enrollment & Engagement",
            P: 'Enhance the student experience from enrollment to engagement.'
        },
        {
            H1: "Operational Excellence",
            P: 'Optimize educational processes and workflows for better outcomes.'
        },
        {
            H1: "Innovations Management",
            P: 'Foster innovation in educational practices.'
        },
        ]
    },
    {
        position: "right",
        img: '/services/service4.svg',
        color: "bg-white",
        HOne: " Construction",
        HTwo: " Solutions",
        text: [{
            H1: "Accelerate Product Research",
            P: 'Enhance product development and research.'
        },
        {
            H1: "Innovations Management",
            P: 'Facilitate the management of innovation and creativity.'
        },
        {
            H1: "Logistics Management",
            P: 'Optimize the movement of goods and materials.'
        },
        {
            H1: "Assets Purchase and Management",
            P: 'Efficiently handle assets procurement and lifecycle management.'
        },
        {
            H1: "Field Service Management",
            P: 'Streamline field operations for manufacturing facilities.'
        },
        {
            H1: "Contracts Management",
            P: 'Simplify contract management processes.'
        },
        ]
    },
];

const ServiceDigitalContainar = () => {
    return (
        <>
            <>
                {/* <div className='space-y- xl:mt-0 lg:mt-52'> */}
                {servicesontent.map((value, index) => {
                    return <SingleContainer position={value.position} color={value.color} img={value.img} HOne={value.HOne} HTwo={value.HTwo} text={value.text} key={index} />
                })}
                <ServiceWhyUs />
                {/* </div> */}
            </>
        </>
    )
}

export default ServiceDigitalContainar