import type { Project } from '../types/portfolio'

interface ProjectGridProps {
  items: Project[]
}

export function ProjectGrid({ items }: ProjectGridProps) {
  return (
    <div className="work-grid">
      {items.map((project) => (
        <a
          aria-label={`Open ${project.title} project details`}
          className="work-card"
          href={`#/portfolio/${project.slug}`}
          key={project.title}
        >
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
          </div>
        </a>
      ))}
    </div>
  )
}
