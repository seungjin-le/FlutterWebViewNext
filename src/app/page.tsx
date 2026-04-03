'use client'

import Navigation from '@/shared/components/portfolio/Navigation'
import Hero from '@/shared/components/portfolio/Hero'
import About from '@/shared/components/portfolio/About'
import Skills from '@/shared/components/portfolio/Skills'
import Projects from '@/shared/components/portfolio/Projects'
import Contact from '@/shared/components/portfolio/Contact'
import Footer from '@/shared/components/portfolio/Footer'

export default function Home() {
  return (
    <div className="bg-dark min-h-dvh">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
