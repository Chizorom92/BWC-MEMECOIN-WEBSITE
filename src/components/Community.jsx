import { useReveal } from "../hooks/useReveal";
import { XIcon } from "./Navbar";
import { SOCIALS } from "../content";
import { MessageCircle, Send } from "lucide-react";

const TICKER_TEXT = "$BWC \u2022 THE BULL IS COMING \u2022 STAY READY \u2022 ";

export default function Community() {
  const ref = useReveal();

  const buttons = [
    SOCIALS.x && {
      label: "Follow on X",
      href: SOCIALS.x,
      Icon: XIcon,
    },
    SOCIALS.telegram && {
      label: "Join Telegram",
      href: SOCIALS.telegram,
      Icon: Send,
    },
    SOCIALS.discord && {
      label: "Join Discord",
      href: SOCIALS.discord,
      Icon: MessageCircle,
    },
  ].filter(Boolean);

  return (
    <section
      id="community"
      ref={ref}
      className="relative bg-void py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="reveal font-display font-semibold text-4xl md:text-6xl text-bone text-balance">
          Join the herd
        </h2>
        <p className="reveal mt-6 text-lg md:text-xl text-ash max-w-lg mx-auto leading-relaxed">
          The strongest communities don&rsquo;t wait for the crowd. They build
          before the crowd arrives.
        </p>

        <div className="reveal flex flex-wrap justify-center gap-4 mt-10">
          {buttons.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm px-6 py-3.5 rounded-sm border border-line text-bone hover:border-blood hover:text-blood transition-colors duration-200"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="reveal mt-20 md:mt-28 border-y border-line py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker w-max">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="font-mono text-sm text-ash pr-4">
              {TICKER_TEXT.repeat(6)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
