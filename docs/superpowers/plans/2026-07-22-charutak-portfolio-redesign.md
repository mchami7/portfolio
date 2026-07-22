# Portfolio Structural Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio with an image-led Work page, separate About Me page, and editorial project pages matching the approved reference structure.

**Architecture:** Preserve the existing data-driven React application and hash router. Add shared shell components and route-specific pages, then replace the current card-heavy CSS with a responsive image-led visual system.

**Tech Stack:** React 19, TypeScript, Vite, CSS, existing static project assets

## Global Constraints

- Preserve all confidentiality-safe project content and external profile links.
- Do not use assets or code from the reference website.
- Keep hash routing compatible with static hosting.
- Support desktop, tablet, mobile, keyboard navigation, and reduced motion.

---

### Task 1: Shared Site Shell And Routing

**Files:**
- Create: `src/components/SiteNavigation.tsx`
- Create: `src/components/SiteFooter.tsx`
- Modify: `src/App.tsx`
- Modify: `src/utils/routing.ts`

**Interfaces:**
- Produces: `SiteNavigation({ activePage })`, `SiteFooter()`, and an About route recognized by `isAboutHash()`.

- [ ] Add an About hash parser and route state alongside the existing project and CV route handling.
- [ ] Build a two-link navigation with active styling for Work and About Me.
- [ ] Build the shared contact footer using the existing profile link data.
- [ ] Run `npm run lint` and confirm the shared components compile without warnings.

### Task 2: Work And About Pages

**Files:**
- Modify: `src/components/PortfolioHome.tsx`
- Create: `src/components/AboutPage.tsx`
- Modify: `src/data/profile.ts`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `SiteNavigation`, `SiteFooter`, `aboutCopy`, `education`, `skills`, and `socialLinks`.
- Produces: Work and About page layouts selected by hash state.

- [ ] Replace the current homepage section stack with the approved three-line introduction and project grid.
- [ ] Move personal copy, education, skills, and profile actions into `AboutPage`.
- [ ] Preserve the user's technology-and-art sentence and favourite-games paragraph verbatim.
- [ ] Run `npm run lint` and confirm both hash routes render valid React trees.

### Task 3: Image-Led Project Grid

**Files:**
- Modify: `src/components/ProjectGrid.tsx`
- Modify: `src/data/projects.ts`

**Interfaces:**
- Consumes: `Project[]` and each project's optional `media.thumbnail`.
- Produces: one unified responsive grid with accessible card links and persistent mobile metadata.

- [ ] Remove the duration/technology strip and résumé-style bullets from homepage cards.
- [ ] Render each project as a 16:10 image surface with a title, role, and concise category line in its overlay.
- [ ] Use intentionally blank media surfaces when a confidential project does not have public media.
- [ ] Ensure every card is a single keyboard-focusable link with meaningful accessible text.

### Task 4: Editorial Project Detail Page

**Files:**
- Modify: `src/components/ProjectDetail.tsx`

**Interfaces:**
- Consumes: existing `Project`, `ProjectDetailSection`, `ProjectDetailGroup`, links, and media.
- Produces: hero, project facts, narrative sections, galleries, and shared footer.

- [ ] Replace the close control with the shared Work/About navigation.
- [ ] Render a full-width hero and title overlay.
- [ ] Add a two-column overview with summary/detail narrative and role/year/technology facts.
- [ ] Preserve every detail section, nested group, bullet, link, and gallery image.
- [ ] Keep gallery links accessible and make layouts responsive to image count.

### Task 5: Visual System And Verification

**Files:**
- Modify: `src/index.css`

**Interfaces:**
- Styles all shared and route-specific components with the approved design tokens and breakpoints.

- [ ] Replace the dark palette with the approved airy background, charcoal type, white surfaces, and dark active controls.
- [ ] Add the original low-contrast network motif with CSS backgrounds and pseudo-elements.
- [ ] Implement three/two/one-column grid breakpoints and mobile-safe project facts.
- [ ] Add hover, focus-visible, touch, and reduced-motion states.
- [ ] Run `npm run lint` and expect exit code 0.
- [ ] Run `npm run build` and expect exit code 0.
- [ ] Verify Work, About Me, and one project page at desktop and mobile widths with no clipping or horizontal overflow.
