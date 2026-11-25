import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap'
import { ScrollTrigger } from '../lib/gsap'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
]

const navClass = ({ isActive }) => `nav-link-lra${isActive ? ' active' : ''}`

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sync = (self) => setScrolled(self.scroll() > 40)
    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: sync,
      onRefresh: sync,
    })
    return () => trigger.kill()
  }, [])

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container-lra header-inner">
          <Link to="/" className="brand" aria-label="LraKafe home">
            Lra<span>Kafe</span>
            <i aria-hidden="true">*</i>
          </Link>

          <nav className="desktop-nav" aria-label="Main">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Link to="/shop" className="btn-lra header-cta">
              <span>Order a cup</span>
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <span className="menu-toggle-bars" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <Offcanvas
        id="mobile-menu"
        show={open}
        onHide={() => setOpen(false)}
        placement="end"
        className="mobile-menu"
        aria-label="Mobile navigation"
      >
        <Offcanvas.Header closeButton closeVariant="white" className="mobile-menu-head">
          <Offcanvas.Title className="brand brand--light">
            Lra<span>Kafe</span>
            <i aria-hidden="true">*</i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mobile-menu-body">
          <nav aria-label="Mobile">
            {links.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >
                <small>{String(index + 1).padStart(2, '0')}</small>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu-foot">
            <p>28 Luna Street, Jaro, Iloilo City</p>
            <p>Open daily · 7:00 AM — 10:00 PM</p>
            <a href="mailto:hello@lrakafe.ph">hello@lrakafe.ph</a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
