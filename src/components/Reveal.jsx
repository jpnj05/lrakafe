import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  y = 36,
  delay = 0,
  duration = 0.9,
  stagger = 0.09,
  selector,
  start = 'top 88%',
  ...rest
}) {
  const ref = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const targets = selector ? ref.current.querySelectorAll(selector) : [ref.current]
    if (!targets.length) return

    gsap.from(targets, {
      y,
      autoAlpha: 0,
      duration,
      delay,
      ease: 'power3.out',
      stagger: selector ? stagger : 0,
      scrollTrigger: {
        trigger: ref.current,
        start,
        once: true,
      },
    })
  }, { scope: ref })

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
