import { Header } from '@/components/header/Index'
import { About } from '@/components/home/about/Index'
import { Hero } from '@/components/home/hero/Index'
import { Qualities } from '@/components/home/qualities/Index'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Qualities />
      <About />
    </>
  )
}
