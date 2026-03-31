'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = NAV_ITEMS.map((item) => item.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/80 border-dark-border border-b backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          Portfolio<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`relative rounded-lg px-4 py-2 text-sm transition-colors ${
                activeSection === href.slice(1)
                  ? 'text-accent-light'
                  : 'text-muted hover:text-white'
              }`}
            >
              {label}
              {activeSection === href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="bg-accent absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
