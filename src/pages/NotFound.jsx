import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="container-lra">
        <span className="eyebrow">404</span>
        <h1 className="page-title">
          This cup went <em>cold.</em>
        </h1>
        <p className="page-lede">
          The page you were looking for is not on the menu. Let us pour you
          something else.
        </p>
        <Link to="/shop" className="btn-lra">
          <span>Back to the menu</span>
        </Link>
      </div>
    </section>
  )
}
