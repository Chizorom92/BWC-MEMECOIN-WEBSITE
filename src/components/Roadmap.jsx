import { useReveal } from '../hooks/useReveal'

const PHASES = [
  {
    n: '01',
    name: 'The Signal',
    items: [
      'Brand creation',
      'Website launch',
      'Social media setup',
      'Community building',
      'Initial awareness',
    ],
  },
  {
    n: '02',
    name: 'The Ignition',
    items: [
      'Token launch',
      'Community expansion',
      'Marketing campaigns',
      'Meme creation',
      'Influencer & community collaborations',
    ],
  },
  {
    n: '03',
    name: 'The Charge',
    items: [
      'Stronger community presence',
      'Partnerships',
      'Increased visibility',
      'Ecosystem development',
      'Major marketing push',
    ],
  },
  {
    n: '04',
    name: 'The Bullrun',
    items: [
      'Global community',
      'Major exchange ambitions',
      'Ecosystem expansion',
      'Long-term brand development',
    ],
  },
]

export default function Roadmap() {
  const ref = useReveal()

  return (
    <section id="roadmap" ref={ref} className="relative bg-void py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal mb-4">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone">
            Roadmap
          </h2>
        </div>
        <p className="reveal text-ash max-w-lg mb-14 md:mb-20">
          These are goals we&rsquo;re building toward, in order &mdash; not
          guarantees. Timelines shift with the market and the community.
        </p>

        <div className="reveal grid md:grid-cols-4 gap-8 md:gap-6">
          {PHASES.map((phase, i) => (
            <div key={phase.n} className="relative pl-6 md:pl-0">
              <div className="hidden md:block h-px bg-line mb-6 relative">
                <span
                  className={`absolute -top-[3px] left-0 h-[7px] w-[7px] rounded-full ${
                    i === 0 ? 'bg-blood' : 'bg-line'
                  }`}
                />
              </div>
              <span className="absolute left-0 top-1 md:hidden h-full w-px bg-line" />
              <p className="font-mono text-xs text-blood mb-2">PHASE {phase.n}</p>
              <h3 className="font-display text-xl md:text-2xl text-bone mb-4">
                {phase.name}
              </h3>
              <ul className="space-y-2.5">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-ash leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
