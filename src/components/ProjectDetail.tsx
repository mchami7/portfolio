import type { Project, ProjectDetailGroup, ProjectDetailSection } from '../types/portfolio'
import { SiteFooter } from './SiteFooter'
import { SiteNavigation } from './SiteNavigation'

function DetailList({ items }: { items?: string[] }) {
  if (!items?.length) {
    return null
  }

  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function DetailGroup({ group }: { group: ProjectDetailGroup }) {
  return (
    <section className="detail-group">
      <h3>{group.title}</h3>
      {group.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <DetailList items={group.items} />
    </section>
  )
}

function DetailSection({ section }: { section: ProjectDetailSection }) {
  return (
    <section className="project-section">
      <h2>{section.title}</h2>
      <div className="project-section-copy">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <DetailList items={section.items} />
        {section.groups?.map((group) => (
          <DetailGroup group={group} key={group.title} />
        ))}
      </div>
    </section>
  )
}

function ProjectLinks({ links }: { links?: Project['links'] }) {
  if (!links?.length) {
    return null
  }

  return (
    <section className="project-section project-links-section">
      <h2>Links</h2>
      <div className="project-link-list">
        {links.map((link) => (
          <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function ProjectGallery({ project }: { project: Project }) {
  if (!project.media?.images.length) {
    return null
  }

  return (
    <section className="project-section project-gallery-section">
      <h2>Gallery</h2>
      <div className="project-gallery">
        {project.media.images.map((image) => (
          <a href={image.src} key={image.src} rel="noreferrer" target="_blank">
            <img src={image.src} alt={image.alt} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  const introduction = project.detail.length ? project.detail : [project.summary]

  return (
    <div className="site-page project-page">
      <main className="page-shell project-shell">
        <SiteNavigation activePage="work" />

        <article>
          <header className={`project-hero${project.confidential ? ' project-hero-confidential' : ''}`}>
            {project.media ? (
              <img src={project.media.thumbnail} alt={`${project.title} project cover`} />
            ) : (
              <div className="project-hero-placeholder" aria-hidden="true" />
            )}
            <div className="project-hero-shade" />
            <div className="project-hero-status">{project.confidential ? 'Confidential project // Case study' : 'Project file // Loaded'}</div>
            <h1>{project.title}</h1>
          </header>

          <section className="project-overview" aria-label="Project overview">
            <div className="project-introduction">
              <p className="project-summary">{project.summary}</p>
              {introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <dl className="project-facts">
              <div>
                <dt>Project role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Project</dt>
                <dd>{project.duration}</dd>
              </div>
              <div>
                <dt>Tools / Technology</dt>
                <dd>{project.technology}</dd>
              </div>
            </dl>
          </section>

          <DetailSection section={project.detailSections?.find((section) => section.title === 'My Contribution') ?? { title: 'My Contribution', items: project.responsibilities }} />

          <ProjectGallery project={project} />

          {project.detailSections ? (
            project.detailSections.filter((section) => section.title !== 'My Contribution').map((section) => (
              <DetailSection section={section} key={section.title} />
            ))
          ) : null}

          <ProjectLinks links={project.links} />
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
