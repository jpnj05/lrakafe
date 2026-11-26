import { useRef } from 'react'
import { Link } from 'react-router-dom'
import AnimatedHeading from '../components/AnimatedHeading'
import Magnetic from '../components/Magnetic'
import ProductCard from '../components/ProductCard'
import ResponsiveImage from '../components/ResponsiveImage'
import Reveal from '../components/Reveal'
import { products } from '../data/products'
import { gsap, useGSAP } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

const featured = products.filter((product) => product.featured)

const steps = [
  {
    title: 'Pick your bean',
    copy: 'Twelve origins sit on the shelf behind the bar. Ask for the tasting card and we will let you smell before you commit.',
  },
  {
    title: 'We grind to order',
    copy: 'Every dose is weighed, every shot timed. Nothing sits in a hopper longer than the morning it was roasted for.',
  },
  {
    title: 'Stay a while',
    copy: 'Take the corner seat. Refills on brewed coffee are half price after the first cup. That is the whole business plan.',
  },
]

const values = [
  {
    index: '01',
    title: 'Beans with a paper trail',
    copy: 'We buy directly from growers in Bukidnon, Benguet and Davao, and we print the farm on every bag.',
  },
  {
    index: '02',
    title: 'Syrups from our kitchen',
    copy: 'Muscovado, pandan, burnt honey, ube, cooked in-house in small pots, never from a pump bottle.',
  },
  {
    index: '03',
    title: 'A corner for everyone',
    copy: 'Students, night-shift nurses, first dates and regulars who have their order written on the wall.',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const ritualRef = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })

    intro
      .from('.hero-eyebrow', { y: 18, autoAlpha: 0, duration: 0.7 })
      .from(
        '.hero-title .line > span',
        { yPercent: 118, duration: 1.2, stagger: 0.1 },
        '-=0.4',
      )
      .from('.hero-lede', { y: 22, autoAlpha: 0, duration: 0.8 }, '-=0.7')
      .from('.hero-actions > *', { y: 16, autoAlpha: 0, duration: 0.7, stagger: 0.09 }, '-=0.55')
      .from('.hero-meta > *', { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.07 }, '-=0.5')
      .from('.hero-frame', { yPercent: 6, autoAlpha: 0, scale: 1.05, duration: 1.3 }, 0.15)
      .from('.hero-stamp', { scale: 0, rotate: -35, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.6)' }, 0.9)
      .from('.hero-scroll', { autoAlpha: 0, duration: 0.6 }, '-=0.4')

    gsap.to('.hero-frame img', {
      yPercent: 9,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to('.hero-copy', {
      yPercent: -7,
      autoAlpha: 0.18,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: heroRef })

  useGSAP(() => {
    if (prefersReducedMotion()) return

    gsap.fromTo(
      '.story-media img',
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  }, { scope: storyRef })

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.set('.ritual-line-fill', { scaleY: 0, transformOrigin: 'top' })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ritualRef.current,
          start: 'top top',
          end: '+=1100',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      })

      timeline
        .to('.ritual-line-fill', { scaleY: 1, ease: 'none' }, 0)
        .from('.ritual-step', { y: 90, autoAlpha: 0, stagger: 0.42, duration: 1 }, 0)
    })

    mm.add('(max-width: 991px)', () => {
      gsap.from('.ritual-step', {
        y: 40,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ritualRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    })

    return () => mm.revert()
  }, { scope: ritualRef })

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="container-lra hero-inner">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">
              LraKafe · Jaro, Iloilo · <span className="nowrap">Est. 2026</span>
            </span>

            <h1 className="hero-title">
              <span className="line">
                <span>Slow coffee,</span>
              </span>
              <span className="line">
                <span>
                  warm <em>corners.</em>
                </span>
              </span>
            </h1>

            <p className="hero-lede">
              A small coffee bar two doors from the old plaza. We roast in
              five-kilo batches, cook our own syrups, and keep the music low
              enough to hear the rain.
            </p>

            <div className="hero-actions">
              <Magnetic>
                <Link to="/shop" className="btn-lra">
                  <span>Explore the menu</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </Magnetic>
              <Link to="/about" className="link-arrow">
                Read our story
              </Link>
            </div>

            <div className="hero-meta">
              <div>
                <strong>12</strong>
                <span>single origins</span>
              </div>
              <div>
                <strong>5kg</strong>
                <span>roasted at a time</span>
              </div>
              <div>
                <strong>05</strong>
                <span>house syrups</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <figure className="hero-frame">
              <ResponsiveImage
                src="/images/hero-interior.jpg"
                widths={[640, 960, 1392]}
                sizes="(min-width: 992px) 560px, 92vw"
                alt="The LraKafe counter, lit by warm brass pendants"
                width="1392"
                height="752"
                priority
              />
            </figure>

            <div className="hero-stamp" aria-hidden="true">
              <svg viewBox="0 0 120 120" className="stamp-svg">
                <defs>
                  <path
                    id="stampCircle"
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                </defs>
                <text>
                  <textPath href="#stampCircle">
                    SMALL BATCH · SLOW ROAST · LRAKAFE ·
                  </textPath>
                </text>
              </svg>
              <span className="stamp-center">*</span>
            </div>
          </div>
        </div>

        <div className="container-lra">
          <div className="hero-scroll">
            <span>Scroll for the good stuff</span>
            <span className="hero-scroll-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section section-featured">
        <div className="container-lra">
          <div className="section-head">
            <div>
              <span className="eyebrow">On the bar this month</span>
              <AnimatedHeading
                as="h2"
                text="The cups we keep *coming back* to."
                className="display-md"
              />
            </div>
            <Link to="/shop" className="link-arrow">
              View the full menu
            </Link>
          </div>

          <Reveal className="product-grid" selector=".product-card" stagger={0.1}>
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </Reveal>

          <Reveal className="featured-foot" delay={0.1}>
            <p>
              Nine drinks on the menu, twelve beans behind the bar. The baristas
              will happily talk you out of the sweetest option.
            </p>
            <Magnetic>
              <Link to="/shop" className="btn-lra btn-lra--ghost">
                <span>Shop all drinks</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="section story" ref={storyRef}>
        <div className="container-lra story-grid">
          <Reveal className="story-media-wrap">
            <figure className="story-media">
              <ResponsiveImage
                src="/images/about-barista.jpg"
                widths={[440, 880]}
                sizes="(min-width: 992px) 44vw, 92vw"
                alt="A barista tamping coffee into a portafilter"
                width="880"
                height="1184"
              />
              <figcaption className="story-quote-card">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <p>
                  We opened because we wanted somewhere to stay a little longer
                  after class. Turns out everyone did.
                </p>
                <span className="quote-person">Nizon, founder</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="story-copy">
            <span className="eyebrow">Our story</span>
            <AnimatedHeading
              as="h2"
              text="A room built around the *second cup*."
              className="display-md"
            />
            <Reveal selector="p, .story-stats" stagger={0.1}>
              <p>
                LraKafe began as a joke between three thesis partners: what if
                the breaks were longer, the coffee better, and nobody minded if
                you stayed until closing? The first version was a fold-out table
                in a rented room in Jaro, one borrowed grinder, and a kettle that
                whistled like a jeepney.
              </p>
              <p>
                We still roast in small batches, still write the day’s beans on
                the mirror, and still believe a cafe should feel more like a
                friend’s kitchen than a showroom. The corner seats are the same
                ones we fought over on opening day.
              </p>
              <div className="story-stats">
                <div>
                  <strong>2026</strong>
                  <span>First fold-out table</span>
                </div>
                <div>
                  <strong>1,400+</strong>
                  <span>Cups a month, roughly</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>Owners, all still behind the bar</span>
                </div>
              </div>
              <Link to="/about" className="link-arrow">
                Meet the owners
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ritual" ref={ritualRef}>
        <div className="container-lra ritual-inner">
          <div className="ritual-head">
            <span className="eyebrow eyebrow--light">The Lra ritual</span>
            <AnimatedHeading
              as="h2"
              text="Three quiet minutes, done *right*."
              className="display-md"
            />
            <p>
              No drive-through, no autopilot. This is what happens between your
              order and your first sip, every single time.
            </p>
          </div>

          <div className="ritual-steps">
            <span className="ritual-line" aria-hidden="true">
              <span className="ritual-line-fill" />
            </span>
            {steps.map((step, index) => (
              <div className="ritual-step" data-step={`0${index + 1}`} key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="container-lra">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we care about</span>
              <AnimatedHeading
                as="h2"
                text="Good coffee, without the *theatre*."
                className="display-md"
              />
            </div>
          </div>

          <Reveal className="value-grid" selector=".value-item" stagger={0.1}>
            {values.map((value) => (
              <div className="value-item" key={value.title}>
                <span className="value-index">{value.index}</span>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container-lra">
          <Reveal className="quote-block">
            <p className="quote-body">
              “LraKafe is the kind of place that makes you cancel your next
              plan. I came for a latte and stayed for three hours. Twice this
              week.”
            </p>
            <span className="quote-person">Nicholas E. · regular since opening</span>
          </Reveal>
        </div>
      </section>

      <section className="invite">
        <div className="container-lra invite-inner">
          <span className="eyebrow eyebrow--light">Come by</span>
          <h2 className="invite-title">
            Save yourself <em>a corner.</em>
          </h2>
          <p>
            Open daily from 7 AM. Bring a book, a deadline, or nothing at all.
          </p>
          <div className="invite-actions">
            <Magnetic>
              <Link to="/contact" className="btn-lra btn-lra--light">
                <span>Find us</span>
                <span aria-hidden="true">→</span>
              </Link>
            </Magnetic>
            <Link to="/shop" className="link-arrow link-arrow--light">
              See what is brewing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
