import { mastersProjects, olderProjects, recentProjects } from '../data/projects'
import { ProjectGrid } from './ProjectGrid'
import { SiteFooter } from './SiteFooter'
import { SiteNavigation } from './SiteNavigation'

export function PortfolioHome() {
  return (
    <div className="site-page">
      <main className="page-shell" id="work">
        <SiteNavigation activePage="work" />

        <section className="work-introduction" aria-labelledby="work-title">
          <div>
            <p className="hud-eyebrow">Profile // Gameplay &amp; Systems Engineer</p>
            <h1 id="work-title">
              Hello!
              <span>
                I&apos;m <strong className="work-name-highlight">Mira Chami.</strong> I make <strong>games</strong> and love bringing them to
                life with <strong>code.</strong>
              </span>
              <span>
                Check out my <strong>work</strong> below.
              </span>
            </h1>
          </div>
        </section>

        <section className="work-section" aria-labelledby="recent-projects-title">
          <div className="work-section-heading">
            <div>
              <h2 id="recent-projects-title">Recent Projects</h2>
              <p>Tencent</p>
            </div>
            <span>{recentProjects.length} entries // Active</span>
          </div>
          <ProjectGrid items={recentProjects} />
        </section>

        <section className="work-section" aria-labelledby="masters-projects-title">
          <div className="work-section-heading">
            <div>
              <h2 id="masters-projects-title">Master&apos;s Projects</h2>
              <p>Kingston University, 2022–2023</p>
            </div>
            <span>{mastersProjects.length} entries // Academic</span>
          </div>
          <ProjectGrid items={mastersProjects} />
        </section>

        <section className="work-section older-work-section" aria-labelledby="older-projects-title">
          <div className="work-section-heading">
            <div>
              <h2 id="older-projects-title">Older Projects</h2>
            </div>
            <span>{olderProjects.length} entries // Archive</span>
          </div>
          <ProjectGrid items={olderProjects} />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
