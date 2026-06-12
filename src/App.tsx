import { useEffect, useMemo, useState } from 'react'
import { PortfolioHome } from './components/PortfolioHome'
import { ProjectDetail } from './components/ProjectDetail'
import { allProjects } from './data/projects'
import { getProjectSlugFromHash } from './utils/routing'

function App() {
  const [selectedSlug, setSelectedSlug] = useState(getProjectSlugFromHash)
  const selectedProject = useMemo(
    () => allProjects.find((project) => project.slug === selectedSlug),
    [selectedSlug],
  )

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedSlug(getProjectSlugFromHash())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} />
  }

  return <PortfolioHome />
}

export default App
