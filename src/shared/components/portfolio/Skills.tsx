'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  color: string
}

const SKILL_GROUPS: { title: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90, color: '#6366f1' },
      { name: 'TypeScript', level: 85, color: '#818cf8' },
      { name: 'Tailwind CSS', level: 92, color: '#22d3ee' },
      { name: 'Framer Motion', level: 78, color: '#a78bfa' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 82, color: '#34d399' },
      { name: 'REST API Design', level: 88, color: '#6ee7b7' },
      { name: 'PostgreSQL', level: 75, color: '#2dd4bf' },
      { name: 'Redis', level: 65, color: '#5eead4' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'AWS (S3, CloudFront)', level: 80, color: '#fbbf24' },
      { name: 'Docker', level: 75, color: '#f59e0b' },
      { name: 'GitHub Actions', level: 78, color: '#fcd34d' },
      { name: 'Git', level: 90, color: '#d97706' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">기술 스택</h2>
          <p className="text-muted mx-auto mt-4 max-w-lg text-lg">
            다양한 기술을 활용해 최적의 솔루션을 제공합니다.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {SKILL_GROUPS.map(({ title, skills }, gi) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-card border-dark-border rounded-2xl border p-6"
            >
              <h3 className="mb-6 text-lg font-semibold text-white">{title}</h3>
              <div className="space-y-5">
                {skills.map(({ name, level, color }) => (
                  <div key={name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-white">{name}</span>
                      <span className="text-subtle text-xs">{level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
