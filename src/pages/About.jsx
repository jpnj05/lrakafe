import { Link } from 'react-router-dom'
import AnimatedHeading from '../components/AnimatedHeading'
import Magnetic from '../components/Magnetic'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'

const owners = [
  {
    initials: 'NJP',
    name: 'Nizon Jeorgie I. Pison II',
    role: 'Founder · Head Roaster',
    bio: 'Started pulling shots on a borrowed machine in his lola’s kitchen. Now he dials every batch by cupping note, smell, and stubbornness.',
  },
  {
    initials: 'KJO',
    name: 'Karl Joseph Opial',
    role: 'Co-Founder · Creative Director',
    bio: 'Draws the chalkboard menus, picks the Sunday playlists, and insists that a drink should look as good as it tastes.',
  },
  {
    initials: 'SRS',
    name: 'Sam Robert B. Susvilla',
    role: 'Co-Founder · Operations Lead',
    bio: 'Keeps the bar running, the beans stocked, and remembers every regular’s order — including the ones who changed it last week.',
  },
]

const beliefs = [
  {
    title: 'Break fast, stay slow',
    copy: 'Coffee is a pause, not a transaction. Nobody gets rushed out of a seat here.',
  },
  {
    title: 'Local first',
    copy: 'Filipino beans, Filipino cacao, Filipino milk. Sourcing close keeps the cup honest.',
  },
  {
    title: 'Made by hand',
    copy: 'Syrups, pastries, signage, playlists — if it can be made in-house, we make it in-house.',
  },
]

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About LraKafe"
        title="We wanted somewhere to *stay* a little longer."
        lede="Three friends, one coffee cart in Jaro, and a stubborn belief that a neighbourhood needs one more place to sit down."
      />

      <section className="section section-story-about">
        <div className="container-lra about-grid">
          <Reveal className="about-media">
            <img
              src="/images/about-latte.jpg"
              alt="A latte and a croissant on a linen table at LraKafe"
              width="1184"
              height="880"
              loading="lazy"
            />
            <span className="about-media-tag">The first table, 2026</span>
          </Reveal>

          <div className="about-copy">
            <span className="eyebrow">The story</span>
            <AnimatedHeading
              as="h2"
              text="It started with a *rainy* Tuesday."
              className="display-md"
            />
            <Reveal selector="p" stagger={0.1}>
              <p>
                The three of us were finishing our IT degree at the University of
                San Agustin and kept losing our study table to the rain. The
                campus cafes closed at six; the ones that stayed open served
                coffee we drank out of politeness. So we pooled our allowance,
                bought a secondhand grinder from a barista who was leaving the
                city, and set up a fold-out table in a rented room on Luna
                Street.
              </p>
              <p>
                The idea was never to build a café empire. It was to build the
                room we kept looking for — warm lights, no minimum order, a
                barista who would tell you the truth about a drink. We named it
                after a shared habit of slurring our own initials together late
                at night: LraKafe. It stuck because nobody could pronounce it
                correctly and we liked that.
              </p>
              <p>
                Five years later the table is a proper bar, the grinder has been
                retired to the shelf, and the same three of us still close up on
                Saturdays. The coffee got better. The reason stayed the same.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-owners">
        <div className="container-lra">
          <div className="section-head">
            <div>
              <span className="eyebrow">The owners</span>
              <AnimatedHeading
                as="h2"
                text="Three people behind *the bar*."
                className="display-md"
              />
            </div>
            <p className="section-aside">
              Group members, roasters, baristas, and the ones who answer the
              emails — usually all three, all week.
            </p>
          </div>

          <Reveal className="owner-grid" selector=".owner-card" stagger={0.12}>
            {owners.map((owner) => (
              <article className="owner-card" key={owner.name}>
                <span className="monogram" aria-hidden="true">
                  {owner.initials}
                </span>
                <span className="owner-role">{owner.role}</span>
                <h3 className="owner-name">{owner.name}</h3>
                <p className="owner-bio">{owner.bio}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--dark about-beliefs">
        <div className="container-lra">
          <div className="section-head">
            <div>
              <span className="eyebrow eyebrow--light">What we believe</span>
              <AnimatedHeading
                as="h2"
                text="Small shop, *long* memory."
                className="display-md"
              />
            </div>
          </div>

          <Reveal className="belief-grid" selector=".belief" stagger={0.1}>
            {beliefs.map((belief) => (
              <div className="belief" key={belief.title}>
                <h3>{belief.title}</h3>
                <p>{belief.copy}</p>
              </div>
            ))}
          </Reveal>

          <div className="belief-cta">
            <p>Come taste the difference, or just come sit.</p>
            <Magnetic>
              <Link to="/contact" className="btn-lra btn-lra--light">
                <span>Find the shop</span>
                <span aria-hidden="true">→</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  )
}
