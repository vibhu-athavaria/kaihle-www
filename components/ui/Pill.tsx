type PillProps = {
  children: React.ReactNode
  variant?: 'green' | 'gold' | 'amber'
  pulse?: boolean
  className?: string
}

const variants = {
  green: 'bg-primary-light border border-primary-mid text-primary',
  gold: 'bg-accent-light border border-accent-mid text-accent',
  amber: 'bg-amber-50 text-amber-700',
}

export function Pill({ children, variant = 'green', pulse = false, className = '' }: PillProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
      text-[13px] font-bold ${variants[variant]} ${className}`}>
      {pulse && (
        <span className={`w-[7px] h-[7px] rounded-full bg-current animate-livepulse`} />
      )}
      {children}
    </div>
  )
}
