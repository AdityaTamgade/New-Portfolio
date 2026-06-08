'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Eye, Check } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const highlights = [
  'Data Analytics & Visualization',
  'Machine Learning & AI',
  'Full-Stack Web Development',
  'Internships & Certifications',
]

export function Resume() {
  return (
    <section id="resume" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Resume"
          title="Get the full picture"
          description="Download my resume to explore my experience, skills, and achievements in detail."
        />

        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-4 inline-flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-2">
                  <FileText className="size-5 text-accent" />
                  <span className="font-mono text-sm">
                    ADITYA VIJAY TAMGADE.pdf"
                  </span>
                </div>
                <h3 className="text-balance text-2xl font-bold">
                  A snapshot of my journey
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-emerald" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    href="\projects\ADITYA VIJAY TAMGADE.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30"
                  >
                    <Download className="size-4" /> Download Resume
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    href="\projects\ADITYA VIJAY TAMGADE.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <Eye className="size-4" /> Preview
                  </motion.a>
                </div>
              </div>

              {/* Resume preview card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="mx-auto hidden w-44 rotate-3 rounded-xl border border-border bg-card p-4 shadow-2xl md:block"
              >
                <div className="mb-3 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-violet" />
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded bg-secondary" />
                  <div className="h-2 w-1/2 rounded bg-secondary" />
                </div>
                <div className="mt-4 space-y-1.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded bg-muted"
                      style={{ width: `${90 - i * 8}%` }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex gap-1.5">
                  <span className="h-1.5 w-8 rounded bg-primary/60" />
                  <span className="h-1.5 w-6 rounded bg-cyan/60" />
                  <span className="h-1.5 w-7 rounded bg-emerald/60" />
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
