import { useReveal } from '../hooks/useReveal'

export default function Meme() {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative bg-void py-32 md:py-44 overflow-hidden">
      <svg
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[70%] max-w-[560px] opacity-[0.08]"
        viewBox="0 0 900 900"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M180 520c-40-60-30-140 30-170 45-22 80 10 110 10s65-32 110-10c60 30 70 110 30 170-20 30-40 45-40 90 0 110-65 200-140 200s-140-90-140-200c0-45-20-60-40-90z"
          fill="#C81E2C"
        />
      </svg>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="reveal font-display font-semibold text-3xl sm:text-5xl md:text-6xl text-bone leading-tight">
          Patience.
        </p>
        <p className="reveal font-display font-semibold text-3xl sm:text-5xl md:text-6xl text-blood leading-tight mt-2">
          The bull is coming.
        </p>
        <p className="reveal font-display italic font-medium text-2xl sm:text-3xl md:text-4xl text-ash leading-tight mt-2">
          Are you ready?
        </p>

        <a
          href="#community"
          className="reveal inline-flex mt-10 font-body font-semibold text-sm px-7 py-4 rounded-sm bg-blood text-bone hover:bg-flare transition-colors duration-200"
        >
          Enter the herd
        </a>
      </div>
    </section>
  )
}
