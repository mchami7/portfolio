import heroImage from '../assets/hero.png'
import { olderProjects, recentProjects } from '../data/projects'
import { aboutCopy, education, introCopy, skills } from '../data/profile'
import { Header } from './Header'
import { ProjectGrid } from './ProjectGrid'

export function PortfolioHome() {
  return (
    <main className="content-wrapper">
      <Header />

      <section id="home" className="about-information" aria-labelledby="intro-title">
        <picture>
          <img className="profile-image" src={heroImage} alt="Mira Chami profile mark" />
        </picture>
        <p className="about-text" id="intro-title">
          {introCopy}
        </p>
      </section>

      <section aria-labelledby="projects-title">
        <h2 id="projects-title">Recent Projects</h2>
        <ProjectGrid items={recentProjects} />
      </section>

      <section aria-labelledby="older-projects-title">
        <h2 id="older-projects-title">Older Portfolio Projects</h2>
        <ProjectGrid items={olderProjects} />
      </section>

      <section className="information-section" aria-labelledby="education-title">
        <h2 className="information-header" id="education-title">
          Educations
        </h2>
        <div className="information-text education-list">
          {education.map((item) => (
            <article key={item.school}>
              <h3>
                {item.school} ({item.period})
              </h3>
              <p>{item.award}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-title">
        <h2 id="skills-title">Technical Experience</h2>
        <ul className="badge-list">
          {skills.map((skill) => (
            <li className="badge" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="information-section" aria-labelledby="about-title">
        <h2 className="information-header" id="about-title">
          Hi, I&apos;m Mira
        </h2>
        <div className="information-text">
          {aboutCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  )
}
