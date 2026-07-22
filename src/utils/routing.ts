export function getProjectSlugFromHash() {
  if (typeof window === 'undefined') {
    return null
  }

  const match = window.location.hash.match(/^#\/portfolio\/([^/]+)$/)
  return match?.[1] ?? null
}

export function isCvPreviewHash() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.location.hash === '#/cv'
}

export function isAboutHash() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.location.hash === '#/about'
}
