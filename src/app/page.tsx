import { Clients } from '@/components/clients/Index'
import { Header } from '@/components/header/Index'
import { About } from '@/components/home/about/Index'
import { Faq } from '@/components/home/faq/Index'
import { Hero } from '@/components/home/hero/Index'
import { Qualities } from '@/components/home/qualities/Index'
import { Services } from '@/components/home/services/Index'
import { WorkWithUs } from '@/components/home/work-with-us/Index'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Qualities />
      <About />
      <Services />
      <Faq />
      <WorkWithUs />
      <Clients />
    </>
  )
}
