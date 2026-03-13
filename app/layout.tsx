import type { Metadata } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Kaihle — AI-Powered Diagnostic Learning for Schools',
    template: '%s | Kaihle',
  },
  description:
    'Kaihle maps every student\'s exact knowledge gaps and generates personalised learning to fix them. Built for Cambridge and IB schools worldwide.',
  metadataBase: new URL('https://www.kaihle.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kaihle.com',
    siteName: 'Kaihle',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-soft text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
