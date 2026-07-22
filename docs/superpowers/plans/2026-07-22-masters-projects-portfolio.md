# Master's Projects Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Sensation5, Elden Ring Onboarding, and Knockoff to a dedicated master's-projects section with complete routed detail pages and public GitHub links.

**Architecture:** Keep project content in the existing typed data catalog and render it through the existing `ProjectGrid` and `ProjectDetail` components. Add a separate `mastersProjects` export so the home-page grouping remains explicit while `allProjects` continues to power hash routing.

**Tech Stack:** React 19, TypeScript 6, Vite 8, Node.js validation scripts.

## Global Constraints

- Preserve the order Recent Projects, Master's Projects, Older Projects.
- Label the section `Master's Projects` and `Kingston University, 2022–2023`.
- Use only repository-supported claims and distinguish academic prototypes from shipped products.
- Use the existing question-mark placeholders until original screenshots are captured.
- Do not alter or discard the existing uncommitted edit in `src/data/projects.ts`.

---

### Task 1: Add a catalog regression check

**Files:**
- Create: `scripts/check-masters-projects.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: source text from `src/data/projects.ts` and `src/components/PortfolioHome.tsx`.
- Produces: `npm run check:masters-projects`, which exits non-zero until all three projects and the new section are wired.

- [x] **Step 1: Write the failing validation script**

Create a Node script that checks for the `mastersProjects` export, the three slugs `sensation5`, `elden-ring-onboarding`, and `knockoff`, inclusion in `allProjects`, the `Master's Projects` heading, and the Kingston University subtitle.

- [x] **Step 2: Add the package command**

Add `"check:masters-projects": "node scripts/check-masters-projects.mjs"` to `scripts` in `package.json`.

- [x] **Step 3: Verify the check fails for the missing feature**

Run: `npm run check:masters-projects`

Expected: FAIL listing the missing master's-project catalog and home-page section requirements.

### Task 2: Add the master's project catalog

**Files:**
- Modify: `src/data/projects.ts`

**Interfaces:**
- Produces: `mastersProjects: Project[]` and an `allProjects` array containing recent, master's, and older projects.
- Consumed by: `PortfolioHome` and `App` routing.

- [x] **Step 1: Add three typed project records**

Add complete entries for Sensation5, Elden Ring Onboarding, and Knockoff. Each entry must define the existing required `Project` fields, source-backed responsibility bullets, detail sections, technology groups, and its public GitHub repository link.

- [x] **Step 2: Include the collection in route lookup**

Change the final export to:

```ts
export const allProjects = [...recentProjects, ...mastersProjects, ...olderProjects]
```

- [x] **Step 3: Run TypeScript compilation through the build**

Run: `npm run build`

Expected: PASS with all three records satisfying the existing `Project` type.

### Task 3: Render the dedicated home-page section

**Files:**
- Modify: `src/components/PortfolioHome.tsx`

**Interfaces:**
- Consumes: `mastersProjects` from `src/data/projects.ts`.
- Produces: a three-card `ProjectGrid` section between Recent Projects and Older Projects.

- [x] **Step 1: Import the new collection**

Import `mastersProjects` alongside the existing recent and older collections.

- [x] **Step 2: Render the section**

Add a `work-section` with heading `Master's Projects`, subtitle `Kingston University, 2022–2023`, count text `{mastersProjects.length} entries // Academic`, and `<ProjectGrid items={mastersProjects} />` between the two existing sections.

- [x] **Step 3: Verify the regression check passes**

Run: `npm run check:masters-projects`

Expected: PASS with confirmation that all three projects and the section are wired.

### Task 4: Verify content, routing, and responsive presentation

**Files:**
- Verify: `src/data/projects.ts`
- Verify: `src/components/PortfolioHome.tsx`
- Verify: rendered application

**Interfaces:**
- Consumes: the completed project catalog and home-page section.
- Produces: a production-ready portfolio update with no confidentiality-copy regressions.

- [x] **Step 1: Run automated checks**

Run:

```bash
npm run check:masters-projects
npm run check:public-copy
npm run lint
npm run build
```

Expected: all commands exit 0.

- [x] **Step 2: Inspect desktop rendering**

At the existing local Vite URL, confirm the three master's cards form one row between Tencent and Older Projects and each card routes to its matching detail page.

- [x] **Step 3: Inspect mobile rendering**

At a mobile viewport, confirm the cards stack without clipping, section headings remain readable, and all three detail pages retain usable typography and spacing.

- [x] **Step 4: Preserve unrelated work**

Review `git diff` and confirm the pre-existing removal in the confidential R&D project copy remains untouched.

