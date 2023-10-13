import ServiceDigitalContainar from "@/components/ServicesContainar/serviesDitital/ServiceDigitalContainar";
import ServicesDigitalTwo from "@/components/ServicesContainar/serviesDitital/ServicesDigitalTwo";
import ServiceMain from "@/components/servicePage/ServiceMain";

const Heding = ""
const Paragraph = ""

const DigitalEngineering = () => {

  return (
    <>
     
        <ServiceMain  heading={Heding} Paragraph={Paragraph}  componentA={<ServiceDigitalContainar />} componentB={<ServicesDigitalTwo />} />
    
    </>
  )
}

export default DigitalEngineering