# CV Editorial Layout Implementation Plan

> Implement inline in the existing workspace, preserving the user's in-progress CV and portfolio changes. The user approved the restrained single-column design and instructed execution.

**Goal:** Refresh all four two-page application CVs with clearer project hierarchy, shorter copy and readable spacing; synchronise the website PDF and previews.

**Design:** White A4 pages, charcoal 11pt body, navy accents, 28pt name, compact contact line, employer dates aligned right. Anonymous project titles sit above muted technology lines. Use short focused bullets with selective ownership emphasis. Tencent stays on page one; VGS, all four supporting projects, education and concise skills remain on page two.

**Approaches:** A single column was recommended and approved because it gives technical evidence room to read. A sidebar reduces text width; a timeline adds structure without clarifying project contributions.

**Architecture:** Keep the verified catalogue unchanged. Edit role-sensitive presentations and shared ReportLab renderer. Continue generating the four canonical PDFs, with the software PDF and its two preview images mirrored into public assets.

**Constraints:** Preserve every employer, project and experience area, all education and languages, official titles/dates, InGame explanation/link, and anonymity. Do not reintroduce removed generic UI/profile sentences or invent metrics, technologies, model training or AI director ownership. No commits or publishing.

## Tasks

- [x] Tighten `output/pdf/source/cv_presentations.py`, keeping coverage mapping and role order; put technologies in their own metadata field and avoid repeating headings in bullets.
- [x] Update `output/pdf/source/build_cvs.py`: compact header, aligned dates, project title/technology hierarchy, 11pt body and deliberate spacing; no automatic font shrinking.
- [x] Regenerate the four PDFs and public assets; inspect all eight rendered pages and fix overflow, awkward wrapping or imbalance.
- [x] Run existing CV regression checks, public-copy checks, lint and build; update `output/pdf/README.md` with final layout details.

**Review focus:** Complete fact coverage; correct project attribution and confidentiality; role-specific priority; exact two-page output without overlap; matching website preview and download.

## Execution notes

The existing dirty workspace contains the CV source and prior user-approved changes. Work stays here to preserve those changes. Existing content/page/coverage checks plus visual PDF review provide verification; no new implementation-mirroring tests are needed for this presentation change.

## Verification

All four PDFs regenerated at exactly two A4 pages. All eight page renders inspected, with no overlap, clipping or orphaned headings. Thirteen existing CV tests passed; lint, build and public-copy checks passed. Website PDF and both preview images match the software output. A read-only independent review found no actionable issues. No commits or publishing performed.

## Approved design A rollout

Following the later visual review, the user selected A and confirmed Miscellaneous as the heading. This supersedes the initial layout and academic-project retention above.

- [x] Promote design A into the shared generator: teal project bands and six compact toolkit blocks in role order.
- [x] Remove Additional Projects from the application PDFs; retain the source catalogue and portfolio.
- [x] Use Miscellaneous with Languages and Favourite games in all four versions; show Native beside every spoken language.
- [x] Retain all professional project copy, role-specific order and regular-weight experience bullets.
- [x] Regenerate four canonical PDFs and matching website assets.
- [x] Inspect all eight page renders and pass thirteen updated regression tests, lint, build and public-copy checks.

All outputs remain two A4 pages. Tests now explicitly enforce that academic projects remain on the portfolio, and that Miscellaneous and the four favourite games appear in each CV. No commits or publishing performed.
