'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './brand-icons'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  category: 'AI/ML' | 'Data' | 'Web'
  github: string
  demo: string
}

const projects: Project[] = [
  {
    title: 'AI-Powered Customer Churn Early-Warning System',
    description:
      'An AI-powered platform that analyzes Customer behaviour and gives early warning.',
    image: '/projects/ai-code-reviewer.png',
    tags: ['RAG', 'Generative AI', 'Gemini API', 'Python'],
    category: 'AI/ML',
    github: 'https://github.com/AdityaTamgade/AI-Powered-Customer-Churn-Early-Warning-System.git',
    demo: 'https://ai-powered-customer-churn-early-warning-system.streamlit.app/',
  },
  {
    title: 'Automated Data Cleaning Tool.',
    description:
      'This project is a Streamlit-based Data Cleaning application designed to simplify the data preprocessing workflow for analysts and beginners.',
    image: '/projects/water-quality.png',
    tags: ['Python', 'Machine Learning', 'Pandas'],
    category: 'Data',
    github: 'https://github.com/AdityaTamgade/Automated-Data-Cleaning-Tool.git',
    demo: 'https://automated-data-cleaning-tool-m7qjsmpqgbxd73i4w4or76.streamlit.app/',
  },
  {
    title: 'Fake News Detection System',
    description:
      'An NLP-based classification system that detects misinformation by analyzing article text and language patterns.',
    image: '/projects/fake-news.png',
    tags: ['NLP', 'Python', 'Scikit-learn'],
    category: 'AI/ML',
    github: '#',
    demo: '#',
  },
  {
    title: 'Retail Sales Performance Dashboard with Predictive Insights',
    description:
      'My latest Power BI project where I analyzed key HR metrics like attrition rate, age distribution, salary slabs, and job roles across departments.',
    image: '/projects/meme-generator.png',
    tags: ['Power BI', 'Data Set', 'Excel','Data Visualization'],
    category: 'Data',
    github: 'https://github.com/AdityaTamgade/Retail-Sales-Profit-Analytics-Dashboard.git',
    demo: 'https://github.com/AdityaTamgade/Retail-Sales-Profit-Analytics-Dashboard.git',
  },
  {
    title: 'Teacher Management Interface',
    description:
      'A modern dashboard application for managing teachers, schedules, and performance metrics with a clean UX.',
    image: '/projects/teacher-management.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'Web',
    github: 'https://github.com/AdityaTamgade/TEACHER-MANAGEMENT.git',
    demo: 'https://teacher-management-theta.vercel.app/',
  },
  {
    title: 'HR Analytics Dashboard',
    description:
      'Power BI Project: HR Analytics Dashboard Analyzed key HR data of 1470 employees to uncover trends in attrition, salary, age groups, job roles & more.',
    image: '/projects/media-management.png',
    tags: ['Power BI', 'Data Set', 'Excel','Data Visualization'],
    category: 'Web',
    github: 'https://github.com/AdityaTamgade/POWER-BI.git',
    demo: 'https://github.com/AdityaTamgade/POWER-BI.git',
  },
]

const filters = ['All', 'AI/ML', 'Data', 'Web'] as const

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl"
    >
      {/* animated gradient border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-cyan/10 to-violet/20" />
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-border bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="text-balance text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a
            href={project.demo}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/40"
          >
            <ExternalLink className="size-4" /> Live Demo
          </a>
          <a
            href={project.github}
            aria-label={`${project.title} GitHub repository`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
          >
            <GithubIcon className="size-4" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')
  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've designed & built"
          description="A selection of work spanning AI/ML, data analytics, and full-stack web development."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
