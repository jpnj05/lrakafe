import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

export default function ScrollProgress() {
  const ref = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    gsap.to(ref.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        start: 0,
        end: 'max',
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    })

    return () => ScrollTrigger.refresh()
  }, { scope: ref })

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={ref} />
    </div>
  )
}
