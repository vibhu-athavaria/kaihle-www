'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'For Schools', href: '/for-schools' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why Kaihle', href: '/why-kaihle' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`sticky top-0 z-50 h-[72px] flex items-center px-6 md:px-14
      bg-soft/92 backdrop-blur-xl border-b border-gray-200 transition-shadow duration-300
      ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">

        <Link href="/" className="flex items-center gap-2 font-fraunces font-bold text-[26px] text-ink tracking-[-0.5px] no-underline">
          <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center text-white font-black font-nunito text-[17px]">K</div>
          kaihle
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className={`text-[15px] font-semibold transition-colors duration-200
                ${pathname === l.href ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/demo"
            className="bg-primary hover:bg-primary-dark text-white rounded-full px-5 py-2.5 text-[14px] font-bold
            shadow-[0_2px_10px_rgba(26,92,56,0.25)] transition-all duration-200">
            Request a Demo
          </Link>
        </nav>

        <button className="md:hidden text-ink" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-soft z-40 flex flex-col p-8 gap-6">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[18px] font-bold text-ink hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Link href="/demo" onClick={() => setOpen(false)}
            className="bg-primary text-white rounded-full px-6 py-3 text-[15px] font-bold text-center mt-4">
            Request a Demo
          </Link>
        </div>
      )}
    </header>
  )
}
