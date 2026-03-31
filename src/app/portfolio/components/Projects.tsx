'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  tags: string[]
  gradient: string
  link?: string
  github?: string
}

const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Next.js App Router 기반의 풀스택 이커머스 플랫폼. SSR과 ISR을 활용한 빠른 페이지 로딩과 Stripe 결제 연동.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe'],
    gradient: 'from-indigo-500 to-violet-500',
    link: '#',
    github: '#',
  },
  {
    title: 'Real-time Dashboard',
    description:
      'WebSocket 기반 실시간 데이터 모니터링 대시보드. Chart.js와 D3.js를 활용한 인터랙티브 차트 시각화.',
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js', 'Redis'],
    gradient: 'from-cyan-500 to-teal-500',
    link: '#',
    github: '#',
  },
  {
    title: 'AI Content Generator',
    description:
      'OpenAI API를 활용한 AI 콘텐츠 생성 툴. 마크다운 에디터와 실시간 미리보기, 히스토리 관리 기능 포함.',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'Tailwind CSS', 'Vercel'],
    gradient: 'from-amber-500 to-orange-500',
    link: '#',
    github: '#',
  },
  {
    title: 'DevOps Automation Tool',
    description:
      'Docker 컨테이너 관리 및 CI/CD 파이프라인 자동화 도구. GitHub Actions 워크플로우 설정과 모니터링.',
    tags: ['Docker', 'AWS', 'GitHub Actions', 'Node.js', 'Nginx'],
    gradient: 'from-rose-500 to-pink-500',
    link: '#',
    github: '#',
  },
]

const FILTERS = ['All', 'Frontend', 'Backend', 'DevOps'] as const

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">주요 프로젝트</h2>
          <p className="text-muted mx-auto mt-4 max-w-lg text-lg">
            실무에서 진행한 프로젝트와 사이드 프로젝트를 소개합니다.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                selectedFilter === filter
                  ? 'bg-accent text-white shadow-lg shadow-indigo-500/20'
                  : 'text-muted hover:bg-dark-hover hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark-card border-dark-border group relative overflow-hidden rounded-2xl border transition-all hover:border-indigo-500/30"
            >
              {/* Project preview area */}
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient} opacity-80 transition-opacity group-hover:opacity-100`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <span className="relative text-2xl font-bold text-white/90">{project.title}</span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent-dim text-accent-light rounded-md px-2.5 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-dark-border mt-5 flex gap-4 border-t pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-muted hover:text-accent-light flex items-center gap-1.5 text-sm transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M6 3H3.5A1.5 1.5 0 002 4.5v8A1.5 1.5 0 003.5 14h8a1.5 1.5 0 001.5-1.5V10M10 2h4v4M7 9l7-7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted hover:text-accent-light flex items-center gap-1.5 text-sm transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
