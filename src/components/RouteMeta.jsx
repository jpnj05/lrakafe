import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProduct } from '../data/products'

const DEFAULT_DESCRIPTION =
  'Small-batch coffee, house-made syrups, and warm corners in Jaro, Iloilo City.'

const ROUTES = {
  '/': {
    title: 'LraKafe · Slow coffee, warm corners',
    description: DEFAULT_DESCRIPTION,
  },
  '/shop': {
    title: 'The drinks · LraKafe',
    description:
      'Nine drinks poured to order, from ceremonial matcha to muscovado lattes, plus beans to take home.',
  },
  '/about': {
    title: 'Our story · LraKafe',
    description:
      'Three friends, one rented room on Luna Street, and a bar built for staying a while in Jaro, Iloilo City.',
  },
  '/contact': {
    title: 'Visit us · LraKafe',
    description:
      'Find us two doors down from the old Jaro plaza in Iloilo City, or write about catering and wholesale beans.',
  },
}

const NOT_FOUND = {
  title: 'Page not found · LraKafe',
  description: DEFAULT_DESCRIPTION,
}

function setMeta(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    let page = ROUTES[pathname]

    if (!page && pathname.startsWith('/shop/')) {
      const product = getProduct(pathname.split('/')[2])
      if (product) {
        page = {
          title: `${product.name} · LraKafe`,
          description: product.short,
        }
      }
    }

    const { title, description } = page ?? NOT_FOUND
    const { origin } = window.location

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', `${origin}/og-image.jpg`)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${origin}${pathname}`)
  }, [pathname])

  return null
}
