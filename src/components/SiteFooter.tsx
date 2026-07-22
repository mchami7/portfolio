import { socialLinks } from '../data/profile'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label="Contact links">
        {socialLinks.map((link) => (
          <a href={link.href} key={link.name} rel="noreferrer" target="_blank">
            {link.name}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </footer>
  )
}
