import React from 'react'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';
import ServiceSecondPage from '@/components/servicePage/ServiceSecondPage';
import ServiceHeader from '@/components/servicePage/ServiceHeader';


const heading = "Unleash the Power "
const OneHeading = "of Technology with Newtok"
const headingTwo = "Low-Code/No-"
const OneHeadingTwo = "Code Development"
const Paragraph = "At Newtok, we understand that in today's fast-paced digital world, the ability to develop and deploy applications quickly can mean the difference between success and stagnation. That's why we offer a wide range of application development solutions to cater to your diverse needs. Whether you prefer the speed and simplicity of Low-Code/No-Code development or require the precision and customization of Custom Application Development, we have you covered."



const ServiceTwo = () => {
    return (
        <>
         <ServiceHeader OneHeading={OneHeading} OneHeadingTwo={OneHeadingTwo} heading={heading} headingTwo={headingTwo} Paragraph={Paragraph} />
            <ServiceSecondPage />
            <ServiceWhyUs />
        </>
    )
}

export default ServiceTwo