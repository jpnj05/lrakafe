import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { getProduct, products } from '../data/products'
import NotFound from './NotFound'

export default function Product() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const sizes = product?.sizes ?? []
  const [chosenSize, setChosenSize] = useState(null)
  const size =
    sizes.find((option) => option.label === chosenSize) ?? sizes[0]

  if (!product) return <NotFound />

  const related = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3)

  return (
    <>
      <section className="page-hero page-hero--product">
        <div className="container-lra">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          <div className="product-detail">
            <Reveal className="detail-media">
              <img
                src={product.image}
                alt={product.name}
                width="1024"
                height="1024"
              />
              <span className="detail-badge">
                {product.badge ?? `${product.roast} roast`}
              </span>
            </Reveal>

            <Reveal className="detail-info" selector=".detail-in" stagger={0.08}>
              <span className="eyebrow detail-in">
                {product.category} · {product.origin}
              </span>
              <h1 className="detail-in">{product.name}</h1>
              <p className="detail-tagline detail-in">{product.tagline}</p>

              <div className="detail-price detail-in">
                ₱{size.price} <span>/ {size.label}</span>
              </div>

              <p className="detail-desc detail-in">{product.description}</p>

              <ul className="detail-notes detail-in">
                {product.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>

              <div className="size-row detail-in" role="group" aria-label="Chosen size">
                {sizes.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    className={`filter-chip${size.label === option.label ? ' is-active' : ''}`}
                    aria-pressed={size.label === option.label}
                    onClick={() => setChosenSize(option.label)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="detail-actions detail-in">
                <button type="button" className="btn-lra">
                  <span>Add to cart</span>
                  <span aria-hidden="true">+</span>
                </button>
                <Link to="/contact" className="btn-lra btn-lra--ghost">
                  <span>Visit the bar</span>
                </Link>
              </div>

              <dl className="detail-specs detail-in">
                <div>
                  <dt>Origin</dt>
                  <dd>{product.origin}</dd>
                </div>
                <div>
                  <dt>Altitude</dt>
                  <dd>{product.altitude}</dd>
                </div>
                <div>
                  <dt>Brew</dt>
                  <dd>{product.brew}</dd>
                </div>
                <div>
                  <dt>Reviews</dt>
                  <dd>
                    {product.rating} ★ · {product.reviews}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-related">
        <div className="container-lra">
          <div className="section-head">
            <div>
              <span className="eyebrow">Keep the cup going</span>
              <h2 className="display-sm">You might also like</h2>
            </div>
            <Link to="/shop" className="link-arrow">
              Back to the menu
            </Link>
          </div>

          <Row className="g-4">
            {related.map((item) => (
              <Col key={item.slug} sm={6} lg={4}>
                <ProductCard product={item} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  )
}
