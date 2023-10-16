import React from 'react'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';
import ServiceSecondPage from '@/components/servicePage/ServiceSecondPage';
import ServiceHeader from '@/components/servicePage/ServiceHeader';


const heading = "Unleash the Power "
const OneHeading = "of Technology with Newtok"
const headingTwo = "Low-Code/No-"
const OneHeadingTwo = "Code Development"
const Paragraph = "At Newtok, we understand that in today's fast-paced digital world, the ability to develop and deploy applications quickly can mean the difference between success and stagnation. That's why we offer a wide range of application development solutions to cater to your diverse needs. Whether you prefer the speed and simplicity of Low-Code/No-Code development or require the precision and customization of Custom Application Development, we have you covered."


// const whyUsArray = [
//     { head: "Expertise", p: " Our designers are highly experienced and skilled in UI/UX best practices." },
//     { head: "User-Centered Approach", p: " We prioritize user needs and behavior to create designs that resonate." },
//     { head: " Collaboration", p: "We work closely with your team to ensure our designs align with your business objectives." },
//     { head: "Customization", p: " Our designs are tailored to your brand and specific project requirements." },
//     { head: " Conversion-Driven", p: " Our designs are optimized to enhance conversions and user engagement." },
//   ];
  

  const whyUsArray = [
    { head: " Expertise", p: " Our development teams bring years of experience to your projects." },
    { head: " Flexibility", p: "Choose the development approach that best aligns with your project's needs." },
    { head: " Quality", p: " We take pride in delivering high-quality, robust applications." },
    { head: " Collaboration", p: " We work closely with you at every stage to ensure the project aligns with your vision." },
    { head: " Support", p: "Our commitment to your success doesn't end with the project delivery." },
  ];

const ServiceTwo = () => {
    return (
        <>
         <ServiceHeader OneHeading={OneHeading} OneHeadingTwo={OneHeadingTwo} heading={heading} headingTwo={headingTwo} Paragraph={Paragraph} />
            <ServiceSecondPage />
            <ServiceWhyUs whyUsArray={whyUsArray} />
        </>
    )
}

export default ServiceTwo