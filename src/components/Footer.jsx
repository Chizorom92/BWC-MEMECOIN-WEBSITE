import { XIcon, BullMark } from './Navbar'
import { SOCIALS } from '../content'

export default function Footer() {
  const links = [
    SOCIALS.x && { label: 'X', href: SOCIALS.x },
    SOCIALS.telegram && { label: 'Telegram', href: SOCIALS.telegram },
    SOCIALS.discord && { label: 'Discord', href: SOCIALS.discord },
    { label: 'Contract', href: '#token' },
    { label: 'Buy $BWC', href: '#token' },
  ].filter(Boolean)

  return (
    <footer className="relative bg-void border-t border-line pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <BullMark className="w-6 h-6 text-blood" />
              <span className="font-display font-semibold text-bone">
                Bullrun Will Come
              </span>
            </div>
            <p className="font-display italic text-lg text-ash">
              The bullrun will come.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-sm text-ash hover:text-bone transition-colors"
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {l.label}
              </a>
            ))}
            <a
              href={SOCIALS.x}
              target="_blank"
              rel="noreferrer"
              aria-label="Bullrun Will Come on X"
              className="text-ash hover:text-bone transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </a>
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-line/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-ash">
            &copy; 2026 Bullrun Will Come. All rights reserved.
          </p>
          <p className="text-xs text-ash/80 max-w-xl leading-relaxed">
            $BWC is a community-driven crypto project. Cryptocurrency involves
            significant risk. Nothing on this website constitutes financial or
            investment advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
