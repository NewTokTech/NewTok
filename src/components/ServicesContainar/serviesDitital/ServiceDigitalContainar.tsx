import React from 'react'
import SingleContainer from '../../servicePage/SingleContainer'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';
import ServiceHeader from '@/components/servicePage/ServiceHeader';

const servicesontent = [
    {
      position: "left",
      img: '/services/DigitalEngineering/service1.svg',
      Hthree: "bg-white",
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
      img: '/services/DigitalEngineering/service2.svg',
      Hthree: "bg-white",
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
      img: '/services/DigitalEngineering/service3.svg',
      Hthree: "bg-white",
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
      img: '/services/DigitalEngineering/service4.svg',
      Hthree: "bg-white",
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

const heading = "On Time, Every Solution,"
const OneHeading = "Every Enterprise"
const headingTwo = "Major "
const OneHeadingTwo = "Industries"
const Paragraph = "At Newtok, we are at the forefront of revolutionizing enterprise solutions across a multitude of industries, including health, construction, education, manufacturing, and banking. Our mission is to empower organizations by providing cutting-edge software that streamlines operations, enhances productivity, and fosters innovation.  Our Comprehensive Enterprise Solutions"



const ServiceDigitalContainar = () => {
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

export default ServiceDigitalContainar