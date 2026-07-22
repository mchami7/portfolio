import type { Project } from '../types/portfolio'

interface ProjectGridProps {
  items: Project[]
}

export function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <div className="work-grid">
      {items.map((project, index) => (
        <a
          aria-label={`Open ${project.title} project details`}
          className="work-card"
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
              <div className="work-card-placeholder" aria-hidden="true">
                <span>?</span>
              </div>
            )}
          </div>
          <div className="work-card-overlay">
            <h2>{project.title}</h2>
            <p>{project.role}</p>
            <span className="work-card-action">Open project // Enter</span>
          </div>
        </a>
      ))}
    </div>
  )
}
