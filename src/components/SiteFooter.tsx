import { socialLinks } from '../data/profile'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-status" aria-hidden="true">
        <span>Portfolio // Online</span>
        <span>London, UK // GMT</span>
      </div>
      <nav className="footer-links" aria-label="Contact links">
        {socialLinks.filter((link) => !link.resume).map((link) => (
          <a href={link.href} key={link.name} rel="noreferrer" target="_blank">
            {link.name}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </footer>
  )
}
