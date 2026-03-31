'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '10+', label: 'Happy Clients' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">About</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            안녕하세요,
            <br />
            개발자 <span className="text-accent-light">홍길동</span>입니다.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <p className="text-muted text-lg leading-relaxed">
              사용자 중심의 웹 경험을 설계하고 구현하는 것에 열정을 가진 풀스택 개발자입니다.
              깔끔한 코드와 직관적인 UI/UX를 추구하며, 최신 기술 트렌드를 프로젝트에 적극적으로
              도입합니다.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Next.js App Router, TypeScript, Tailwind CSS를 주로 활용하며,
              AWS 인프라 구축과 CI/CD 파이프라인 설정까지 전체 개발 사이클을 다룹니다.
            </p>

            <div className="border-dark-border flex gap-6 border-t pt-6">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-accent text-2xl font-bold">{value}</div>
                  <div className="text-subtle mt-1 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {[
              { label: 'Frontend', items: 'React · Next.js · TypeScript · Tailwind CSS' },
              { label: 'Backend', items: 'Node.js · Express · REST API · PostgreSQL' },
              { label: 'DevOps', items: 'AWS · Docker · GitHub Actions · Nginx' },
              { label: 'Design', items: 'Figma · Framer Motion · Responsive Design' },
            ].map(({ label, items }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-dark-card border-dark-border group rounded-xl border p-5 transition-colors hover:border-indigo-500/30"
              >
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="text-subtle mt-1 text-sm">{items}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
