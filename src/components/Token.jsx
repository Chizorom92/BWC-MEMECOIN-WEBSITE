import { useState } from 'react'
import { Check, Copy, ShieldAlert } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { TOKEN_INFO } from '../content'

export default function Token() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  const hasContract = Boolean(TOKEN_INFO.contract)

  const handleCopy = async () => {
    if (!hasContract) return
    try {
      await navigator.clipboard.writeText(TOKEN_INFO.contract)
      setCopied(f)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can fail silently in unsupported contexts — no action needed.
    }
  }

  const rows = [
    { label: 'Token', value: TOKEN_INFO.name },
    { label: 'Ticker', value: TOKEN_INFO.ticker },
    { label: 'Chain', value: TOKEN_INFO.chain || 'To be announced' },
    { label: 'Contract', value: TOKEN_INFO.contract || 'Not yet deployed' },
  ]

  return (
    <section id="token" ref={ref} className="relative bg-void py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal mb-12">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone">
            $BWC token
          </h2>
        </div>

        <div className="reveal grid md:grid-cols-[1.2fr_1fr] gap-px bg-line border border-line">
          <div className="bg-ember p-8 md:p-10">
            <dl className="space-y-6">
              {rows.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-4 pb-5 border-b border-line/70 last:border-0 last:pb-0">
                  <dt className="font-mono text-xs text-ash uppercase tracking-wide">
                    {r.label}
                  </dt>
                  <dd
                    className={`font-mono text-sm sm:text-base text-right break-all ${
                      r.label === 'Contract' && !hasContract ? 'text-ash italic' : 'text-bone'
                    }`}
                  >
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>

            <button
              onClick={handleCopy}
              disabled={!hasContract}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-6 py-4 rounded-sm bg-blood text-bone hover:bg-flare transition-colors duration-200 disabled:bg-line disabled:text-ash disabled:cursor-not-allowed"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied' : hasContract ? 'Copy contract address' : 'Contract not yet live'}
            </button>
          </div>

          <div className="bg-ember p-8 md:p-10 flex flex-col justify-center">
            <ShieldAlert className="w-6 h-6 text-blood mb-4" />
            <p className="font-body text-sm md:text-base text-ash leading-relaxed">
              Always verify the official contract address through our official
              channels before trading. We will never DM you an address, and we
              will never message you first.
            </p>
            <a
              href="https://x.com/Bullrun_BWC"
              target="_blank"
              rel="noreferrer"
              className="mt-6 font-mono text-xs text-blood hover:text-flare transition-colors"
            >
              Verify on @Bullrun_BWC
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
