"""Role-sensitive CV copy: contribution, implementation and supported outcome.

Every fact ID remains covered once. Outcomes come from documented portfolio
behaviour and user-confirmed work; no invented metrics or unverified benefits.
"""

PRESENTATIONS = {'tencent': {'unreal': {'heading': 'InGame Integration & Multiplayer Demo',
                        'url': 'https://intl.ingame.tencent.com/',
                        'covers': ('unreal_matches', 'online_services', 'platforms', 'ci_ingame'),
                        'summary': ("Built a replicated UE5 demo to validate InGame, Tencent's public "
                                    'online-service framework for game backends, through '
                                    'Free-for-All/team matches and UI. Connected character state, '
                                    'scoring, interactions and match flow to authentication, lobbies, '
                                    'matchmaking, quests, inventory and achievements.',
                                    'Enabled PlayStation 5 support and local dedicated-server debugging '
                                    'in Unreal Editor to reproduce partner issues; configured and '
                                    'modified CI pipelines and supported gameplay, UI, plugin and '
                                    'backend integration.'),
                        'detail': {'default': ('Built replicated UE5 C++/Blueprints gameplay and UI to '
                                               'validate online services through Free-for-All/team '
                                               'matches, covering character state, scoring, '
                                               'interactions and match transitions.',
                                               "Integrated InGame, Tencent's public online-service "
                                               'framework for game backends, across authentication, '
                                               'lobbies, matchmaking, quests, items, inventory and '
                                               'achievements; supported partner gameplay, UI, plugin '
                                               'and backend integration.',
                                               'Independently enabled PlayStation 5 support and local '
                                               'dedicated-server debugging in Unreal Editor to '
                                               'reproduce multiplayer issues; configured and modified '
                                               'CI pipelines.')},
                        'technologies': 'UE5, C++, Blueprints'},
             'coop': {'heading': 'Extraction Game & Applied AI',
                      'covers': ('multiplayer', 'run_systems', 'timeline_tools', 'director_actions'),
                      'summary': ('Built authoritative Steam P2P/LAN multiplayer and UI with '
                                  'listen/dedicated servers, replication, RPCs, sessions and '
                                  'multi-client tests. Made Godot co-op objectives, death/revival, map '
                                  'progression, currency, rewards and win/loss conditions configurable.',
                                  'Built timeline/editor tools so designers could author, preview and '
                                  'validate typed session actions. Exposed shared events, entity '
                                  'context and encounter/reward/progression actions as gameplay-side '
                                  'foundations for an experimental AI game director.'),
                      'detail': {'default': ('Designed server-authoritative Steam P2P/LAN multiplayer '
                                             'with listen/dedicated servers, replication, RPCs and '
                                             'sessions for synchronised co-op play and local '
                                             'multi-client testing.',
                                             'Built data-driven Godot co-op runs and UI, letting '
                                             'designers configure objectives, death/revival, node/map '
                                             'selection, currency, rewards and win/loss conditions.',
                                             'Built a timeline runtime/editor plugin so designers could '
                                             'author, preview and validate typed session actions. '
                                             'Exposed shared events, entity context and validated '
                                             'encounter/reward/progression actions for an experimental '
                                             'AI game director.')},
                      'technologies': 'Godot, GDScript'},
             'investigation': {'heading': 'Investigative Game & Applied AI',
                               'covers': ('research_pipeline',
                                          'grounded_outputs',
                                          'character_dialogue',
                                          'reliability',
                                          'board_ui'),
                               'summary': ('Built LLM source/evidence/witness/narrative research with '
                                           'Gemini/Search grounding, JSON Schemas and '
                                           'citation/cross-reference checks; versioned cases and a '
                                           'viewer supported comparison between runs. Linked '
                                           'knowledge-constrained dialogue and evidence-based questions '
                                           'to verified/revised replies and attributed clues.',
                                           'Built source-linked case-file, interview and drag-to-pin '
                                           'board UI with keyboard/pointer controls so players could '
                                           'reopen sources. Added Node.js/Express services, session '
                                           'restoration, caching, validation, '
                                           'timeouts/cancellation/retries and schema/UI tests across '
                                           'viewports using mocked responses.'),
                               'detail': {'default': ('Built Gemini/Search-grounded LLM research '
                                                      'producing versioned source, evidence, witness '
                                                      'and narrative packages; added JSON Schemas, '
                                                      'citation/cross-reference checks and a viewer to '
                                                      'compare generated cases across runs.',
                                                      'Implemented knowledge-constrained dialogue with '
                                                      'evidence-based questions, reply '
                                                      'verification/revision and attributed clues. '
                                                      'Built source-linked case-file, interview and '
                                                      'evidence-board UI with drag-to-pin cards, '
                                                      'navigation, transitions and keyboard/pointer '
                                                      'controls so players could reopen original '
                                                      'passages.',
                                                      'Built Node.js/Express services with session '
                                                      'restoration, caching, validation and '
                                                      'timeouts/cancellation/retries; automated '
                                                      'schema/data-integrity and Godot UI tests across '
                                                      'viewports using mocked responses to validate '
                                                      'flows without live model calls.'),
                                          'ui': ('Built source-linked case-file, evidence-board and '
                                                 'interview UI with drag-to-pin cards, navigation, '
                                                 'animated transitions and keyboard/pointer controls so '
                                                 'players could revisit original passages.',
                                                 'Connected knowledge-constrained interviews to '
                                                 'evidence-based questions, reply verification/revision '
                                                 'and attributed clues. Built Gemini/Search-grounded '
                                                 'case research with JSON Schemas, '
                                                 'citation/cross-reference checks, versioned packages '
                                                 'and a comparison viewer to inspect generated records.',
                                                 'Built Node.js/Express services with session '
                                                 'restoration, caching, validation and '
                                                 'timeouts/cancellation/retries; automated '
                                                 'schema/data-integrity and Godot UI tests across '
                                                 'viewports using mocked responses to validate flows '
                                                 'without live model calls.')},
                               'technologies': 'Godot, Gemini, Node.js'},
             'desktop': {'heading': 'Desktop AI Companion',
                         'covers': ('desktop_architecture',
                                    'desktop_ai_integration',
                                    'desktop_migration',
                                    'desktop_native',
                                    'desktop_windows',
                                    'desktop_delivery',
                                    'ci_desktop'),
                         'summary': ('Owned the React/Rust client and UI; evaluated Electron and '
                                     'migrated to Tauri v2. Implemented client-to-server AI integration, '
                                     'including prompt submission, HTTP/SSE response streaming, progressive '
                                     'reply rendering and persistent chat history. Built chat, companion, '
                                     'avatar and settings windows; shared window messaging, overlays, hotkeys, tray '
                                     'access, gRPC, Three.js and PixiJS.',
                                     'Configured and modified CI pipelines for automated Windows/macOS '
                                     'builds and packaging. Built diagnostic panels and structured '
                                     'logging for debugging; made Steam integration optional with feature flags.'),
                         'detail': {'default': ('Owned React/Rust client architecture; evaluated Electron '
                                                'and migrated to Tauri v2. Implemented client-to-server AI '
                                                'integration, including prompt submission, HTTP/SSE response '
                                                'streaming, progressive reply rendering and persistent chat history.',
                                                'Built full-chat, lightweight companion, avatar and '
                                                'settings UI with shared window messaging, overlays, '
                                                'hotkeys and tray access; integrated gRPC, Three.js and PixiJS.',
                                                'Configured and modified CI pipelines for automated '
                                                'Windows/macOS builds and packaging. Built diagnostic '
                                                'panels and structured logging for debugging; made Steam '
                                                'integration optional with feature flags.')},
                         'technologies': 'React, JavaScript, Tauri, Rust'}},
 'vgs': {'runner': {'covers': ('runner',),
                    'summary': ('Developed and released a mobile runner in Unity, implementing gameplay, '
                                'difficulty balancing, PlayFab competitions and monetisation; built '
                                'tooling to manage competition cycles and retrieve winner data.',),
                    'detail': ('Developed and released a mobile runner in Unity, with responsibility '
                               'for gameplay systems, difficulty balancing, PlayFab competitions and '
                               'monetisation. Built tooling to manage competition cycles and retrieve '
                               'winner data.',)},
         'puzzle': {'covers': ('puzzle',),
                    'summary': ('Designed gameplay architecture for a published Unity puzzle game, '
                                'including adventure and drawing modes, level progression, persistence '
                                'and saving and replaying player-created content.',),
                    'detail': ('Designed and implemented gameplay architecture for a published Unity '
                               'puzzle game, integrating adventure and drawing modes with level '
                               'progression, persistence and support for saving and replaying '
                               'player-created content.',)},
         'adventure': {'covers': ('adventure',),
                       'summary': ('Led programming for a Unity adventure prototype, translating game '
                                   'design specifications into character, ability and interaction '
                                   'systems; implemented touch controls and collaborated with level designers.',),
                       'detail': ('Led programming for a Unity adventure prototype, translating game '
                                  'design specifications into character, ability and interaction systems. '
                                  'Implemented touch controls with the Unity Input System in '
                                  'collaboration with level designers.',)},
         'integration': {'covers': ('integration',),
                         'summary': ('Implemented configurable difficulty, progression and shop content '
                                     'using ScriptableObjects; integrated Unity UI, PlayFab, third-party '
                                     'plugins and backend services.',),
                         'detail': ('Implemented user interfaces and integrated PlayFab, third-party '
                                    'plugins and backend services across Unity projects. Used '
                                    'ScriptableObjects to configure difficulty, progression and shop content.',)},
         'collaboration': {'covers': ('collaboration',),
                           'summary': ('Supported technical interviews, developer onboarding and '
                                       'mentoring, code reviews and task planning in Jira and Trello; '
                                       'contributed to game design documents and maintained technical documentation.',),
                           'detail': ('Supported technical interviews, developer onboarding and '
                                      'mentoring, code reviews and task planning in Jira and Trello. '
                                      'Contributed to game design documents and maintained gameplay '
                                      'and software architecture documentation.',)}},
 'projects': {'arena': {'covers': ('arena',),
                        'summary': ('Knockoff (Unity/C#, Photon): networked combat, weapons, character '
                                    'selection, scoring/respawns and lobby/team/match flow; PlayFab '
                                    'accounts, recovery, statistics and leaderboards.',),
                        'detail': ('Knockoff (Unity/C#, Photon): built networked knockback combat, '
                                   'weapons, character selection, scoring/respawns and lobby/team/match '
                                   'flow; integrated PlayFab accounts, recovery, statistics and '
                                   'leaderboards.',)},
              'portals': {'covers': ('portals',),
                          'summary': ('Sensation5 (Unity/C#): portals/rendering/teleportation, PC '
                                      'DualSense distance-based trigger resistance, pickups, shooting, '
                                      'checkpoints and room progression.',),
                          'detail': ('Sensation5 (Unity/C#): built portals, camera rendering and '
                                     'teleportation; mapped distance to PC DualSense trigger '
                                     'resistance, with pickups, shooting, checkpoints and room '
                                     'progression.',)},
              'companion_map': {'covers': ('companion_map',),
                                'summary': ('Elden Ring Onboarding (unofficial academic Unity/C# '
                                            'prototype): sole programmer in a UX team; 3D map, touch '
                                            'controls, markers/filtering, contextual panels and '
                                            'ScriptableObject guidance.',),
                                'detail': ('Elden Ring Onboarding (unofficial academic Unity/C# '
                                           'prototype): sole programmer in a multidisciplinary UX team; '
                                           'built 3D map navigation, touch controls, markers/filtering, '
                                           'contextual panels and ScriptableObject guidance.',)},
              'sudoku': {'covers': ('sudoku',),
                         'summary': ('Sudoku Mobile (Unity/C# prototype): Classic, Time Trial and '
                                     'authored Adventure modes, statistics/progression and a '
                                     'completed-board validation solver.',),
                         'detail': ('Sudoku Mobile (Unity/C# prototype): implemented Classic, Time '
                                    'Trial and authored Adventure modes, statistics/progression and a '
                                    'working solver for completed-board validation.',)}}}

SKILLS = {'languages': ('Languages', 'C++, C#, GDScript, Python, Rust, TypeScript/JavaScript, C, Java'),
 'engines': ('Engines', 'Unreal Engine 5, Unity, Godot, URP, Unity Input System, ScriptableObjects'),
 'desktop': ('Desktop & UI', 'React, Tauri, Electron, Three.js, PixiJS, native integration'),
 'gameplay': ('Gameplay & Tools', 'Combat, abilities, progression, inventory, persistence, timelines'),
 'networking': ('Networking',
                'Steamworks/P2P, LAN, RPCs, Photon PUN 2, PlayFab, InGame, PlayStation 5, '
                'gRPC/Protobuf'),
 'ai': ('Applied AI', 'LLM integration, Gemini, Search grounding, JSON Schemas, contextual dialogue'),
 'services': ('Services & Testing',
              'Node.js, Express, async workflows, caching, validation, automated UI/data tests'),
 'engineering': ('Engineering',
                 'Git, Perforce, code review, CI pipeline configuration, build/release tools, '
                 'documentation, Jira/Trello, Agile')}

TOOLKIT = {'programming': ('PROGRAMMING',
                 'C++ · C# · Python · TypeScript · Rust\nJavaScript · GDScript · Java · C'),
 'platforms': ('ENGINES & DESKTOP', 'Unreal Engine 5 · Unity · Godot\nReact · Tauri · Electron'),
 'ai': ('APPLIED AI', 'Gemini · LLM APIs · Search grounding\nJSON Schemas · Response verification'),
 'services': ('SERVICES & NETWORKING',
              'Node.js · Express · gRPC/Protobuf\nInGame · PlayFab · Steamworks · Photon'),
 'ui': ('UI & GRAPHICS', 'Three.js · PixiJS · Unity URP\nNative desktop integration'),
 'engineering': ('BUILD & ENGINEERING',
                 'Git · Perforce · CI pipelines\nAutomated testing · Build/release automation')}

TOOLKIT_ORDER = {'software': ('programming', 'platforms', 'ai', 'services', 'ui', 'engineering'),
 'gameplay': ('platforms', 'programming', 'services', 'ui', 'ai', 'engineering'),
 'ui': ('ui', 'platforms', 'programming', 'services', 'ai', 'engineering'),
 'ai': ('ai', 'programming', 'services', 'platforms', 'ui', 'engineering')}
