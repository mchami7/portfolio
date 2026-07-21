import { olderProjects, recentProjects } from '../data/projects'
import { aboutCopy, education, skills } from '../data/profile'
import { Header } from './Header'
import { ProjectGrid } from './ProjectGrid'

export function PortfolioHome() {
  return (
    <main className="content-wrapper" id="home">
      <Header />

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

      <section aria-labelledby="recent-projects-title">
        <h2 id="recent-projects-title">Recent Projects</h2>
        <div className="employment-header">
          <h3>Tencent</h3>
          <p>Game Tech R&amp;D Engineer | London, UK | Nov 2023-Present</p>
        </div>
        <ProjectGrid items={recentProjects} showYear={false} variant="recent" />
      </section>

      <section aria-labelledby="older-projects-title">
        <h2 id="older-projects-title">Older Portfolio Projects</h2>
        <ProjectGrid items={olderProjects} />
      </section>

      <section className="information-section" aria-labelledby="education-title">
        <h2 className="information-header" id="education-title">
          Education
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

    </main>
  )
}
