import type { Project, ProjectDetailGroup, ProjectDetailSection } from '../types/portfolio'

function DetailList({ items }: { items?: string[] }) {
  if (!items?.length) {
    return null
  }

  return (
    <ul className="done-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function DetailGroup({ group }: { group: ProjectDetailGroup }) {
  return (
    <div className="detail-group">
      <strong className="detail-group-header">{group.title}</strong>
      {group.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <DetailList items={group.items} />
    </div>
  )
}

function DetailSection({ section }: { section: ProjectDetailSection }) {
  return (
    <section className="part">
      <strong className="part-header">{section.title}</strong>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <DetailList items={section.items} />
      {section.groups?.map((group) => (
        <DetailGroup group={group} key={group.title} />
      ))}
    </section>
  )
}

function ProjectLinks({ links }: { links?: Project['links'] }) {
  if (!links?.length) {
    return null
  }

  return (
    <section className="part">
      <strong className="part-header">Links</strong>
      <ul className="code-links">
        {links.map((link) => (
          <li key={link.href}>
            <a className="url-link" href={link.href} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ProjectGallery({ project }: { project: Project }) {
  if (!project.media?.images.length) {
    return null
  }

  return (
    <section className="part project-gallery-section">
      <strong className="part-header">Gallery</strong>
      <div className="project-gallery">
        {project.media.images.map((image) => (
          <a
            className="project-gallery-item"
            href={image.src}
            key={image.src}
            rel="noreferrer"
            target="_blank"
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="content-wrapper">
      <div className="portfolio-header">
        <a className="portfolio-close" href="#/">
          <span aria-hidden="true">‹</span>
          <small>Portfolio</small>
        </a>
      </div>

      <article>
        <div className="portfolio-top">
          <div className={`content-placeholder detail-media${project.media ? ' has-project-media' : ''}`}>
            {project.media ? (
              <img
                className="project-hero-image"
                src={project.media.thumbnail}
                alt={`${project.title} screenshot`}
              />
            ) : (
              <div className="video-frame" aria-hidden="true">
                <span>{project.title.slice(0, 1)}</span>
              </div>
            )}
          </div>
          <h2>
            {project.title} ({project.year})
          </h2>
        </div>

        <div className="video-additional-info detail-additional-info">
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
          <div>
            <span className="icon" aria-hidden="true">
              ★
            </span>
            {project.role}
          </div>
        </div>

        <ProjectGallery project={project} />

        {project.detailSections ? (
          project.detailSections.map((section) => (
            <DetailSection section={section} key={section.title} />
          ))
        ) : (
          <>
            <section className="part">
              <strong className="part-header">Project</strong>
              {project.detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="part">
              <strong className="part-header">My contribution</strong>
              <p>{project.summary}</p>
              <DetailList items={project.responsibilities} />
            </section>

            <section className="part">
              <strong className="part-header">Tools & technology</strong>
              <ul className="badge-list detail-badges">
                {project.technology.split(',').map((item) => (
                  <li className="badge" key={item.trim()}>
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        <ProjectLinks links={project.links} />
      </article>
    </main>
  )
}
