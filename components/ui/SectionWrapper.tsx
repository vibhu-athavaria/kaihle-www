type Props = { children: React.ReactNode; className?: string; id?: string }

export function SectionWrapper({ children, className = '', id }: Props) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        {children}
      </div>
    </section>
  )
}
