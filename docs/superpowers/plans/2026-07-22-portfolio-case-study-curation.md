# Portfolio Case-Study Curation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Rewrite all ten project pages as selective, evidence-led case studies for an equal mix of recruiters and technical hiring managers.

**Architecture:** Keep the existing `Project` and `ProjectDetailSection` interfaces and rendering components. Curate only the data in `src/data/projects.ts`, using the existing header metadata as the single technology reference and reducing each project to an overview, concise ownership statement, selected engineering stories, and a meaningful closing perspective where warranted.

**Tech Stack:** React 19, TypeScript 6, Vite 8, static TypeScript project data

## Global Constraints

- Preserve all project metadata, media arrays, slugs, sorting, and exports.
- Preserve confidentiality and do not introduce internal product or SDK names.
- Do not invent metrics or unsupported outcomes.
- Remove every trailing `Technologies` detail section.
- Keep recent professional projects deeper than older projects.
- Distinguish personal contributions from team goals and planned work.
- Define GDAI as Game Director AI and describe the AI Dungeon Master as the role it is intended to perform.
- Describe Python GDAI server involvement only as a current or future direction.
- Preserve unrelated working-tree changes.

---

### Task 1: Curate the Confidential Game Technology R&D Case Study

**Files:**
- Modify: `src/data/projects.ts`
- Test: `scripts/check-public-copy.mjs`

**Interfaces:**
- Consumes: existing `Project`, `ProjectDetailSection`, and project-card metadata fields.
- Produces: the `game-technology-r-and-d` project with sections titled `Overview`, `My Contribution`, `Multiplayer and Run Architecture`, `Gameplay Foundations for GDAI`, `Designer-Authored Session Tooling`, `Current Direction`, and `Technical Perspective`.

- [x] **Step 1: Replace the summary and ownership copy**

Use a summary that establishes multiplayer ownership and defines GDAI as Game Director AI without claiming ownership of the model. Explain that the intended role of GDAI is to function like an AI Dungeon Master. Reduce responsibilities to four statements covering multiplayer/run architecture, complete-session gameplay foundations, validated events/actions, and designer tooling.

- [x] **Step 2: Replace the detail sections**

Keep three completed-work narratives: multiplayer/run architecture, gameplay-side GDAI foundations, and designer-authored tooling. Add `Current Direction` with this meaning: the project aims for GDAI to understand run state and shape sessions dynamically like an AI Dungeon Master; the next personal focus is deeper involvement in the Python server and its boundary with authoritative gameplay. Close with a short technical perspective about structured context, constrained actions, deterministic execution, and designer control.

- [x] **Step 3: Verify the attribution language**

Run:

```bash
rg -n "integrat(e|ed|ing).*generative|built gameplay-side foundations|Python GDAI server|Current Direction" src/data/projects.ts
```

Expected: no claim that the candidate integrated the generative model; positive matches for gameplay-side foundations, Python GDAI server, and `Current Direction`.

### Task 2: Curate the Other Recent Professional Case Studies

**Files:**
- Modify: `src/data/projects.ts`
- Test: `scripts/check-public-copy.mjs`

**Interfaces:**
- Consumes: the existing project records for `confidential-ai-gaming-companion` and `confidential-multiplayer-sdk-demo`.
- Produces: three selected engineering narratives per project with concise overview, contribution, and perspective sections.

- [x] **Step 1: Rewrite the AI Gaming Companion case study**

Use sections titled `Overview`, `My Contribution`, `Choosing the Desktop Foundation`, `Designing the Companion Architecture`, `Cross-Platform Delivery`, and `Technical Perspective`. Retain the Electron/Tauri evidence, dual-mode and multi-window decision, overlays/avatar communication where relevant, Steam feature flags, Windows/macOS packaging, and the CPAL compatibility example. Remove component inventories, generic debugging lists, and the trailing technology section.

- [x] **Step 2: Rewrite the Multiplayer Technology Demo case study**

Use sections titled `Overview`, `My Contribution`, `Building a Playable SDK Validation Environment`, `Integrating Online Services`, `Cross-Platform and Partner Validation`, and `Technical Perspective`. Retain representative multiplayer flows, integration-bridge work, voice chat, dedicated-server workflows, PlayStation 5, and partner scenario support. Remove screen-by-screen, service-by-service, and routine gameplay inventories.

- [x] **Step 3: Check recent-project density**

Run a TypeScript AST count of detail sections. Expected: each recent project has six or seven curated sections and no section titled `Technologies`.

### Task 3: Curate the Master's Project Case Studies

**Files:**
- Modify: `src/data/projects.ts`
- Test: `scripts/check-public-copy.mjs`

**Interfaces:**
- Consumes: the existing `mastersProjects` array, links, and project metadata.
- Produces: three concise academic case studies containing an overview, ownership statement, and one or two technically distinctive stories.

- [x] **Step 1: Rewrite Sensation5**

Retain adaptive-trigger feedback as a gameplay mechanic, the portal/rendering implementation, reusable interaction systems, and the constraint of third-party PC DualSense support. Remove routine player, scoring, audio, and room-flow inventories.

- [x] **Step 2: Rewrite Elden Ring Onboarding**

Retain sole-programmer ownership in a multidisciplinary group, ScriptableObject-driven content, and the optional-guidance interaction model. Remove content-type and interface-control inventories.

- [x] **Step 3: Rewrite Knockoff**

Retain the end-to-end Photon multiplayer flow, physics-based knockback combat, and PlayFab account/statistics integration. Remove individual weapon, UI, and match-feature inventories.

### Task 4: Curate the Older Project Case Studies

**Files:**
- Modify: `src/data/projects.ts`
- Test: `scripts/check-public-copy.mjs`

**Interfaces:**
- Consumes: the existing `olderProjects` array and media metadata.
- Produces: four shorter case studies, each containing an overview, concise contribution section, one or two selected stories, and an optional short perspective.

- [x] **Step 1: Rewrite Hustler**

Retain solo ownership, the PlayFab-backed recurring competition loop, difficulty tuning, external reward handling, and shipped mobile delivery. Remove routine feature and workflow inventories.

- [x] **Step 2: Rewrite Kutla**

Retain the shared architecture behind Adventure and Drawing modes, persistence for completed levels and player-created pixel art, configurable progression/shop data, and published-game context. Remove monetization and workflow inventories unless needed in the concise contribution statement.

- [x] **Step 3: Rewrite Island Keeper**

Retain technical leadership, GDD-to-prototype planning, player/ability implementation, touch input, and level-design collaboration. Remove enumerated GDD categories, Jira/Agile claims, routine bug fixing, and the trailing technology section.

- [x] **Step 4: Rewrite Sudoku Mobile**

Retain the three-mode product structure and working solver used for validation. Remove planned server, leaderboard, and remote-profile functionality from contribution claims. State solver optimization as an identified limitation rather than a completed improvement.

### Task 5: Enforce Portfolio Copy Standards

**Files:**
- Modify: `scripts/check-public-copy.mjs` only if its existing assertions require updates for the curated copy.
- Verify: `src/data/projects.ts`

**Interfaces:**
- Consumes: all ten rewritten project records.
- Produces: copy that passes the existing public-content safety gate and editorial invariants.

- [x] **Step 1: Scan for removed structures and risky wording**

Run:

```bash
rg -n "title: 'Technologies'|My responsibilities included:|integrated the generative model|intended to connect to a server|Jira workflow|bug fixing" src/data/projects.ts
```

Expected: no matches.

- [x] **Step 2: Run the public-copy gate**

Run:

```bash
npm run check:public-copy
```

Expected: exit code 0 with all public-copy assertions passing. If the checker encodes removed prose, update only those assertions so it continues to protect confidentiality and required anonymization.

- [x] **Step 3: Run static verification**

Run:

```bash
npm run lint
npm run build
git diff --check
```

Expected: all commands exit 0.

- [x] **Step 4: Review the final diff**

Confirm that only project copy and any necessary public-copy assertions changed, unrelated working-tree changes remain untouched, all media and repository/store links remain present, and all ten project slugs still appear exactly once.
