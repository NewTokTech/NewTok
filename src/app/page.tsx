import AboutClient from '@/components/testimonials/Testimonials'
import Banner from '@/components/banner/Banner'
import OurClients from '@/components/clients/Clients'
import Service from '@/components/services/services'

export default function Home() {
  return (
    <div>
     <Banner/>
     <OurClients/>
     <Service/>
     <AboutClient/>
    </div>
  )
}
