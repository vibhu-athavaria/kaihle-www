import Link from 'next/link'

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variants = {
  primary: `bg-primary hover:bg-primary-dark text-white
             shadow-btn hover:shadow-btn-hover hover:-translate-y-px`,
  outline: `bg-transparent border-2 border-gray-200 text-ink
             hover:border-primary-mid hover:text-primary`,
  ghost:   `bg-white/15 border-2 border-white/30 text-white
             hover:bg-white/25`,
}

const sizes = {
  md: 'px-7 py-3.5 text-[15px]',
  lg: 'px-9 py-4 text-[16px]',
}

export function Button({
  variant = 'primary', size = 'md', href, children, className = '', ...props
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-bold
    font-nunito transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button className={cls} {...props}>{children}</button>
}
