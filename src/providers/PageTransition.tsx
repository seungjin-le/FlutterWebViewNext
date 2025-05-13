'use client'

import { animate, AnimatePresence, motion, Variants } from 'framer-motion'
import { TransitionRouter } from 'next-transition-router'
import { usePathname } from 'next/navigation'
import { ReactNode, useRef } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
}

export default function PageTransition({ children }: PageTransitionProps) {
  const path: string = usePathname()
  const wrapperRef = useRef<HTMLDivElement>(null!)
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(wrapperRef.current, { opacity: [1, 0] }, { duration: 0.5, onComplete: next })
      }}
      enter={(next) => {
        animate(wrapperRef.current, { opacity: [0, 1] }, { duration: 0.5, onComplete: next })
      }}
    >
      <div ref={wrapperRef}>{children}</div>
    </TransitionRouter>
  )
}
