# Portfolio Case-Study Curation Design

**Date:** 2026-07-22
**Status:** Approved for planning

## Objective

Rewrite the portfolio for an equal mix of recruiters and gameplay/online engineering hiring managers. The homepage must remain quickly scannable, while project pages provide selective technical evidence without reading like commit histories or feature inventories.

## Editorial Standard

Each project will use a layered case-study structure:

1. A project header containing company or context, dates, role, status, and one technology line.
2. A short overview explaining the project, its purpose, and the central challenge.
3. A concise contribution section containing three to five high-value ownership statements.
4. Two to four selected engineering stories for recent professional projects and one to two stories for older projects.
5. A short outcome, reflection, or technical perspective only when it communicates a meaningful decision, tradeoff, or lesson.

Every retained claim must demonstrate at least one of the following:

- Clear personal ownership.
- A meaningful engineering or product decision.
- Technically substantial implementation.
- Shipped or validated scope.
- A result that improved the player experience, designer workflow, development workflow, or system reliability.

## Removal and Consolidation Rules

- Remove trailing `Technologies` sections because technology already appears in the project header.
- Remove repeated `My Role`, responsibility, overview, and takeaway lists when they restate the same work.
- Consolidate related features into a coherent engineering story rather than enumerating screens, services, systems, bug fixes, or commits.
- Exclude routine debugging, minor refactors, workflow tools, and implementation details unless they substantiate a larger technical decision.
- Exclude planned functionality unless it is clearly labelled as current direction and materially explains an active professional project.
- Do not invent metrics or outcomes that are not supported by project evidence.
- Preserve confidentiality and avoid identifying unreleased products, internal SDK names, or protected implementation details.

## Project Scope

### Confidential Game Technology R&D

Retain four themes:

- Server-authoritative multiplayer and data-driven run architecture.
- Gameplay-side foundations for the project's AI Dungeon Master direction.
- Validated action dispatch and designer-authored session tooling.
- The current direction toward deeper contribution to the Python GDAI server.

The copy must not imply ownership of the generative model or substantial existing Python server implementation. Replace phrases such as `integrated the generative model` with language such as `built gameplay-side foundations for the project's AI Dungeon Master direction`.

Add a short `Current Direction` section explaining that the longer-term goal is for GDAI to become an AI Dungeon Master capable of understanding run state and shaping the session dynamically. State that the next area of personal focus is deeper involvement with the Python GDAI server and the boundary between model-side decisions and authoritative gameplay systems. This direction must be presented as future involvement, not completed work.

### Confidential AI Gaming Companion

Retain three engineering stories:

- Electron-versus-Tauri evaluation and the resulting client foundation.
- Dual-mode, multi-window desktop product architecture.
- Cross-platform native integration and Windows/macOS delivery.

Fold overlays, avatars, Steam integration, packaging, debug tooling, and macOS audio compatibility into those narratives where they provide evidence. Remove component and platform-feature inventories.

### Confidential Multiplayer Technology Demo

Retain three engineering stories:

- Building a playable multiplayer environment for SDK validation.
- Connecting online services and voice communication to representative game flows.
- Cross-platform, dedicated-server, and partner-scenario validation.

Remove menu-by-menu, service-by-service, and gameplay-feature inventories. Preserve the distinction between gameplay ownership, integration work, and partner support.

### Hustler

Retain solo ownership, the PlayFab-backed competition loop, and shipped mobile delivery. Remove routine runner-feature, monetization, and workflow inventories.

### Kutla

Retain the shared architecture behind Adventure and Drawing modes, persistence of player-created content, and progression. Compress monetization and production-tool details.

### Island Keeper

Retain technical leadership, character/input implementation, and the connection between GDD planning and a playable prototype. Remove lists of GDD categories, generic bug fixing, and project-management tools.

### Sudoku Mobile

Retain the three-mode product structure and Sudoku solver challenge. Remove or explicitly separate unimplemented server, leaderboard, and profile plans from completed work.

## Information Architecture

No component or data-model redesign is required. The existing `Project` and `ProjectDetailSection` structures support the curated copy. Project cards and detail pages continue to read from `src/data/projects.ts`; the implementation changes only the content and number of sections.

## Quality Checks

- Confirm every project distinguishes personal contribution from team or project goals.
- Confirm active direction is labelled as direction rather than completed work.
- Confirm no project contains a trailing `Technologies` detail section.
- Check for duplicated claims within each project.
- Check that older projects are materially shorter than recent professional projects.
- Run the public-copy check, lint, and production build.
- Review the rendered homepage and every project detail page for hierarchy, spacing, and orphaned headings.

## Success Criteria

- A recruiter can identify the project, role, and strongest contribution in under a minute.
- A technical reviewer can find substantive decisions and enough implementation context to guide an interview.
- No page reads as a changelog, sprint report, or exhaustive responsibility list.
- The GDAI language accurately separates completed gameplay-side work, the project's AI Dungeon Master goal, and planned Python server involvement.
