'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  Award,
  Trophy,
  Presentation,
  Code2,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { Counter } from './counter'

type TimelineEntry = {
  icon: LucideIcon
  type: string
  title: string
  org: string
  text: string
  color: string
}

const timeline: TimelineEntry[] = [
  {
    icon: Briefcase,
    type: 'Internship',
    title: 'Data Analyst Intern',
    org: 'Skills4you',
    text: 'Built dashboards and automated reporting pipelines, turning raw datasets into decision-ready insights.',
    color: '#3B82F6',
  },
  {
    icon: Code2,
    type: 'Internship',
    title: 'Full-Stack Developer Intern',
    org: 'Ministry Of Defence',
    text: 'Shipped production features across the stack using React, Next.js, and Node.js.',
    color: '#10B981',
  },
  {
    icon: Award,
    type: 'Certification',
    title: 'Machine Learning & Data Analytics',
    org: 'Edu Net Foundation',
    text: 'Completed multiple certifications in ML, Power BI, and Python for data science.',
    color: '#06B6D4',
  },
  {
    icon: Trophy,
    type: 'Presentation',
    title: 'Project Presentation',
    org: 'College Level.',
    text: 'Built an AI-driven solution under time pressure and presented in front of audience.',
    color: '#8B5CF6',
  },
  {
    icon: Presentation,
    type: 'Workshop',
    title: 'AI & Web Dev Workshops',
    org: 'University & Communities',
    text: 'Attended and led sessions on generative AI, NLP, and modern web development.',
    color: '#3B82F6',
  },
]

const counters = [
  { value: 2, suffix: '+', label: 'Internships' },
  { value: 8, suffix: '+', label: 'Certifications' },
  { value: 5, suffix: '+', label: 'Presentations' },
  { value: 10, suffix: '+', label: 'Workshops' },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-violet/10 blur-[140px]"
      />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience & Achievements"
          title="Milestones along the journey"
          description="Internships, certifications, hackathons, and the moments that shaped my growth."
        />

        {/* Counters */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {counters.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-gradient">
                  <Counter to={c.value} suffix={c.suffix} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2"
          />
          <div className="flex flex-col gap-8">
            {timeline.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <div
                  className={`relative flex md:items-center ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* node */}
                  <span
                    className="absolute left-4 top-6 z-10 size-3 -translate-x-1/2 rounded-full ring-4 ring-background md:left-1/2"
                    style={{ backgroundColor: e.color }}
                  />
                  <div className="hidden md:block md:w-1/2" />
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass ml-10 w-full rounded-2xl p-5 md:ml-0 md:w-1/2 md:[&]:mx-8"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div
                        className="rounded-lg border border-border p-2"
                        style={{ backgroundColor: `${e.color}1a` }}
                      >
                        <e.icon
                          className="size-4"
                          style={{ color: e.color }}
                        />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                        {e.type}
                      </span>
                    </div>
                    <h3 className="font-semibold">{e.title}</h3>
                    <p className="text-sm text-muted-foreground">{e.org}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {e.text}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
