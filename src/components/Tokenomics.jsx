import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { TOKENOMICS } from "../content";

export default function Tokenomics() {
  const ref = useReveal();
  const [totalAllocation, setTotalAllocation] = useState("");

  return (
    <section ref={ref} className="relative bg-charcoal py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-16 items-center">
        <div className="reveal flex justify-center">
          <DonutPlaceholder
            totalAllocation={totalAllocation}
            onTotalAllocationChange={setTotalAllocation}
          />
        </div>

        <div className="reveal">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-bone mb-3">
            Tokenomics
          </h2>
          <p className="text-ash text-base md:text-lg mb-8 max-w-md">
            Real numbers land here the moment they&rsquo;re official. Nothing
            below is confirmed, treat every value as pending until we say
            otherwise.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
            {TOKENOMICS.map((t) => (
              <div key={t.label} className="bg-ember p-6">
                <p className="font-mono text-xs text-ash mb-2">{t.label}</p>
                <p className="font-display text-2xl text-bone">
                  {t.value ?? (
                    <span className="text-ash italic text-lg">Pending</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DonutPlaceholder({ totalAllocation, onTotalAllocationChange }) {
  // Five equal segments stand in for an unconfirmed allocation split —
  // the dashed ring signals "not final" rather than showing real ratios.
  const segments = 5;
  const gap = 6;
  const circumference = 2 * Math.PI * 90;
  const segmentLength = circumference / segments - gap;

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <svg viewBox="0 0 220 220" className="w-full h-full -rotate-90">
        <circle
          cx="110"
          cy="110"
          r="90"
          stroke="#2A2220"
          strokeWidth="14"
          fill="none"
        />
        {Array.from({ length: segments }).map((_, i) => (
          <circle
            key={i}
            cx="110"
            cy="110"
            r="90"
            stroke={i % 2 === 0 ? "#8F1C1F" : "#C81E2C"}
            strokeWidth="14"
            fill="none"
            strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
            strokeDashoffset={-(i * (circumference / segments))}
            strokeLinecap="round"
            opacity="0.85"
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-[11px] text-ash">ALLOCATION</span>
        <input
          type="text"
          value={totalAllocation}
          onChange={(event) => onTotalAllocationChange(event.target.value)}
          placeholder="Pending"
          aria-label="Total allocation"
          className="mt-1 w-32 bg-transparent p-0 text-center font-display text-xl text-bone placeholder:text-bone focus:outline-none"
        />
      </div>
    </div>
  );
}
