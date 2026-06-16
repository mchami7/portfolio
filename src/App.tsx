import { useEffect, useMemo, useState } from 'react'
import { CvPreview } from './components/CvPreview'
import { PortfolioHome } from './components/PortfolioHome'
import { ProjectDetail } from './components/ProjectDetail'
import { allProjects } from './data/projects'
import { getProjectSlugFromHash, isCvPreviewHash } from './utils/routing'

function App() {
  const [selectedSlug, setSelectedSlug] = useState(getProjectSlugFromHash)
  const [isCvPreview, setIsCvPreview] = useState(isCvPreviewHash)
  const selectedProject = useMemo(
    () => allProjects.find((project) => project.slug === selectedSlug),
    [selectedSlug],
  )

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedSlug(getProjectSlugFromHash())
      setIsCvPreview(isCvPreviewHash())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} />
  }

  if (isCvPreview) {
    return <CvPreview />
  }

  return <PortfolioHome />
}

export default App
