import { useReveal } from '../hooks/useReveal'

const PRINCIPLES = [
  {
    title: 'Patience',
    body: 'We wait for the moment.',
  },
  {
    title: 'Conviction',
    body: 'We believe before the crowd.',
  },
  {
    title: 'Momentum',
    body: 'When the bull runs, we run with it.',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="relative bg-void py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-12 gap-10 md:gap-8">
        <div className="md:col-span-5 reveal">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone text-balance">
            Why $BWC?
          </h2>
        </div>

        <div className="md:col-span-7 reveal">
          <p className="text-lg md:text-xl text-ash leading-relaxed max-w-xl">
            Markets move in cycles. Narratives come and go. But every cycle has a
            moment when the crowd realizes what was already building.
          </p>
          <p className="text-lg md:text-xl text-bone leading-relaxed max-w-xl mt-5 font-medium">
            Bullrun Will Come is a community-driven meme coin built around one
            simple idea: the bullrun isn&rsquo;t a question of if. It&rsquo;s a
            question of when?.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 md:mt-20 grid sm:grid-cols-3 gap-px bg-line reveal">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="bg-void p-8 md:p-10">
            <h3 className="font-mono text-xs tracking-wide text-blood mb-4">
              {p.title}
            </h3>
            <p className="font-display text-xl md:text-2xl text-bone leading-snug">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
