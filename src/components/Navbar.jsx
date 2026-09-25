import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SOCIALS } from '../content';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Token', href: '#token' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Community', href: '#community' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-void/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <BullMark className="w-7 h-7 md:w-8 md:h-8 text-blood" />
          <span className="font-display font-semibold tracking-tight text-sm md:text-base text-bone leading-none">
            BULLRUN WILL COME
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9 font-body text-sm text-ash">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bone transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={SOCIALS.x}
            target="_blank"
            rel="noreferrer"
            aria-label="Bullrun Will Come on X"
            className="text-ash hover:text-bone transition-colors duration-200"
          >
            <XIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href="#token"
            className="font-body text-sm font-semibold px-5 py-2.5 rounded-sm bg-blood text-bone hover:bg-flare transition-colors duration-200"
          >
            Buy $BWC
          </a>
        </div>

        <button
          className="md:hidden text-bone p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-void border-t border-line px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1 font-body text-base">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-ash hover:text-bone border-b border-line/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-5">
            <a
              href={SOCIALS.x}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 border border-line rounded-sm text-ash hover:text-bone hover:border-ash transition-colors"
              aria-label="Bullrun Will Come on X"
            >
              <XIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="#token"
              onClick={() => setOpen(false)}
              className="flex-1 text-center font-semibold text-sm px-5 py-3 rounded-sm bg-blood text-bone"
            >
              Buy $BWC
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function BullMark({ className }) {
  // Minimal geometric bull-horn mark used as the site's logo glyph.
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 14C4 9 8 5 12 7C13.5 7.8 14 9 16 9C18 9 18.5 7.8 20 7C24 5 28 9 28 14C28 12 26 11 24.5 12C23 13 23 15 23 17C23 22 19.5 26 16 26C12.5 26 9 22 9 17C9 15 9 13 7.5 12C6 11 4 12 4 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
