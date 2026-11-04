# CVs to use

All four CVs preserve the full verified professional breadth: 21 Tencent and five VGS experience areas in every role. Profiles, project priority, selective emphasis and toolkit ordering differ by specialty. Each remains two A4 pages.

| File | Starting point for |
| --- | --- |
| `Mira_Chami_CV_Software_Engineer.pdf` | Desktop/application architecture, React/Rust, native integration, services and delivery. |
| `Mira_Chami_CV_Gameplay_Programmer.pdf` | Gameplay, multiplayer, run systems, designer tooling and shipped games. |
| `Mira_Chami_CV_UI_Programmer.pdf` | Game/desktop UI, evidence-board interactions, multiplayer interfaces and testing. |
| `Mira_Chami_CV_Applied_AI_Engineer.pdf` | Grounded research, knowledge-constrained dialogue, validation, controlled actions and application integration. |

## Source and coverage

`source/cv_content.py` is the verified fact catalogue. `source/cv_revisions.py` contains complete professional copy in every role, shared metadata, full original toolkits and a compact additional-projects line. `output/cv_drafts.md` records the current copy. `source/cv_presentations.py` retains historical project mappings and supporting presentations.

The previous 65-bullet original comparison was too narrow: some originals already omitted supporting experience. The current fixture, `tests/fixtures/professional_experience_coverage.json`, requires all 26 professional areas in every CV and in rendered portfolio pages. The old fixture retains the original toolkit, technology, contact and education baseline. Historical paragraph mappings are not a current coverage proof.

The current audit is `output/experience-breadth-review.md`. The original comparison is retained in `cv-content-review.md` as historical context.

## Layout and copy

Single-column experience, teal project bands and grouped technical skills remain. Experience text is 10.5pt; existing skill fonts are retained. Spacing is slightly tighter to preserve breadth without reducing font sizes. Page one contains Tencent work. Page two contains five VGS bullets, full role-specific toolkits, education and Miscellaneous.

Miscellaneous contains Languages in every version, Favourite games in Gameplay/UI, and a compact linked Additional projects line in every version. Detailed academic/personal project case studies remain on the portfolio. Three short experience phrases per CV are bold; double asterisks in source are rendered as bold rather than visible markup.

No numerical experience total is stated following the user's clarification. Employment dates and official roles remain unchanged.

## Regenerate and verify

```bash
python3 output/pdf/source/build_cvs.py
python3 -m unittest discover -s tests
npm run check:experience
npm run check:public-copy
npm run check:masters-projects
npm run lint
npm run build
```

Use Python with reportlab, pypdfium2, pdfplumber and pypdf. In Codex desktop, use bundled dependencies if needed. Arial fonts come from the macOS system font directory.

The generator maintains four canonical application PDFs, `public/Mira_Chami_CV.pdf` from Software Engineer, both images in `public/cv-preview/` and their metadata in `src/data/cvPreview.ts`. Review renders go to `tmp/pdfs/ownership-review/`. The public PDF is a website asset, not a fifth application variant.

## Factual boundaries

The user confirmed that designers used the timeline tool to create behaviour timelines for the AI director. This supports adoption wording without invented usage counts or productivity gains. No measured performance improvements are inferred from profiling or framework evaluation.

Confidential identifiers, coworker-owned macOS audio/CPAL work and disowned capture/image-paste implementation remain excluded. No unconfirmed engine UI frameworks, AAA shipping credit, model-training or director model/server ownership is claimed. React/JavaScript/Rust client work is separated from the companion's separate AI server.

Every CV explains InGame as Tencent's public online services framework and links its project heading to https://intl.ingame.tencent.com/.
