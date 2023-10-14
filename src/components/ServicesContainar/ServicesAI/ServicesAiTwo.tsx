import React from 'react'
import SingleContainer from '../../servicePage/SingleContainer'
import ServiceWhyUs from '../../servicePage/ServiceWhyUs';

const servicesontent = [
  {
    position: "left",
    img: '/services/DataAI/DA6.svg',
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
    img: '/services/DataAI/DA7.svg',
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
    img: '/services/DataAI/DA8.svg',
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
  {
    position: "right",
    img: '/services/DataAI/DA9.svg',
    Hthree: "Uncover hidden patterns, insights, and knowledge from your data with our data science services",
    HOne: " Data Science",
    HTwo: "  and Analytics",
    text: [{
      H1: " Data Exploration and Visualization",
      P: 'Understand your data with compelling visualizations and exploratory analysis.'
    },
    {
      H1: "Descriptive and Prescriptive Analytics",
      P: ' Derive actionable insights and make informed decisions.'
    },
    {
      H1: "Big Data Analytics",
      P: 'Handle and analyze large datasets to extract valuable information.'
    },
    ]
  },
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

const ServicesAiTwo = () => {
  return (
    <>
      {/* <div className='space-y- xl:mt-0 lg:mt-52'> */}
      {servicesontent.map((value, index) => {
        return <SingleContainer position={value.position} Hthree={value.Hthree} img={value.img} HOne={value.HOne} HTwo={value.HTwo} text={value.text} key={index} />
      })}
      <ServiceWhyUs />
      {/* </div> */}
    </>
  )
}

export default ServicesAiTwo