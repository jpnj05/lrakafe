import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

function tokenize(text) {
  return text.split(' ').filter(Boolean).map((raw, index) => {
    const accent = raw.startsWith('*') && raw.endsWith('*') && raw.length > 2
    return {
      id: `${raw}-${index}`,
      text: accent ? raw.slice(1, -1) : raw,
      accent,
    }
  })
}

export default function AnimatedHeading({
  as: Tag = 'h2',
  text,
  className = '',
  delay = 0,
  start = 'top 85%',
}) {
  const ref = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    gsap.from(ref.current.querySelectorAll('.word-inner'), {
      yPercent: 118,
      rotate: 2,
      duration: 1.05,
      ease: 'power3.out',
      stagger: 0.055,
      delay,
      scrollTrigger: {
        trigger: ref.current,
        start,
        once: true,
      },
    })
  }, { scope: ref })

  return (
    <Tag ref={ref} className={`animated-heading ${className}`.trim()}>
      {tokenize(text).map((word) => (
        <span
          key={word.id}
          className={`word${word.accent ? ' is-accent' : ''}`}
        >
          <span className="word-inner">{word.text}</span>
        </span>
      ))}
    </Tag>
  )
}
