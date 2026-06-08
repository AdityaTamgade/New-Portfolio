'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Code2,
  BarChart3,
  Brain,
  Globe,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Category = {
  icon: LucideIcon
  title: string
  color: string
  skills: { name: string; level: number }[]
}

const categories: Category[] = [
  {
    icon: Code2,
    title: 'Programming',
    color: '#3B82F6',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'SQL', level: 78 },
      { name: 'C', level: 85 },
      { name: 'C++', level: 83 },
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    color: '#06B6D4',
    skills: [
      { name: 'Power BI', level: 88 },
      { name: 'Tableau', level: 82 },
      { name: 'Excel', level: 90 },
      { name: 'Data Visualization', level: 86 },
      { name: 'Statistics', level: 80 },
    ],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    color: '#8B5CF6',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 78 },
      { name: 'NLP', level: 80 },
      { name: 'Generative AI', level: 82 },
      { name: 'RAG', level: 89 },
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    color: '#10B981',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 86 },
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: '#3B82F6',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 84 },
    ],
  },
]

function SkillBar({
  name,
  level,
  color,
}: {
  name: string
  level: number
  color: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary/60">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
            boxShadow: `0 0 12px ${color}66`,
          }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A futuristic skills dashboard"
          description="The technologies and disciplines I use to design, analyze, and build."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 0.08}
              className={
                cat.title === 'Tools'
                  ? 'md:col-span-2 lg:col-span-1'
                  : undefined
              }
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="glass h-full rounded-3xl p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="rounded-xl border border-border p-2.5"
                    style={{ backgroundColor: `${cat.color}1a` }}
                  >
                    <cat.icon
                      className="size-5"
                      style={{ color: cat.color }}
                    />
                  </div>
                  <h3 className="font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {cat.skills.map((s) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      color={cat.color}
                    />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
