import AboutClient from '@/components/testimonials/Testimonials'
import Banner from '@/components/baneer/Baneer'
import OurClients from '@/components/clients/clients'
import Service from '@/components/services/services'
import About from '@/components/about/About'

export default function Home() {
  return (
    <div>
     <Banner/>
     <About/>
     <OurClients/>
     <Service/>
     <AboutClient/>
    </div>
  )
}
