import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-lra">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand">
              Lra<span>Kafe</span>
              <i aria-hidden="true">*</i>
            </Link>
            <p className="footer-tagline">
              Small-batch coffee, house-made syrups, and a corner that always
              has room for one more.
            </p>
            <span className="footer-seal">Jaro · Iloilo City</span>
          </div>

          <div className="footer-col">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-col">
            <h3>Visit</h3>
            <p>28 Luna Street, Jaro</p>
            <p>Iloilo City, 5000 PH</p>
            <p>+63 912 345 6789</p>
            <a href="mailto:hello@lrakafe.ph">hello@lrakafe.ph</a>
          </div>

          <div className="footer-col">
            <h3>Open daily</h3>
            <p>Mon — Thu · 7 AM – 10 PM</p>
            <p>Fri — Sat · 7 AM – 12 MN</p>
            <p>Sunday · 8 AM – 9 PM</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LraKafe. Brewed slow, always.</span>
          <span>A group project for the University of San Agustin.</span>
        </div>
      </div>
    </footer>
  )
}
