import { readFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

const fixture = JSON.parse(await readFile(new URL('../tests/fixtures/professional_experience_coverage.json', import.meta.url), 'utf8'))
const normalize = (text) => text.replace(/<[^>]*>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/[’‘]/g, "'").replace(/\s+/g, ' ').toLowerCase()
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })

try {
  const { allProjects } = await server.ssrLoadModule('/src/data/projects.ts')
  const { ProjectDetail } = await server.ssrLoadModule('/src/components/ProjectDetail.tsx')
  const { AboutPage } = await server.ssrLoadModule('/src/components/AboutPage.tsx')
  const { PortfolioHome } = await server.ssrLoadModule('/src/components/PortfolioHome.tsx')
  const rendered = new Map(allProjects.map((project) => [project.slug, normalize(renderToStaticMarkup(createElement(ProjectDetail, { project })))]))
  rendered.set('about', normalize(renderToStaticMarkup(createElement(AboutPage))))
  const work = normalize(renderToStaticMarkup(createElement(PortfolioHome)))
  const failures = []

  for (const [fact, requirement] of Object.entries(fixture.facts)) {
    const slug = requirement.site_slug ?? fixture.project_slugs[requirement.group]
    const text = rendered.get(slug) ?? ''
    for (const term of requirement.site_terms) {
      if (!text.includes(normalize(term))) failures.push(`${fact}: missing rendered evidence "${term}" in ${slug}`)
    }
  }
  for (const slug of fixture.additional_project_slugs) {
    const project = allProjects.find((entry) => entry.slug === slug)
    if (!project || !rendered.has(slug) || !work.includes(normalize(project.title))) failures.push(`Additional project is missing from the work page: ${slug}`)
  }

  if (failures.length) {
    console.error(failures.join('\n'))
    process.exitCode = 1
  } else {
    console.log('All 26 professional experience areas and four additional projects are represented in rendered portfolio content.')
  }
} finally {
  await server.close()
}
