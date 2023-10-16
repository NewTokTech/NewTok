import React from "react";
import ServiceContainer from "@/components/ServicesContainar/ServiceDigitalExperience/ServiceContainer";
import ServiceDigitalExperienceTwo from "@/components/ServicesContainar/ServiceDigitalExperience/ServiceDigitalExperienceTwo";
import ServiceMain from "@/components/servicePage/ServiceMain";

const Heading = "Digital "
const HeadingTwo = "Experience"
const Paragraph = "At Newtok, we are at the forefront of revolutionizing enterprise solutions across a multitude of industries, including health, construction,"
const BtnOne = "UI/UX"
const BtnTwo = "Digital Commerce"
const digitalExperience = () => {

  return (
    <>

      <ServiceMain btnOne={BtnOne} btnTwo={BtnTwo} heading={Heading}  headingTwo={HeadingTwo} Paragraph={Paragraph} componentA={<ServiceContainer />} componentB={<ServiceDigitalExperienceTwo />} />

    </>
  )
}

export default digitalExperience