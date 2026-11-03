VERSION 1 — Gameplay Programmer

Mira Chami
Gameplay Programmer
London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev

Gameplay programmer building multiplayer systems, player interactions and designer tools across Godot, Unreal Engine 5 and Unity. Shipped two mobile games, led programming on an adventure prototype and developed experimental gameplay driven by LLMs.

PROFESSIONAL EXPERIENCE
Tencent — Game Tech R&D Engineer · London, UK · Nov 2023 – Present

Co-op Extraction Game · Godot, GDScript

Architected **server-authoritative co-op multiplayer** supporting Steam P2P, LAN, listen and dedicated servers, with replication, RPCs, session management and local multi-client testing.
Built designer-configurable co-op runs and UI covering objectives, death and revival, node/map selection, currency, rewards and win/loss conditions.
Built a timeline runtime and Godot editor plugin that designers used to create behaviour timelines for the AI director. It let them author, preview and validate behaviours without code using the same typed actions as the LLM director, so behaviours could be prototyped by hand before model integration.
Built the gameplay interface for an LLM game director: a validated action library for spawning enemies, granting item rewards and changing progression through server-authoritative systems.
Profiled procedural generation and frame-rate issues in Godot, identifying CPU-bound bottlenecks.

Multiplayer Demo & Online Services · UE5, C++, Blueprints

Implemented replicated Free-for-All and Teams match flows in UE5 using C++ and Blueprints, covering character state, team rules, scoring, interactables and match transitions.
Integrated InGame, Tencent’s public online services framework, into a playable multiplayer demo to demonstrate and validate authentication, lobbies, matchmaking, quests, progression, inventory and achievements; owned the demo’s UI.
Implemented **PlayStation 5 support** and dedicated-server debugging in Unreal Editor; supported partner studios with gameplay, plugin and backend integration; modified CI pipelines.

Investigation Game · Godot, Gemini, Node.js

Built the investigation loop connecting case files, an evidence board and AI witness interviews, with character-knowledge constraints and reply verification before presentation.
Turned player choices into AI input: players pin up to three evidence cards and choose an intent (ask, challenge, connect) to build a question they review before sending. Owned the evidence-board, case-file and interview UI.
Implemented session caching, timeouts, cancellation and retries for asynchronous interviews; Gemini/Search-grounded case generation with schema validation; and UI tests without live model calls, using mocked replies across screen sizes.

Desktop AI Companion · React, Rust, Tauri

Owned the React/Rust architecture and UI for a desktop AI companion; led the Electron-to-Tauri evaluation with working prototypes and migrated to Tauri v2 for lightweight use alongside games.
Built streaming AI chat over HTTP/SSE with progressive rendering across full-chat and in-game companion modes, with overlays, hotkeys, persistent history and automated Windows/macOS CI builds and packaging.

The Video Games Studio (VGS) — Game Programmer · Beirut, Lebanon · Jun 2020 – Aug 2022
Owned gameplay architecture for a published Unity puzzle game, connecting adventure and drawing modes through shared progression and saves, with player-created levels that can be saved and replayed.
Developed and **shipped a mobile runner**, covering gameplay, difficulty balancing, monetisation and PlayFab competitions; built a tool to run competition cycles and retrieve winners.
Led programming for a Unity adventure prototype, translating game design into character, ability and interaction systems; built touch controls with the Unity Input System alongside level designers.
Enabled configurable difficulty, progression and shop content through ScriptableObjects; integrated Unity UI, PlayFab, third-party plugins and backend services.
Supported technical interviews, onboarded and mentored developers, ran code reviews and planned tasks in Jira and Trello; contributed to game design documents and technical documentation.

TECHNICAL TOOLKIT
Engines & Gameplay: Unreal Engine 5 · Unity · Godot · Blueprints · Data-Driven Gameplay · ScriptableObjects
Multiplayer & Services: Server-Authoritative Multiplayer · Replication · RPCs · Dedicated/Listen Servers · Steamworks · InGame · PlayFab · Photon PUN 2 · Node.js · Express · gRPC/Protobuf
Languages: C++ · C# · GDScript · Python · TypeScript · Rust · JavaScript · Java · C
Applied AI: LLM Integration · LLM Tool Design · Google Search Grounding · Structured Outputs (JSON Schema) · LLM Output Validation
Development Tools: Godot Editor Plugins · Git · Perforce · CI · Automated Testing · Build & Release Automation · Performance Profiling
Desktop & Graphics: React · Tauri · Electron · Three.js · PixiJS · Unity URP · Native API Integration

EDUCATION
MSc Games Development (Programming) · Kingston University London · 2022 – 2023
BSc Computer Science · American University of Beirut · 2017 – 2021
BA Economics · American University of Beirut · 2016 – 2020

MISCELLANEOUS
Languages: English, French and Arabic - native
Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds

VERSION 2 — Applied AI Engineer

Mira Chami
Applied AI Engineer
London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev

Applied AI engineer building grounded generation, knowledge-constrained dialogue and controlled model actions inside interactive products. Five years of professional engineering across game engines, backend services, cross-platform desktop applications and shipped games.

PROFESSIONAL EXPERIENCE
Tencent — Game Tech R&D Engineer · London, UK · Nov 2023 – Present

Investigative Game & Applied AI · Gemini, Node.js, Godot

Built a source-linked, **multi-stage Gemini pipeline** for source gathering, evidence extraction, witness research and narrative generation. Validated each stage’s structured output against JSON Schemas; retained citations only from pages retrieved through Google Search grounding.
Implemented AI witnesses with **explicit knowledge boundaries**, separating character knowledge, beliefs and player suggestions. Verified each reply against that knowledge, allowed one revision for rejected replies and retained exact quotes for source-attributed clues.
Kept question generation separate from answering: questions use only player-selected evidence and are reviewed before submission. Owned the Godot case-file, evidence-board and interview UI.
Enabled automated testing without live model calls through mocked responses, schema/data-integrity checks and UI tests across viewport sizes. Built versioned case packages and a comparison viewer, plus Node.js/Express services with session restoration, caching, validation, timeouts, cancellation and retries.

LLM Game Director & Designer Tools · Godot, GDScript

Built a validated gameplay action interface for an LLM director to spawn enemies, grant item rewards and change progression through server-authoritative systems, with shared events and entity context as model input.
Built a timeline runtime and Godot editor plugin that designers used to create behaviour timelines for the AI director. It let them author, preview and validate behaviours without code using the same typed actions as the AI director, while model integration developed.
Architected server-authoritative co-op multiplayer supporting Steam P2P, LAN, listen and dedicated servers, plus data-driven runs providing the foundation the AI director acts on.

Desktop AI Companion · React, Rust, Tauri

Built the React/Rust client for a game-aware AI companion: prompts with session and game context, HTTP/SSE response streaming, progressive rendering and persistent per-user chat history across full-chat and companion interfaces.
Led the Electron-to-Tauri evaluation and migration to Tauri v2; built multi-window chat, companion, avatar and settings UI; automated Windows/macOS CI builds and packaging with diagnostic panels and structured logging.

Online Services & Partner Integration · UE5, C++, Blueprints

Built a UE5 multiplayer demo to demonstrate and validate InGame, Tencent’s public online services framework, covering authentication, lobbies, matchmaking, quests, inventory and achievements in gameplay.
Implemented PlayStation 5 support and dedicated-server debugging; supported partner studios with issues across plugin, backend and UI layers; modified CI pipelines.

The Video Games Studio (VGS) — Game Programmer · Beirut, Lebanon · Jun 2020 – Aug 2022
**Shipped two Unity mobile games**, owning gameplay architecture, persistence and progression from prototype to release.
Integrated PlayFab and third-party backend services, and built a separate tool to run live competition cycles and retrieve winner data.
Enabled content changes without code through ScriptableObject-driven difficulty, progression and shop configuration.
Led programming for a Unity adventure prototype, translating design specifications into character, ability and input systems.
Supported technical interviews, mentored developers, ran code reviews and maintained gameplay and software architecture documentation.

TECHNICAL TOOLKIT
Applied AI: LLM Integration · Context Management · LLM Tool Design · Google Search Grounding · Structured Outputs (JSON Schema) · LLM Output Validation · LLM Response Streaming · Source Attribution
Languages: Python · TypeScript · JavaScript · C++ · C# · Rust · GDScript · Java · C
Backend & Networking: Node.js · Express · HTTP · SSE · gRPC · Protobuf · InGame · PlayFab · Steamworks · Photon PUN 2
Engines & Desktop: Unreal Engine 5 · Unity · Godot · Blueprints · React · Tauri · Electron
Build & Engineering: Git · Perforce · CI · Automated Testing · Mocking · Build & Release Automation · Structured Logging · Performance Profiling
Graphics & Native APIs: Three.js · PixiJS · Unity URP · Native API Integration

EDUCATION
MSc Games Development (Programming) · Kingston University London · 2022 – 2023
BSc Computer Science · American University of Beirut · 2017 – 2021
BA Economics · American University of Beirut · 2016 – 2020

MISCELLANEOUS
Languages: English, French and Arabic - native

VERSION 3 — UI Programmer

Mira Chami
UI Programmer
London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev

UI programmer building interactive game and desktop interfaces across Godot, Unreal Engine 5, Unity and React. Experience includes evidence-board interactions, multiplayer menus and HUDs, streaming AI chat and touch controls for shipped mobile games.

PROFESSIONAL EXPERIENCE
Tencent — Game Tech R&D Engineer · London, UK · Nov 2023 – Present

Investigation Game · Godot, Gemini, Node.js

Owned **case-file, evidence-board and phone-interview UI** for an investigation game, connecting the experience through shared investigation state.
Enabled players to turn source passages into connected evidence: select text from files or transcripts, drag it into cards, draw connections and marker annotations, and reopen the original passage from any card.
Handled keyboard, mouse and trackpad input with animated transitions, expandable card readers and compact previews. Built question composition: select up to three cards and an intent, then review the exact question before sending.
Built Godot UI tests for board state, text-selection gestures, navigation and question composition across viewport sizes using mocked AI responses; built supporting Node.js services and Gemini-grounded case data.

Desktop AI Companion · React, Rust, Tauri

Designed the multi-window React/Rust architecture and full-chat/lightweight in-game companion UX, with chat, companion, avatar and settings windows synchronised through shared messaging.
Built progressive rendering for streamed replies, persistent history, transparent overlays, global hotkeys and tray access; integrated avatar visuals using Three.js and PixiJS.
Led the Electron-to-Tauri evaluation and migration to Tauri v2; built diagnostic panels and automated Windows/macOS CI builds and packaging.

Multiplayer Demo · UE5, C++, Blueprints

Owned menus and HUD integration for a UE5 multiplayer demo using InGame, Tencent’s public online services framework. Connected interfaces to gameplay state, authentication, lobbies, matchmaking, progression, inventory and achievements.
Built replicated multiplayer match flows, implemented **PlayStation 5 support** and supported partner studios with UI, gameplay and plugin integration.

Co-op Extraction Game · Godot, GDScript

Owned UI presenting synchronised player and run state for a co-op multiplayer prototype: objectives, death and revival, map progression and rewards.
Built server-authoritative multiplayer, data-driven runs and a Godot editor plugin that designers used to create behaviour timelines for the AI director. The plugin lets designers author, preview and validate timeline actions, including enemy spawning and item rewards.

The Video Games Studio (VGS) — Game Programmer · Beirut, Lebanon · Jun 2020 – Aug 2022
Built **UI and touch controls** across Unity mobile games, including a drawing mode where players create, save and replay their own pixel-art levels.
Owned gameplay architecture for a published puzzle game, with two modes sharing progression, saves and menus.
Built data-driven shop and progression screens with ScriptableObjects, connecting Unity UI to PlayFab backend data.
Led programming for a Unity adventure prototype, implementing touch input with the Unity Input System alongside level designers; shipped a mobile runner with PlayFab competitions.
Mentored developers, ran code reviews, supported technical interviews and maintained technical documentation.

TECHNICAL TOOLKIT
Game UI & Engines: Unreal Engine 5 · Unity UI (uGUI) · Godot · Blueprints · Unity Input System · Input Handling
Web & Desktop: React · TypeScript · JavaScript · Tauri · Rust · Electron · Multi-Window UI
Graphics & Native APIs: Three.js · PixiJS · Unity URP · Native API Integration · UI Animation
Languages: C++ · C# · GDScript · Python · Java · C
Testing & Build: UI Test Automation · Responsive UI Testing · Automated Testing · Debugging · CI · Build & Release Automation · Performance Profiling · Git · Perforce
Backend & Networking: Node.js · Express · gRPC · Protobuf · InGame · PlayFab · Steamworks · Photon PUN 2
Applied AI: LLM Integration · Google Search Grounding · Structured Outputs (JSON Schema) · LLM Output Validation

EDUCATION
MSc Games Development (Programming) · Kingston University London · 2022 – 2023
BSc Computer Science · American University of Beirut · 2017 – 2021
BA Economics · American University of Beirut · 2016 – 2020

MISCELLANEOUS
Languages: English, French and Arabic - native
Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds

VERSION 4 — Software Engineer

Mira Chami
Software Engineer
London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev

Software engineer building cross-platform desktop applications, backend services and real-time systems, from architecture decisions through CI and release. Experience spans React/Rust clients, asynchronous Node.js services, LLM integration and multiplayer architecture, alongside two shipped mobile games.

PROFESSIONAL EXPERIENCE
Tencent — Game Tech R&D Engineer · London, UK · Nov 2023 – Present

Desktop AI Companion · React, Rust, Tauri

Led the Electron-to-Tauri evaluation and migration, comparing performance, bundle size, multi-window behaviour and desktop APIs through working prototypes; recommended Tauri v2 and migrated the core features.
Designed the **React/Rust client architecture**: React UI invokes Rust commands through Tauri; the Rust client sends prompts with session and game context over HTTP and streams responses back via SSE, with progressive rendering and persistent per-user conversation history.
Built a multi-window application (chat, companion, avatar, settings) with shared messaging, overlays, hotkeys and tray access; integrated an external avatar service over gRPC.
**Automated Windows/macOS** setup, builds, installers and packaging in CI, with Steam isolated behind feature flags; added structured logging and diagnostic panels to trace failures across frontend, Rust and platform layers.

AI-Backed Investigation Game · Node.js, Express, Gemini, Godot

Built Node.js/Express services for an LLM-backed game, with request validation, caching, session restoration, timeouts, cancellation and retries.
Enabled data-integrity and UI testing without live model calls through mocked responses. Built a versioned data pipeline with JSON Schema validation, cross-reference checks and a version-comparison viewer.

Online Services Integration · UE5, C++, Blueprints

Integrated and validated InGame, Tencent’s public online services framework, in a UE5/C++ multiplayer demo covering authentication, lobbies, matchmaking, inventory and achievements.
Supported partner studios by reproducing issues across plugin, backend and UI boundaries; implemented PlayStation 5 support and dedicated-server debugging; modified CI pipelines.

Co-op Game Systems · Godot, GDScript

Designed server-authoritative networking supporting Steam P2P, LAN, listen and dedicated servers, with local multi-client testing.
Built a validated action API for an LLM director to spawn enemies and grant item rewards, plus a Godot editor plugin for authoring and testing actions. Designers used the plugin to create behaviour timelines for the AI director. Profiled procedural generation to identify CPU-bound bottlenecks.

The Video Games Studio (VGS) — Game Programmer · Beirut, Lebanon · Jun 2020 – Aug 2022
**Shipped a mobile runner** from first build to store release, covering gameplay, tuning, monetisation and backend integration.
Owned architecture for a published puzzle game, including persistence, progression and replayable player-created content.
Integrated PlayFab and third-party backend services across Unity projects; built a separate application to manage competition cycles and retrieve winner data.
Led programming for a Unity prototype, from design documents and technical planning to implementation.
Mentored developers, ran code reviews, supported technical interviews and planned work in Jira and Trello; maintained software architecture documentation.

TECHNICAL TOOLKIT
Languages: TypeScript · JavaScript · Rust · C++ · C# · Python · GDScript · Java · C
Frontend & Desktop: React · Tauri · Electron · Native API Integration · Cross-Platform Desktop Development · Multi-Window UI
Backend & Networking: Node.js · Express · Asynchronous Programming · Caching · HTTP · SSE · gRPC · Protobuf · InGame · PlayFab · Steamworks · Photon PUN 2
Build & Engineering: CI · Build & Release Automation · Automated Testing · Structured Logging · Performance Profiling · Git · Perforce
Applied AI: LLM Integration · Google Search Grounding · Structured Outputs (JSON Schema) · LLM Output Validation
Engines & Graphics: Unreal Engine 5 · Unity · Godot · Blueprints · Unity URP · Three.js · PixiJS

EDUCATION
MSc Games Development (Programming) · Kingston University London · 2022 – 2023
BSc Computer Science · American University of Beirut · 2017 – 2021
BA Economics · American University of Beirut · 2016 – 2020

MISCELLANEOUS
Languages: English, French and Arabic - native
