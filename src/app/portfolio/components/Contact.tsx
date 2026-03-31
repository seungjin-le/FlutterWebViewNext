'use client'

import { motion } from 'framer-motion'

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:hello@example.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">함께 일해요</h2>
          <p className="text-muted mx-auto mt-4 max-w-lg text-lg">
            새로운 프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-card border-dark-border mt-12 rounded-2xl border p-8 sm:p-12"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="text-left">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                  이름
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="홍길동"
                  className="border-dark-border bg-dark placeholder:text-subtle focus:border-accent w-full rounded-xl border px-4 py-3 text-sm text-white outline-none transition-colors"
                />
              </div>
              <div className="text-left">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                  이메일
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  className="border-dark-border bg-dark placeholder:text-subtle focus:border-accent w-full rounded-xl border px-4 py-3 text-sm text-white outline-none transition-colors"
                />
              </div>
            </div>
            <div className="text-left">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                메시지
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="프로젝트에 대해 알려주세요..."
                className="border-dark-border bg-dark placeholder:text-subtle focus:border-accent w-full resize-none rounded-xl border px-4 py-3 text-sm text-white outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-light w-full rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5"
            >
              메시지 보내기
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {SOCIAL_LINKS.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-dark-border text-muted hover:border-accent/30 hover:text-accent-light flex h-12 w-12 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5"
              aria-label={name}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
