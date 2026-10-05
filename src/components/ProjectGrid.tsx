import type { Project, ProjectArea } from '../types/portfolio'

interface ProjectGridProps {
  items: Project[]
  area?: ProjectArea | 'all'
}

export function ProjectGrid({ items, area = 'all' }: ProjectGridProps) {
  return (
    <div className="work-grid">
      {items.filter((project) => area === 'all' || project.areas.includes(area)).map((project, index) => (
        <a
          aria-label={`Open ${project.title} project details`}
          className={`work-card${project.confidential ? ' work-card-confidential' : ''}`}
          href={`#/portfolio/${project.slug}`}
          key={project.title}
        >
          <span className="work-card-index">{String(index + 1).padStart(2, '0')}</span>
          <div className="work-card-media">
            {project.media ? (
              <img
                src={project.media.thumbnail}
                alt={`${project.title} screenshot`}
                loading="lazy"
              />
            ) : (
              <div className="work-card-placeholder">
                <span className="work-card-status">{project.confidential ? 'Confidential project' : 'Project case study'}</span>
              </div>
            )}
          </div>
          <div className="work-card-overlay">
            <h2>{project.title}</h2>
            <p>{project.role}</p>
            <p className="work-card-areas">{project.areas.map((projectArea) => ({ games: 'Games', ai: 'Applied AI', applications: 'Frontend & Desktop' })[projectArea]).join(' · ')}</p>
            <span className="work-card-action">Open project // Enter</span>
          </div>
        </a>
      ))}
    </div>
  )
}
