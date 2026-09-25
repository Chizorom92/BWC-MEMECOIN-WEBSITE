import { useReveal } from "../hooks/useReveal";

export default function Statement() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative bg-charcoal py-32 md:py-48 overflow-hidden"
    >
      <img
        src="bull.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 bg-charcoal/75" aria-hidden="true" />

      {/* <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none opacity-[0.06]"
        viewBox="0 0 900 900"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M180 520c-40-60-30-140 30-170 45-22 80 10 110 10s65-32 110-10c60 30 70 110 30 170-20 30-40 45-40 90 0 110-65 200-140 200s-140-90-140-200c0-45-20-60-40-90z"
          fill="#F3EDE4"
        />
      </svg> */}

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <p className="reveal font-display font-semibold text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-bone text-balance">
          The market sleeps.
          <br />
          <span className="text-blood">The bull doesn&rsquo;t.</span>
        </p>
        <p className="reveal mt-8 font-body text-base md:text-lg text-ash tracking-wide">
          Stay patient. Stay ready.
        </p>
      </div>
    </section>
  );
}
