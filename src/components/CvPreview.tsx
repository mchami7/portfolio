const cvPdfPath = '/Mira_Chami_CV.pdf'
const cvPreviewPages = [
  '/cv-preview/cv-page-1.png',
  '/cv-preview/cv-page-2.png',
]

export function CvPreview() {
  return (
    <main className="content-wrapper">
      <div className="portfolio-header">
        <a className="portfolio-close" href="#/">
          <span aria-hidden="true">‹</span>
          <small>Portfolio</small>
        </a>
      </div>

      <article className="cv-preview-page">
        <div className="cv-preview-header">
          <h2>CV Preview</h2>
          <a className="url-link cv-pdf-link" href={cvPdfPath} rel="noreferrer" target="_blank">
            Open PDF
          </a>
        </div>

        <div className="cv-preview-pages">
          {cvPreviewPages.map((page, index) => (
            <img className="cv-preview-frame" src={page} alt={`Mira Chami CV page ${index + 1}`} key={page} />
          ))}
        </div>
      </article>
    </main>
  )
}
