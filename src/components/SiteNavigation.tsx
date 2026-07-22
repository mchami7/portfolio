import { resumeLink } from '../data/profile'

type SiteNavigationProps = {
  activePage: 'work' | 'about'
}

export function SiteNavigation({ activePage }: SiteNavigationProps) {
  return (
    <nav className="site-navigation" aria-label="Primary navigation">
      <div className="site-identity" aria-hidden="true">
        <span className="system-status-dot" />
        <span>MC // PLAYER_01</span>
      </div>
      <div className="site-navigation-links">
        <a className={activePage === 'work' ? 'active' : ''} href="#/">
          Work
        </a>
        <a className={activePage === 'about' ? 'active' : ''} href="#/about">
          About Me
        </a>
        <a href={resumeLink.href} rel="noreferrer" target="_blank">
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  )
}
