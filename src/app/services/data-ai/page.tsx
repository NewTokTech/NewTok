import ServiceDataAiContainar from "@/components/ServicesContainar/ServicesAI/ServiceDataAiContainar";
import ServicesAiTwo from "@/components/ServicesContainar/ServicesAI/ServicesAiTwo";
import ServiceMain from "@/components/servicePage/ServiceMain";
import React from "react";
const Heading = "Data"
const HeadingTwo = "& AI"
const Paragraph = "At Newtok, we are at the forefront of revolutionizing enterprise solutions across a multitude of industries, including health, construction,"
const BtnOne = "Data engineering"
const BtnTwo = "Advanced Analytics - AI/ML"

const DataAI = () => {

    return (
        <>
            <>
                <ServiceMain btnOne={BtnOne} btnTwo={BtnTwo} heading={Heading}  headingTwo={HeadingTwo} Paragraph={Paragraph} componentA={<ServiceDataAiContainar />} componentB={<ServicesAiTwo />} />
            </>
        </>
    );
}

export default DataAI