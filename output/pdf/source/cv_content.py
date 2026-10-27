"""Full verified fact catalogue for all CV variants.

Sources: portfolio case studies, original CV and confirmed Tencent UI ownership.
Confidential Tencent projects use functional descriptions only.
"""

CONTENT = {'tencent': {
             'ci_ingame': 'Configured and modified CI pipelines for the InGame multiplayer demo.',
             'ci_desktop': 'Configured and modified CI pipelines for the desktop AI companion.',
             'unreal_matches': 'Implemented replicated gameplay, UI and complete Free-for-All and '
                               'Teams match flows in Unreal Engine 5 using C++ and Blueprints, '
                               'covering character state, team rules, scoring, interactables and '
                               'match transitions.',
             'multiplayer': 'Designed server-authoritative multiplayer supporting Steam P2P, LAN, '
                            'listen and dedicated servers, with replicated state, RPCs, session '
                            'management and local multi-client testing.',
             'run_systems': 'Built data-driven cooperative run systems and UI covering player state, '
                            'death and revival, objectives, node selection, map progression, '
                            'currency, rewards and win/loss conditions.',
             'online_services': 'Integrated InGame authentication, lobbies, matchmaking, quests, '
                                'items, inventory and achievements into UE5 gameplay; supported '
                                'partner studios and diagnosed gameplay, plugin, backend and UI '
                                'issues.',
             'platforms': 'Independently enabled PlayStation 5 support and integrated local '
                          'dedicated-server debugging in Unreal Editor for cross-platform and '
                          'partner-scenario validation.',
             'timeline_tools': 'Built a timeline runtime and Godot editor plugin for time-based '
                               'and event-driven session behaviours, with typed action parameters, '
                               'pacing previews and editor validation.',
             'director_actions': 'Built shared gameplay events, entity context and validated '
                                 'action interfaces for spawning encounters, granting rewards and '
                                 'changing progression, providing gameplay-side foundations for an '
                                 'experimental AI game director.',
             'research_pipeline': 'Built a multi-stage LLM research pipeline for source gathering, '
                                  'evidence extraction, witness research and narrative generation, '
                                  'producing structured case packages with linked citations.',
             'grounded_outputs': 'Integrated Gemini and Google Search grounding with JSON Schemas '
                                 'and cross-reference checks; built versioned case packages and a '
                                 'comparison viewer to inspect generated output.',
             'character_dialogue': 'Implemented contextual character dialogue using explicit '
                                   'knowledge states and evidence-based question generation, with '
                                   'response verification, revision and source-attributed clue '
                                   'extraction.',
             'reliability': 'Implemented session restoration, request caching, timeouts, '
                            'cancellation and retries; added automated schema/data-integrity tests '
                            'and Godot UI tests across viewport sizes using mocked responses. '
                            'Built Node.js/Express services to connect LLM workflows to the '
                            'client.',
             'desktop_architecture': 'Owned architecture and UI for an AI companion using React, '
                                     'JavaScript, Tauri and Rust, including multi-window desktop '
                                     'integration and Windows/macOS builds.',
             'desktop_ai_integration': 'Implemented client-to-server AI integration, including prompt '
                                       'submission, HTTP/SSE response streaming, progressive reply '
                                       'rendering and persistent chat history.',
             'desktop_migration': 'Evaluated Electron and Tauri prototypes and migrated the '
                                  'companion client to Tauri v2; built native desktop '
                                  'integrations, gRPC communication and automated Windows/macOS '
                                  'build and packaging workflows.',
             'board_ui': 'Built Godot case-file, evidence-board and interview interfaces with '
                         'drag-to-pin cards, source-linked text selection, board navigation, '
                         'animated transitions and keyboard/pointer controls.',
             'desktop_native': 'Implemented multi-window interfaces and native desktop features '
                               'including overlays, hotkeys and tray access; '
                               'integrated gRPC, Three.js and PixiJS.',
             'desktop_windows': 'Designed and implemented full chat, lightweight companion, avatar '
                                'and settings interfaces with shared communication across windows.',
             'desktop_delivery': 'Implemented diagnostic panels and structured logging to trace '
                                 'failures across application components; made Steam integration '
                                 'optional through feature flags.'},
 'vgs': {'runner': 'Developed and released a Unity mobile runner, owning '
                   'gameplay, difficulty tuning, PlayFab integration, monetisation and release; '
                   'built a separate tool for competition timing and winner data.',
         'puzzle': 'Owned gameplay architecture for a published Unity puzzle game, connecting '
                   'Adventure and Drawing modes through levels, progression and '
                   'persistence; enabled saving and replaying player-created content.',
         'adventure': 'Led programming for an adventure prototype, translating the GDD into '
                      'character, ability and interaction systems; implemented touch input with '
                      'the Unity Input System and collaborated with level design.',
         'integration': 'Integrated PlayFab, third-party plugins and backend services across Unity '
                        'projects; implemented user interfaces and configurable difficulty, '
                        'progression and shop content using ScriptableObjects.',
         'collaboration': 'Supported technical interviews, onboarding, task guidance for new '
                          'recruits, code reviews and Jira/Trello task planning; contributed to '
                          'game design documents and maintained gameplay-system and '
                          'software-architecture documentation.'},
 'projects': {'arena': 'Knockoff (Unity/C#, Photon): implemented networked knockback combat, '
                       'weapon behaviours, character selection, scoring and respawning; built '
                       'lobby/team/match flow and integrated PlayFab accounts, password recovery, '
                       'statistics and leaderboards.',
              'portals': 'Sensation5 (Unity/C#): built portal placement, camera rendering and '
                         'teleportation; mapped portal distance to DualSense adaptive-trigger '
                         'resistance on PC and built reusable pickups, shooting, checkpoints and '
                         'room progression.',
              'companion_map': 'Elden Ring Onboarding (Unity/C#, unofficial academic prototype): '
                               'sole programmer in a multidisciplinary UX team; built interactive '
                               '3D map navigation, touch input, markers, filtering, contextual '
                               'panels and ScriptableObject guidance data.',
              'sudoku': 'Sudoku Mobile (Unity/C# prototype): built Classic, Time Trial and '
                        'authored Adventure modes, local statistics and progression, and a working '
                        'solver for completed-board validation.'},
 'skills': {'languages': ('Languages',
                          'C++, C#, GDScript, Python, Rust, TypeScript/JavaScript, C, Java'),
            'engines': ('Game Engines',
                        'Unreal Engine 5 (C++/Blueprints), Unity, Godot, URP, Unity Input System, '
                        'ScriptableObjects'),
            'desktop': ('Frontend & Desktop',
                        'React, Tauri, Electron, Three.js, PixiJS, Multi-Window UI, '
                        'Native Desktop Integration, Windows/macOS'),
            'gameplay': ('Gameplay & Tooling',
                         'Combat & Interaction Systems, Player Abilities, Replicated Match Flows, '
                         'Data-Driven Runs, Progression, Inventory & Loadouts, Economy, '
                         'Persistence, Designer Timelines, Event-Driven Architecture'),
            'networking': ('Networking & Services',
                           'Server-Authoritative Multiplayer, Dedicated/Listen Servers, '
                           'Steamworks/Steam P2P, LAN, RPCs, Photon PUN 2, PlayFab, InGame, '
                           'PlayStation 5, gRPC/Protobuf'),
            'ai': ('Applied AI',
                   'LLM Integration, Gemini, Google Search Grounding, Structured Outputs, JSON '
                   'Schemas, Contextual Dialogue, Source Attribution, Response Verification'),
            'services': ('Services & Reliability',
                         'Node.js, Express, Asynchronous Workflows, Request Validation, '
                         'Timeouts/Cancellation/Retries, Caching, Automated UI/Data Tests, '
                         'Structured Logging'),
            'engineering': ('Engineering',
                            'Git, Perforce, Code Review, Multi-Client Debugging, CI Pipeline Configuration, Build & Release '
                            'Tooling, Technical Documentation, Jira, Trello, Agile Development')}}
