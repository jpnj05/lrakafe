import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        to={`/shop/${product.slug}`}
        className="product-media"
        aria-label={`View ${product.name}`}
      >
        <img src={product.image} alt={product.name} loading="lazy" width="1024" height="1024" />
        <span className="product-badge">{product.category}</span>
        <span className="product-view">View the cup</span>
      </Link>

      <div className="product-body">
        <div className="product-line">
          <h3>
            <Link to={`/shop/${product.slug}`}>{product.name}</Link>
          </h3>
          <span className="price">₱{product.price}</span>
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
