
import ServicesDigitalTwo from "@/components/ServicesContainar/serviesDitital/ServicesDigitalTwo";
import ServiceDigitalContainar from "@/components/ServicesContainar/serviesDitital/ServiceDigitalContainar";
import ServiceMain from "@/components/servicePage/ServiceMain";

const Heading = "Digital "
const HeadingTwo = "engineering"
const Paragraph = "At Newtok, we are at the forefront of revolutionizing enterprise solutions across a multitude of industries, including health, construction,"
const BtnOne = "Enterprise solutions"
const BtnTwo = "Application development"

const DigitalEngineering = () => {

  return (
    <>
     <ServiceMain btnOne={BtnOne} btnTwo={BtnTwo} heading={Heading}  headingTwo={HeadingTwo} Paragraph={Paragraph} componentA={<ServiceDigitalContainar />} componentB={<ServicesDigitalTwo />} />
    
    </>
  )
}

export default DigitalEngineering