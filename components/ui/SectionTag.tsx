export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase
      tracking-[1px] text-primary mb-3.5 before:content-['✦'] before:text-[10px]">
      {children}
    </div>
  )
}
