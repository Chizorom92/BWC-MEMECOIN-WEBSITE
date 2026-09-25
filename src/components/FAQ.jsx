import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { FAQ_ITEMS } from '../content'

export default function FAQ() {
  const ref = useReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section ref={ref} className="relative bg-charcoal py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h2 className="reveal font-display font-semibold text-4xl md:text-5xl text-bone mb-14 text-center">
          Questions
        </h2>

        <div className="reveal divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                >
                  <span className="font-display text-lg md:text-xl text-bone">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-blood shrink-0 transition-transform duration-300 ${
                      open ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-ash leading-relaxed pb-6 pr-8 text-sm md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
