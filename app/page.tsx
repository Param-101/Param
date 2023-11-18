import { Hero, About, Projects, Navbar, Email, Footer } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className=" mt-24 container mx-auto px-12 py-4">
        <Hero />
        <About />
        <Projects/>
        <Email />
      </div>
      <Footer />
    </main>
  )
}
