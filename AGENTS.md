# Codex Project Instructions

This project includes an installed copy of Claude Code Game Studios for game-development workflow structure.

## Installed Studio System

- Upstream reference: https://github.com/donchitos/claude-code-game-studios
- Claude Code runtime files live in `.claude/`.
- Studio agents live in `.claude/agents/`.
- Workflow skills live in `.claude/skills/`.
- Hooks and validation scripts live in `.claude/hooks/`.
- Path-scoped rules live in `.claude/rules/`.
- Supporting documentation lives in `docs/`, `design/`, `production/`, and `CCGS Skill Testing Framework/`.

## How Codex Should Use It

Codex cannot invoke Claude Code slash commands directly. Treat the installed files as project-local process documentation and role prompts:

- For game-production planning, read `.claude/docs/workflow-catalog.yaml` and the relevant skill under `.claude/skills/`.
- For specialist review or implementation guidance, read the relevant role file under `.claude/agents/`.
- For source edits, follow the nearest `CLAUDE.md` plus the matching rule in `.claude/rules/` when it applies.
- Keep the React portfolio app intact; do not replace `src/App.tsx`, `src/index.css`, or Vite config with the upstream template's empty source layout.

## Portfolio-Specific Notes

This repository is a Vite + React + TypeScript portfolio. The CCGS install is supporting workflow infrastructure, not the web app runtime. Run portfolio verification with:

```bash
npm run lint
npm run build
```
