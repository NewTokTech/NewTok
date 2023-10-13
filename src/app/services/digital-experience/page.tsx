import React from "react";
import ServiceContainer from "@/components/ServicesContainar/ServiceDigitalExperience/ServiceContainer";
import ServiceDigitalExperienceTwo from "@/components/ServicesContainar/ServiceDigitalExperience/ServiceDigitalExperienceTwo";
import ServiceMain from "@/components/servicePage/ServiceMain";

const Heding = ""
const Paragraph = ""

const digitalExperience = () => {

  return (
    <>

      <ServiceMain heading={Heding} Paragraph={Paragraph} componentA={<ServiceContainer />} componentB={<ServiceDigitalExperienceTwo />} />

    </>
  )
}

export default digitalExperience