# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, both factual to this project:

- **Course evaluators** — the instructor and class of the University of San Agustin IT program, reviewing this as a Lab Exam / Group Project (100 pts). They judge stack compliance (React + Vite, React-Bootstrap, React Router), UI consistency, navigation, and the presence of the required pages and copy.
- **Hypothetical customers** — students, night-shift workers, remote workers and couples in Jaro, Iloilo City, looking for a coffee bar to sit in rather than order from. They read the menu, understand what each drink is, and decide to visit.

## Product Purpose

LraKafe is the online storefront of a fictional small-batch coffee shop in Jaro, Iloilo City. It exists to make the shop's point of view legible before someone walks in: six drinks explained with real tasting notes, the three owners introduced by name, and the address, hours and contact details in one place.

Success means a visitor can go from the hero to a specific drink in two clicks, and can tell what kind of room this is without reading a mission statement.

## Positioning

A neighbourhood coffee bar whose menu is cooked as well as brewed — house-made muscovado, pandan, burnt honey and ube syrups, Filipino beans and cacao — presented with the restraint of a design studio rather than the noise of a coffee chain. The storefront sells the room, not a checkout.

## Operating Context

This is a coursework storefront demo, not a live commerce system:

- Runs locally with Vite; deployed only as static files.
- Six drinks across four categories, stored as static data in `src/data/products.js`.
- No cart, checkout, account, payment or backend. "Add to cart" is layout-only and intentionally inert.
- The contact form validates in the browser and stops at a confirmation message; nothing is sent.
- Address, phone number, email and hours are hypothetical, written for the brief.
- Photography is AI-generated for this project; there are no real product or shop photos.
- All copy is in English, with Filipino food terms (ube, pandan, muscovado, merienda, lola) used untranslated.

## Capabilities and Constraints

**Built:** home page with featured drinks and CTAs, shop listing with category filters, per-drink detail pages with size selector and spec table, about page with the group's story and the three owners, contact page with info, hours, map-style card and form, 404.

**Technical constraints to preserve:** React 19 + Vite 8, React-Bootstrap 5 components with a custom stylesheet, React Router 7 with a shared header/footer layout, GSAP 3.15 + ScrollTrigger for scroll animation, Lenis for smooth scrolling. Animations must respect `prefers-reduced-motion`.

**Explicitly undecided:** real commerce, user accounts, inventory, multi-language copy, real photography, analytics.

## Brand Commitments

- **Name:** LraKafe — capital L, capital K, one word, set in the display serif with a clay-colored asterisk after it.
- **Voice:** warm, specific, lightly wry, unpretentious. Concrete nouns over adjectives; never luxury-speak or hard-sell. Filipino terms are used naturally, without italics or translation.
- **Owners (named, do not change):** Nizon Jeorgie I. Pison II (founder, head roaster), Karl Joseph Opial (co-founder, creative director), Sam Robert B. Susvilla (co-founder, operations lead).
- **Story facts:** founded 2021 in a rented room on Luna Street, Jaro; started as a fold-out table between three IT students; name comes from slurring their initials together.
- **Signature line:** "Slow coffee, warm corners."

## Evidence on Hand

- Full menu copy, tasting notes, origins and drink descriptions in `src/data/products.js`.
- Owner bios and the shop story in `src/pages/About.jsx`; shop copy in `src/pages/Home.jsx`.
- Nine generated photographs in `public/images/` (interior, latte, barista, six drinks).
- The testimonial attributed to "Maris E." is invented for the layout. It is not a real customer quote, and future work must not present it as one.
- No press, awards, reviews, sales figures, certifications or supplier contracts exist. Do not invent them.

## Product Principles

1. **Sell the room, not the transaction.** Every page should feel like an invitation to sit down; commerce mechanics stay out of the way.
2. **Specific beats evocative.** Name the origin, the syrup, the street. One concrete detail is worth three adjectives.
3. **Craft without theatre.** The coffee is careful; the interface should not perform seriousness. Restraint reads as confidence.
4. **Warmth is structural.** Cream paper, espresso ink and clay accents are the product's temperament, not decoration applied at the end.
