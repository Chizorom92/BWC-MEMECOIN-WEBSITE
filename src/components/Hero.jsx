import { useEffect, useRef, useState } from "react";
import { ArrowRight, Users } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-void"
    >
      {/* <BullSilhouette offset={scrollY} /> */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[52vw] max-w-[42rem] items-end justify-end md:flex lg:w-[48vw]">
       
      </div>
      <ChartLine />
      <ParticleField />

      {/* Vignette + red atmosphere */}
      <div className="absolute inset-0 bg-radial-ember pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-void to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 md:pb-24 pt-32">
        <div
          className="inline-flex items-center gap-2 mb-6 md:mb-8 px-3 py-1.5 border border-line/80 rounded-sm bg-void/40 backdrop-blur-sm"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blood animate-pulseDot" />
          <span className="font-mono text-[11px] tracking-wide text-ash">
            THE BULL IS LOADING&hellip;
          </span>
        </div>

        <h1
          className="font-display font-semibold text-[13vw] leading-[0.94] sm:text-6xl md:text-7xl lg:text-[6.4rem] text-bone text-balance max-w-4xl"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        >
          The bullrun
          <br />
          will come.
        </h1>

        <div
          className="flex items-baseline gap-3 mt-5 md:mt-6"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <span className="font-mono text-xl md:text-2xl text-blood">$BWC</span>
          <span className="h-px flex-1 max-w-[80px] bg-line" />
        </div>

        <p className="mt-5 md:mt-6 text-lg md:text-xl text-ash max-w-md leading-snug">
          Patience isn&rsquo;t weakness.
          <br />
          It&rsquo;s preparation.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-9 md:mt-10">
          <a
            href="#token"
            className="group inline-flex items-center gap-2 font-body font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm bg-blood text-bone hover:bg-flare transition-colors duration-200"
          >
            Buy $BWC
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#community"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm border border-line text-bone hover:border-ash transition-colors duration-200"
          >
            <Users className="w-4 h-4" />
            Join the community
          </a>
        </div>
      </div>
    </section>
  );
}

// Large abstract bull mark built from layered strokes — stands in for
// photographic hero art. Swap the <BullSilhouette> body for an <img>/<picture>
// once real creative is ready; keep the gradient overlays above it.
function BullSilhouette({ offset }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-end pr-0 md:pr-[-4%] opacity-90"
      style={{ transform: `translateY(${offset * 0.2}px) scale(1.02)` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 900 900"
        className="h-[110%] w-auto translate-x-[18%] md:translate-x-[8%] text-line"
        fill="none"
      >
        <defs>
          <linearGradient id="bullFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C81E2C" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#8F1C1F" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0A0908" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M180 520c-40-60-30-140 30-170 45-22 80 10 110 10s65-32 110-10c60 30 70 110 30 170-20 30-40 45-40 90 0 110-65 200-140 200s-140-90-140-200c0-45-20-60-40-90z"
          fill="url(#bullFade)"
        />
        <path
          d="M180 520c-40-60-30-140 30-170 45-22 80 10 110 10s65-32 110-10c60 30 70 110 30 170-20 30-40 45-40 90 0 110-65 200-140 200s-140-90-140-200c0-45-20-60-40-90z"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.6"
        />
        <path
          d="M120 380c-30-70 10-150 80-160 35-5 55 20 60 45M780 380c30-70-10-150-80-160-35-5-55 20-60 45"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.5"
        />
        <circle cx="380" cy="470" r="7" fill="currentColor" fillOpacity="0.5" />
        <circle cx="520" cy="470" r="7" fill="currentColor" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

function ChartLine() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full h-[45%] opacity-70"
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C81E2C" stopOpacity="0" />
          <stop offset="60%" stopColor="#C81E2C" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2FB86E" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path
        d="M0 220 L100 210 L180 230 L260 180 L340 200 L420 150 L500 175 L580 120 L660 140 L740 90 L820 110 L900 60 L980 85 L1060 40 L1140 55 L1200 20"
        fill="none"
        stroke="url(#lineFade)"
        strokeWidth="2.5"
        strokeDasharray="1000"
        className="animate-drawLine"
      />
    </svg>
  );
}

function ParticleField() {
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.round((i * 137.5) % 100),
      top: 20 + Math.round((i * 53.7) % 60),
      size: 1 + (i % 3),
      delay: (i % 6) * 0.7,
    })),
  ).current;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-blood/50 animate-drift"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${6 + (p.id % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}
