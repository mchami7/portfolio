import { useState } from 'react'
import { mastersProjects, olderProjects, recentProjects } from '../data/projects'
import type { ProjectArea } from '../types/portfolio'
import { ProjectGrid } from './ProjectGrid'
import { SiteFooter } from './SiteFooter'
import { SiteNavigation } from './SiteNavigation'

export function PortfolioHome() {
  const [selectedArea, setSelectedArea] = useState<ProjectArea | 'all'>('all')
  const filters = [
    { value: 'all', label: 'All Work' },
    { value: 'games', label: 'Games & Multiplayer' },
    { value: 'ai', label: 'Applied AI' },
    { value: 'applications', label: 'Frontend & Desktop' },
  ] as const
  const matches = (project: (typeof recentProjects)[number]) => selectedArea === 'all' || project.areas.includes(selectedArea)
  const recentCount = recentProjects.filter(matches).length
  const mastersCount = mastersProjects.filter(matches).length
  const olderCount = olderProjects.filter(matches).length
  const totalCount = recentCount + mastersCount + olderCount
  const projectCount = (count: number) => `${count} ${count === 1 ? 'project' : 'projects'}`

  return (
    <div className="site-page">
      <main className="page-shell" id="work">
        <SiteNavigation activePage="work" />

        <section className="work-introduction" aria-labelledby="work-title">
          <div>
            <p className="hud-eyebrow">Profile // Software Engineer</p>
            <h1 id="work-title">
              Hello!
              <span>
                I&apos;m <strong className="work-name-highlight">Mira Chami.</strong> I build <strong>games</strong>, <strong>AI experiences</strong>,
                and <strong>interactive applications.</strong>
              </span>
            </h1>
            <p className="work-introduction-copy">I build gameplay, multiplayer systems, and interfaces, turning experimental ideas into working experiences.</p>
          </div>
        </section>

        <div className="project-browser">
          <div className="project-filters" role="group" aria-label="Filter projects by area">
            {filters.map((filter) => (
              <button type="button" aria-pressed={selectedArea === filter.value} onClick={() => setSelectedArea(filter.value)} key={filter.value}>
                {filter.label}
              </button>
            ))}
          </div>
          <p className="project-filter-summary" role="status">
            {projectCount(totalCount)}{selectedArea === 'all' ? ' across games, AI, and applications' : ` in ${filters.find((filter) => filter.value === selectedArea)?.label}`}
          </p>
        </div>

        {recentCount > 0 && <section className="work-section featured-work-section" aria-labelledby="recent-projects-title">
          <div className="work-section-heading">
            <div>
              <h2 id="recent-projects-title">Featured Work</h2>
              <p>Recent projects at Tencent</p>
            </div>
            <span>{projectCount(recentCount)}</span>
          </div>
          <ProjectGrid items={recentProjects} area={selectedArea} />
        </section>}

        {mastersCount > 0 && <section className="work-section" aria-labelledby="masters-projects-title">
          <div className="work-section-heading">
            <div>
              <h2 id="masters-projects-title">Master&apos;s Projects</h2>
              <p>Kingston University, 2022–2023</p>
            </div>
            <span>{projectCount(mastersCount)}</span>
          </div>
          <ProjectGrid items={mastersProjects} area={selectedArea} />
        </section>}

        {olderCount > 0 && <section className="work-section older-work-section" aria-labelledby="older-projects-title">
          <div className="work-section-heading">
            <div>
              <h2 id="older-projects-title">Older Projects</h2>
            </div>
            <span>{projectCount(olderCount)}</span>
          </div>
          <ProjectGrid items={olderProjects} area={selectedArea} />
        </section>}
      </main>
      <SiteFooter />
    </div>
  )
}
