import { useState } from 'react'
import { Alert, Col, Form, Row } from 'react-bootstrap'
import Magnetic from '../components/Magnetic'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'

const hours = [
  ['Monday — Thursday', '7:00 AM – 10:00 PM'],
  ['Friday — Saturday', '7:00 AM – 12:00 MN'],
  ['Sunday', '8:00 AM – 9:00 PM'],
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact Us"
        title="Come sit with us, or *write* first."
        lede="We are two doors down from the old Jaro plaza. If the brass lamps are on, we are open — and the corner seat is probably still free."
      />

      <section className="section section-contact">
        <div className="container-lra contact-grid">
          <Reveal className="contact-info" selector=".info-block, .hours-list" stagger={0.08}>
            <h2 className="visually-hidden">Shop details and opening hours</h2>
            <div className="info-block">
              <h3>Visit</h3>
              <p>
                28 Luna Street, Jaro
                <br />
                Iloilo City, 5000 Philippines
              </p>
            </div>

            <div className="info-block">
              <h3>Call or message</h3>
              <p>
                <a href="tel:+639123456789">+63 912 345 6789</a>
                <br />
                <a href="mailto:hello@lrakafe.ph">hello@lrakafe.ph</a>
              </p>
            </div>

            <div className="info-block">
              <h3>Follow</h3>
              <p>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  @lrakafe ↗
                </a>
              </p>
            </div>

            <ul className="hours-list">
              {hours.map(([day, time]) => (
                <li key={day}>
                  <span>{day}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact-form-wrap">
            <div className="contact-form">
              <span className="eyebrow">Say hello</span>
              <h2 className="display-sm">Drop us a note</h2>
              <p className="form-lede">
                Catering, wholesale beans, a lost umbrella, or a drink you wish
                we made — it all lands in the same inbox.
              </p>

              {sent && (
                <Alert variant="success" className="form-alert">
                  Salamat! Your note is in our inbox. We usually reply within a
                  day — sooner if it is about coffee.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="contact-name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="contact-email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="contact-topic">
                      <Form.Label>What is this about?</Form.Label>
                      <Form.Select name="topic" defaultValue="General question">
                        <option>General question</option>
                        <option>Catering & events</option>
                        <option>Wholesale beans</option>
                        <option>Careers at the bar</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="contact-message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={4}
                        placeholder="Tell us everything…"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Magnetic>
                      <button type="submit" className="btn-lra">
                        <span>Send message</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </Magnetic>
                  </Col>
                </Row>
              </Form>
            </div>
          </Reveal>
        </div>

        <div className="container-lra">
          <Reveal className="map-card">
            <img
              src="/images/hero-interior.jpg"
              alt="The street-side window of LraKafe in Jaro"
              width="1392"
              height="752"
              loading="lazy"
            />
            <span className="map-pin" aria-hidden="true">
              <span />
            </span>
            <div className="map-caption">
              <strong>LraKafe</strong>
              <span>Luna Street · Jaro · Iloilo City</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
