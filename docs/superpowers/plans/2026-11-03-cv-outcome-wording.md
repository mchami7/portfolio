# CV Outcome Wording Implementation Plan

**Goal:** Regenerate all four CVs using the role-specific drafts approved in this chat.

**Spec:** The Applied AI, Gameplay Programmer, UI Programmer and Software Engineer text in this chat, approved by the user's request to regenerate all versions.

**Architecture:** Keep the existing ReportLab generator, two-page layout and canonical filenames. Update role copy, support selective bold emphasis and role-specific project headings, and replace Miscellaneous with Languages. Preserve verified contact and employment details, confidentiality checks and linked public InGame attribution.

**Tech Stack:** Python, ReportLab, pypdf, pypdfium2, existing Vite/React portfolio.

## Tasks

- [x] Update `output/pdf/source/cv_revisions.py` and `output/cv_drafts.md` with approved wording, shortened skills and no invented metrics.
- [x] Adjust `output/pdf/source/build_cvs.py` for bold phrases, role-specific headings and Languages; update stale copy assertions in `tests/test_cv_versions.py`.
- [x] Regenerate four PDFs, the public Software Engineer PDF and both website preview images; inspect all eight pages.
- [x] Run CV regression tests, portfolio lint/build and public-copy validation; update CV documentation to describe the current artifacts.

## Review Focus

- No dropped professional project or employer; preserve project attribution and official dates.
- All approved bullets appear once, with no visible markup or confidential identifiers.
- Bold text and longer project headings fit without overlap or clipping; retain readable fonts.
- Shortened toolkit and education remain legible on page two of every variant.
- Website PDF and both previews match the regenerated Software Engineer version.

No commits, publishing or repository restructuring are requested.

## Execution notes

- Retained the public InGame attribution and project link in every version; the approved UI draft had omitted the name.
- Kept shared phone/email, official employment titles and dates; role-specific positioning remains in the CV title and profile.
- All eight pages were rendered and reviewed. The twelve CV regression tests pass, as do portfolio lint, build and public-copy checks.

## User correction: preserve substantive experience

The first regeneration cut useful technical detail. The user authorised restoring it from the earlier full versions while retaining the clearer wording and emphasis.

- [x] Restore original professional experience scope, five VGS bullets per role and every original toolkit entry.
- [x] Keep role-specific profiles/order, outcome wording, bold emphasis and official contact/employment details.
- [x] Regenerate all four two-page PDFs and website PDF/previews without reducing fonts.
- [x] Check restored evidence independently in the CV regression suite and inspect all eight rendered pages.

Restoration details and scope comparisons are recorded in `output/pdf/experience-coverage.md`.

## Formatting refinement

At the user’s request, reduced bold within experience bullets to three short highlights per CV. Structural headings remain bold. Verified that all four PDFs have identical extracted text before and after this formatting change; each remains two pages.

## Complete comparison requested by the user

- [x] Compare all 65 original experience bullets, metadata, technologies and toolkits with the corresponding current versions.
- [x] Make React/Rust desktop ownership explicit; restore the AI profile’s five-year statement, software delivery scope and game interests in the game-industry versions.
- [x] Preserve the supplied guidance: concise phrasing, relevance, documented outcomes, strong-first ordering and light emphasis.
- [x] Record every original contribution’s retained evidence in `output/pdf/cv-content-review.md` and add independent checks against the original baseline.
- [x] Regenerate and inspect all eight pages; retain two pages per CV without reducing font sizes.

## Full CV and portfolio breadth audit

The user clarified that breadth matters across specialties at their career stage. The previous original-only fixture missed areas already absent from those originals.

- [x] Audit the 21 Tencent/five VGS professional areas in all four roles and rendered portfolio pages.
- [x] Restore full supporting experience and a compact additional-project line; retain original technology toolkits and metadata.
- [x] Restore website designer use, service ownership, VGS practices/integration breadth, API scripts and partner documentation.
- [x] Remove the five-year total after the user's clarification, preserving dated history.
- [x] Keep two pages and existing font sizes, adjusting spacing; preserve Miscellaneous labels and light emphasis.
- [x] Add full-catalogue CV and actual React-render coverage checks; inspect PDFs and browser results.

Current audit: `output/experience-breadth-review.md`. No commit or deployment requested.
