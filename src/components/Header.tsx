import { socialLinks } from '../data/profile'

export function Header() {
  return (
    <header className="header">
      <a className="header-link" href="#home">
        <h1>
          Mira Chami
          <small>Gameplay Programmer</small>
        </h1>
      </a>

      <nav className="links" aria-label="Profile links">
        {socialLinks.map((link) => (
          <a
            aria-label={link.name}
            className={link.resume ? 'link resume' : 'link'}
            href={link.href}
            key={link.name}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            target={link.href.startsWith('http') ? '_blank' : undefined}
          >
            <span aria-hidden="true">{link.label}</span>
            {link.resume ? <span className="link-icon" aria-hidden="true">↓</span> : null}
          </a>
        ))}
      </nav>
    </header>
  )
}
