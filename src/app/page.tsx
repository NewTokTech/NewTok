import AboutClient from '@/components/AboutClient/AboutClient'
import About from '@/components/about/About'
import Banner from '@/components/baneer/Banner'
import OurClients from '@/components/ourClients/OurClients'
import Service from '@/components/services/services'

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
