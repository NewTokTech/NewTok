import React from 'react'
import SingleContainer from '../../servicePage/SingleContainer'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';
import ServiceHeader from '@/components/servicePage/ServiceHeader';





const servicesontent = [
    {
        position: "left",
        img: '/services/DigitalExperience/DEG1.svg',
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
        img: '/services/DigitalExperience/DEG2.svg',
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
        img: '/services/DigitalExperience/DEG3.svg',
        Hthree: "To visualize and refine your design concepts",
        HOne: " Wireframing",
        HTwo: "  and Prototyping",
        text: [{
            H1: "Wireframing",
            P: 'Creating basic structures and layouts to outline the content and user flow.'
        },
        {
            H1: "  Prototyping",
            P: ' Building interactive prototypes for user testing and validation.Visual Design Our visual designers are skilled in crafting captivating, on-brand experiences. Our services encompass'
        },
        {
            H1: " UI Style Guide",
            P: ' Defining a cohesive set of design elements, such as color schemes, typography, and iconography.'
        },
        {
            H1: "Graphic Design",
            P: ' Defining a cohesive set of design elements, such as color schemes, typography, and iconography.'
        },
        {
            H1: " Animation and Microinteractions",
            P: '  Incorporating subtle animations and microinteractions to improve user engagement.'
        },
        ]
    },
    {
        position: "right",
        img: '/services/DigitalExperience/DEG4.svg',
        Hthree: "We believe in iterative design",
        HOne: "User Testing ",
        HTwo: "  and Feedback",
        text: [{
            H1: "Usability Testing",
            P: 'Running tests to gather user feedback and refine the design.'
        },
        {
            H1: "A/B Testing",
            P: 'Comparing variations of your design to determine which performs better.'
        },
        ]
    },
];

const heading = "Elevate User Expe"
const OneHeading = "riences with Newtok"
const headingTwo = null
const OneHeadingTwo = null
const Paragraph = "In a digital world where user experience is paramount, having a well-crafted User Interface (UI) and User Experience (UX) can make the difference between a successful and an underperforming application or website. At Newtok, we are passionate about creating intuitive, visually appealing, and user-friendly designs that captivate users and drive engagement."


const ServiceContainer = () => {
    return (
        <>
            <ServiceHeader OneHeading={OneHeading} OneHeadingTwo={OneHeadingTwo} heading={heading} headingTwo={headingTwo} Paragraph={Paragraph} />
            {servicesontent.map((value, index) => {
                return <SingleContainer position={value.position} Hthree={value.Hthree} img={value.img} HOne={value.HOne} HTwo={value.HTwo} text={value.text} key={index} />
            })}
            <ServiceWhyUs />
        </>
    )
}

export default ServiceContainer