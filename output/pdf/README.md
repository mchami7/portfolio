# CVs to use

Keep these four application CVs. Each is two A4 pages, with a role-specific profile, priority order and level of detail. Every employer and professional project remains represented. Additional academic/personal projects are presented on the portfolio rather than repeated in these CVs. Use the relevant version as the starting point for each application.

| File | Use for |
| --- | --- |
| `Mira_Chami_CV_Software_Engineer.pdf` | Desktop/application architecture, React, Rust/Tauri, native integration, services and engineering delivery. |
| `Mira_Chami_CV_Gameplay_Programmer.pdf` | UE5/C++, replicated matches, cooperative runs, progression, online services and designer tooling. |
| `Mira_Chami_CV_UI_Programmer.pdf` | Game UI ownership, evidence-board interactions, multi-window interfaces and client reliability. |
| `Mira_Chami_CV_AI_Engineer.pdf` | Applied LLM engineering: grounded research, structured outputs, contextual dialogue, verification and application integration. |

The old Master, Revised, Updated, General Updated, Frontend Updated and company-specific filenames are retired. There are no alternate application filenames or per-version generators.

## Content and layout

`source/cv_content.py` retains the full fact catalogue: 20 Tencent project entries, including CI work in the InGame demo and desktop companion, 5 VGS entries, 4 additional projects and 8 skill areas. `source/cv_presentations.py` maps facts to four anonymous Tencent project groups: InGame Integration & Multiplayer Demo, Extraction Game & Applied AI, Investigative Game & Applied AI, and Desktop AI Companion. The user-requested generic UI ownership sentence has been removed; concrete UI contributions remain within the projects. The standalone player-profile/progression sentence was also removed at the user's request. Each project has summary and detailed presentations, with a UI-specific investigation presentation that leads with interfaces rather than research. `source/build_cvs.py` chooses fuller bullets for relevant groups and summaries for supporting work, then orders them for the role. Every professional project fact ID is covered exactly once. The user-confirmed CI work is integrated into the InGame platform/validation bullet and the desktop companion build/delivery bullet, without naming specific CI tools. There is no standalone CI bullet. The full skills catalogue retains eight areas; the rendered Technical Toolkit groups selected technologies into six compact blocks, ordered for the role.

This preserves experience coverage without repeating every implementation detail in every version. The full catalogue and portfolio remain the place for longer technical descriptions. Qualifications, official employment titles/dates, contact details and spoken languages are shared.

All four versions use approved design A: a single-column experience layout with teal project-title bands and technologies aligned right, plus a two-column, three-row Technical Toolkit on page two. Experience bullets use regular-weight 11pt text; skills and education use 10.5pt, with 9.5pt toolkit labels. Page one contains the profile and all Tencent work. Page two continues professional experience with VGS, then the toolkit, education and Miscellaneous. Miscellaneous includes labelled Languages (English, French and Arabic, each Native) and all five Favourite games in every version. Additional Projects is omitted from the CVs; the underlying project catalogue and portfolio remain intact. Generation rejects overflow and any output that is not exactly two A4 pages, without automatically shrinking text.

The design samples under `output/cv-design-options/` are review drafts, not application versions. Use only the four canonical files listed above.

## Regenerate and verify

From the repository root:

```bash
python3 output/pdf/source/build_cvs.py
python3 -m unittest discover -s tests
npm run lint
npm run build
npm run check:public-copy
```

Use Python with `reportlab`, `pypdfium2` and `pypdf` installed. In Codex desktop, use the bundled Python returned by `load_workspace_dependencies` if needed. Arial fonts come from the macOS system font directory.

The generator writes these four application PDFs and maintains the website copy at `public/Mira_Chami_CV.pdf`, sourced from Software Engineer. Both preview pages are generated under `public/cv-preview/`; `src/data/cvPreview.ts` tracks them for React. The public PDF is a website asset, not a fifth application version. Review renders are written to `tmp/pdfs/ownership-review/` as `<version>-page-<number>.png`; inspect both pages of each version after changing copy.

The thirteen regression tests check page count/size, complete catalogue mappings, substantive professional experience anchors, role-specific detail and order, anonymous headings and project attribution, continuous employment history, rendered text, readable fonts, four canonical filenames and matching website preview coverage.

## Factual boundaries

Copy comes from the existing portfolio descriptions and the user's confirmation of Tencent UI ownership. Confidential Tencent project names are excluded from text and metadata. Official employment details are unchanged.

The AI version describes applied LLM engineering. It does not claim model training or ownership of the game director's model/server implementation. No unconfirmed UMG/MVVM/Slate expertise, AAA shipping credit, invented metrics or optimisation results have been added.

## Public InGame experience

All four CVs name and explain InGame as Tencent's public online-service framework for game backends, retain the actual integration/partner-support work, list it in technical skills and link the InGame project heading to https://intl.ingame.tencent.com/. The portfolio project and About page use the same explanation. The framework is public; this does not identify confidential internal project names or claim ownership of the whole framework.

## Experience coverage audit

`experience-coverage.md` records 18 documented capability areas checked across every PDF. CI pipeline configuration/modification is explicit in professional experience, CI pipelines and build/release automation appear in the toolkit, and Protobuf is retained beside gRPC. The specific CI platform names are intentionally omitted at the user's request.

## Contribution and outcome wording

Professional bullets connect implementation to documented purpose or behaviour where that clarifies the contribution: playable InGame validation, local issue reproduction, designer-authored session actions, inspectable generated cases, source-traceable evidence and mocked UI tests without live model calls. Shipped games, fixed defects and configurable content already describe concrete results. No percentage improvements, adoption figures, productivity gains or build-reliability improvements are inferred.

## Desktop AI client integration audit

The local client and server sources were inspected before revising the companion description. The user confirmed personal implementation of the React chat integration, Rust HTTP/streaming layer and chat-history persistence. The client fact catalogue and every CV now cover prompt submission, streamed reply display and saved conversations. Detailed versions name HTTP/SSE; the portfolio explains the separation between AI backend HTTP communication and avatar gRPC communication. The project-specific frontend label is React/JavaScript to match the JSX client snapshot. The broader programming toolkit still retains TypeScript. Model routing, retrieval/search and answer generation describe the separate server's role, not personal server implementation.
