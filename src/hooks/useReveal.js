import { useEffect, useRef } from 'react'

// Attaches an IntersectionObserver that adds `.in-view` to any descendant
// carrying the `.reveal` class once it scrolls into frame. One observer per
// section keeps this cheap and avoids a global scroll listener.
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const targets = node.classList.contains('reveal')
      ? [node, ...node.querySelectorAll('.reveal')]
      : [...node.querySelectorAll('.reveal')]

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
