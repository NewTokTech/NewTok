import React from 'react'
import SingleContainer from '../../servicePage/SingleContainer'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';
import ServiceHeader from '@/components/servicePage/ServiceHeader';
import ServiceLastHeading from '@/components/servicePage/ServiceLastHeading';

const servicesontent = [
  {
    position: "left",
    img: '/services/DataAI/DA7.svg',
    Hthree: "Leverage the power of Machine Learning to extract valuable insights and automate tasks.Our services encompass",
    HOne: " Machine Lea",
    HTwo: "rning Solutions",
    text: [
      {
        H1: "Predictive Modeling",
        P: 'Develop predictive models to anticipate trends, make recommendations, and optimize processes.'
      },
      {
        H1: " Natural Language Processing (NLP)",
        P: 'Enable machines to understand, interpret, and generate human language for text analysis and more.'
      },
      {
        H1: "Image and Video Analysis",
        P: "Extract information and insights from images and videos through computer vision."
      },
      {
        H1: " Recommendation Systems",
        P: " Enhance user experiences with personalized recommendations."
      },
      {
        H1: " Anomaly Detection",
        P: "Identify unusual patterns or anomalies in your data, crucial for fraud detection and quality control."
      }
    ]
  },
  {
    position: "right",
    img: '/services/DataAI/DA8.svg',
    Hthree: "Artificial Intelligence takes your data to the next level, offering intelligent automation and decision support",
    HOne: " Artificial Intel",
    HTwo: " ligence Services",
    text: [{
      H1: "AI Chatbots and Virtual Assistants",
      P: 'Enhance customer service and streamline interactions with AI-powered chatbots'
    },
    {
      H1: " AI-Driven Automation",
      P: 'Automate routine tasks and workflows to increase efficiency.'
    },
    {
      H1: "Cognitive Computing",
      P: ' Develop AI systems that can understand, reason, and learn to solve complex problems.'
    },
    {
      H1: " AI Strategy Development",
      P: 'Collaborate with our experts to define your AI vision and strategy.'
    },
    ]
  },
  {
    position: "left",
    img: '/services/DataAI/DA9.svg',
    Hthree: "Uncover hidden patterns, insights, and knowledge from your data with our data science services",
    HOne: " Data Science ",
    HTwo: " and Analytics",
    text: [{
      H1: "Data Exploration and Visualization",
      P: 'Understand your data with compelling visualizations and exploratory analysis.'
    },
    {
      H1: "Descriptive and Prescriptive Analytics",
      P: 'Derive actionable insights and make informed decisions.'
    },
    {
      H1: "Big Data Analytics",
      P: 'Handle and analyze large datasets to extract valuable information.'
    },
    ]
  },
  // {
  //   position: "right",
  //   img: '/services/DataAI/DA9.svg',
  //   Hthree: "Uncover hidden patterns, insights, and knowledge from your data with our data science services",
  //   HOne: " Data Science",
  //   HTwo: "  and Analytics",
  //   text: [{
  //     H1: " Data Exploration and Visualization",
  //     P: 'Understand your data with compelling visualizations and exploratory analysis.'
  //   },
  //   {
  //     H1: "Descriptive and Prescriptive Analytics",
  //     P: ' Derive actionable insights and make informed decisions.'
  //   },
  //   {
  //     H1: "Big Data Analytics",
  //     P: 'Handle and analyze large datasets to extract valuable information.'
  //   },
  //   ]
  // },
  {
    position: "right",
    img: '/services/DataAI/DA10.svg',
    Hthree: "Our team can create customized ML and AI models that address your specific business challenges",
    HOne: " Custom Model ",
    HTwo: " Development",
    text: [{
      H1: " Custom Algorithm Development",
      P: 'Develop algorithms tailored to your unique needs.'
    },
    {
      H1: "Model Training and Deployment",
      P: ' Train and deploy ML/AI models that continuously improve.'
    },
    {
      H1: "Continuous Model Monitoring",
      P: ' Ensure your models remain effective and accurate over time.'
    },
    ]
  },
];

const heading = "Unleash the Power "
const OneHeading = "of Data with Newtok"
const headingTwo = "Our Advanced Analytics"
const OneHeadingTwo = "and AI Expertise"
const Paragraph = "In today's data-driven landscape, advanced analytics, machine learning (ML), and artificial intelligence (AI) are the driving forces behind data-driven decision-making, automation, and innovation. At Newtok, we offer cutting-edge Advanced Analytics, ML, and AI services to help organizations harness the full potential of their data, driving efficiency and unlocking insights."

const whyUsArray = [
  { head: "Expertise", p: "Our team consists of experienced data scientists and AI/ML engineers." },
  { head: "Customization", p: "Tailor our ML/AI solutions to meet your specific business requirements." },
  { head: " Scalability", p: " Our solutions are designed to scale with your data and business growth." },
  { head: " Data Security", p: " We prioritize data security and compliance, ensuring the privacy and protection of your data." },
  { head: "Collaboration", p: "Work closely with our experts to develop data strategies that align with your business objectives." },
];


const h = "Unlock the Potential of Advanced Analytics - ML/AI"
const para = "Discover new possibilities and optimize your operations with Newtok's Advanced Analytics - ML/AI services. Whether you need predictive modeling, AI-driven automation, or customized ML models, our team is ready to empower your organization."

const ServicesAiTwo = () => {
  return (
    <>
      <ServiceHeader OneHeading={OneHeading} OneHeadingTwo={OneHeadingTwo} heading={heading} headingTwo={headingTwo} Paragraph={Paragraph} />
      {/* <div className='space-y- xl:mt-0 lg:mt-52'> */}
      {servicesontent.map((value, index) => {
        return <SingleContainer position={value.position} Hthree={value.Hthree} img={value.img} HOne={value.HOne} HTwo={value.HTwo} text={value.text} key={index} />
      })}
      <ServiceWhyUs whyUsArray={whyUsArray} />
      {/* </div> */}
      <ServiceLastHeading h={h} para={para} />
    </>
  )
}

export default ServicesAiTwo