import Link from 'next/link'

const rows = [
  { topic: 'Linear Equations', pct: 43, color: '#fca5a5', label: '#ef4444' },
  { topic: 'Quadratic Expr.', pct: 61, color: '#fcd34d', label: '#d97706' },
  { topic: 'Angles & Triangles', pct: 81, color: '#86efac', label: '#16a34a' },
  { topic: 'Fractions & Ratios', pct: 38, color: '#fca5a5', label: '#ef4444' },
]

type CellFill = '#fca5a5' | '#fcd34d' | '#86efac' | '#d1d5db'

function pctToCells(pct: number): CellFill[] {
  const filled = Math.round(pct / 20)
  return Array.from({ length: 5 }, (_, i) => {
    if (i < filled - 1) return '#86efac'
    if (i === filled - 1) return pct < 50 ? '#fca5a5' : pct < 70 ? '#fcd34d' : '#86efac'
    return '#d1d5db'
  })
}

export function GapHeatmap() {
  return (
    <div className="relative">
      <div className="absolute -top-5 -left-14 bg-white rounded-[16px] shadow-float p-4 z-10 min-w-[148px] hidden md:block">
        <div className="text-[22px] mb-1">🎯</div>
        <div className="text-[22px] font-extrabold text-ink leading-none">24</div>
        <div className="text-[11px] text-gray-400 font-medium mt-0.5">Gaps found today</div>
      </div>

      <div className="bg-white rounded-[24px] shadow-[0_16px_60px_rgba(30,27,75,0.10)] overflow-hidden relative z-0">

        <div className="bg-primary px-6 py-5 flex justify-between items-center">
          <div>
            <div className="text-[14px] font-bold text-white">Class Gap Map · Grade 8</div>
            <div className="text-[11px] text-white/55 mt-0.5">Mathematics · 32 students</div>
          </div>
          <div className="flex items-center gap-1.5 bg-white/12 px-3 py-1.5 rounded-full text-[12px] text-white/85 font-bold">
            <span className="w-[7px] h-[7px] rounded-full bg-green-400 animate-livepulse" />
            Live
          </div>
        </div>

        <div className="px-6 py-5">
          <div className="text-[10px] font-bold uppercase tracking-[1px] text-gray-400 mb-2.5">Algebra</div>
          {rows.slice(0, 2).map(r => <HeatRow key={r.topic} {...r} />)}
          <div className="text-[10px] font-bold uppercase tracking-[1px] text-gray-400 mb-2.5 mt-4">Geometry</div>
          {rows.slice(2).map(r => <HeatRow key={r.topic} {...r} />)}
        </div>

        <div className="bg-primary-light px-6 py-3.5 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-primary">✦ 12 study plans auto-generated</span>
          <Link href="/demo" className="text-[12px] font-bold text-primary bg-white px-3.5 py-1.5 rounded-full shadow-[0_1px_4px_rgba(201,147,42,0.15)] no-underline">
            View plans
          </Link>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-12 bg-white rounded-[16px] shadow-float p-4 z-10 min-w-[148px] hidden md:block">
        <div className="text-[22px] mb-1">📚</div>
        <div className="text-[22px] font-extrabold text-ink leading-none">12</div>
        <div className="text-[11px] text-gray-400 font-medium mt-0.5">Plans generated today</div>
      </div>
    </div>
  )
}

function HeatRow({ topic, pct, label }: { topic: string; pct: number; label: string; color: string }) {
  const cells = pctToCells(pct)
  return (
    <div className="flex items-center gap-2.5 mb-[7px]">
      <div className="text-[12px] font-semibold text-gray-600 min-w-[100px] md:min-w-[130px]">{topic}</div>
      <div className="flex gap-[3px] flex-1">
        {cells.map((c, i) => (
          <div key={i} className="h-[26px] rounded-[6px] flex-1" style={{ background: c }} />
        ))}
      </div>
      <div className="text-[12px] font-extrabold min-w-[34px] text-right" style={{ color: label }}>{pct}%</div>
    </div>
  )
}
