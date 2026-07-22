type SiteNavigationProps = {
  activePage: 'work' | 'about'
}

export function SiteNavigation({ activePage }: SiteNavigationProps) {
  return (
    <nav className="site-navigation" aria-label="Primary navigation">
      <a className={activePage === 'work' ? 'active' : ''} href="#/">
        Work
      </a>
      <a className={activePage === 'about' ? 'active' : ''} href="#/about">
        About Me
      </a>
    </nav>
  )
}
