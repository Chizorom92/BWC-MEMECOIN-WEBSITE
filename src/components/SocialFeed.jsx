import { useReveal } from '../hooks/useReveal'
import { XIcon } from './Navbar'
import { SAMPLE_POSTS, SOCIALS } from '../content'

export default function SocialFeed() {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative bg-charcoal py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal flex items-end justify-between flex-wrap gap-4 mb-4">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-bone">
            From the herd
          </h2>
          <a
            href={SOCIALS.x}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-ash hover:text-bone transition-colors"
          >
            <XIcon className="w-3.5 h-3.5" />
            Follow @Bullrun_BWC
          </a>
        </div>
        <p className="reveal text-ash max-w-md mb-12">
         
        </p>

        <div className="reveal grid sm:grid-cols-3 gap-px bg-line border border-line">
          {SAMPLE_POSTS.map((post, i) => (
            <div key={i} className="bg-ember p-7 flex flex-col justify-between min-h-[190px]">
              <p className="font-body text-base text-bone leading-relaxed">
                {post.text}
              </p>
              <div className="flex items-center justify-between mt-6">
                <span className="font-mono text-xs text-blood">{post.handle}</span>
                <span className="font-mono text-xs text-ash">{post.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
