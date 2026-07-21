import type { Project } from '../types/portfolio'

interface ProjectGridProps {
  items: Project[]
  showYear?: boolean
  variant?: 'default' | 'recent'
}

export function ProjectGrid({ items, showYear = true, variant = 'default' }: ProjectGridProps) {
  return (
    <div className={`experience${variant === 'recent' ? ' recent-experience' : ''}`}>
      {items.map((project, index) => (
        <article className="job-card" key={project.title}>
          <a className="job-card-link" href={`#/portfolio/${project.slug}`}>
            <span className="sr-only">Open {project.title} project details</span>
          </a>
          <div className={`job-card-video${project.media ? ' has-project-media' : ''}`}>
            {project.media ? (
              <img
                className="project-card-image"
                src={project.media.thumbnail}
                alt={`${project.title} screenshot`}
              />
            ) : (
              <div className="video-frame" aria-hidden="true">
                <span>{index + 1}</span>
              </div>
            )}
          </div>

          <div className="video-additional-info">
            <div>
              <span className="icon" aria-hidden="true">
                #
              </span>
              {index + 1}
            </div>
            <div>
              <span className="icon" aria-hidden="true">
                ⌛
              </span>
              {project.duration}
            </div>
            <div>
              <span className="icon" aria-hidden="true">
                ⚙
              </span>
              {project.technology}
            </div>
          </div>

          <h3 className="clickable-card-header">
            {project.title}
            {showYear ? ` (${project.year})` : null}
            <small>{project.role}</small>
          </h3>
          <p>{project.summary}</p>
          <ul className="done-list">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
