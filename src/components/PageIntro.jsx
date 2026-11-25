import AnimatedHeading from './AnimatedHeading'

export default function PageIntro({ eyebrow, title, lede, children }) {
  return (
    <section className="page-hero">
      <div className="container-lra">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <AnimatedHeading as="h1" text={title} className="page-title" />
        {lede && <p className="page-lede">{lede}</p>}
        {children}
      </div>
    </section>
  )
}
