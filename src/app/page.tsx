import AboutClient from '@/components/testimonials/Testimonials'
import Banner from '@/components/banner/Banner'
import Service from '@/components/services/services'
import About from '@/components/about/About'
import OurClients from '@/components/clients/clients'

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
