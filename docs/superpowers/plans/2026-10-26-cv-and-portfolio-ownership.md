# CV and Portfolio Ownership Update

**Goal:** Apply the CV improvements approved in this chat, regenerate all current CV variants, and align the portfolio with the documented work and the user's clarification about UI ownership.

**Approach:** Preserve the existing React website and PDF visual design. Share the CV renderer and complete facts; variants change priorities rather than omit experience. Pagination follows content. No commits or publishing are part of this update.

## Constraints

- Use functional descriptions for all confidential Tencent projects. Never expose internal project names or implementation identifiers.
- Retain official employment titles, dates, contact details and qualifications.
- Base factual claims on the existing portfolio and the user's explicit clarification that they implemented the UI across Tencent projects.
- Do not add unconfirmed UMG, MVVM, Slate, AAA shipping, enemy-AI expertise, metrics or performance claims.
- Preserve distinct software engineering, gameplay, UI and applied AI application emphasis through presentation and ordering only.

## Tasks

- [x] Update the project summaries/contribution sections and profile to expose UI ownership, Unreal gameplay, run systems, designer tooling and platform ownership without repeating existing case studies.
- [x] Consolidate PDF generation, refresh existing output filenames, add generic gameplay/UI application PDFs, and replace the public CV and preview. Remove unreferenced obsolete second-page public assets.
- [x] Verify PDF page count, text, layout and confidentiality; verify the public download/preview match; run public-copy checks, master's-project checks, lint and build; inspect changed pages in the browser.

## Review Focus

- No confidential names in source, generated PDFs, PDF metadata or the production build.
- Individual contribution remains distinct from team ownership and future AI research goals.
- Every PDF fits one A4 page with readable text, working links and no overlapping content.
- Existing build scripts work from this checkout rather than a historical absolute path.
- Homepage cards, detail pages, about page, CV preview and download remain consistent.

## Initial Verification (Distribution Layout Superseded Below)

- Four audience variants rendered and visually inspected; all 11 distribution PDFs are one A4 page with 10pt body text, valid text bounds, correct links and no denylisted identifiers in text or metadata.
- Seven build entrypoints run successfully and reproduce the same PDF bytes. The public PDF, first-page PDF and master match; public/review/production preview images match.
- Public-copy check, master's-project check, lint, production build, production confidentiality scan and `git diff --check` passed.
- Browser checks covered the homepage, profile, four confidential project pages and CV preview. Updated copy is visible; checked pages have no horizontal overflow and the single preview image loads.
- Independent read-only review found no Important or Critical issues. Review housekeeping addressed: this plan is current and Python runtime caches are ignored.
- Website source and public assets are updated locally. No commit or deployment was made.

## Follow-up: Four Role-Based CVs

The user requested removal of confusing duplicate filenames and CVs for software engineering, gameplay, UI and AI. This supersedes the distribution layout and seven-entrypoint arrangement above.

- [x] Keep exactly four distinct application PDFs directly in `output/pdf`: Software Engineer, Gameplay Programmer, UI Programmer and AI Engineer.
- [x] Consolidate the useful general/frontend content into Software Engineer; add Applied AI Engineer using existing portfolio evidence for LLM pipelines, structured outputs, grounded research, dialogue and validation.
- [x] Delete nine retired application PDFs, the duplicate public first-page PDF, the old per-version generators and the obsolete `cv-versions` README. Update the sole shared generator and add `output/pdf/README.md` as the current file guide.
- [x] Verify all four CVs and the website copy: one A4 page, valid text bounds/links, confidential identifiers absent, four distinct contents, reproducible rebuilds and no retired names recreated. The website download and loaded preview match Software Engineer.
- [x] Lint, build, public-copy check and diff whitespace check passed. Independent review found no Important or Critical issues. No commit or deployment was made.

## Follow-up: Restore Gameplay Experience Breadth

The user identified that the gameplay version omitted substantial experience. The imposed one-page limit was an editorial choice, not a user requirement; it has been removed for this version.

- [x] Restore detailed online-service integration, multiplayer configurations/testing, profiles/loadouts/persistence, game-director action/event foundations, LLM research/dialogue, automated validation, desktop architecture and delivery.
- [x] Expand the earlier Unity work to cover release ownership, shared game-mode architecture, player-created content, character/ability/input systems, designer collaboration and engineering support.
- [x] Preserve exactly four application filenames. Gameplay uses two A4 pages with 11pt body text; the other three CVs and website assets remain byte-for-byte unchanged.
- [x] Visually inspect both gameplay pages and verify restored content, all page bounds, link annotations, page numbering and confidentiality. Four-version rebuild and diff whitespace checks pass.

## Current Requirement: Complete Experience in Every Version

The user explicitly requested the same complete experience in every CV, sorted for the role, with no experience removed. This supersedes all earlier selective-content and page-count decisions.

- [x] Centralise shared facts in `output/pdf/source/cv_content.py`: 19 Tencent entries, 5 VGS entries, 4 additional projects and 8 skill groups. Deduplicate overlapping descriptions without removing the associated experience.
- [x] Restrict variant configuration to headline, summary, filename and priority IDs. Always append every remaining catalogue entry. Preserve shared education, official employment titles/dates, contact details and footer information.
- [x] Paginate automatically with 11pt body text and whole experience entries. All four current CVs are three A4 pages. Exactly four application filenames remain.
- [x] Generate all software CV preview pages and `src/data/cvPreview.ts`; update the React preview to render the generated list. Browser verification confirms all three images load without horizontal overflow.
- [x] Regression tests first exposed the previous omissions (5 failures), then all 6 passed after implementation. Generated-PDF checks verify every catalogue entry exactly once, role order and complete preview coverage; full Python test discovery passes.
- [x] Inspect all 12 rendered pages; verify text bounds, links, numbering, history, confidentiality, reproducible output and matching website/production copies. Lint, build, public-copy check, master's-project check and diff whitespace check pass. Independent review found no Important or Critical issues.

## Current Format: One Page With Shared Experience Coverage

The user then explicitly required every version to fit one page. Complete experience coverage and role-specific ordering still apply; concise grouping supersedes the earlier requirement to print every long catalogue description verbatim.

- [x] Keep the full shared catalogue intact. Add concise copy with explicit coverage IDs: 19 Tencent facts in 7 related bullets, 5 VGS facts in 5 concise bullets, and all 4 projects. Retain all 8 full skill rows, qualifications/dates, employment history, contact details, spoken languages and favourite games.
- [x] Require each full experience fact to be covered exactly once; reorder complete groups by role priority. No role can exclude a group.
- [x] Use one A4 page, 10pt main experience and a 9pt education/skills sidebar. Reject column overflow or any PDF longer than one page. No miniature-text fallback is used.
- [x] One-page regression first failed against the three-page output; all 8 updated coverage, rendering, ordering, filename and preview tests now pass. Inspect all four pages visually and verify glyph bounds, links, history, confidentiality and reproducible builds.
- [x] Refresh the website PDF and preview to one page; remove stale preview pages. Browser checks confirm one loaded preview and no horizontal overflow. Lint, build, public-copy check, production-copy/confidentiality audit and diff whitespace check pass.
- [x] Address independent review: preserve shared window messaging and automated Windows/macOS builds/packaging explicitly in the concise desktop bullet. Add semantic assertions (confirmed failing before the fix); all 8 tests pass after the fix. Shorten summaries to one line to retain 10pt experience text. Reinspect all four final pages and verify margins, confidentiality and matching production assets.

## Superseding Format: Targeted Two-Page CVs

The user subsequently approved four focused two-page versions. The one-page requirements above are historical. See `2026-10-26-targeted-two-page-cvs.md` for the current design and verification evidence. Every employer, project and experience area remains represented; relevant work receives fuller detail, and supporting work receives concise summaries. All four PDFs and the local website download/preview have been regenerated.
