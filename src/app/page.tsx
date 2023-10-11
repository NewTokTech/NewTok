import AboutClient from '@/components/AboutClient/AboutClient'
import Banner from '@/components/baneer/Banner'
import OurClients from '@/components/ourClients/OurClients'
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
