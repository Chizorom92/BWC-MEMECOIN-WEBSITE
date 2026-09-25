import { useReveal } from '../hooks/useReveal'
import { MARKET_STATS } from '../content'

export default function MarketStats() {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative bg-ember py-24 md:py-32 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal flex items-baseline justify-between flex-wrap gap-3 mb-10">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-bone">
            Market data
          </h2>
          <p className="font-mono text-xs text-ash">
            Data will be live soon!
          </p>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-5 gap-px bg-line border border-line">
          {MARKET_STATS.map((s) => (
            <div key={s.label} className="bg-void p-6 min-h-[120px] flex flex-col justify-between">
              <p className="font-mono text-[11px] text-ash">{s.label}</p>
              <p className="font-display text-xl md:text-2xl text-bone">
                {s.value ?? <span className="text-ash italic text-sm font-body">Unavailable</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
