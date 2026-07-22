# Master's Projects Portfolio Design

## Goal

Add Mira's three Kingston University master's projects to the portfolio in a way that gives the academic work clear context, preserves the site's existing visual hierarchy, and presents only claims supported by the public repositories.

## Information Architecture

The work page will use this order:

1. Recent Projects — Tencent
2. Master's Projects — Kingston University, 2022–2023
3. Older Projects — previous professional and independent work

The new section will use the existing three-column `ProjectGrid`, giving the three projects equal visual weight without introducing a new card style.

## Projects

### Sensation5

- Role: Game Programmer
- Focus: first-person puzzle gameplay, portal mechanics, interaction systems, and distance-based DualSense adaptive-trigger resistance
- Technology: Unity, C#, Input System, URP, DualSense integration
- Public link: <https://github.com/mchami7/Sensation5>
- Platform note: the Unity project can be opened on macOS, but the UniSense adaptive-trigger dependency targets Windows. A macOS run requires a standard-input fallback and null-safe handling around DualSense feedback.

### Elden Ring Onboarding

- Role: Unity Programmer
- Focus: a companion map prototype designed by a multidisciplinary student team to help new Elden Ring players understand quests, NPCs, key items, weapons, and danger zones without changing the game itself
- Technology: Unity, C#, ScriptableObjects, UI, touch and pinch navigation
- Public link: <https://github.com/mchami7/EldenRing_Onboarding>
- Attribution note: the page will clearly describe this as an unofficial academic onboarding concept and will not imply affiliation with FromSoftware or Bandai Namco.

### Knockoff

- Role: Gameplay & Multiplayer Programmer
- Focus: a physics-based online arena game with knockback combat, teams, character selection, weapons, scoring, respawning, lobbies, and leaderboards
- Technology: Unity, C#, Photon PUN 2, PlayFab, URP
- Public link: <https://github.com/mchami7/Knockoff>
- Platform note: the client code is broadly macOS-compatible, but a complete online test depends on the legacy Photon and PlayFab projects still being available. Offline or local fallback work may be required.

## Project Pages

Each project will use the existing project-detail template with:

- a short overview;
- a clear statement of Mira's role;
- concise contribution bullets;
- one or two deeper sections explaining the central technical or UX challenge;
- technologies;
- a GitHub repository link.

Copy will distinguish implemented work from project goals and avoid overstating production readiness.

## Visual Treatment

The cards will initially use the site's existing question-mark placeholder. Repository art will not be repurposed as portfolio imagery because it includes third-party packages and, for Elden Ring Onboarding, copyrighted game imagery. Original screenshots can replace the placeholders after the projects are running locally and the captures have been reviewed.

## Data and Components

- Add a `mastersProjects` collection in `src/data/projects.ts`.
- Export it separately from `recentProjects` and `olderProjects`.
- Include it in `allProjects` so hash routes resolve to the new detail pages.
- Add one `Master's Projects` section to `src/components/PortfolioHome.tsx`.
- Reuse `ProjectGrid` and `ProjectDetail`; no new component abstraction is needed.

## Verification

- Run the public-copy confidentiality check.
- Run lint and the production build.
- Test all three card routes at desktop and mobile widths.
- Verify external GitHub links open safely in a new browser tab according to the existing link behavior.
- Test the Unity projects separately with Unity 2021.3 LTS before changing or upgrading project files.

