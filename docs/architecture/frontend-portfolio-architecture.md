# Frontend Portfolio Architecture

## Status

Accepted

## Context

The portfolio started with all page data, hash routing, list views, and detail views in
`src/App.tsx`. That made it harder to add projects, preserve old portfolio content, or
change the layout without touching unrelated concerns.

This React app is a small Vite portfolio, not the CCGS game runtime. The architecture
therefore stays lightweight and avoids introducing a routing library until the site has
enough routes to justify one.

## Decision

Use a small feature-oriented structure:

```text
src/
  App.tsx                    Route selection and top-level composition only
  components/
    Header.tsx               Sticky portfolio header and profile links
    PortfolioHome.tsx        Main portfolio page composition
    ProjectGrid.tsx          Project card grid used by project sections
    ProjectDetail.tsx        Hash-routed project detail page
  data/
    profile.ts               Profile copy, education, skills, social links
    projects.ts              Recent and older project content
  types/
    portfolio.ts             Shared content model types
  utils/
    routing.ts               Hash parsing helpers
```

`App.tsx` owns only hash route state:

- `#/` or unknown hashes render `PortfolioHome`
- `#/portfolio/:slug` renders `ProjectDetail` when the slug matches a project

Project content is data-driven through `src/data/projects.ts`. UI components receive
typed project objects rather than defining content inline.

## Consequences

- Adding or editing portfolio content should happen in `src/data/`.
- Reusable display behavior belongs in `src/components/`.
- Hash parsing and navigation helpers belong in `src/utils/`.
- Shared object shapes belong in `src/types/`.
- `App.tsx` should remain small and should not contain project copy or section markup.

## Alternatives Considered

- Keep all logic in `App.tsx`: simplest initially, but it already became difficult to
  maintain as project-detail pages and old portfolio content were added.
- Add React Router: useful for larger route trees, but unnecessary for the current
  hash-style portfolio structure.
- Split by page only: better than one file, but still mixes content and rendering.

## Verification

Run:

```bash
npm run lint
npm run build
```
