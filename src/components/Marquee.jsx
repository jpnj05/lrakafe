import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

export default function Marquee({ items, speed = 30, className = '' }) {
  const ref = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const track = ref.current.querySelector('.marquee-track')
    if (!track) return

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: speed,
      ease: 'none',
      repeat: -1,
    })

    const slow = () => tween.timeScale(0.35)
    const normal = () => tween.timeScale(1)
    ref.current.addEventListener('pointerenter', slow)
    ref.current.addEventListener('pointerleave', normal)

    return () => {
      ref.current?.removeEventListener('pointerenter', slow)
      ref.current?.removeEventListener('pointerleave', normal)
    }
  }, { scope: ref })

  return (
    <div ref={ref} className={`marquee ${className}`.trim()} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {items.map((item) => (
              <span className="marquee-item" key={`${group}-${item}`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
