type FeatureCardProps = {
  emoji: string
  title: string
  description: string
}

export function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-card border border-gray-200 p-8 shadow-card
      hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200">
      <span className="text-[32px] mb-4 block">{emoji}</span>
      <h3 className="text-[18px] font-extrabold text-ink tracking-[-0.3px] mb-2.5">{title}</h3>
      <p className="text-[16px] leading-[1.7] text-gray-600">{description}</p>
    </div>
  )
}
