'use client'

import { GraduationCap, Target, Sparkles, Code2 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal, RevealGroup, RevealItem } from './reveal'

const education = [
  {
    period: '2026 — 2028',
    title: 'MBA in Business Analyatics',
    org: 'MIT World Peace University', grade : 'Pursuing',
    detail:
      'Future Business Analyst with a Passion for Data, Strategy, and Innovation',
  },
  {
    period: '2021 — 2025',
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Rashtrasanta Tukdoji Maharaj Nagpur University', grade : '75.55%',
    detail:
      'First Class B.Tech CSE Graduate | Passionate About Software Development, AI, and Data-Driven Innovation.',
  },
  {
    period: '2020 — 2021',
    title: 'Higher Secondary Certificate 12th',
    org: 'Macroon Student Acedemy', grade : '88%',
    detail: 'Mathematics, Physics, Chemistry and Computer Science foundation.',
  },
   {
    period: '2018 — 2019',
    title: 'Secondary School Certificate 10th',
    org: 'ST. Annes High School', grade : '75%',
    detail: 'Mathematics, Physics, and Computer Science foundation.',
  },
]

const highlights = [
  {
    icon: Target,
    title: 'Career Objective',
    text: 'To build data-driven, intelligent products that turn complex information into clear, actionable insight.',
    color: 'text-primary',
  },
  {
    icon: Sparkles,
    title: 'AI Enthusiast',
    text: 'Exploring machine learning, deep learning, NLP, and generative AI to solve meaningful real-world problems.',
    color: 'text-violet',
  },
  {
    icon: Code2,
    title: 'Full-Stack Builder',
    text: 'Crafting performant web apps end-to-end with React, Next.js, Node.js, and modern tooling.',
    color: 'text-emerald',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Driven by data, curiosity, and craft"
          description="A passionate technologist blending analytical thinking with creative engineering to ship intelligent solutions."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Summary + highlights */}
          <div className="flex flex-col gap-6">
            <Reveal className="glass rounded-3xl p-7">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                I&apos;m{' '}
                <span className="font-semibold text-foreground">
                  Aditya Tamgade
                </span>
                ,  a Data Analyst, AI Enthusiast, and Full-Stack Developer. I love working at the intersection of data and software — uncovering patterns in raw data, building predictive models, and turning them into polished, user-facing products. Whether it's a dashboard, an ML pipeline, or a complete web platform, I care about clarity, performance, and the details that make an experience feel premium.

Passionate about leveraging AI and modern technologies to solve real-world challenges and create meaningful impact. Continuously learning, building, and innovating to deliver scalable solutions that combine technical excellence with exceptional user experiences.

              </p>
            </Reveal>

            <RevealGroup className="grid gap-4">
              {highlights.map((h) => (
                <RevealItem
                  key={h.title}
                  className="group glass flex items-start gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="rounded-xl border border-border bg-secondary/50 p-3">
                    <h.icon className={`size-5 ${h.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {h.text}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Education timeline */}
          <Reveal className="glass rounded-3xl p-7" delay={0.15}>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl border border-border bg-secondary/50 p-2.5">
                <GraduationCap className="size-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <ol className="relative ml-2 border-l border-border">
              {education.map((e) => (
                <li key={e.title} className="mb-8 ml-6 last:mb-0">
                  <span className="absolute -left-[7px] mt-1.5 size-3 rounded-full bg-primary ring-4 ring-background" />
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {e.period}
                  </span>
                  <h4 className="mt-1 font-semibold">{e.title}</h4>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  <p className="text-sm text-muted-foreground">{e.grade}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {e.detail}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
