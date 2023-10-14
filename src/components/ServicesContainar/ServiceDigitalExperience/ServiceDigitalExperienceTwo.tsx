import React from 'react'
import SingleContainer from '../../servicePage/SingleContainer'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';


const servicesontent = [
  {
    position: "left",
    img: '/services/DigitalExperience/DEG5.svg',
    Hthree: "Choose the right e-commerce platform that aligns with your business goals. ",
    HOne: "E-commerce",
    HTwo: "Platforms",
    text: [
      {
        H1: "Platform Selection",
        P: ' Guiding you in selecting the best e-commerce platform for your specific needs.'
      },
      {
        H1: " Platform Customization",
        P: 'Tailoring the platform to meet your unique requirements.'
      },
      {
        H1: " Migration and Upgrades",
        P: "Seamlessly transitioning to a new platform or upgrading your existing one."
      },
    ]
  },
  {
    position: "right",
    img: '/services/DigitalExperience/DEG6.svg',
    Hthree: "Create user-friendly and visually appealing online stores that engage and convert visitors.",
    HOne: " User-Centric",
    HTwo: "  Design",
    text: [{
      H1: "Responsive Web Design",
      P: 'Ensuring your e-commerce site looks and works perfectly on all devices.'
    },
    {
      H1: "Mobile Commerce",
      P: 'Designing mobile shopping experiences optimized for smartphones and tablets.'
    },
    {
      H1: "Conversion Rate Optimization",
      P: 'Enhancing your website to boost conversion rates.'
    },
    ]
  },
  {
    position: "left",
    img: '/services/DigitalExperience/DEG7.svg',
    Hthree: "Powerful and scalable e-commerce development is at the core of our services",
    HOne: " E-commerce ",
    HTwo: " Development",
    text: [{
      H1: " Custom Development",
      P: 'Building custom e-commerce solutions tailored to your unique needs.'
    },
    {
      H1: "Integration",
      P: 'Connecting your e-commerce platform with payment gateways, CRMs, and other systems.'
    },
    {
      H1: " Checkout and Cart Optimization",
      P: 'Streamlining the checkout process for a seamless user experience.'
    },
    ]
  },
  {
    position: "right",
    img: '/services/DigitalExperience/DEG8.svg',
    Hthree: "We prioritize the security and compliance of your online store",
    HOne: " Security ",
    HTwo: " and Compliance",
    text: [{
      H1: "Payment Security",
      P: 'Implementing secure payment gateways and encryption.'
    },
    {
      H1: "Data Protection",
      P: 'Ensuring the protection of customer data and compliance with regulations.'
    },
    {
      H1: " Scalable and Reliable Hosting",
      P: 'Providing secure and reliable hosting solutions.'
    },
    ]
  }, 
  {
    position: "right",
    img: '/services/DigitalExperience/DEG9.svg',
    Hthree: "Attract and retain customers with targeted digital marketing strategies",
    HOne: " Digital Marketing ",
    HTwo: " for E-commerce",
    text: [{
      H1: "Search Engine Optimization (SEO)",
      P: ' Boost your online store s visibility in search engine results.'
    },
    {
      H1: " Pay-Per-Click (PPC) Advertising",
      P: ' Run effective paid advertising campaigns to drive traffic and sales.'
    },
    {
      H1: "Content Marketing",
      P: 'Create valuable, relevant content that engages and informs your audience.'
    },
    ]
  },
];




const ServiceContainer = () => {

  return (
    <>
      {servicesontent.map((value, index) => {
        return <SingleContainer position={value.position} Hthree={value.Hthree} img={value.img} HOne={value.HOne} HTwo={value.HTwo} text={value.text} key={index} />
      })}
      <ServiceWhyUs />
    </>
  )
}

export default ServiceContainer