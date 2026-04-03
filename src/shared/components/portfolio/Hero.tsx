'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-violet-600/8 blur-[100px]" />
      </div>

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <span className="bg-accent-dim text-accent-light mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 px-4 py-1.5 text-sm font-medium">
            <span className="bg-accent inline-block h-1.5 w-1.5 animate-pulse rounded-full" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-5xl leading-tight font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Creative Developer
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            & Designer
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-muted mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
        >
          사용자 경험을 최우선으로 하는 풀스택 개발자입니다.
          <br className="hidden sm:block" />
          React, Next.js, TypeScript를 활용한 모던 웹 개발을 합니다.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-accent hover:bg-accent-light inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5"
          >
            프로젝트 보기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="border-dark-border hover:bg-dark-hover inline-flex items-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          >
            연락하기
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-subtle text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="border-dark-border h-8 w-5 rounded-full border-2"
          >
            <div className="bg-muted mx-auto mt-1.5 h-1.5 w-1 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
