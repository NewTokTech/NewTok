import React from 'react'
import SingleContainer from '../../servicePage/SingleContainer'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';
import ServiceHeader from '@/components/servicePage/ServiceHeader';


const servicesontent = [
  {
    position: "left",
    img: '/services/DataAI/DA1.svg',
    Hthree: "Collecting data from various sources is the first step in making data-driven decisions.",
    HOne: " Data Collection ",
    HTwo: "and Ingestion",
    text: [
      {
        H1: "Data Sourcing",
        P: 'Identifying and collecting data from diverse sources, including databases, APIs, sensors, and more.'
      },
      {
        H1: " Data Ingestion",
        P: ' Streamlining the process of importing data into your systems efficiently and securely'
      },
    ]
  },
  {
    position: "right",
    img: '/services/DataAI/DA2.svg',
    Hthree: "Raw data often requires refining to be usable.",
    HOne: " Data Transfor",
    HTwo: " mation and Cleaning",
    text: [{
      H1: "Data Cleaning",
      P: 'Removing inconsistencies, duplicates, and errors from datasets.'
    },
    {
      H1: "Data Transformation",
      P: 'Converting data into a structured format that is suitable for analysis.'
    },
    ]
  },
  {
    position: "left",
    img: '/services/DataAI/DA3.svg',
    Hthree: "Efficient data storage is essential for data accessibility and scalability. ",
    HOne: " Data Storage ",
    HTwo: " and Warehousing",
    text: [{
      H1: "Data Warehousing",
      P: 'Designing, implementing, and managing data warehouses for structured and unstructured data.'
    },
    {
      H1: "Cloud-Based Storage",
      P: 'Leveraging cloud platforms for scalable and cost-effective data storage solutions.'
    },
    ]
  },
  {
    position: "right",
    img: '/services/DataAI/DA4.svg',
    Hthree: "Connect and integrate data from different sources and applications.  ",
    HOne: " Data Integration ",
    HTwo: " and API Development",
    text: [{
      H1: " API Development",
      P: 'Building custom APIs to enable data exchange between systems.'
    },
    {
      H1: " Integration Services",
      P: 'Ensuring data integration across platforms and applications for seamless operations.'
    },
    ]
  },

  {
    position: "left",
    img: '/services/DataAI/DA5.svg',
    Hthree: "Processing and transforming data is crucial for analysis and reporting. ",
    HOne: " Data Proce",
    HTwo: " ssing and ETL",
    text: [{
      H1: "  ETL (Extract, Transform, Load)",
      P: 'Automating the extraction, transformation, and loading of data for analysis.'
    },
    {
      H1: "  Data Pipelines",
      P: 'Creating robust data pipelines to ensure continuous and reliable data flow.'
    },
    ]
  },
  {
    position: "right",
    img: '/services/DataAI/DA6.svg',
    Hthree: "Handle vast amounts of data and process it in real-time. ",
    HOne: " Big Data and ",
    HTwo: " Real-time Processing",
    text: [{
      H1: "  Big Data Solutions",
      P: 'Leveraging technologies like Hadoop, Spark, and NoSQL databases.'
    },
    {
      H1: " Real-time Data Processing",
      P: 'Analyzing and acting on data as it is generated.'
    },
    ]
  },
];

const heading = "Unlock the Power "
const OneHeading = "of Data with Newtok"
const headingTwo = "Our Data Engineering"
const OneHeadingTwo =" Expertise"
const Paragraph = "In today's data-driven world, managing and harnessing data effectively is the key to gaining a competitive edge. At Newtok, we offer comprehensive Data Engineering services to help organizations structure, process, and utilize their data for insights, decision-making, and innovation."



const ServiceDataAiContainar = () => {
  return (
    <>
      {/* <div className='space-y- xl:mt-0 lg:mt-52'> */}
      <ServiceHeader OneHeading={OneHeading} OneHeadingTwo={OneHeadingTwo} heading={heading} headingTwo={headingTwo} Paragraph={Paragraph} />
      {servicesontent.map((value, index) => {
        return <SingleContainer position={value.position} Hthree={value.Hthree} img={value.img} HOne={value.HOne} HTwo={value.HTwo} text={value.text} key={index} />
      })}
      <ServiceWhyUs />
      {/* </div> */}
    </>
  )
}

export default ServiceDataAiContainar