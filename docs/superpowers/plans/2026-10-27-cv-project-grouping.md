# CV Project Grouping

The user approved anonymous project headings and a continuous Professional Experience section. Retain the four role variants, two-page A4 layout, 11pt experience text, all employers/projects/experience areas and confidentiality boundaries. No commit or deployment.

1. Add regression checks for four anonymous Tencent headings, correct project attribution, role-specific project/bullet order, complete source coverage and continued VGS experience. Confirm failure against current PDFs.
2. Split the mixed Tencent groups into four actual projects using portfolio evidence: UE5 multiplayer demo, Godot co-op/director tooling, Godot investigation UI/LLM pipeline, desktop companion. Keep cross-project UI ownership as employer-level context. Allow UI-specific emphasis within the investigation group. Keep VGS and public project presentations intact.
3. Render project headings with concise bullets; page two begins Professional Experience (continued). Move education after work/projects as needed to keep the work-history section continuous. Balance spacing without shrinking text. Rebuild the four PDFs and website assets.
4. Inspect all eight pages. Check coverage, attribution, role tailoring, page count, links, margins, confidentiality and matching website assets. Run Python tests, lint/build and public-copy checks. Obtain independent review and fix material findings.

## Evidence

- New structural tests first failed four checks against the previous PDFs. Final suite passes 12/12.
- Four anonymous headings rendered in role order, with distinct UI/AI investigation emphasis; VGS follows under Professional Experience (continued). Education moved to page two to keep work history continuous. All qualifications/dates, employers, projects and experience areas remain represented.
- Independent review inspected all eight pages and source attribution. It found one material ambiguity: generic profile/loadout/persistence work lacked evidence tying it specifically to Godot. Retained that fact at employer level and limited Godot bullets to supported run systems. Two regression checks failed before this fix and pass afterward; final first-page renders were reinspected. No unresolved findings.
- All four PDFs remain two A4 pages with 11pt experience text. Visual review confirms no clipping or overlap. Automated checks verify margins, links, source coverage, role ordering, confidentiality and reproducible bytes.
- Lint, production build, public-copy check, master-project check and diff whitespace check pass. Public and production software PDF/preview assets match final output. No commit or deployment.

## User Copy Corrections

- Removed the generic UI ownership statement from CV copy and portfolio About text. Removed its duplicate catalogue entry; concrete UI implementation remains in the Unreal, extraction, investigative and desktop project descriptions. The catalogue now has 18 Tencent entries.
- Applied the exact project labels Investigative Game & Applied AI and Extraction Game & Applied AI in all CVs and the portfolio.
- Renamed the demo heading to InGame Integration & Multiplayer Demo, defined InGame as Tencent's public online-service framework for game backends, and retained integration details, partner support, skills and an official product link in every version. Tencent's official product page confirms its hosted backend services.
- New copy regression checks initially failed 3 tests; suite passes 13/13 after changes. Updated the approved-label assertions in the public-copy checker to match the user's names without changing the confidential-token denylist. Final visual/bounds/website checks completed after regeneration.
