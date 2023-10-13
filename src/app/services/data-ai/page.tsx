import ServiceDataAiContainar from "@/components/ServicesContainar/ServicesAI/ServiceDataAiContainar";
import ServicesAiTwo from "@/components/ServicesContainar/ServicesAI/ServicesAiTwo";
import ServiceMain from "@/components/servicePage/ServiceMain";
import React from "react";



const Heding = ""
const Paragraph = ""
const DataAI = () => {

    return (
        <>
            <>
                <ServiceMain heading={Heding} Paragraph={Paragraph} componentA={<ServiceDataAiContainar />} componentB={<ServicesAiTwo />} />
            </>
        </>
    );
}

export default DataAI