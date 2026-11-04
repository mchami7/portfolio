"""Full verified professional breadth in every role; priority and emphasis vary."""

SHARED = {'contact': 'London, UK · +44 7495 468016 · miranchami@gmail.com · mirachami.dev',
 'tencent_role': 'Game Tech R&D Engineer',
 'tencent_dates': 'Nov 2023 – Present',
 'vgs_dates': 'Jun 2020 – Aug 2022',
 'education': ('MSc Games Development (Programming) · Kingston University London · 2022 – 2023',
               'BSc Computer Science · American University of Beirut · 2017 – 2021',
               'BA Economics · American University of Beirut · 2016 – 2020'),
 'languages': 'English, French and Arabic - native',
 'additional_projects': 'Portal rendering/DualSense triggers · 3D map UI · Photon/PlayFab arena '
                        '· Sudoku solver'}

ROLE_COPY = {
    'gameplay': {**SHARED,
     'intro': 'Gameplay programmer building multiplayer systems, player interactions and designer '
              'tools across Godot, Unreal Engine 5 and Unity. Shipped two mobile games, led '
              'programming on an adventure prototype and developed experimental gameplay driven by '
              'LLMs.',
     'tencent': {'coop': ('Built **server-authoritative co-op multiplayer** with Steam P2P, LAN, '
                          'listen/dedicated servers, replication, RPCs, sessions and local '
                          'multi-client testing; implemented data-driven runs and UI for objectives, '
                          'death/revival, node/map selection, currency, rewards and win/loss.',
                          'Built the LLM director’s validated action library for spawning enemies, '
                          'granting item rewards and changing progression, with shared gameplay events '
                          'and entity context as model input.',
                          'Built a timeline runtime and Godot editor plugin that designers used to '
                          'create behaviour timelines for the AI director without code: shared '
                          'actions, typed parameters, time/event-driven triggers, pacing previews and '
                          'validation before model integration.',
                          'Profiled procedural generation and low frame rates with Godot’s profiler, '
                          'identifying CPU-bound bottlenecks.'),
                 'unreal': ('Implemented replicated UE5 gameplay and UI in C++/Blueprints: '
                            'Free-for-All and Teams matches, character state, team rules, scoring, '
                            'interactables and match transitions.',
                            'Integrated InGame, Tencent’s public online services framework, covering '
                            'authentication, lobbies, matchmaking, quests, progression, inventory and '
                            'achievements; supported partner studios with gameplay, UI, plugin and '
                            'backend integration.',
                            'Enabled **PlayStation 5 support** and local dedicated-server debugging in '
                            'Unreal Editor; configured and modified CI pipelines.'),
                 'investigation': ('Owned Godot case-file, evidence-board and interview UI: '
                                   'source-linked text selection, drag-to-pin cards, '
                                   'connections/annotations, board navigation, animated transitions '
                                   'and keyboard/pointer controls.',
                                   'Built a multi-stage Gemini/Google Search-grounded research '
                                   'pipeline for source gathering, evidence extraction, witness '
                                   'research and narrative generation, with JSON Schemas, '
                                   'cross-reference checks, retrieved-source citations, versioned case '
                                   'packages and a comparison viewer.',
                                   'Implemented knowledge-constrained AI witnesses distinguishing '
                                   'facts, beliefs and player hypotheses, with verified replies, one '
                                   'revision attempt and source-attributed verbatim clues. Players '
                                   'review questions from up to three selected evidence cards and an '
                                   'intent before sending.',
                                   'Built Node.js/Express services with request validation, session '
                                   'restoration, caching, timeouts, cancellation and retries; '
                                   'automated schema/data-integrity and UI tests across viewport sizes '
                                   'with mocked replies, without live model calls.'),
                 'desktop': ('Owned React/JavaScript and Rust client architecture; evaluated '
                             'Electron/Tauri prototypes for performance, bundle size, multi-window '
                             'behaviour and native APIs, then migrated to Tauri v2.',
                             'Built prompt submission with session/game context, HTTP/SSE streaming, '
                             'progressive replies and persistent per-user history; chat, companion, '
                             'avatar and settings windows with shared messaging, overlays, hotkeys, '
                             'tray access, gRPC, Three.js and PixiJS.',
                             'Configured Windows/macOS CI setup, builds, installers and packaging; '
                             'added structured logging and diagnostic panels, with Steam integration '
                             'optional through feature flags.')},
     'technologies': {'coop': 'Godot, GDScript',
                      'investigation': 'Godot, Gemini, Node.js',
                      'unreal': 'UE5, C++, Blueprints',
                      'desktop': 'React, Rust, Tauri'},
     'vgs': ('**Shipped a Unity mobile runner** covering gameplay, difficulty tuning, monetisation, '
             'PlayFab integration and release; built a separate tool to manage competition cycles and '
             'retrieve winner data.',
             'Owned gameplay architecture for a published Unity puzzle game: Adventure/Drawing modes, '
             'shared progression and saves, and saving/replaying player-created pixel-art levels.',
             'Led programming for a Unity adventure prototype, translating the GDD into character, '
             'ability and interaction systems; built touch controls with the Unity Input System '
             'alongside level designers.',
             'Built configurable difficulty, progression and shop content with ScriptableObjects; '
             'implemented Unity UI and integrated PlayFab, third-party plugins and backend services '
             'across projects.',
             'Supported technical interviews, onboarding and mentoring, code reviews and Jira/Trello '
             'task planning; contributed to GDDs and maintained gameplay-system and '
             'software-architecture documentation.'),
     'toolkit': (('Engines & Gameplay',
                  'Unreal Engine 5 · Unity · Godot · Blueprints · Data-Driven Gameplay · '
                  'ScriptableObjects'),
                 ('Multiplayer & Services',
                  'Server-Authoritative Multiplayer · Replication · RPCs · Dedicated/Listen Servers · '
                  'Steamworks · InGame · PlayFab · Photon PUN 2 · Node.js · Express · gRPC/Protobuf'),
                 ('Languages',
                  'C++ · C# · GDScript · Python · TypeScript · Rust · JavaScript · Java · C'),
                 ('Applied AI',
                  'LLM Integration · LLM Tool Design · Google Search Grounding · Structured Outputs '
                  '(JSON Schema) · LLM Output Validation'),
                 ('Development Tools',
                  'Godot Editor Plugins · Git · Perforce · CI · Automated Testing · Build & Release '
                  'Automation · Performance Profiling'),
                 ('Desktop & Graphics',
                  'React · Tauri · Electron · Three.js · PixiJS · Unity URP · Native API Integration')),
     'headings': {'coop': 'Co-op Extraction Game',
                  'unreal': 'Multiplayer Demo & Online Services',
                  'investigation': 'Investigation Game',
                  'desktop': 'Desktop AI Companion'},
     'interests': 'Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer '
                  'Wilds'},
    'ai': {**SHARED,
     'intro': 'Applied AI engineer building grounded generation, knowledge-constrained dialogue and '
              'controlled model actions inside interactive products. Experience spans game engines, '
              'backend services, cross-platform desktop applications and shipped games.',
     'tencent': {'investigation': ('Owned Godot case-file, evidence-board and interview UI: '
                                   'source-linked text selection, drag-to-pin cards, '
                                   'connections/annotations, board navigation, animated transitions '
                                   'and keyboard/pointer controls.',
                                   'Built a **multi-stage Gemini/Google Search-grounded research '
                                   'pipeline** for source gathering, evidence extraction, witness '
                                   'research and narrative generation, with JSON Schemas, '
                                   'cross-reference checks, retrieved-source citations, versioned case '
                                   'packages and a comparison viewer.',
                                   'Implemented knowledge-constrained AI witnesses distinguishing '
                                   'facts, beliefs and player hypotheses, with **verified replies**, '
                                   'one revision attempt and source-attributed verbatim clues. Players '
                                   'review questions from up to three selected evidence cards and an '
                                   'intent before sending.',
                                   'Built Node.js/Express services with request validation, session '
                                   'restoration, caching, timeouts, cancellation and retries; '
                                   'automated schema/data-integrity and UI tests across viewport sizes '
                                   'with mocked replies, without live model calls.'),
                 'coop': ('Built server-authoritative co-op multiplayer with Steam P2P, LAN, '
                          'listen/dedicated servers, replication, RPCs, sessions and local '
                          'multi-client testing; implemented data-driven runs and UI for objectives, '
                          'death/revival, node/map selection, currency, rewards and win/loss.',
                          'Built the LLM director’s validated action library for spawning enemies, '
                          'granting item rewards and changing progression, with shared gameplay events '
                          'and entity context as model input.',
                          'Built a timeline runtime and Godot editor plugin that designers used to '
                          'create behaviour timelines for the AI director without code: shared '
                          'actions, typed parameters, time/event-driven triggers, pacing previews and '
                          'validation before model integration.',
                          'Profiled procedural generation and low frame rates with Godot’s profiler, '
                          'identifying CPU-bound bottlenecks.'),
                 'desktop': ('Owned React/JavaScript and Rust client architecture; evaluated '
                             'Electron/Tauri prototypes for performance, bundle size, multi-window '
                             'behaviour and native APIs, then migrated to Tauri v2.',
                             'Built prompt submission with session/game context, HTTP/SSE streaming, '
                             'progressive replies and persistent per-user history; chat, companion, '
                             'avatar and settings windows with shared messaging, overlays, hotkeys, '
                             'tray access, gRPC, Three.js and PixiJS.',
                             'Configured Windows/macOS CI setup, builds, installers and packaging; '
                             'added structured logging and diagnostic panels, with Steam integration '
                             'optional through feature flags.'),
                 'unreal': ('Implemented replicated UE5 gameplay and UI in C++/Blueprints: '
                            'Free-for-All and Teams matches, character state, team rules, scoring, '
                            'interactables and match transitions.',
                            'Integrated InGame, Tencent’s public online services framework, covering '
                            'authentication, lobbies, matchmaking, quests, progression, inventory and '
                            'achievements; supported partner studios with gameplay, UI, plugin and '
                            'backend integration.',
                            'Enabled PlayStation 5 support and local dedicated-server debugging in '
                            'Unreal Editor; configured and modified CI pipelines.')},
     'technologies': {'investigation': 'Gemini, Node.js, Godot',
                      'coop': 'Godot, GDScript',
                      'desktop': 'React, Rust, Tauri',
                      'unreal': 'UE5, C++, Blueprints'},
     'vgs': ('**Shipped a Unity mobile runner** covering gameplay, difficulty tuning, monetisation, '
             'PlayFab integration and release; built a separate tool to manage competition cycles and '
             'retrieve winner data.',
             'Owned gameplay architecture for a published Unity puzzle game: Adventure/Drawing modes, '
             'shared progression and saves, and saving/replaying player-created pixel-art levels.',
             'Led programming for a Unity adventure prototype, translating the GDD into character, '
             'ability and interaction systems; built touch controls with the Unity Input System '
             'alongside level designers.',
             'Built configurable difficulty, progression and shop content with ScriptableObjects; '
             'implemented Unity UI and integrated PlayFab, third-party plugins and backend services '
             'across projects.',
             'Supported technical interviews, onboarding and mentoring, code reviews and Jira/Trello '
             'task planning; contributed to GDDs and maintained gameplay-system and '
             'software-architecture documentation.'),
     'toolkit': (('Applied AI',
                  'LLM Integration · Context Management · LLM Tool Design · Google Search Grounding · '
                  'Structured Outputs (JSON Schema) · LLM Output Validation · LLM Response Streaming · '
                  'Source Attribution'),
                 ('Languages',
                  'Python · TypeScript · JavaScript · C++ · C# · Rust · GDScript · Java · C'),
                 ('Backend & Networking',
                  'Node.js · Express · HTTP · SSE · gRPC · Protobuf · InGame · PlayFab · Steamworks · '
                  'Photon PUN 2'),
                 ('Engines & Desktop',
                  'Unreal Engine 5 · Unity · Godot · Blueprints · React · Tauri · Electron'),
                 ('Build & Engineering',
                  'Git · Perforce · CI · Automated Testing · Mocking · Build & Release Automation · '
                  'Structured Logging · Performance Profiling'),
                 ('Graphics & Native APIs', 'Three.js · PixiJS · Unity URP · Native API Integration')),
     'headings': {'investigation': 'Investigative Game & Applied AI',
                  'coop': 'LLM Game Director & Designer Tools',
                  'desktop': 'Desktop AI Companion',
                  'unreal': 'Online Services & Partner Integration'}},
    'ui': {**SHARED,
     'intro': 'UI programmer building interactive game and desktop interfaces across Godot, Unreal '
              'Engine 5, Unity and React. Experience includes evidence-board interactions, multiplayer '
              'menus and HUDs, streaming AI chat and touch controls for shipped mobile games.',
     'tencent': {'investigation': ('Owned Godot **case-file, evidence-board and interview UI**: '
                                   'source-linked text selection, drag-to-pin cards, '
                                   'connections/marker annotations, compact previews, expandable '
                                   'readers, animated transitions and keyboard, mouse and trackpad '
                                   'navigation.',
                                   'Built a multi-stage Gemini/Google Search-grounded research '
                                   'pipeline for source gathering, evidence extraction, witness '
                                   'research and narrative generation, with JSON Schemas, '
                                   'cross-reference checks, retrieved-source citations, versioned case '
                                   'packages and a comparison viewer.',
                                   'Implemented knowledge-constrained AI witnesses distinguishing '
                                   'facts, beliefs and player hypotheses, with verified replies, one '
                                   'revision attempt and source-attributed verbatim clues. Players '
                                   'review questions from up to three selected evidence cards and an '
                                   'intent before sending.',
                                   'Built Node.js/Express services with request validation, session '
                                   'restoration, caching, timeouts, cancellation and retries; '
                                   'automated schema/data-integrity and UI tests across viewport sizes '
                                   'with mocked replies, without live model calls.'),
                 'desktop': ('Owned React/JavaScript and Rust client architecture; evaluated '
                             'Electron/Tauri prototypes for performance, bundle size, multi-window '
                             'behaviour and native APIs, then migrated to Tauri v2.',
                             'Built prompt submission with session/game context, HTTP/SSE streaming, '
                             'progressive replies and persistent per-user history; chat, companion, '
                             'avatar and settings windows with shared messaging, overlays, hotkeys, '
                             'tray access, gRPC, Three.js and PixiJS.',
                             'Configured Windows/macOS CI setup, builds, installers and packaging; '
                             'added structured logging and diagnostic panels, with Steam integration '
                             'optional through feature flags.'),
                 'unreal': ('Implemented replicated UE5 gameplay and UI in C++/Blueprints: '
                            'Free-for-All and Teams matches, character state, team rules, scoring, '
                            'interactables and match transitions.',
                            'Integrated InGame, Tencent’s public online services framework, covering '
                            'authentication, lobbies, matchmaking, quests, progression, inventory and '
                            'achievements; supported partner studios with gameplay, UI, plugin and '
                            'backend integration.',
                            'Enabled **PlayStation 5 support** and local dedicated-server debugging in '
                            'Unreal Editor; configured and modified CI pipelines.'),
                 'coop': ('Built server-authoritative co-op multiplayer with Steam P2P, LAN, '
                          'listen/dedicated servers, replication, RPCs, sessions and local '
                          'multi-client testing; implemented data-driven runs and UI for objectives, '
                          'death/revival, node/map selection, currency, rewards and win/loss.',
                          'Built the LLM director’s validated action library for spawning enemies, '
                          'granting item rewards and changing progression, with shared gameplay events '
                          'and entity context as model input.',
                          'Built a timeline runtime and Godot editor plugin that designers used to '
                          'create behaviour timelines for the AI director without code: shared '
                          'actions, typed parameters, time/event-driven triggers, pacing previews and '
                          'validation before model integration.',
                          'Profiled procedural generation and low frame rates with Godot’s profiler, '
                          'identifying CPU-bound bottlenecks.')},
     'technologies': {'investigation': 'Godot, Gemini, Node.js',
                      'desktop': 'React, Rust, Tauri',
                      'unreal': 'UE5, C++, Blueprints',
                      'coop': 'Godot, GDScript'},
     'vgs': ('Shipped a Unity mobile runner covering gameplay, difficulty tuning, monetisation, '
             'PlayFab integration and release; built a separate tool to manage competition cycles and '
             'retrieve winner data.',
             'Owned gameplay architecture for a published Unity puzzle game: Adventure/Drawing modes, '
             'shared progression and saves, and saving/replaying player-created pixel-art levels.',
             'Led programming for a Unity adventure prototype, translating the GDD into character, '
             'ability and interaction systems; built touch controls with the Unity Input System '
             'alongside level designers.',
             'Built configurable difficulty, progression and shop content with ScriptableObjects; '
             '**implemented Unity UI** and integrated PlayFab, third-party plugins and backend '
             'services across projects.',
             'Supported technical interviews, onboarding and mentoring, code reviews and Jira/Trello '
             'task planning; contributed to GDDs and maintained gameplay-system and '
             'software-architecture documentation.'),
     'toolkit': (('Game UI & Engines',
                  'Unreal Engine 5 · Unity UI (uGUI) · Godot · Blueprints · Unity Input System · Input '
                  'Handling'),
                 ('Web & Desktop',
                  'React · TypeScript · JavaScript · Tauri · Rust · Electron · Multi-Window UI'),
                 ('Graphics & Native APIs',
                  'Three.js · PixiJS · Unity URP · Native API Integration · UI Animation'),
                 ('Languages', 'C++ · C# · GDScript · Python · Java · C'),
                 ('Testing & Build',
                  'UI Test Automation · Responsive UI Testing · Automated Testing · Debugging · CI · '
                  'Build & Release Automation · Performance Profiling · Git · Perforce'),
                 ('Backend & Networking',
                  'Node.js · Express · gRPC · Protobuf · InGame · PlayFab · Steamworks · Photon PUN 2'),
                 ('Applied AI',
                  'LLM Integration · Google Search Grounding · Structured Outputs (JSON Schema) · LLM '
                  'Output Validation')),
     'headings': {'investigation': 'Investigation Game',
                  'desktop': 'Desktop AI Companion',
                  'unreal': 'Multiplayer Demo',
                  'coop': 'Co-op Extraction Game'},
     'interests': 'Clair Obscur: Expedition 33 · Celeste · Split Fiction · The Last of Us · Outer '
                  'Wilds'},
    'software': {**SHARED,
     'intro': 'Software engineer building cross-platform desktop applications, backend services and '
              'real-time systems, from architecture decisions through CI and release. Experience spans '
              'React/Rust clients, asynchronous Node.js services, LLM integration and multiplayer '
              'architecture, alongside two shipped mobile games.',
     'tencent': {'desktop': ('Owned the **React/JavaScript and Rust client architecture**: React '
                             'invokes Rust commands through Tauri; evaluated Electron/Tauri prototypes '
                             'for performance, bundle size, multi-window behaviour and native APIs, '
                             'then migrated to Tauri v2.',
                             'Built prompt submission with session/game context, HTTP/SSE streaming, '
                             'progressive replies and persistent per-user history; chat, companion, '
                             'avatar and settings windows with shared messaging, overlays, hotkeys, '
                             'tray access, gRPC, Three.js and PixiJS.',
                             'Configured **Windows/macOS CI setup, builds, installers and packaging**; '
                             'added structured logging and diagnostic panels, with Steam integration '
                             'optional through feature flags.'),
                 'investigation': ('Owned Godot case-file, evidence-board and interview UI: '
                                   'source-linked text selection, drag-to-pin cards, '
                                   'connections/annotations, board navigation, animated transitions '
                                   'and keyboard/pointer controls.',
                                   'Built a multi-stage Gemini/Google Search-grounded research '
                                   'pipeline for source gathering, evidence extraction, witness '
                                   'research and narrative generation, with JSON Schemas, '
                                   'cross-reference checks, retrieved-source citations, versioned case '
                                   'packages and a comparison viewer.',
                                   'Implemented knowledge-constrained AI witnesses distinguishing '
                                   'facts, beliefs and player hypotheses, with verified replies, one '
                                   'revision attempt and source-attributed verbatim clues. Players '
                                   'review questions from up to three selected evidence cards and an '
                                   'intent before sending.',
                                   'Built Node.js/Express services with request validation, session '
                                   'restoration, caching, timeouts, cancellation and retries; '
                                   'automated schema/data-integrity and UI tests across viewport sizes '
                                   'with mocked replies, without live model calls.'),
                 'unreal': ('Implemented replicated UE5 gameplay and UI in C++/Blueprints: '
                            'Free-for-All and Teams matches, character state, team rules, scoring, '
                            'interactables and match transitions.',
                            'Integrated InGame, Tencent’s public online services framework, covering '
                            'authentication, lobbies, matchmaking, quests, progression, inventory and '
                            'achievements; supported partner studios with gameplay, UI, plugin and '
                            'backend integration.',
                            'Enabled PlayStation 5 support and local dedicated-server debugging in '
                            'Unreal Editor; configured and modified CI pipelines.'),
                 'coop': ('Built server-authoritative co-op multiplayer with Steam P2P, LAN, '
                          'listen/dedicated servers, replication, RPCs, sessions and local '
                          'multi-client testing; implemented data-driven runs and UI for objectives, '
                          'death/revival, node/map selection, currency, rewards and win/loss.',
                          'Built the LLM director’s validated action library for spawning enemies, '
                          'granting item rewards and changing progression, with shared gameplay events '
                          'and entity context as model input.',
                          'Built a timeline runtime and Godot editor plugin that designers used to '
                          'create behaviour timelines for the AI director without code: shared '
                          'actions, typed parameters, time/event-driven triggers, pacing previews and '
                          'validation before model integration.',
                          'Profiled procedural generation and low frame rates with Godot’s profiler, '
                          'identifying CPU-bound bottlenecks.')},
     'technologies': {'desktop': 'React, Rust, Tauri',
                      'investigation': 'Node.js, Express, Gemini, Godot',
                      'unreal': 'UE5, C++, Blueprints',
                      'coop': 'Godot, GDScript'},
     'vgs': ('**Shipped a Unity mobile runner** covering gameplay, difficulty tuning, monetisation, '
             'PlayFab integration and release; built a separate tool to manage competition cycles and '
             'retrieve winner data.',
             'Owned gameplay architecture for a published Unity puzzle game: Adventure/Drawing modes, '
             'shared progression and saves, and saving/replaying player-created pixel-art levels.',
             'Led programming for a Unity adventure prototype, translating the GDD into character, '
             'ability and interaction systems; built touch controls with the Unity Input System '
             'alongside level designers.',
             'Built configurable difficulty, progression and shop content with ScriptableObjects; '
             'implemented Unity UI and integrated PlayFab, third-party plugins and backend services '
             'across projects.',
             'Supported technical interviews, onboarding and mentoring, code reviews and Jira/Trello '
             'task planning; contributed to GDDs and maintained gameplay-system and '
             'software-architecture documentation.'),
     'toolkit': (('Languages',
                  'TypeScript · JavaScript · Rust · C++ · C# · Python · GDScript · Java · C'),
                 ('Frontend & Desktop',
                  'React · Tauri · Electron · Native API Integration · Cross-Platform Desktop '
                  'Development · Multi-Window UI'),
                 ('Backend & Networking',
                  'Node.js · Express · Asynchronous Programming · Caching · HTTP · SSE · gRPC · '
                  'Protobuf · InGame · PlayFab · Steamworks · Photon PUN 2'),
                 ('Build & Engineering',
                  'CI · Build & Release Automation · Automated Testing · Structured Logging · '
                  'Performance Profiling · Git · Perforce'),
                 ('Applied AI',
                  'LLM Integration · Google Search Grounding · Structured Outputs (JSON Schema) · LLM '
                  'Output Validation'),
                 ('Engines & Graphics',
                  'Unreal Engine 5 · Unity · Godot · Blueprints · Unity URP · Three.js · PixiJS')),
     'headings': {'desktop': 'Desktop AI Companion',
                  'investigation': 'AI-Backed Investigation Game',
                  'unreal': 'Online Services Integration',
                  'coop': 'Co-op Game Systems'}},
}
