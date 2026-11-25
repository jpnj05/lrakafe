import { useRef, useState } from 'react'
import PageIntro from '../components/PageIntro'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'
import { gsap, useGSAP } from '../lib/gsap'
import { prefersReducedMotion } from '../lib/motion'

export default function Shop() {
  const [active, setActive] = useState('All')
  const gridRef = useRef(null)

  const visible =
    active === 'All'
      ? products
      : products.filter((product) => product.category === active)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    gsap.from(gridRef.current.querySelectorAll('.product-card'), {
      y: 44,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 88%',
        once: true,
      },
    })
  }, { scope: gridRef, dependencies: [active], revertOnUpdate: true })

  return (
    <>
      <PageIntro
        eyebrow="The menu"
        title="Six drinks, twelve *beans*, no rush."
        lede="Everything is pulled to order. Pick a cup, read the notes, and pretend you already know what a cortado is."
      />

      <section className="section section-shop">
        <div className="container-lra">
          <div className="shop-toolbar">
            <div className="filter-row" role="group" aria-label="Filter drinks by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-chip${active === category ? ' is-active' : ''}`}
                  aria-pressed={active === category}
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="count-note">
              {String(visible.length).padStart(2, '0')} drinks
            </span>
          </div>

          <div className="product-grid" ref={gridRef}>
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} headingLevel={2} />
            ))}
          </div>

          <div className="shop-note">
            <p>
              All prices in Philippine pesos. Oat and carabao milk swaps are
              free — just say the word. Beans are available in 250 g bags
              behind the bar.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
