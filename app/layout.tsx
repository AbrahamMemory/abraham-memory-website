import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Abraham Memory — The Memory Layer for AI Agents',
  description:
    'Abraham Memory is the AI memory infrastructure protocol enabling agents to remember, learn, evolve, and retain identity across every interaction.',
  generator: 'v0.app',
  keywords: [
    'AI memory',
    'AI agents',
    'memory infrastructure',
    'protocol',
    'Base ecosystem',
    'vector memory',
    'agent identity',
  ],
  openGraph: {
    title: 'Abraham Memory — The Memory Layer for AI Agents',
    description:
      'The infrastructure layer enabling AI agents to remember, learn, evolve, and retain identity.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8fafc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
