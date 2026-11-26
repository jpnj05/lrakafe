import { Link } from 'react-router-dom'
import ResponsiveImage from './ResponsiveImage'

export default function ProductCard({ product, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`
  const hasMultipleSizes = (product.sizes?.length ?? 0) > 1

  return (
    <article className="product-card">
      <Link
        to={`/shop/${product.slug}`}
        className="product-media"
        aria-label={`View ${product.name}`}
      >
        <ResponsiveImage
          src={product.image}
          widths={[512, 1024]}
          sizes="(min-width: 1200px) 360px, (min-width: 992px) 30vw, (min-width: 576px) 46vw, 92vw"
          alt={product.name}
          width="1024"
          height="1024"
        />
        <span className="product-badge">{product.category}</span>
        <span className="product-view">View the cup</span>
      </Link>

      <div className="product-body">
        <div className="product-line">
          <Heading>
            <Link to={`/shop/${product.slug}`}>{product.name}</Link>
          </Heading>
          <span className="price">
            {hasMultipleSizes && <span className="price-from">from</span>}
            <span>₱{product.price}</span>
          </span>
        </div>
        <p className="product-short">{product.short}</p>
        <ul className="note-list">
          {product.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
