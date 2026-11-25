let lenis = null

export function setLenis(instance) {
  lenis = instance
}

export function getLenis() {
  return lenis
}

export function scrollToTop(immediate = true) {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  if (lenis) lenis.scrollTo(0, { immediate, force: true })
}
