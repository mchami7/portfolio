import profilePhoto from '../assets/mira-profile.jpg'
import { aboutCopy, education, skills } from '../data/profile'
import { SiteFooter } from './SiteFooter'
import { SiteNavigation } from './SiteNavigation'

export function AboutPage() {
  return (
    <div className="site-page">
      <main className="page-shell">
        <SiteNavigation activePage="about" />

        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-portrait">
            <img src={profilePhoto} alt="Mira Chami standing on a road at sunset" />
          </div>
          <div className="about-copy">
            <h1 className="sr-only" id="about-title">About Mira Chami</h1>
            <p className="hud-eyebrow">PROFILE // MC</p>
            {aboutCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>Currently based in London, UK.</p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.school}>
                <span>{item.period}</span>
                <h3>{item.school}</h3>
                <p>{item.award}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Technical Experience</h2>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
