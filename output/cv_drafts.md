VERSION 1 — Gameplay Programmer

Mira Chami
Gameplay Programmer
London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev

Gameplay programmer prototyping AI-native games: LLM-driven game direction, knowledge-grounded AI characters, server-authoritative multiplayer and designer tooling across Godot, Unreal Engine 5 and Unity. Shipped mobile titles and led programming on a Unity prototype.

PROFESSIONAL EXPERIENCE
Tencent — Game Tech R&D Engineer (Gameplay, Multiplayer & AI) · London, UK · Nov 2023 – Present

Extraction Game & Applied AI · Godot, GDScript

Designed and built the gameplay interface an LLM game director uses to shape co-op runs like an AI Dungeon Master: a validated action library for spawning enemies, rewarding players with items and changing progression. Actions execute through server-authoritative systems, so model decisions never touch networked state directly.
Built a timeline runtime and Godot editor plugin so designers can author, preview and validate the same typed actions without code, letting AI-director behaviours be prototyped by hand before the model drives them.
Architected server-authoritative co-op multiplayer (Steam P2P, LAN, listen and dedicated servers) with replication, RPCs, sessions and local multi-client testing.
Built data-driven co-op runs and UI covering objectives, death and revival, node/map selection, currency, rewards and win/loss conditions, configurable by designers.
Profiled procedural generation and frame-rate issues in Godot, identifying CPU-bound bottlenecks.

Investigative Game & Applied AI · Godot, Gemini, Node.js

Built the core loop of an investigation game where players review case files, connect evidence on a board and question AI witnesses who answer only from their character’s knowledge; a verification step checks replies before players see them.
Turned player choices into AI input: players pin up to three evidence cards and pick an intent (ask, challenge, connect) to build a question. Owned the evidence-board, case-file and interview UI.
Kept the AI flows responsive and testable: session caching, timeouts, cancellation and retries for asynchronous interviews; Gemini/Search-grounded case generation with schema validation; UI tests with mocked model replies across screen sizes.

InGame Integration & Multiplayer Demo · UE5, C++, Blueprints

Built replicated multiplayer gameplay in UE5 using C++ and Blueprints, including character state, team rules, scoring, interactables and match transitions.
Integrated InGame, Tencent’s public online services framework, into a multiplayer demo to demonstrate and validate authentication, lobbies, matchmaking, quests, progression, inventory and achievements; owned the demo’s UI.
Implemented PlayStation 5 support and dedicated-server debugging in Unreal Editor; supported partner studios with gameplay, plugin and backend integration; modified CI pipelines.

Desktop AI Companion · React, Rust, Tauri

Led the Electron vs Tauri evaluation with working prototypes and migrated the client to Tauri v2, keeping it lightweight while running alongside games.
Built streaming AI chat (HTTP/SSE, progressive rendering) across full-chat and in-game companion modes, with overlays, hotkeys, persistent history and automated Windows/macOS builds.

The Video Games Studio (VGS) — Game Programmer · Beirut, Lebanon · Jun 2020 – Aug 2022
Led programming for a Unity adventure prototype, translating the game design into character, ability and interaction systems; built touch controls with the Unity Input System alongside level designers.
Owned gameplay architecture for a published Unity puzzle game: adventure and drawing modes sharing progression and saves, with player-created levels that can be saved and replayed.
Developed and shipped a mobile runner: gameplay, difficulty balancing, monetisation and PlayFab competitions, plus a tool to run competition cycles and retrieve winners.
Built configurable difficulty, progression and shop content with ScriptableObjects; integrated Unity UI, PlayFab, third-party plugins and backend services.
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
Languages: English, French, Arabic (all native)
Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds

VERSION 2 — Applied AI Engineer

Mira Chami
Applied AI Engineer
London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev

Applied AI engineer building LLM systems inside interactive products: grounded generation with citations, knowledge-constrained characters, response verification and model-driven actions in live games. Five years of professional engineering across game engines, services and cross-platform clients.

PROFESSIONAL EXPERIENCE
Tencent — Game Tech R&D Engineer (Applied AI & Games) · London, UK · Nov 2023 – Present

Investigative Game & Applied AI · Gemini, Node.js, Godot

Built a multi-stage Gemini pipeline with Google Search grounding: source gathering, evidence extraction, witness research and narrative generation as separate stages, each producing structured output validated against JSON Schemas. Stored links come only from pages actually retrieved through grounding.
Designed AI witness dialogue that separates what a character knows, what they believe and what the player suggests. A separate verification step checks each reply against that knowledge, gives rejected replies one revision, and keeps exact quotes for source-attributed clues.
Kept question-writing separate from answering: questions are generated only from the evidence the player selected, and the player reviews each one before sending. Owned the Godot case-file, evidence-board and interview UI.
Made the system reliable and testable: versioned case packages with a comparison viewer for research runs; Node.js/Express services with session restore, caching, validation, timeouts, cancellation and retries; schema, data-integrity and UI tests using mocked model responses.

Extraction Game & Applied AI · Godot, GDScript

Built the gameplay side of an LLM game director: a validated action library for spawning enemies, rewarding players with items and changing progression, with shared events and entity context as model input. Actions execute only through server-authoritative systems.
Built a timeline runtime and editor plugin on the same typed actions, so designers can author, preview and validate behaviours by hand while the AI integration develops.
Architected server-authoritative co-op multiplayer (Steam P2P, LAN, listen and dedicated servers) and data-driven runs, providing the foundation the AI director acts on.

Desktop AI Companion · React, Rust, Tauri

Built the client side of a game-aware AI companion: prompts submitted with session and game context, HTTP/SSE response streaming with progressive rendering, and persistent per-user chat history.
Led the Electron vs Tauri evaluation and migration to Tauri v2; built multi-window chat, companion, avatar and settings UI; automated Windows/macOS builds with diagnostic panels and structured logging.

InGame Integration & Multiplayer Demo · UE5, C++, Blueprints

Built a UE5 multiplayer demo to demonstrate and validate InGame, Tencent’s public online services framework, covering authentication, lobbies, matchmaking, quests, inventory and achievements in gameplay.
Implemented PlayStation 5 support and dedicated-server debugging; supported partner studios with issues across plugin, backend and UI layers; modified CI pipelines.

The Video Games Studio (VGS) — Game Programmer · Beirut, Lebanon · Jun 2020 – Aug 2022
Shipped two Unity mobile games, owning gameplay architecture, persistence and progression from prototype to release.
Integrated PlayFab and third-party backend services, and built a separate tool to run live competition cycles and retrieve winner data.
Built data-driven difficulty, progression and shop content with ScriptableObjects so content could change without code.
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
Languages: English, French, Arabic (all native)
Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds

VERSION 3 — UI Programmer

Mira Chami
UI Programmer
London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev

UI programmer building game and desktop interfaces where the interaction is the experience: evidence boards, multiplayer flows and streaming AI chat, across Godot, Unreal Engine 5, Unity and React.

PROFESSIONAL EXPERIENCE
Tencent — Game Tech R&D Engineer (UI & Gameplay) · London, UK · Nov 2023 – Present

Investigative Game & Applied AI · Godot, Gemini, Node.js

Owned UI for an investigation game: case files, an evidence board and phone interviews, connected through shared investigation state.
Built a tactile evidence board: players select text from files or transcripts, drag it to pin as cards, draw connections and marker annotations, and reopen the original passage from any card.
Handled keyboard, mouse and trackpad input with animated transitions, expandable card readers and compact previews; designed the question-building flow (pick up to three cards and an intent, review the exact question before sending).
Wrote Godot UI tests for board state, text-selection gestures, navigation and question composition across viewport sizes, using mocked AI responses; built the supporting Node.js services and Gemini-grounded case data.

Desktop AI Companion · React, Rust, Tauri

Designed the dual-mode UX and multi-window architecture: full chat, lightweight in-game companion, avatar and settings windows, kept in sync with shared messaging.
Built streaming chat UI that renders replies as they arrive, with persistent history, transparent overlays, global hotkeys, tray access and avatar visuals in Three.js and PixiJS.
Led the Electron vs Tauri evaluation and migration to Tauri v2; built diagnostic panels and automated Windows/macOS builds.

InGame Integration & Multiplayer Demo · UE5, C++, Blueprints

Owned UI for a UE5 multiplayer demo integrating InGame, Tencent’s public online services framework. Connected menus and HUD to gameplay state, authentication, lobbies, matchmaking, progression, inventory and achievements.
Built replicated multiplayer match flows, implemented PlayStation 5 support and supported partner studios with UI, gameplay and plugin integration.

Extraction Game & Applied AI · Godot, GDScript

Owned game UI for a co-op multiplayer prototype, presenting synchronised player and run state (objectives, death and revival, map progression, rewards).
Built server-authoritative multiplayer, data-driven runs and a Godot editor plugin for designers to author, preview and validate timeline actions, including enemy spawning and item rewards.

The Video Games Studio (VGS) — Game Programmer · Beirut, Lebanon · Jun 2020 – Aug 2022
Built UI and touch controls across Unity mobile games, including a drawing mode where players create, save and replay their own pixel-art levels.
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
Languages: English, French, Arabic (all native)
Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds

VERSION 4 — Software Engineer

Mira Chami
Software Engineer
London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev

Software engineer building cross-platform desktop applications, backend services and real-time systems, from architecture decisions through CI and release. Recent work spans React/Rust clients, Node.js services, LLM integration and multiplayer game systems.

PROFESSIONAL EXPERIENCE
Tencent — Game Tech R&D Engineer (Software & Applied AI) · London, UK · Nov 2023 – Present

Desktop AI Companion · React, Rust, Tauri

Led the Electron vs Tauri evaluation with working prototypes comparing performance, bundle size, multi-window behaviour and desktop APIs; recommended Tauri v2 and migrated the core features.
Designed the client architecture: React UI invoking Rust commands through Tauri; the Rust client sends prompts with session and game context over HTTP and streams responses back via SSE; per-user conversation history persisted across sessions.
Built a multi-window application (chat, companion, avatar, settings) with shared messaging, overlays, hotkeys and tray access; integrated an external avatar service over gRPC.
Automated Windows/macOS setup, build, installer and packaging in CI, with Steam isolated behind feature flags; added structured logging and diagnostic panels to trace failures across frontend, Rust and platform layers.

Investigative Game & Applied AI · Node.js, Express, Gemini, Godot

Built Node.js/Express services for an LLM-backed game: request validation, caching, session restoration, timeouts, cancellation and retries.
Built a versioned data pipeline with JSON Schema validation, cross-reference checks and a version-comparison viewer; automated data-integrity and UI tests with mocked responses, so flows can be validated without live model calls.

InGame Integration & Multiplayer Demo · UE5, C++, Blueprints

Integrated and validated InGame, Tencent’s public online services framework, in a UE5/C++ multiplayer demo covering authentication, lobbies, matchmaking, inventory and achievements.
Supported partner studios by reproducing issues across plugin, backend and UI boundaries; implemented PlayStation 5 support and dedicated-server debugging; modified CI pipelines.

Extraction Game & Applied AI · Godot, GDScript

Designed server-authoritative networking (Steam P2P, LAN, listen and dedicated servers) with local multi-client testing.
Built a validated action API between an LLM director service and the game for spawning enemies and rewarding players with items, plus a Godot editor plugin for authoring and testing actions. Profiled procedural generation to identify CPU-bound bottlenecks.

The Video Games Studio (VGS) — Game Programmer · Beirut, Lebanon · Jun 2020 – Aug 2022
Integrated PlayFab and third-party backend services across Unity projects, and built a separate application to manage competition cycles and retrieve winner data.
Owned architecture for a published puzzle game: persistence, progression and replayable player-created content.
Shipped a mobile runner from first build to store release, covering gameplay, tuning, monetisation and backend integration.
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
Languages: English, French, Arabic (all native)
Favourite games: Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer Wilds
