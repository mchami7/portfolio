# Targeted Two-Page CVs

The user approved four focused CVs capped at two pages. This supersedes the earlier one-page format. Keep all employers, projects and experience areas; vary detail as well as order. Confidential Tencent identifiers remain excluded. No invented accomplishments, metrics, commits or deployment.

## Design

Use the existing Python/ReportLab generator and four canonical filenames. Keep the full fact catalogue as the factual source. Each presentation group maps to complete fact IDs and provides a summary plus fuller bullets. Each role expands its relevant groups; supporting groups use the summary. Page one contains the profile, Tencent experience and compact education. Page two contains earlier employment, all four projects, concise technical skills and languages. Use a single column, 11pt experience text, readable spacing and deliberate page boundaries; reject overflow rather than shrink text. Keep the software version as the website default.

## Tasks

1. Update regression requirements: two A4 pages, all facts represented once by selected groups, actual rendered text and priority, meaningful detail differences by role, unchanged history and four filenames, matching two-page website preview. Run against current output and observe failures.
2. Add role-sensitive presentations in `output/pdf/source/cv_presentations.py`; retain `cv_content.py` as the full fact source. Adapt `build_cvs.py` to select and validate presentations and render two single-column pages. Rebuild PDFs and website assets. Run the regression suite.
3. Inspect all eight rendered pages. Verify fonts, margins, links, confidentiality, factual boundaries, deterministic regeneration and website equality. Run lint, build, public-copy and project checks. Inspect browser preview where available.
4. Update `output/pdf/README.md` and evidence here. Obtain independent review of factual coverage, tailoring and layout; address material findings and deliver four PDFs.

## Review Focus

- Coverage IDs do not prove summary fidelity: compare prose with full source facts, especially desktop messaging/builds, AI ownership boundaries and gameplay/platform ownership.
- Variants must differ in detail, not just order; supporting experience remains represented.
- Visual inspection must catch poor page balance and long bullets.
- Never recreate retired duplicate filenames or expose confidential identifiers in PDFs or website assets.

## Evidence

- Regression changes first produced 7 expected failures against one-page output. The 9-test suite now passes against all four two-page PDFs.
- All eight rendered pages inspected at full size: single column, 11pt body, no clipped text or overlaps.
- Layout decision: education moved to page one to balance page lengths and give page two more space. This changes placement only; every qualification and date is retained.
- Website assets regenerated for two software CV pages. A fresh browser tab confirms both images load and no horizontal overflow. Screenshot: `output/portfolio-preview/targeted-two-page-cv.png`.
- Lint, production build, public-copy check, master-project check and diff whitespace check pass. All PDFs have valid portfolio/email links, text within margins, reproducible bytes and no confidential identifiers or unsupported UMG/MVVM/Slate/AAA claims. Final public and production assets match the delivered software PDF and renders.
- Independent reviewer inspected all eight pages, source coverage and tailoring. Packaging omission in the supporting desktop summary was fixed. Engine attribution ambiguity was treated as a factual correctness issue and clarified: cooperative run systems explicitly name Godot. Semantic tests reproduced six affected role/fact omissions before these fixes; suite passes 9/9 afterward. The four affected first pages were rerendered and reinspected. No remaining material findings or deferred issues.
- Four canonical filenames retained; no commit or deployment made.

## Follow-up: Anonymous Project Groups

The user approved separating Tencent work into anonymous project groups and keeping both employers in a continuous Professional Experience section. The current layout and evidence are in `2026-10-27-cv-project-grouping.md`; education now follows work/projects on page two.
