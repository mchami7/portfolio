# CV comparison with the originals - 3 November 2026

> Historical review. Superseded by `../experience-breadth-review.md`, which checks the full verified catalogue in every role and rendered website pages. Original role drafts and their paragraph numbers are not a current coverage proof. The numerical five-year statement mentioned below has been removed following the user’s clarification.

## Scope and result

Compared the four role-specific CVs from baseline commit `c30ca567bea8` with the current versions, and checked the verified fact catalogue for attribution. Reviewed all 65 original professional-experience bullets individually: 45 Tencent bullets and 20 VGS bullets. Each original contribution is represented in its corresponding role version. All original toolkit entries, project technology labels, contact details and qualifications are retained.

The table below maps evidence from each original bullet to its current location. `tests/fixtures/cv_original_coverage.json` preserves the original text and an independently reviewed evidence checklist. This catches missing facts even when the total bullet count stays unchanged.

## Corrections made in this review

- Restored the original five-year experience statement and Applied AI positioning in the AI profile.
- Made React/Rust ownership explicit in the Gameplay, AI and UI desktop descriptions; retained the already explicit software architecture explanation. React/Rust remains in all four desktop technology labels and toolkits.
- Made desktop CI builds and packaging explicit where the supporting descriptions previously mentioned only builds.
- Restored architecture-through-CI-and-release scope in the Software Engineer profile.
- Restored all five favourite games in the Gameplay and UI versions, where game interests give relevant industry context.
- Retained the full professional detail restored earlier: profiling, competition tools, typed designer actions, source-linked AI generation, response verification, UI/service integration, platform work, CI, mentoring, onboarding and documentation.

## Confirmed designer use

After the original comparison, the user confirmed that designers used the timeline tool to create behaviour timelines for the AI director. All four versions now state that adoption explicitly. All evidence in the original-to-current map remains retained. No usage counts or time savings are inferred.

## Applying the supplied CV advice

| Principle | Application |
| --- | --- |
| Concise | Keep two readable pages and tighten phrasing; preserve distinct evidence and technologies. Do not delete a contribution merely because it is supporting work for that role. |
| Relevant | Lead with the role’s strongest projects. Preserve transferable engineering breadth. Keep game interests in game-industry versions; use the space for professional evidence in general Software and Applied AI versions. |
| Impact | Lead with shipped games, designer authoring without code, source-traceable evidence, testability without live model calls and delivered platform support. Keep implementation detail explaining those capabilities. No invented metrics or unverified improvement claims. |
| Easy to skim | Clear employer/project headings, role-specific order and three short experience highlights per CV. No font reduction to force fit. |

## Changes from the original that remain intentional

| Original wording or material | Treatment and reason |
| --- | --- |
| Favourite games in Software and Applied AI | Omitted from these two applications because it adds less role-specific evidence; all technical experience remains. Restored in Gameplay and UI. |
| Parenthesised role-focus labels after the Tencent job title | Use the official Game Tech R&D Engineer title; the target role and focus are already stated in the CV title/profile. |
| Metaphors and slogans such as AI Dungeon Master or interaction is the experience | Replace with the actual implemented actions and interfaces; the underlying contributions are retained. |
| Lightweight-client wording | Describe the intended alongside-game use, without claiming a measured resource improvement. |
| Repeated lists in summaries | Consolidate only when the same evidence remains in the relevant project; preserve exact technologies in project labels and toolkits. |

Academic/personal projects remain on the portfolio as previously agreed. This review does not reintroduce confidential project names, excluded coworker contributions, unsupported engine frameworks or invented accomplishments.

## Original experience evidence map

Bullet numbers below are within the named project (or VGS). Targeted ordering differs across roles.

| Original bullet ID | Evidence retained | Current location | Decision |
| --- | --- | --- | --- |
| gameplay.coop.1 | LLM game director; validated action library; spawning enemies; granting item rewards; changing progression; server-authoritative systems | coop, bullet 4 | Retained |
| gameplay.coop.2 | author, preview and validate behaviours without code; timeline runtime; Godot editor plugin; same typed actions; prototyped by hand; before model integration | coop, bullet 3 | Retained |
| gameplay.coop.3 | server-authoritative co-op multiplayer; Steam P2P; LAN; listen and dedicated servers; replication; RPCs; session management; local multi-client testing | coop, bullet 1 | Retained |
| gameplay.coop.4 | designer-configurable co-op runs and UI; objectives; death and revival; node/map selection; currency; rewards; win/loss conditions | coop, bullet 2 | Retained |
| gameplay.coop.5 | procedural generation; frame-rate issues; Godot; CPU-bound bottlenecks | coop, bullet 5 | Retained |
| gameplay.investigation.1 | investigation loop; case files; evidence board; AI witness interviews; character-knowledge constraints; reply verification before presentation | investigation, bullet 1 | Retained |
| gameplay.investigation.2 | pin up to three evidence cards; ask, challenge, connect; question they review before sending; Owned the evidence-board, case-file and interview UI | investigation, bullet 2 | Retained |
| gameplay.investigation.3 | session caching; timeouts; cancellation and retries; asynchronous interviews; Gemini/Search-grounded case generation; schema validation; UI tests without live model calls; mocked replies across screen sizes | investigation, bullet 3 | Retained |
| gameplay.unreal.1 | replicated; UE5; C++ and Blueprints; character state; team rules; scoring; interactables; match transitions | unreal, bullet 1 | Retained |
| gameplay.unreal.2 | InGame, Tencent’s public online services framework; multiplayer demo; demonstrate and validate; authentication; lobbies; matchmaking; quests; progression; inventory; achievements; owned the demo’s UI | unreal, bullet 2 | Retained |
| gameplay.unreal.3 | PlayStation 5 support; dedicated-server debugging in Unreal Editor; partner studios; gameplay, plugin and backend integration; modified CI pipelines | unreal, bullet 3 | Retained |
| gameplay.desktop.1 | Electron-to-Tauri evaluation; working prototypes; migrated to Tauri v2; lightweight use alongside games | desktop, bullet 1 | Retained |
| gameplay.desktop.2 | streaming AI chat over HTTP/SSE; progressive rendering; full-chat and in-game companion modes; overlays; hotkeys; persistent history; automated Windows/macOS | desktop, bullet 2 | Retained |
| gameplay.vgs.1 | Led programming for a Unity adventure prototype; character, ability and interaction systems; touch controls with the Unity Input System; alongside level designers | vgs, bullet 3 | Retained |
| gameplay.vgs.2 | gameplay architecture; published Unity puzzle game; adventure and drawing modes; shared progression and saves; player-created levels; saved and replayed | vgs, bullet 1 | Retained |
| gameplay.vgs.3 | Developed and shipped a mobile runner; gameplay; difficulty balancing; monetisation; PlayFab competitions; run competition cycles and retrieve winners | vgs, bullet 2 | Retained |
| gameplay.vgs.4 | configurable difficulty, progression and shop content; ScriptableObjects; Unity UI; PlayFab; third-party plugins and backend services | vgs, bullet 4 | Retained |
| gameplay.vgs.5 | technical interviews; onboarded and mentored developers; code reviews; Jira and Trello; game design documents and technical documentation | vgs, bullet 5 | Retained |
| ai.investigation.1 | multi-stage Gemini pipeline; source gathering; evidence extraction; witness research; narrative generation; each stage’s structured output; JSON Schemas; citations only from pages retrieved through Google Search grounding | investigation, bullet 1 | Retained |
| ai.investigation.2 | AI witnesses; character knowledge, beliefs and player suggestions; Verified each reply; one revision for rejected replies; exact quotes; source-attributed clues | investigation, bullet 2 | Retained |
| ai.investigation.3 | question generation separate from answering; only player-selected evidence; reviewed before submission; Owned the Godot case-file, evidence-board and interview UI | investigation, bullet 3 | Retained |
| ai.investigation.4 | automated testing without live model calls; mocked responses; schema/data-integrity checks; UI tests across viewport sizes; versioned case packages; comparison viewer; Node.js/Express services; session restoration; caching; validation; timeouts, cancellation and retries | investigation, bullet 4 | Retained |
| ai.coop.1 | validated gameplay action interface; LLM director; spawn enemies; grant item rewards; change progression; server-authoritative systems; shared events and entity context as model input | coop, bullet 1 | Retained |
| ai.coop.2 | author, preview and validate behaviours without code; timeline runtime; Godot editor plugin; same typed actions as the AI director; while model integration developed | coop, bullet 2 | Retained |
| ai.coop.3 | server-authoritative co-op multiplayer; Steam P2P; LAN; listen and dedicated servers; data-driven runs; foundation the AI director acts on | coop, bullet 3 | Retained |
| ai.desktop.1 | client for a game-aware AI companion; prompts with session and game context; HTTP/SSE response streaming; progressive rendering; persistent per-user chat history | desktop, bullet 1 | Retained |
| ai.desktop.2 | Electron-to-Tauri evaluation and migration to Tauri v2; multi-window chat, companion, avatar and settings UI; automated Windows/macOS; diagnostic panels; structured logging | desktop, bullet 2 | Retained |
| ai.unreal.1 | UE5 multiplayer demo; demonstrate and validate InGame; Tencent’s public online services framework; authentication; lobbies; matchmaking; quests; inventory; achievements in gameplay | unreal, bullet 1 | Retained |
| ai.unreal.2 | PlayStation 5 support; dedicated-server debugging; partner studios; plugin, backend and UI layers; modified CI pipelines | unreal, bullet 2 | Retained |
| ai.vgs.1 | Shipped two Unity mobile games; gameplay architecture, persistence and progression; prototype to release | vgs, bullet 1 | Retained |
| ai.vgs.2 | PlayFab and third-party backend services; separate tool; live competition cycles; retrieve winner data | vgs, bullet 2 | Retained |
| ai.vgs.3 | content changes without code; ScriptableObject-driven difficulty, progression and shop configuration | vgs, bullet 3 | Retained |
| ai.vgs.4 | Led programming for a Unity adventure prototype; design specifications; character, ability and input systems | vgs, bullet 4 | Retained |
| ai.vgs.5 | technical interviews; mentored developers; code reviews; gameplay and software architecture documentation | vgs, bullet 5 | Retained |
| ui.investigation.1 | Owned case-file, evidence-board and phone-interview UI; investigation game; shared investigation state | investigation, bullet 1 | Retained |
| ui.investigation.2 | select text from files or transcripts; drag it into cards; draw connections and marker annotations; reopen the original passage from any card | investigation, bullet 2 | Retained |
| ui.investigation.3 | keyboard, mouse and trackpad input; animated transitions; expandable card readers; compact previews; up to three cards and an intent; review the exact question before sending | investigation, bullet 3 | Retained |
| ui.investigation.4 | Godot UI tests; board state; text-selection gestures; navigation; question composition; viewport sizes; mocked AI responses; Node.js services; Gemini-grounded case data | investigation, bullet 4 | Retained |
| ui.desktop.1 | multi-window; full-chat/lightweight in-game companion UX; chat, companion, avatar and settings windows; synchronised through shared messaging | desktop, bullet 1 | Retained |
| ui.desktop.2 | progressive rendering for streamed replies; persistent history; transparent overlays; global hotkeys; tray access; Three.js and PixiJS | desktop, bullet 2 | Retained |
| ui.desktop.3 | Electron-to-Tauri evaluation and migration to Tauri v2; diagnostic panels; automated Windows/macOS | desktop, bullet 3 | Retained |
| ui.unreal.1 | Owned menus and HUD integration; UE5 multiplayer demo; InGame, Tencent’s public online services framework; gameplay state; authentication; lobbies; matchmaking; progression; inventory; achievements | unreal, bullet 1 | Retained |
| ui.unreal.2 | replicated multiplayer match flows; PlayStation 5 support; partner studios; UI, gameplay and plugin integration | unreal, bullet 2 | Retained |
| ui.coop.1 | Owned UI; synchronised player and run state; co-op multiplayer prototype; objectives; death and revival; map progression; rewards | coop, bullet 1 | Retained |
| ui.coop.2 | server-authoritative multiplayer; data-driven runs; Godot editor plugin; author, preview and validate timeline actions; enemy spawning and item rewards | coop, bullet 2 | Retained |
| ui.vgs.1 | UI and touch controls across Unity mobile games; drawing mode; create, save and replay; pixel-art levels | vgs, bullet 1 | Retained |
| ui.vgs.2 | gameplay architecture for a published puzzle game; two modes sharing progression, saves and menus | vgs, bullet 2 | Retained |
| ui.vgs.3 | data-driven shop and progression screens; ScriptableObjects; Unity UI; PlayFab backend data | vgs, bullet 3 | Retained |
| ui.vgs.4 | Led programming for a Unity adventure prototype; touch input with the Unity Input System; alongside level designers; shipped a mobile runner with PlayFab competitions | vgs, bullet 4 | Retained |
| ui.vgs.5 | Mentored developers; code reviews; technical interviews; technical documentation | vgs, bullet 5 | Retained |
| software.desktop.1 | Electron-to-Tauri evaluation and migration; performance, bundle size, multi-window behaviour and desktop APIs; working prototypes; recommended Tauri v2; migrated the core features | desktop, bullet 1 | Retained |
| software.desktop.2 | React UI invokes Rust commands through Tauri; Rust client sends prompts with session and game context over HTTP; streams responses back via SSE; persistent per-user conversation history | desktop, bullet 2 | Retained |
| software.desktop.3 | multi-window application (chat, companion, avatar, settings); shared messaging; overlays; hotkeys; tray access; external avatar service over gRPC | desktop, bullet 3 | Retained |
| software.desktop.4 | Automated Windows/macOS setup, builds, installers and packaging; CI; Steam isolated behind feature flags; structured logging and diagnostic panels; frontend, Rust and platform layers | desktop, bullet 4 | Retained |
| software.investigation.1 | Node.js/Express services; LLM-backed game; request validation; caching; session restoration; timeouts, cancellation and retries | investigation, bullet 1 | Retained |
| software.investigation.2 | data-integrity and UI testing without live model calls; mocked responses; versioned data pipeline; JSON Schema validation; cross-reference checks; version-comparison viewer | investigation, bullet 2 | Retained |
| software.unreal.1 | Integrated and validated InGame; Tencent’s public online services framework; UE5/C++ multiplayer demo; authentication; lobbies; matchmaking; inventory; achievements | unreal, bullet 1 | Retained |
| software.unreal.2 | partner studios; reproducing issues across plugin, backend and UI boundaries; PlayStation 5 support; dedicated-server debugging; modified CI pipelines | unreal, bullet 2 | Retained |
| software.coop.1 | server-authoritative networking; Steam P2P; LAN; listen and dedicated servers; local multi-client testing | coop, bullet 1 | Retained |
| software.coop.2 | validated action API for an LLM director; spawn enemies; grant item rewards; Godot editor plugin; authoring and testing actions; Profiled procedural generation; CPU-bound bottlenecks | coop, bullet 2 | Retained |
| software.vgs.1 | PlayFab and third-party backend services across Unity projects; separate application; manage competition cycles; retrieve winner data | vgs, bullet 3 | Retained |
| software.vgs.2 | Owned architecture for a published puzzle game; persistence; progression; replayable player-created content | vgs, bullet 2 | Retained |
| software.vgs.3 | Shipped a mobile runner from first build to store release; gameplay; tuning; monetisation; backend integration | vgs, bullet 1 | Retained |
| software.vgs.4 | Led programming for a Unity prototype; design documents; technical planning; implementation | vgs, bullet 4 | Retained |
| software.vgs.5 | Mentored developers; code reviews; technical interviews; Jira and Trello; software architecture documentation | vgs, bullet 5 | Retained |
