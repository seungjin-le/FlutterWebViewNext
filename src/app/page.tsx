'use client'

import Navigation from './portfolio/components/Navigation'
import Hero from './portfolio/components/Hero'
import About from './portfolio/components/About'
import Skills from './portfolio/components/Skills'
import Projects from './portfolio/components/Projects'
import Contact from './portfolio/components/Contact'
import Footer from './portfolio/components/Footer'

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
