# Public Portfolio Anonymization Design

## Goal

Anonymize non-public Tencent projects and clearly confidential identifiers in the public portfolio while preserving the technical depth, implementation detail, ownership, and engineering value of each case study.

## Scope

Only the React portfolio will be modified. The CV PDFs and preview images will not be changed. CV improvements will be delivered separately as written recommendations.

## Public Project Labels

- The unreleased co-op roguelike becomes `Confidential AI-Driven Co-op Roguelike`.
- The internal SDK demonstration becomes `Confidential Multiplayer SDK Demo`.
- The non-public companion application becomes `Confidential AI Gaming Companion`.
- Their public URL slugs become functional, non-identifying slugs.
- `InGame` and `GVoice` remain named because they are public Tencent products.

## Content Rules

The portfolio will retain:

- Concrete descriptions of implemented gameplay, multiplayer, UI, tooling, desktop, and platform systems.
- Architecture patterns, engineering decisions, technical trade-offs, technologies, testing approaches, and outcomes.
- Accurate descriptions of Mira's individual ownership and collaboration.
- Public product names, including InGame and GVoice.

The portfolio will anonymize:

- Internal project, class, plugin, payload, service, resource, and workflow identifiers.
- Partner identities and customized partner-specific requirements.
- Unannounced roadmap functionality presented as a confirmed future feature.
- Internal details whose engineering value can be preserved through a precise functional description.

Anonymization will replace identifiers with functional language rather than deleting the associated implementation. For example, a named internal action entry point becomes a centralized validated action-dispatch interface, while its runtime behavior and architectural purpose remain documented.

## Routing

The three confidential project slugs will be replaced in the project data. No compatibility aliases will retain the internal names in shipped source or build output. Old confidential hash URLs will fall back to the portfolio home, while public navigation and generated links will expose only the new slugs.

## Verification

Automated checks will verify that:

- The three internal project names do not appear in public application source or the production build.
- Known internal implementation identifiers selected for anonymization do not appear in public project copy.
- The three replacement titles and slugs are present.
- InGame and GVoice remain present.
- Public navigation exposes only the anonymized project slugs.
- `npm run lint` and `npm run build` pass.

## Non-Goals

- Rewriting or shortening the case studies for recruiter readability.
- Removing technical implementation details merely because a project is confidential.
- Modifying, regenerating, or replacing CV files.
- Renaming public products or published older portfolio projects.
