'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { ParticleBackground } from './particle-background'
import { Typewriter } from './typewriter'
import { Counter } from './counter'
import { MagneticButton } from './magnetic-button'

const stats = [
  { value: 12, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: '+', label: 'Technologies Used' },
  { value: 8, suffix: '+', label: 'Certifications' },
  { value: 3, suffix: '+', label: 'Years of Learning' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Aurora blobs */}
      <div
        aria-hidden="true"
        className="animate-aurora absolute -left-32 top-10 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-aurora absolute -right-32 bottom-0 h-[34rem] w-[34rem] rounded-full bg-violet/20 blur-[120px]"
        style={{ animationDelay: '4s' }}
      />
      <div
        aria-hidden="true"
        className="animate-aurora absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]"
        style={{ animationDelay: '8s' }}
      />
      <ParticleBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 font-mono text-xs tracking-wide text-accent"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m Aditya Tamgade.{' '}
            <span className="text-gradient">
              Transforming Data Into Insights
            </span>{' '}
            &amp; Ideas Into Intelligent Solutions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 font-mono text-lg text-muted-foreground sm:text-xl"
          >
            <Typewriter
              words={[
                'Data Analyst',
                'AI Enthusiast',
                'Full-Stack Developer',
                'Machine Learning Builder',
              ]}
              className="text-foreground"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <MagneticButton
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-shadow hover:shadow-primary/50"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Download className="size-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              Contact Me
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 text-center lg:text-left"
              >
                <dd className="text-2xl font-bold text-gradient sm:text-3xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-xs leading-tight text-muted-foreground">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto"
        >
          <div className="relative size-64 sm:size-80">
            {/* Rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, #3B82F6, #06B6D4, #8B5CF6, #10B981, #3B82F6)',
                padding: '4px',
              }}
            >
              <div className="h-full w-full rounded-full bg-background" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-2 overflow-hidden rounded-full border border-border"
            >
              <Image
                src="/aditya-profile.png"
                alt="Portrait of Aditya Tamgade"
                fill
                priority
                sizes="(max-width: 640px) 16rem, 20rem"
                className="object-cover"
              />
            </motion.div>

            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass-strong absolute -left-6 top-10 rounded-xl px-3 py-2 font-mono text-xs text-accent"
            >
              {'{ AI }'}
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
              className="glass-strong absolute -right-4 bottom-12 rounded-xl px-3 py-2 font-mono text-xs text-emerald"
            >
              {'</> dev'}
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="glass-strong absolute -bottom-2 left-12 rounded-xl px-3 py-2 font-mono text-xs text-primary"
            >
              data.insights
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1"
        >
          <span className="h-2 w-1 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  )
}
