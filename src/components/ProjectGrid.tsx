import type { Project } from '../types/portfolio'

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="experience">
      {items.map((project, index) => (
        <article className="job-card" key={project.title}>
          <a className="job-card-link" href={`#/portfolio/${project.slug}`}>
            <span className="sr-only">Open {project.title} project details</span>
          </a>
          <div className="job-card-video" aria-hidden="true">
            <div className="video-frame">
              <span>{index + 1}</span>
            </div>
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
            {project.title} ({project.year})
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
