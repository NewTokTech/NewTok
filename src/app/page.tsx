import AboutClient from '@/components/testimonials/Testimonials'
import Banner from '@/components/banner/Banner'
import OurClients from '@/components/clients/Clients'
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
