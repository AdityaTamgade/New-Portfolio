import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Sora, Geist_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aditya Tamgade — Data Analyst, AI Enthusiast & Full-Stack Developer',
  description:
    'Portfolio of Aditya Tamgade. Transforming data into insights and ideas into intelligent solutions. Projects across AI/ML, data analytics, and full-stack web development.',
  generator: 'v0.app',
  keywords: [
    'Aditya Tamgade',
    'Data Analyst',
    'AI Engineer',
    'Machine Learning',
    'Full-Stack Developer',
    'Portfolio',
    'Next.js',
  ],
  openGraph: {
    title: 'Aditya Tamgade — Data Analyst, AI Enthusiast & Full-Stack Developer',
    description:
      'Transforming data into insights and ideas into intelligent solutions.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0B1020',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
