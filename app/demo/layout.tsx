import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Demo — Kaihle',
  description:
    'Book a demo of Kaihle. See how our AI-powered diagnostic learning platform can help your school.',
  openGraph: {
    title: 'Request a Demo — Kaihle',
    description: 'Book a demo of Kaihle.',
    url: 'https://www.kaihle.com/demo',
  },
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
