import { useEffect, useMemo, useState } from 'react'
import { AboutPage } from './components/AboutPage'
import { CvPreview } from './components/CvPreview'
import { PortfolioHome } from './components/PortfolioHome'
import { ProjectDetail } from './components/ProjectDetail'
import { allProjects } from './data/projects'
import { getProjectSlugFromHash, isAboutHash, isCvPreviewHash } from './utils/routing'

function App() {
  const [selectedSlug, setSelectedSlug] = useState(getProjectSlugFromHash)
  const [isCvPreview, setIsCvPreview] = useState(isCvPreviewHash)
  const [isAbout, setIsAbout] = useState(isAboutHash)
  const selectedProject = useMemo(
    () => allProjects.find((project) => project.slug === selectedSlug),
    [selectedSlug],
  )

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedSlug(getProjectSlugFromHash())
      setIsCvPreview(isCvPreviewHash())
      setIsAbout(isAboutHash())
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

  if (isAbout) {
    return <AboutPage />
  }

  return <PortfolioHome />
}

export default App
