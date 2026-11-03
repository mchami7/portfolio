# CVs to use

These four application CVs retain the full substantive experience and technical toolkits from the earlier versions, with the clearer wording, role-specific order and selective bold emphasis reviewed on 3 November 2026. Each is two A4 pages.

| File | Use for |
| --- | --- |
| `Mira_Chami_CV_Software_Engineer.pdf` | Desktop architecture, React/Rust clients, Node.js services, native integration and engineering delivery. |
| `Mira_Chami_CV_Gameplay_Programmer.pdf` | Multiplayer architecture, replicated match flows, co-op run systems, designer tools and shipped games. |
| `Mira_Chami_CV_UI_Programmer.pdf` | Game UI ownership, evidence-board interactions, multiplayer menus/HUDs, desktop interfaces and UI testing. |
| `Mira_Chami_CV_AI_Engineer.pdf` | Grounded generation, knowledge-constrained dialogue, response verification, controlled model actions and application integration. |

## Content and layout

`source/cv_revisions.py` contains the approved role copy, shared contact and employment details, education and spoken languages. Double asterisks mark exactly three short highlights within the experience bullets per CV; the renderer also keeps structural headings bold. The lighter emphasis preserves all wording and technical coverage. `output/cv_drafts.md` records the current review text.

`source/cv_content.py` retains the full verified fact catalogue. `source/cv_presentations.py` retains the catalogue-to-project mappings and supporting presentations; the application CVs retain the substantive detail of the original role-specific drafts. All four Tencent projects and both employers remain represented in every version, with five VGS bullets and the complete original toolkit for that role. The full catalogue still includes supporting material beyond those original application drafts. Academic and personal projects remain on the portfolio.

The existing single-column experience layout, teal project-title bands and readable fonts are preserved. Role-specific headings and technologies appear in the project bands. Experience uses 10.5pt text with selected bold emphasis. Page one contains the profile and Tencent work. Page two contains five VGS bullets, six skill groups (seven for UI), education and Miscellaneous. Every version labels Languages in the final section. Gameplay and UI also retain all five original Favourite games there; the general Software and Applied AI versions omit the games line. Generation rejects overflow and outputs that are not exactly two A4 pages; it does not automatically shrink text.

## Regenerate and verify

From the repository root:

```bash
python3 output/pdf/source/build_cvs.py
python3 -m unittest discover -s tests
npm run lint
npm run build
npm run check:public-copy
```

Use Python with `reportlab`, `pypdfium2`, `pdfplumber` and `pypdf` installed. In Codex desktop, use the bundled Python returned by `load_workspace_dependencies` if needed. Arial fonts come from the macOS system font directory.

The generator writes the four canonical PDFs and updates `public/Mira_Chami_CV.pdf` from Software Engineer. Both website preview pages are generated under `public/cv-preview/`; `src/data/cvPreview.ts` tracks them for React. The public PDF is the website asset, not a fifth application variant. Review renders are written to `tmp/pdfs/ownership-review/` as `<version>-page-<number>.png`; inspect both pages of every variant after copy changes.

The fourteen CV regression tests check page count and size, role-specific order and wording, bullet export, skills, contact and education details, placeholder cleanup, links, text geometry, canonical filenames and website preview coverage. Content-preservation checks guard the profiling, tooling, architecture, service integration and collaboration evidence that was lost in the shortened drafts. An independent original-coverage fixture now checks evidence from every one of the 65 original experience bullets, plus exact original technology labels and toolkit entries.

The design samples under `output/cv-design-options/` are historical review drafts, not application versions.

## Factual boundaries

No unverified metrics, adoption figures, productivity gains or optimisation results have been added. The drafts describe documented capabilities, shipped games and personal contributions. The applied AI version does not claim model training or ownership of the game director's model/server implementation. No unconfirmed UMG/MVVM/Slate expertise, AAA shipping credit, screen-capture/image-paste implementation or coworker-owned macOS audio fixes are claimed.

The desktop companion description covers the user-confirmed client-side React/Rust integration, streamed replies and persistent history. It does not attribute the separate server's model routing, retrieval or generation implementation to the user. The project technology label remains React/Rust/Tauri; the broader skills section retains TypeScript/JavaScript.

Every version names InGame as Tencent's public online services framework and links its project heading to https://intl.ingame.tencent.com/. This explains the public framework without identifying confidential project names or claiming ownership of the framework.

`experience-coverage.md` records restored scope and retains the historical audit and provenance notes. Its older exhaustive capability matrix remains historical; the current per-role scope comparison is at the top of that document.

## Comparison with the originals

`cv-content-review.md` records the complete original-to-current evidence map and the rationale for changes to profiles, repeated phrasing and role-specific interests. It uses the four role versions from before this conversation’s rewrites as the baseline, with the fact catalogue checked for attribution. React/Rust client ownership is explicit in every desktop project description. The AI profile retains the original five-year experience statement; Software retains architecture-through-CI-and-release scope. No professional contribution or technology was removed from its corresponding original role version.
