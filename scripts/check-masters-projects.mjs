import { readFile } from 'node:fs/promises'

const projectsSource = await readFile(new URL('../src/data/projects.ts', import.meta.url), 'utf8')
const homeSource = await readFile(new URL('../src/components/PortfolioHome.tsx', import.meta.url), 'utf8')

const requirements = [
  ['master project collection export', projectsSource.includes('export const mastersProjects')],
  ['Sensation5 project', projectsSource.includes("slug: 'sensation5'")],
  ['Elden Ring Onboarding project', projectsSource.includes("slug: 'elden-ring-onboarding'")],
  ['Knockoff project', projectsSource.includes("slug: 'knockoff'")],
  [
    'master projects included in route catalog',
    projectsSource.includes('[...recentProjects, ...mastersProjects, ...olderProjects]'),
  ],
  ['master project collection imported on work page', homeSource.includes('mastersProjects')],
  ['master projects section heading', homeSource.includes('Master&apos;s Projects')],
  ['Kingston University section label', homeSource.includes('Kingston University, 2022–2023')],
  ['academic project grid', homeSource.includes('<ProjectGrid items={mastersProjects} />')],
]

const failures = requirements.filter(([, passed]) => !passed).map(([name]) => name)

if (failures.length > 0) {
  console.error(`Missing master's-project requirements:\n- ${failures.join('\n- ')}`)
  process.exitCode = 1
} else {
  console.log("Master's projects are present in the catalog, routing, and work-page section.")
}
