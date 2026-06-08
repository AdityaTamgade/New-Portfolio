import { Navbar } from '@/components/navbar'
import { CursorGlow } from '@/components/cursor-glow'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'

import { Experience } from '@/components/experience'
import { Resume } from '@/components/resume'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
