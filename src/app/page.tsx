import AboutClient from '@/components/testimonials/Testimonials'
import Banner from '@/components/baneer/Baneer'
import OurClients from '@/components/clients/clients'
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
