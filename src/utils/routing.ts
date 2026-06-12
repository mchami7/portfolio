export function getProjectSlugFromHash() {
  if (typeof window === 'undefined') {
    return null
  }

  const match = window.location.hash.match(/^#\/portfolio\/([^/]+)$/)
  return match?.[1] ?? null
}
