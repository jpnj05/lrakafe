import { Fragment, useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

/*
 * Splits copy into words, honouring `*accent*` markers across any number of
 * words and around punctuation (`*beans*,` accents only "beans"). Each word
 * keeps its segments so punctuation can stay roman next to an italic phrase.
 */
function parseWords(text) {
  const words = []
  let segments = null
  let accent = false

  for (const char of text) {
    if (char === '*') {
      accent = !accent
      continue
    }

    if (/\s/.test(char)) {
      segments = null
      continue
    }

    if (!segments) {
      segments = []
      words.push(segments)
    }

    const last = segments[segments.length - 1]

    if (last && last.accent === accent) {
      last.text += char
    } else {
      segments.push({ text: char, accent })
    }
  }

  return words
}

export default function AnimatedHeading({
  as: Tag = 'h2',
  text,
  className = '',
  delay = 0,
  start = 'top 85%',
}) {
  const ref = useRef(null)
  const words = parseWords(text)

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
      {words.map((segments, wordIndex) => (
        <Fragment key={`${segments[0].text}-${wordIndex}`}>
          {wordIndex > 0 ? ' ' : null}
          <span className="word">
            <span className="word-inner">
              {segments.map((segment, segmentIndex) => (
                <span
                  key={`${segment.text}-${segmentIndex}`}
                  className={segment.accent ? 'accent' : undefined}
                >
                  {segment.text}
                </span>
              ))}
            </span>
          </span>
        </Fragment>
      ))}
    </Tag>
  )
}
