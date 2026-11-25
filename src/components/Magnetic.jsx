import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { canHover, prefersReducedMotion } from '../lib/motion'

export default function Magnetic({ children, strength = 0.28, className = '' }) {
  const ref = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion() || !canHover()) return undefined

    const el = ref.current
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      xTo((event.clientX - (rect.left + rect.width / 2)) * strength)
      yTo((event.clientY - (rect.top + rect.height / 2)) * strength)
    }

    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, { scope: ref })

  return (
    <span ref={ref} className={`magnetic ${className}`.trim()}>
      {children}
    </span>
  )
}
