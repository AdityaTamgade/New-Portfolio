'use client'

import { Mail, ArrowUp } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './brand-icons'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adityatamgade/' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/AdityaTamgade' },
  { icon: Mail, label: 'Email', href: 'mailto:aditya.tamgade@example.com' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-primary/10 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="font-mono text-lg font-bold">
              <span className="text-gradient">Aditya Tamgade</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Data Analyst, AI Enthusiast, and Full-Stack Developer building
              intelligent, data-driven products.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="rounded-lg border border-border bg-secondary/50 p-2.5 text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Get in touch</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Open to internships, full-time roles, and collaborations.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/40"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Aditya Tamgade. All rights
            reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            Back to top <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
