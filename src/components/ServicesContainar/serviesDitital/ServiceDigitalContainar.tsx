import React from 'react'
import SingleContainer from '../../servicePage/SingleContainer'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';


const servicesontent = [
    {
        position: "left",
        img: '/services/service1.svg',
        Hthree: `User-Centric Design At the heart of our UI/UX design philosophy is a commitment to user-centric solutions. We understand your users' needs and behaviors, ensuring our designs enhance their experiences.`,
        HOne: " Data Collection ",
        HTwo: "and Ingestion",
        text: [
            {
                H1: "User Research",
                P: 'In-depth research to uncover user preferences, pain points, and expectations.'
            },
            {
                H1: " User Personas",
                P: 'Crafting detailed user personas to guide design decisions.'
            },
            {
                H1: " User Journey Mapping",
                P: "Mapping out the user's interactions and experiences to optimize each touchpoint."
            },
        ]
    },
    {
        position: "right",
        img: '/services/service2.svg',
        Hthree: "In an era where users access content across various devices and screen sizes, responsive design is crucial. ",
        HOne: "Responsive",
        HTwo: "  Design",
        text: [{
            H1: " Responsive Web Design",
            P: 'Creating web experiences that adapt to different screen sizes and orientations.'
        },
        {
            H1: "  Mobile App Design",
            P: 'Designing mobile apps that provide an exceptional experience on smartphones and tablets.'
        },
        {
            H1: "Cross-Platform Compatibility",
            P: 'Ensuring a consistent and engaging experience across multiple platforms.'
        },
        ]
    },

    {
        position: "left",
        img: '/services/service3.svg',
        Hthree: "In an era where users access content across various devices and screen sizes, responsive design is crucial.",
        HOne: " Wireframing",
        HTwo: "  and Prototyping",
        text: [{
            H1: "Responsive Web Design",
            P: 'Creating web experiences that adapt to different screen sizes and orientations.'
        },
        {
            H1: "  Mobile App Design",
            P: 'Designing mobile apps that provide an exceptional experience on smartphones and tablets.'
        },
        {
            H1: "Cross-Platform Compatibility",
            P: 'Ensuring a consistent and engaging experience across multiple platforms.'
        },
        ]
    },

    {
        position: "right",
        img: '/services/service4.svg',
        Hthree: "bg-white",
        HOne: " Wireframing and Prototyping",
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
            {servicesontent.map((value, index) => {
                return <SingleContainer position={value.position} Hthree={value.Hthree} img={value.img} HOne={value.HOne} HTwo={value.HTwo} text={value.text} key={index} />
            })}
            <ServiceWhyUs />
        </>
    )
}

export default ServiceDigitalContainar