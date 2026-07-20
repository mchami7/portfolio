# Public Portfolio Anonymization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove non-public Tencent project and implementation identifiers from the shipped portfolio while preserving detailed descriptions of Mira's engineering work.

**Architecture:** Keep the existing project data and rendering components intact. Add a lightweight source-copy verification script, then replace confidential identifiers in `src/data/projects.ts` with functional public labels and descriptions; the existing router will consume the new slugs automatically.

**Tech Stack:** Node.js verification script, React 19, TypeScript 6, Vite 8.

## Global Constraints

- Modify portfolio source only; do not modify CV PDFs or preview images.
- Preserve technical implementation, architecture, technologies, ownership, and outcomes.
- Keep the public InGame and GVoice product names.
- Do not create a commit.

---

### Task 1: Add a public-copy confidentiality check

**Files:**
- Create: `scripts/check-public-copy.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: UTF-8 files under `src/`.
- Produces: `npm run check:public-copy`, exiting non-zero when confidential identifiers are found or required public labels are absent.

- [ ] **Step 1: Write the failing verification script**

Create a Node script that recursively reads `src/`, rejects the three internal project names plus selected internal code identifiers, requires the three approved public titles, and requires InGame and GVoice.

- [ ] **Step 2: Register and run the check to verify RED**

Run: `npm run check:public-copy`

Expected: FAIL listing the existing confidential project names in `src/data/projects.ts`.

- [ ] **Step 3: Leave the check failing until Task 2 supplies the public copy**

No production copy is changed in this task.

---

### Task 2: Anonymize recent confidential project data

**Files:**
- Modify: `src/data/projects.ts`

**Interfaces:**
- Consumes: Existing `Project` objects and rendering components.
- Produces: Projects with slugs `confidential-ai-coop-roguelike`, `confidential-multiplayer-sdk-demo`, and `confidential-ai-gaming-companion`.

- [ ] **Step 1: Replace the three project titles and slugs**

Use the approved public titles exactly:

- `Confidential AI-Driven Co-op Roguelike`
- `Confidential Multiplayer SDK Demo`
- `Confidential AI Gaming Companion`

- [ ] **Step 2: Replace internal identifiers with functional descriptions**

Preserve each implementation claim while generalizing named internal classes, plugins, payloads, resource types, services, project references, partner-specific wording, and confirmed future-roadmap wording.

- [ ] **Step 3: Run the public-copy check to verify GREEN**

Run: `npm run check:public-copy`

Expected: PASS with no forbidden identifiers and all required public labels/products present.

---

### Task 3: Verify the portfolio build and shipped copy

**Files:**
- Verify: `src/data/projects.ts`
- Verify: `dist/`

**Interfaces:**
- Consumes: Anonymized project data.
- Produces: A lint-clean, type-safe production build without the confidential identifiers.

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: exit code 0 with no lint errors.

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: exit code 0 and generated Vite assets in `dist/`.

- [ ] **Step 3: Scan the production bundle**

Run a case-sensitive search of `dist/` for the forbidden identifiers and verify no matches, then search for the three approved public titles plus InGame and GVoice and verify matches.

- [ ] **Step 4: Review the final diff**

Confirm that no CV file changed, no implementation section was removed, and no commit was created.
