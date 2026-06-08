'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react'

import { LinkedinIcon, GithubIcon } from './brand-icons'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aditya.tamgade@gmail.com',
    href: 'mailto:aditya.tamgade@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7378877605',
    href: 'tel:+917378877605',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: '#',
  },
]

const socials = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adityatamgade/',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/AdityaTamgade',
  },
]

function Field({
  id,
  label,
  type = 'text',
  textarea,
  value,
  onChange,
  error,
}: {
  id: string
  label: string
  type?: string
  textarea?: boolean
  value: string
  onChange: (v: string) => void
  error?: string
}) {
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="peer w-full resize-none rounded-xl border border-border bg-secondary/30 px-4 pb-2 pt-5 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="peer w-full rounded-xl border border-border bg-secondary/30 px-4 pb-2 pt-5 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      )}

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3.5 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>

      {error && (
        <p className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent'
  >('idle')

  const set = (k: string) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }))

  const validate = () => {
    const e: Record<string, string> = {}

    if (!form.name.trim()) {
      e.name = 'Please enter your name'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email'
    }

    if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters'
    }

    setErrors(e)

    return Object.keys(e).length === 0
  }

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()

    if (!validate()) return

    setStatus('sending')

    try {
      await emailjs.send(
        'service_v0c9oiu',
        'template_x3rmwfd',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'aditya.tamgade@gmail.com',
        },
        'xY_D8_Tv4XYv_SNiH'
      )

      setStatus('sent')

      setForm({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    } catch (error) {
      console.error('Email sending failed:', error)
      alert('Failed to send message. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/3 -z-10 h-[24rem] w-[24rem] rounded-full bg-cyan/10 blur-[140px]"
      />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project, role, or idea in mind? My inbox is always open."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            {contactDetails.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <div className="rounded-xl border border-border bg-secondary/50 p-3">
                  <c.icon className="size-5 text-accent" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>

                  <p className="text-sm font-medium text-foreground">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="glass flex items-center gap-3 rounded-2xl p-5">
              <span className="text-sm text-muted-foreground">
                Find me on
              </span>

              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border bg-secondary/50 p-2.5 text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={submit}
              className="glass-strong relative flex flex-col gap-5 rounded-3xl p-7"
            >
              <Field
                id="name"
                label="Your Name"
                value={form.name}
                onChange={set('name')}
                error={errors.name}
              />

              <Field
                id="email"
                label="Email Address"
                type="email"
                value={form.email}
                onChange={set('email')}
                error={errors.email}
              />

              <Field
                id="message"
                label="Your Message"
                textarea
                value={form.message}
                onChange={set('message')}
                error={errors.message}
              />

              <motion.button
                whileHover={{
                  scale: status === 'idle' ? 1.02 : 1,
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status !== 'idle'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 disabled:opacity-80"
              >
                {status === 'sending' && (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                )}

                {status === 'idle' && (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}

                {status === 'sent' && (
                  <>
                    <CheckCircle2 className="size-4" />
                    Message Sent
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {status === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 text-sm text-emerald-500"
                  >
                    <CheckCircle2 className="size-4" />
                    Thanks! I'll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}