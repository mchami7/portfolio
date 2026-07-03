import type { Project } from '../types/portfolio'

const hustlerImages = [
  new URL('../assets/projects/hustler/hustler-01.jpg', import.meta.url).href,
  new URL('../assets/projects/hustler/hustler-02.jpg', import.meta.url).href,
  new URL('../assets/projects/hustler/hustler-03.jpg', import.meta.url).href,
  new URL('../assets/projects/hustler/hustler-04.jpg', import.meta.url).href,
]

const kutlaImages = [
  new URL('../assets/projects/kutla/kutla-01.jpg', import.meta.url).href,
  new URL('../assets/projects/kutla/kutla-02.jpg', import.meta.url).href,
  new URL('../assets/projects/kutla/kutla-03.jpg', import.meta.url).href,
  new URL('../assets/projects/kutla/kutla-04.jpg', import.meta.url).href,
  new URL('../assets/projects/kutla/kutla-05.jpg', import.meta.url).href,
  new URL('../assets/projects/kutla/kutla-06.jpg', import.meta.url).href,
  new URL('../assets/projects/kutla/kutla-07.jpg', import.meta.url).href,
  new URL('../assets/projects/kutla/kutla-08.jpg', import.meta.url).href,
]

const islandKeeperImages = [
  new URL('../assets/projects/island-keeper/island-keeper-01.jpg', import.meta.url).href,
  new URL('../assets/projects/island-keeper/island-keeper-02.jpg', import.meta.url).href,
  new URL('../assets/projects/island-keeper/island-keeper-03.jpg', import.meta.url).href,
  new URL('../assets/projects/island-keeper/island-keeper-04.jpg', import.meta.url).href,
  new URL('../assets/projects/island-keeper/island-keeper-05.jpg', import.meta.url).href,
]

const sudokuMobileImages = [
  new URL('../assets/projects/sudoku-mobile/sudoku-mobile-01.jpg', import.meta.url).href,
  new URL('../assets/projects/sudoku-mobile/sudoku-mobile-02.jpg', import.meta.url).href,
  new URL('../assets/projects/sudoku-mobile/sudoku-mobile-03.jpg', import.meta.url).href,
  new URL('../assets/projects/sudoku-mobile/sudoku-mobile-04.jpg', import.meta.url).href,
]

function createMedia(title: string, images: string[]) {
  return {
    thumbnail: images[0],
    images: images.map((src, index) => ({
      src,
      alt: `${title} screenshot ${index + 1}`,
    })),
  }
}

export const recentProjects: Project[] = [
  {
    slug: 'ascension',
    title: 'Ascension',
    year: 'Tencent, 2023-Present',
    role: 'Gameplay & Multiplayer Systems Programmer',
    duration: 'AI-driven roguelike',
    technology: 'Godot 4, Multiplayer, Editor Tooling, Action Library, AI-Driven Roguelike',
    summary:
      'A cooperative roguelike exploring how AI can become a gameplay system, supported by server-authoritative multiplayer, designer-authored session timelines, and data-driven action infrastructure.',
    responsibilities: [
      'Server-authoritative multiplayer architecture, Steam P2P, LAN discovery, and GodotSteam lobby support.',
      'Player, session, node, objective, interactable, and meta-progression systems.',
      'Event Bus, Action Library, Session Timeline, and designer-configurable gameplay trigger infrastructure.',
      'Session Event Editor plugin for authoring timeline beats, action references, trigger conditions, and parameter overrides without hand-editing resources.',
      'HUD, menu flow, world-space UI, and reusable UI component architecture.',
      'Entity tagging and gameplay-side infrastructure for future AI Director systems.',
      'Code quality, refactoring, debugging, and cross-platform multiplayer stability.',
    ],
    detail: [
      'Ascension began as a collection of experimental prototypes investigating different ways AI could influence gameplay. Over time, these concepts converged into a shared cooperative roguelike experience.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Ascension began as a collection of experimental prototypes investigating different ways AI could influence gameplay. Over time, these concepts converged into a shared cooperative roguelike experience focused on one central question:',
          'How can AI observe player behaviour and meaningfully shape the gameplay experience itself?',
          'Unlike traditional AI implementations that focus on dialogue generation or cosmetic content, Ascension explores AI as an active participant in the game loop through narrative systems, adaptive mechanics, and player-driven consequences.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'I primarily worked as a gameplay and multiplayer engineer, focusing on the systems that connected gameplay, networking, and AI infrastructure together.',
          'My responsibilities included:',
        ],
        items: [
          'Server-authoritative multiplayer architecture and networking.',
          'Steam P2P, LAN discovery, GodotSteam lobbies, and multi-client testing workflows.',
          'Player health, damage, death, respawn, session flow, and win/loss states.',
          'Node-based roguelike run flow, synchronized map progression, objectives, and keystone systems.',
          'Meta-progression, player profile data, shops, inventory, and persisted item systems.',
          'Interactable framework, replicated interaction states, and world-space interaction feedback.',
          'HUD, menu navigation, world-space UI, and reusable UI component architecture.',
          'Event Bus, Action Library, Session Timeline, and AI-facing gameplay trigger infrastructure.',
          'Session Event Editor plugin for designer-authored timeline resources, trigger conditions, action selection, validation, and parameter overrides.',
          'Code quality, refactoring, debugging, and cross-platform multiplayer stability.',
        ],
      },
      {
        title: 'Building the Multiplayer Foundation',
        paragraphs: [
          'One of my primary areas of ownership was the multiplayer infrastructure.',
          "I built and maintained a server-authoritative gameplay architecture using Godot's native multiplayer API, with the server owning core game state and clients receiving updates through replication and RPCs.",
          'I evaluated Netfox against the native Godot networking stack, which clarified the tradeoffs between middleware convenience and engine-native control, compatibility, and debugging.',
          'The final foundation supported Steam and LAN play while keeping the networking path understandable enough for rapid debugging during multiplayer development.',
        ],
        groups: [
          {
            title: 'Networking Features',
            items: [
              'Server-authoritative gameplay state.',
              'Steam P2P support through GodotSteam.',
              'Steam lobby management.',
              'LAN play with UDP broadcast and discovery.',
              'Join-by-code support for local sessions.',
              'Local multi-client support for testing.',
              'Replicated peer identity, lobby state, player nameplates, and session progression.',
            ],
          },
        ],
      },
      {
        title: 'Building the Player and Session Loop',
        paragraphs: [
          'As Ascension moved from isolated test scenes into repeatable cooperative sessions, I implemented the core player and session systems needed to make a run playable from start to finish.',
          'This work connected moment-to-moment player state with session-level rules, so health, death, respawn, objectives, and win/loss conditions could all behave consistently in multiplayer.',
        ],
        groups: [
          {
            title: 'Player State',
            items: [
              'Player health and damage handling.',
              'Death and revive flow.',
              'Spawn and respawn state reset.',
              'Debug commands for death-state and revive testing.',
              'PlayerSession separation for persistent/session player state.',
            ],
          },
          {
            title: 'Session Flow',
            items: [
              'Session win/loss conditions.',
              'Match state management in SessionManager.',
              'Altar and exit condition logic.',
              'Session progression updates replicated across clients.',
            ],
          },
        ],
      },
      {
        title: 'Creating the Roguelike Run Structure',
        paragraphs: [
          'I built node and level-flow systems that turned Ascension into a configurable roguelike run rather than a sequence of disconnected rooms.',
          'The goal was to give designers a data-driven way to define run structure while preserving the synchronization guarantees needed for multiplayer navigation.',
        ],
        groups: [
          {
            title: 'Node and Map Systems',
            items: [
              'Combat, elite, shop, and rest node types.',
              'Choice doors for multiplayer node selection.',
              'Session map synchronization with a server-side handshake.',
              'Data-driven run definitions converted from JSON into .tres Resources.',
              'In-session map preview support in the HUD.',
              'Placeholder boss room node and victory-on-exit flow.',
            ],
          },
          {
            title: 'Objectives and Progression',
            items: [
              'Generic objective architecture.',
              'Keystone objective system.',
              'Enemy kill tracking.',
              'Shop and rest flow integration.',
              'Favour economy and session rewards.',
            ],
          },
        ],
      },
      {
        title: 'Laying the Foundation for the AI Director',
        paragraphs: [
          'One of the most interesting challenges was preparing gameplay systems so a future AI Director could safely understand and influence the game world.',
          'I did not build the AI telemetry layer itself. My contribution was the gameplay-side infrastructure that could feed and constrain future AI systems: entity tagging, an Event Bus, an Action Library, timeline-driven gameplay triggers, and designer-facing authoring tools.',
          'The strongest pattern was to keep AI-facing systems behind deterministic gameplay boundaries. Future AI systems should request safe actions through known interfaces rather than directly manipulating gameplay objects.',
          'The Director needs structured context and constrained actions before it can make meaningful decisions:',
        ],
        items: [
          'Which player performed the action?',
          'Which entities were involved?',
          'What had happened previously?',
          'What state was the run currently in?',
        ],
        groups: [
          {
            title: 'Entity Tagging',
            paragraphs: [
              'I provided standardized gameplay tagging so systems could identify what entities existed in the world and what role they played.',
            ],
            items: ['Players.', 'Enemies.', 'Interactables.', 'Persistent entities.'],
          },
          {
            title: 'Event Bus',
            paragraphs: [
              'I built an Event Bus so in-session events could route through a shared dispatch point instead of hardwiring every event source to every gameplay reaction.',
            ],
            items: [
              'Keystone collected.',
              'Enemy killed.',
              'Chest opened or objective completed.',
              'Future gameplay events that can be routed into designer-authored or AI-driven logic.',
            ],
          },
          {
            title: 'Action Library and Session Timeline',
            paragraphs: [
              'I designed and implemented the Action Library dispatch system so timeline entries, designer-authored triggers, and future AI Director logic can all call the same safe gameplay actions.',
              'I built the Session Timeline runtime on top of that library so gameplay actions can be scheduled across a session without hardcoding every pacing beat.',
            ],
            items: [
              'Single ActionLibrary.run entry point for running authored actions by id.',
              'Spawn, reward, and session action families with handler/executor dispatch.',
              'Parameter override validation for safe per-entry tuning.',
              'Server-only TimelineRunner for time-based and EventBus-triggered actions.',
              'Runtime action context for combat room, enemy spawner, players, session state, and event payload data.',
              'HUD elapsed-time sync for player-facing session progress.',
              'Designer-configurable session length, favour grants, loot density, enemy escalation beats, and exit conditions.',
              'Machine-readable action catalog export for future tooling and AI Director discovery.',
            ],
          },
          {
            title: 'Session Event Editor',
            paragraphs: [
              'I also worked on the Godot editor plugin that gives designers a visual way to author session timelines instead of hand-editing .tres resources.',
            ],
            items: [
              'Project > Tools menu integration for opening the editor inside Godot.',
              'Timeline resource loading, duplication, validation, and save flow.',
              'Time-based and EventBus-based trigger rows.',
              'Action dropdowns populated from authored Action Library resources.',
              'Typed parameter override inspector generated from selected action payloads.',
              'Timeline preview markers for player-visible pacing beats.',
              'Validation for duration, ids, triggers, action references, and trigger timing.',
            ],
          },
          {
            title: 'Event-Driven Spawn Foundation',
            paragraphs: [
              'Before dynamic Director spawning could exist, I separated spawn decision-making from spawn execution so future systems could request enemies without rewriting the multiplayer spawn path.',
            ],
            items: [
              'SpawnRequest payload shape for validated enemy spawn requests.',
              'LegacySpawnTrigger compatibility path to preserve existing room behaviour.',
              'EnemySpawnerGroup refactor into a spawn executor using MultiplayerSpawner.',
              'GameplayHost spawn-trigger extension point for future Director-controlled spawning.',
              'Forward-compatible marker metadata for spawn kind, tags, and budget.',
            ],
          },
        ],
      },
      {
        title: 'Creating Interaction and UI Foundations',
        paragraphs: [
          'A large part of making Ascension playable was building consistent interaction and UI systems around the underlying gameplay.',
          'These systems made the game easier to read, easier to test, and faster for designers and engineers to extend.',
        ],
        groups: [
          {
            title: 'Interactables',
            items: [
              'Shared Interactable base class.',
              'Prompt UI and hold-progress feedback.',
              'Instant, hold, and animation-timed interactions.',
              'Collision-based interaction zones instead of distance-only checks.',
              'Replicated interaction state for doors, keystones, altars, choice doors, exit doors, and banners.',
              'Scene-authored interaction zones for easier setup and maintenance.',
            ],
          },
          {
            title: 'UI Architecture',
            items: [
              'HUD framework from designer mockups.',
              'Health, resources, team status, toast notifications, and objective tracking.',
              'Menu flow across main menu, lobby, class select, defeat, victory, loadout, shrine, shop, and settings.',
              'World-space UI for health bars, nameplates, charge/dash bars, and interactable prompts.',
              'Reusable UI components for cards, tooltips, item presentation, character stats, vault inventory, shop entries, and tag chips.',
              'ScreenManager, ScreenBase, persistent top bar, transitions, and UI/data decoupling.',
            ],
          },
        ],
      },
      {
        title: 'Supporting Meta Progression',
        paragraphs: [
          'I implemented the early persistence layer for Ascension\'s designer-defined meta-progression flow, connecting player profile data, currency, items, shops, and loadout views.',
          'This gave the game a progression loop outside individual sessions and created shared item data that other systems could rely on.',
        ],
        groups: [
          {
            title: 'Progression Systems',
            items: [
              'PlayerProfile data for persistent player state.',
              'Gold, purchased items, and custom player data.',
              'Vault system for cross-run item persistence.',
              'Item registry for shared lookup across inventory, shop, and loadout systems.',
              'MetaShop catalog entries using existing item data.',
              'Loadout inventory view for inspecting persisted items before a run.',
            ],
          },
        ],
      },
      {
        title: 'Evolving the Architecture',
        paragraphs: [
          'As the project grew, maintaining flexibility became increasingly important. I contributed to refactors and stability work that reduced technical debt while features were still moving quickly.',
          'This work made the codebase easier to navigate, safer to extend, and better aligned with a scalable studio-style project structure.',
        ],
        groups: [
          {
            title: 'Refactoring and Ownership Boundaries',
            items: [
              'Project directory restructuring by domain.',
              'NetworkManager peer identity refactor into peer_info.',
              'Player-facing display names separated from internal identifiers.',
              'Entity tag handling cleanup across entities.',
              'Theme system refactor for more consistent UI styling.',
              'MetaShop catalog cleanup and item data standardization.',
              'Platform-specific input handling for Mac and Windows.',
            ],
          },
          {
            title: 'Debugging and Stability',
            items: [
              'Used logs, test pipelines, multi-client testing, and playtest reports to reproduce and resolve issues.',
              'Added crash-prevention guards for revive logic, AI tags, projectiles, and asset-loading edge cases.',
              'Fixed seed determinism and precision issues affecting run generation.',
              'Added lobby/session guards for failed joins, max-player caps, and duplicate blueprint delivery.',
              'Fixed multiplayer replication bugs around enemy death/despawn timing and kill tracking.',
              'Resolved Mac/Windows pipeline and input differences.',
              'Added unit/editor tests for Action Library dispatch, session timeline execution, editor behaviour, and spawn foundation boundaries.',
            ],
          },
        ],
      },
      {
        title: 'Technical Takeaways',
        paragraphs: [
          'Ascension reshaped how I think about AI in games.',
          'The project made it clear that AI-driven gameplay depends less on raw generation and more on the systems around it: symbolic world state, deterministic gameplay boundaries, constrained action interfaces, and reliable multiplayer-safe execution.',
          'It also strengthened my experience in low-level multiplayer implementation, gameplay systems architecture, UI architecture, production refactoring, and cross-disciplinary collaboration.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Engine', items: ['Godot 4.'] },
          { title: 'Languages', items: ['GDScript.'] },
          {
            title: 'Networking',
            items: [
              'Server-authoritative architecture.',
              'Steam P2P.',
              'LAN discovery.',
              'Godot Multiplayer.',
              'GodotSteam.',
              'Multi-client testing.',
            ],
          },
          {
            title: 'Systems',
            items: [
              'Gameplay Architecture.',
              'Event-Driven Systems.',
              'Session Management.',
              'Node-Based Run Flow.',
              'Interactables.',
              'UI Architecture.',
              'Meta Progression.',
              'Editor Tooling.',
            ],
          },
          {
            title: 'AI',
            items: [
              'Entity Tagging.',
              'Event Bus.',
              'Action Library.',
              'Session Timeline.',
              'Session Event Editor.',
              'Event-Driven Spawn Foundation.',
              'AI Director-facing gameplay boundaries.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'pegasus',
    title: 'Pegasus',
    year: 'Tencent, 2023-Present',
    role: 'Gameplay & Online Systems Programmer',
    duration: 'Multiplayer demo platform',
    technology: 'Unreal Engine 5, C++, Blueprints, Multiplayer Networking, PS5, Online Services SDKs, Voice Chat, UMG, TypeScript, Protobuf',
    summary:
      'Developed Pegasus, an Unreal Engine 5 multiplayer demo and validation testbed for Tencent online-services features, including the first playable multiplayer game mode, gameplay loop, UI flow, and dedicated-server replication checks.',
    responsibilities: [
      'Integrated and validated online-services features across multiple modules, including login, player data, lobbies, matchmaking, microservices, daily challenges, quests, items, and inventory.',
      'Extended the InGameProxy plugin, an Unreal bridge for Tencent online-services features, and reported findings back to the product team.',
      'Implemented the first playable game mode, including character progression, leveling, multiplayer scoring, pickups, audio feedback, and gameplay UI polish.',
      'Built the first end-to-end Pegasus UI flow, including menu screens for Login, Player Info, Lobby, Matchmaking, Chat, Voice Chat, Career, Level Progression, Trophies, Achievements, Settings, and Pause Menu.',
      'Built the multiplayer gameplay loop with playable character controls, Free for All and Teams modes, leaderboards, pickups, level regeneration, team allocation, team-color identity, and replicated dedicated-server gameplay.',
      'Enabled PlayStation 5 support and validated gameplay across console-specific constraints.',
      'Integrated local dedicated server debugging inside the Unreal Editor to improve multiplayer testing workflows.',
      'Supported online-services partner teams by validating customized requirements, debugging integration issues, and feeding product findings back to internal teams.',
    ],
    detail: [
      'Pegasus is an Unreal Engine 5 demo project built to showcase Tencent online-services and voice-chat products in a multiplayer game context.',
      'The project connected gameplay implementation with platform features, SDK validation, partner support, and cross-platform multiplayer testing workflows.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Pegasus was an Unreal Engine 5 multiplayer demo platform created to showcase Tencent online-services and voice-chat products inside a real playable game environment.',
          'InGame is Tencent\'s online-services SDK for features such as login, player profile data, lobbies, matchmaking, achievements, inventory, quests, and backend service integration. GVoice is Tencent\'s real-time voice communication product for multiplayer games.',
          'The goal was not only to build a sample project, but to prove how product integrations behaved when surrounded by actual gameplay systems.',
          'That made Pegasus part game demo, part integration testbed, and part technical reference for partner studios. Over time, it became a practical validation environment for online-services feature implementation across Windows, PlayStation 5, backend services, and local dedicated server workflows.',
        ],
        items: [
          'Demonstrate Tencent online services and voice chat inside a playable multiplayer project.',
          'Validate SDK features in real gameplay flows rather than isolated test screens.',
          'Serve as a testbed for partner-studio online-services implementations.',
          'Provide a reference implementation for partner studios.',
          'Exercise platform-specific workflows such as PS5 support and local dedicated server testing in-editor.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'My role began with the gameplay foundation of Pegasus and expanded into the bridge between moment-to-moment multiplayer gameplay, Tencent online-services and voice-chat integrations, and the workflows needed to validate partner requirements.',
          'My responsibilities included:',
        ],
        items: [
          'Multiplayer gameplay systems.',
          'Playable character, locomotion, stats, scoring, health, stamina, and gameplay feedback.',
          'First playable Pegasus game mode, including Free for All and Teams rules.',
          'Pickups, interactables, exit doors, leaderboards, and level regeneration.',
          'Consistent UI reintegration based on mockups, with room for creative polish.',
          'Career, Level Progression, Trophies, Achievements, Settings, Pause Menu, Friends, Party, Chat, Mail, Lobby, and Character editing flows.',
          'Platform feature integration.',
          'Online-services SDK, InGameProxy bridge plugin, and voice-chat validation.',
          'Backend module integration, including microservices, quests, daily challenges, items, and inventory.',
          'PlayStation 5 support.',
          'Local dedicated server debugging workflows inside the Unreal Editor.',
          'Partner support through customized requirement validation, documentation, debugging, and technical guidance.',
        ],
      },
      {
        title: 'Building a Playable SDK Demo',
        paragraphs: [
          'One of the main challenges was making the project feel like a real multiplayer game rather than a disconnected set of SDK examples.',
          'The gameplay layer needed enough structure to demonstrate product features naturally. Login, matchmaking, lobbies, chat, friends, achievements, progression, and inventory all needed to exist in a context that made sense to players and partner developers.',
          'I built a leveling system that connected gameplay results to player progression, helping product features feel grounded in a playable loop rather than attached to a test menu.',
        ],
        groups: [
          {
            title: 'Gameplay systems',
            items: [
              'Playable character built from Unreal character foundations.',
              'Enhanced Input locomotion.',
              'Character stats such as score, health, and stamina.',
              'Character progression.',
              'Leveling system linked to gameplay results.',
              'Free for All mode.',
          'Teams mode with team allocation, team scores, and team-color identification through character texture changes.',
              'Arena flow with periodic level regeneration.',
              'Power-ups, coins, exit doors, and other interactables.',
              'Match timer, score table, stamina bar, leaderboards, audio, music, and SFX.',
              'Replication validation against InGame dedicated-server flows.',
            ],
          },
          {
            title: 'Menu and UI flow',
            items: [
              'Login.',
              'Player Info and Custom Data.',
              'Career page.',
              'Level Progression page.',
              'Trophies and Achievements page using platform achievements plus a custom Trophy class.',
              'Lobby and Matchmaking.',
              'Pause Menu for leaving a match.',
              'Settings page for audio and voice-chat settings, logout, and shutdown.',
              'Reusable popups for logout, shutdown, and similar flows.',
              'Friends Panel, Party feature, Chat widget, Mail page, and Lobby polish.',
              'Character creation flow adapted into a Hero tab so players could edit saved characters.',
            ],
          },
          {
            title: 'Online-services feature coverage',
            items: [
              'Player Info and Custom Data.',
              'Lobby and Matchmaking connected to gameplay.',
              'Chat and voice-chat settings.',
              'Achievements organized into a custom Trophy presentation layer.',
              'Level progression data.',
              'Inventory and item management.',
              'Quests and Daily Challenges.',
              'Mail page polish.',
            ],
          },
        ],
      },
      {
        title: 'Integrating Online Services and Voice Chat',
        paragraphs: [
          'Pegasus served as a practical environment for validating Tencent online-services and voice-chat features across multiple modules.',
          'My work involved integrating product features end-to-end, extending SDK functionality where needed, and identifying issues that only appeared once the SDKs were exercised in a full multiplayer gameplay context.',
          'I extended the InGameProxy bridge plugin to support newly available features and positioned Pegasus as a practical testbed for validating partner-studio implementations.',
        ],
        groups: [
          {
            title: 'Integration work',
            items: [
              'Connected online-services product features to game flows.',
              'Extended InGameProxy bridge plugin functionality.',
              'Integrated real-time voice chat into multiplayer communication flows.',
              'Validated SDK behaviour across gameplay, platform, and backend modules.',
              'Identified and reported integration issues to product teams.',
              'Turned the demo into a useful reference for partner studios.',
            ],
          },
          {
            title: 'Backend and Service Modules',
            items: [
              'Online-services microservice integration.',
              'Daily Challenges.',
              'Quest system.',
              'Items and inventory management.',
              'TypeScript and protobuf service generation workflows.',
            ],
          },
        ],
      },
      {
        title: 'Cross-Platform Multiplayer Testing',
        paragraphs: [
          'Another important part of the project was supporting cross-platform multiplayer testing.',
          'I independently enabled PlayStation 5 support and validated the project across console-specific constraints.',
          'I integrated the local dedicated server workflow provided by the online-services team so gameplay testing could run directly inside the Unreal Editor.',
          'This made iteration faster and gave the project a more reliable foundation for validating SDK and gameplay interactions.',
        ],
        groups: [
          {
            title: 'Testing foundation',
            items: [
              'PlayStation 5 support.',
              'PS5 build and devkit validation.',
              'Local dedicated server debugging inside Unreal Editor.',
              'Cross-platform multiplayer validation.',
              'Faster debugging loops for gameplay and SDK issues.',
            ],
          },
        ],
      },
      {
        title: 'Supporting Partner Studios',
        paragraphs: [
          'Because Pegasus existed partly as a reference project, the work extended beyond implementation.',
          'I supported partner studios through technical guidance, implementation documentation, and debugging assistance, helping them understand how the SDK features could be integrated into their own projects.',
          'I used Pegasus to validate customized partner requirements and identify issues early before they reached partner production flows.',
        ],
        items: [
          'Explained integration flows and implementation expectations.',
          'Validated customized requirements for online-services partner teams.',
          'Wrote implementation guides and debugging workflow notes.',
          'Documented how gameplay systems connected to Tencent product features.',
          'Helped debug SDK, multiplayer, and platform integration issues.',
          'Fed product issues and integration findings back to internal teams.',
          'Improved team coordination through scoped task tracking for Pegasus feature work.',
        ],
      },
      {
        title: 'Technical Takeaways',
        paragraphs: [
          'Pegasus strengthened my understanding of how gameplay systems and platform integrations depend on each other in multiplayer projects.',
          'A feature can work in isolation and still fail to feel useful unless it is embedded into a coherent game flow.',
          'The project also gave me practical experience with SDK validation, PS5 development, local dedicated server debugging, backend service integration, partner-facing documentation, and the kind of debugging needed when gameplay, networking, platform services, and UI all meet in one project.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Engine', items: ['Unreal Engine 5.'] },
          { title: 'Languages', items: ['C++.', 'Blueprints.', 'TypeScript.', 'Protobuf.'] },
          {
            title: 'Multiplayer',
            items: [
              'Multiplayer Networking.',
              'Dedicated Servers.',
              'Local DS debugging.',
              'Unreal Editor testing workflows.',
            ],
          },
          {
            title: 'Platform and Services',
            items: [
              'PlayStation 5.',
              'Online Services SDK.',
              'InGameProxy bridge plugin.',
              'Real-time voice chat.',
              'Microservice integration.',
              'Daily Challenges.',
              'Quests.',
              'Items and Inventory.',
            ],
          },
          {
            title: 'UI',
            items: ['UMG.', 'Gameplay UI.', 'Platform UI flows.'],
          },
        ],
      },
    ],
  },
  {
    slug: 'glaux',
    title: 'Glaux',
    year: 'Tencent, 2023-Present',
    role: 'Client-Side Lead / Desktop Application Developer',
    duration: 'Cross-platform companion app',
    technology: 'Rust, Tauri v2, React, TypeScript, Three.js, PixiJS, gRPC, Steam SDK, CPAL',
    summary:
      'Led client-side development of a cross-platform AI gaming companion application, building the Tauri desktop architecture, dual-mode UX, multi-window system, overlays, avatar integration, and release tooling.',
    responsibilities: [
      'Took primary ownership of client-side development for the AI Assistant project.',
      'Evaluated Electron versus Tauri through proof-of-concept implementations and recommended Tauri v2 adoption, achieving an approximately 90% smaller footprint for a lightweight companion app.',
      'Redesigned the experience from a traditional chat app into Chatbox Mode and Companion Mode with glassmorphism UI, transparency, theme settings, and PixiJS animation.',
      'Built a multi-window architecture with main, companion, avatar, and settings windows, including borderless windows and custom drag regions.',
      'Integrated external 3D avatar communication through gRPC, Three.js rendering, and transparent desktop pet overlay workflows.',
      'Delivered Windows and macOS builds with automated setup scripts, installer packaging, feature-flagged Steam SDK integration, and Steam DLL management.',
      'Implemented desktop and multimodal features including system-wide hotkeys, system tray, clipboard image paste with visual preview, and screen-capture integration points.',
      'Built debug panels, logging systems, modular components, and reusable patterns to support cross-module troubleshooting.',
    ],
    detail: [
      'Glaux is a cross-platform desktop companion application designed to explore how AI can support players during gameplay without becoming heavy, intrusive, or locked to a single interaction style.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Glaux was a cross-platform desktop application exploring how an AI companion could support players through conversation, lightweight contextual interactions, and avatar-driven presentation.',
          'The central product challenge was not simply building a chat app. The goal was to create an assistant that could live alongside games, switch between interaction modes, and feel responsive enough to be useful during play.',
          'This meant the client needed to balance a full application experience with desktop-native companion behaviours such as overlays, global hotkeys, tray access, screen capture, and separate avatar communication.',
          'Over the last development cycle, I took primary responsibility for the client-side architecture and turned the product from a conventional chat surface into a lightweight AI gaming companion.',
        ],
        items: [
          'Cross-platform desktop client built with Tauri v2, Rust, React, and TypeScript.',
          'Dual-mode experience with Chatbox Mode and Companion Mode.',
          'Multi-window app architecture for main, companion, avatar, and settings contexts.',
          'Desktop-native integrations for hotkeys, tray, clipboard image paste, overlays, and release packaging.',
          'External avatar, Steam, and debugging integrations to support a broader AI companion platform.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'I led client-side development, focusing on the technical foundation of the desktop application and the user experience patterns that made the assistant feel practical during gameplay.',
          'My responsibilities included:',
        ],
        items: [
          'Primary ownership of client-side application architecture.',
          'Electron versus Tauri technical evaluation.',
          'Full migration of core features into Tauri v2.',
          'Dual-mode UX redesign for Chatbox Mode and Companion Mode.',
          'Glassmorphism UI, backdrop blur, transparency, and theme settings.',
          'Multi-window desktop app architecture with borderless windows and custom drag regions.',
          'System tray, system-wide hotkey, clipboard image paste, and visual preview workflows.',
          'Transparent overlay and desktop pet implementation.',
          'External avatar communication through gRPC and Three.js.',
          'Optional Steam SDK integration with feature flags and automated DLL management.',
          'Windows and macOS setup, build, installer, and packaging pipelines.',
          'Debug panels, logging systems, and modular reusable component patterns.',
        ],
      },
      {
        title: 'Choosing the Desktop Foundation',
        paragraphs: [
          'One of the first important decisions was choosing the desktop runtime. I evaluated Electron and Tauri through proof-of-concept implementations rather than treating the framework choice as a preference call.',
          'The assistant needed to feel lightweight enough to run alongside games, while still supporting multiple windows, native desktop integrations, and modern frontend development.',
          'Based on performance, bundle size, and ecosystem fit, I recommended Tauri v2 as the foundation for the client and migrated the core feature set into that architecture.',
          'The decision validated the product direction: Tauri gave the assistant an approximately 90% smaller footprint than the Electron prototype, which mattered for a non-intrusive companion that should run alongside games.',
        ],
        groups: [
          {
            title: 'Evaluation focus',
            items: [
              'Runtime footprint.',
              'Bundle size.',
              'Desktop integration support.',
              'Multi-window behaviour.',
              'Frontend development workflow.',
              'Release packaging complexity.',
              'Suitability for a game-adjacent companion app.',
              'Migration cost from existing feature prototypes.',
            ],
          },
        ],
      },
      {
        title: 'Designing a Dual-Mode Experience',
        paragraphs: [
          'A major UX challenge was that players do not always want the same level of assistant presence.',
          'Sometimes they need a full conversational interface where they can ask questions, inspect responses, or configure behaviour. At other times, they need something lighter that stays out of the way while still being quickly accessible.',
          'To support this, I redesigned the product from a traditional chat app into a dual-mode experience: a full Chatbox Mode for deeper interaction and a minimal Companion Mode for lower-friction use during play.',
          'I implemented a modern glassmorphism visual direction with backdrop blur, transparency, and theme settings so the assistant could feel lightweight without disappearing into the desktop.',
        ],
        groups: [
          {
            title: 'Experience modes',
            items: [
              'Chatbox Mode with full conversational interface and message history.',
              'Companion Mode with a minimal floating assistant.',
              'PixiJS-powered animated companion.',
              'Settings context for configuration.',
              'Avatar context for presentation and feedback.',
              'Theme settings, transparency, and backdrop blur.',
            ],
          },
        ],
      },
      {
        title: 'Building the Multi-Window Architecture',
        paragraphs: [
          'The assistant required more than a single application window. I built a multi-window architecture that separated the main app, companion surface, settings, and avatar contexts.',
          'This separation made the product easier to reason about: each window had a specific purpose, while shared state and communication patterns kept the experience coherent.',
        ],
        groups: [
          {
            title: 'Window contexts',
            items: [
              'Main application window.',
              'Companion window.',
              'Avatar window.',
              'Settings window.',
              'Borderless window presentation.',
              'Custom drag regions.',
            ],
          },
          {
            title: 'Desktop features',
            items: [
              'System tray support.',
              'System-wide global hotkeys.',
              'Clipboard image paste workflows with visual preview.',
              'Transparent desktop overlays.',
              'Screen-capture integration points.',
            ],
          },
        ],
      },
      {
        title: 'Avatar and Overlay Integration',
        paragraphs: [
          'Part of the assistant experience involved an external avatar and overlay-style presentation. I implemented transparent desktop overlays and communication with an external avatar system using gRPC and Three.js.',
          'This work sat at the boundary between frontend UI, desktop application behaviour, and real-time visual presentation.',
        ],
        groups: [
          {
            title: 'Integration work',
            items: [
              'Transparent overlay surfaces.',
              'Desktop pet overlay behaviour.',
              'External avatar communication through gRPC.',
              'Three.js-based avatar presentation workflows.',
              'PixiJS usage for interactive visual layers.',
            ],
          },
        ],
      },
      {
        title: 'Cross-Platform Release and Platform Tooling',
        paragraphs: [
          'I added optional Steam SDK integration behind feature flags so the application could support Steam-related workflows without forcing that dependency into every build.',
          'I built automated setup, build, installer, and packaging tooling to deliver Windows and macOS releases reliably.',
          'Part of this work involved taking ownership of platform-specific compatibility problems, including macOS audio stream threading issues that required researching and integrating a custom CPAL fork.',
        ],
        groups: [
          {
            title: 'Release support',
            items: [
              'Feature-flagged Steam SDK integration.',
              'Automated Steam DLL management.',
              'Steam status debug tools.',
              'Automated setup scripts.',
              'Automated build tooling.',
              'Installer packaging system.',
              'Windows release packaging.',
              'macOS release packaging.',
              'Cross-platform UI consistency checks.',
              'Custom CPAL fork for macOS audio stream threading issues.',
            ],
          },
        ],
      },
      {
        title: 'Developer Experience and Team Support',
        paragraphs: [
          'Because Glaux touched UI, native desktop APIs, avatar communication, Steam integration, and audio/screen systems, debugging visibility became critical.',
          'I built developer-facing tools and reusable architecture patterns that improved cross-module troubleshooting across the team.',
        ],
        groups: [
          {
            title: 'Debugging and Architecture Support',
            items: [
              'Comprehensive debug panel for system monitoring.',
              'Logging system for cross-module troubleshooting.',
              'Modular component architecture.',
              'Reusable UI and desktop integration patterns.',
              'Debug tools for Steam status monitoring.',
              'Support for troubleshooting Windows/macOS compatibility issues.',
            ],
          },
        ],
      },
      {
        title: 'Technical Takeaways',
        paragraphs: [
          'This project changed how I think about AI companion products. The hard part is not only connecting to an AI model, but designing the client architecture that lets the assistant be available, lightweight, and contextually useful.',
          'It strengthened my experience in desktop application architecture, cross-platform release workflows, native integrations, UI/UX design for game-adjacent tools, and debugging systems that support multi-module teams.',
          'It also reinforced the importance of making technical choices through prototypes: the Electron versus Tauri decision was much stronger because it was based on practical implementation evidence.',
          'The project also pushed me to think beyond feature delivery: the most interesting AI companion work happens when product design, desktop architecture, and player context come together into something useful during play.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Desktop Runtime', items: ['Tauri v2.', 'Rust.'] },
          { title: 'Frontend', items: ['React.', 'TypeScript.'] },
          { title: 'Rendering', items: ['Three.js.', 'PixiJS.'] },
          { title: 'Communication', items: ['gRPC.', 'Screen capture integration points.'] },
          { title: 'Platform', items: ['Windows.', 'macOS.', 'Steam SDK feature flags.', 'CPAL.'] },
          { title: 'Tooling', items: ['Automated build scripts.', 'Installer packaging.', 'Debug panels.'] },
        ],
      },
    ],
  },
]

export const olderProjects: Project[] = [
  {
    slug: 'hustler',
    title: 'Hustler',
    year: '2022',
    role: 'Solo Developer',
    duration: 'Published',
    technology: 'Unity, PlayFab, Unity Ads, GitHub, Trello',
    summary:
      'Built and shipped a hyper-casual Unity runner with PlayFab-backed leaderboard cycles, external reward handling, monetization, and a separate competition-control tool.',
    responsibilities: [
      'Integrated PlayFab into game architecture for managing the backend database of players and game entities.',
      'Developed all gameplay mechanics and systems.',
      'Created a difficulty manager for easy calibration.',
      'Implemented animations and audio.',
      'Integrated Unity Ads and monetization.',
    ],
    detail: [
      'Published | Unity (Solo Development). Tools: GitHub, Trello.',
      'Hustler is a hyper-casual runner game built around recurring leaderboard competitions and external reward handling.',
      'I developed the project as the solo programmer for a client over roughly six months, covering gameplay, backend integration, monetization, release support, and a separate app for controlling competition cycles.',
      'Player, leaderboard, and game-entity data were managed through scripts connected to the PlayFab API.',
      'The project gave me practical experience shipping a simple mobile game with live-data workflows rather than treating it as an isolated offline prototype.',
    ],
    media: createMedia('Hustler', hustlerImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Hustler is a published hyper-casual runner game developed for players who wanted a simple mobile game tied to crypto reward cycles.',
          'I developed the project as a solo developer for a client over roughly six months, taking ownership of gameplay, backend integration, monetization, and release support.',
          'The core idea was a recurring competition loop: players chase high scores during an active cycle, winners are identified at the end of the cycle, and rewards are handled separately through Binance.',
        ],
        items: [
          'Published mobile runner game.',
          'Solo development over roughly six months.',
          'Client project with gameplay, backend, monetization, and release responsibilities.',
          'Competition loop built around recurring leaderboard cycles and external reward handling.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'As the only developer on the project, I owned the complete game implementation from core runner mechanics to backend data workflows.',
          'My responsibilities included:',
        ],
        items: [
          'Developing all gameplay mechanics and systems.',
          'Integrating PlayFab into the game architecture.',
          'Managing player and game data through PlayFab API scripts.',
          'Creating a difficulty manager for tuning and calibration.',
          'Implementing animation and audio support.',
          'Integrating Unity Ads and monetization.',
          'Building a separate cycle-control app for competition timing and closure.',
        ],
      },
      {
        title: 'Building the Competition Loop',
        paragraphs: [
          'The most distinctive part of Hustler was the high-score competition cycle around the runner gameplay.',
          'Players competed for the highest scores while a cycle was active. Once the cycle closed, the winning leaderboard data could be retrieved and used for reward handling outside the game.',
        ],
        groups: [
          {
            title: 'Cycle Flow',
            items: [
              'Players compete during an active leaderboard cycle.',
              'The cycle duration and closure are controlled through a separate app.',
              'Winner data is retrieved from the backend after the cycle closes.',
              'Reward distribution is handled separately through Binance.',
            ],
          },
          {
            title: 'Backend Integration',
            items: [
              'PlayFab player data.',
              'Leaderboard data.',
              'Game entity data.',
              'API scripts connecting the game to backend services.',
            ],
          },
        ],
      },
      {
        title: 'Creating the Runner Experience',
        paragraphs: [
          'Because Hustler was a hyper-casual game, the moment-to-moment experience needed to be easy to understand, fast to replay, and simple to tune.',
          'I built the gameplay systems, difficulty management, animation, audio, and monetization layers needed to make the game feel complete as a published mobile release.',
        ],
        groups: [
          {
            title: 'Gameplay Systems',
            items: [
              'Runner mechanics.',
              'Score-driven progression.',
              'Difficulty calibration tools.',
              'Animation and audio feedback.',
            ],
          },
          {
            title: 'Product Systems',
            items: [
              'Unity Ads integration.',
              'Monetization flow support.',
              'PlayFab-backed player state.',
              'Release-oriented mobile implementation.',
            ],
          },
        ],
      },
      {
        title: 'Technical Takeaways',
        paragraphs: [
          'Hustler gave me a deep practical introduction to PlayFab and backend-connected mobile game loops.',
          'It also taught me how much craft can go into a simple game: tuning difficulty, feedback, retention loops, data flow, and release constraints all matter even when the core mechanic is intentionally lightweight.',
        ],
        items: [
          'Deepened my experience with PlayFab-backed game data.',
          'Learned how backend systems can support live competition loops.',
          'Improved my sense for tuning simple mechanics into repeatable mobile gameplay.',
          'Gained more ownership experience across implementation, monetization, and release work.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Engine', items: ['Unity.'] },
          { title: 'Backend', items: ['PlayFab.', 'PlayFab API scripts.'] },
          { title: 'Monetization', items: ['Unity Ads.'] },
          { title: 'Workflow', items: ['GitHub.', 'Trello.'] },
        ],
      },
    ],
    links: [
      {
        label: 'Google Play Store',
        href: 'https://play.google.com/store/apps/details?id=com.ineedmoney.Hustler&hl=en&gl=US&pli=1',
      },
    ],
  },
  {
    slug: 'kutla',
    title: 'Kutla',
    year: '2021',
    role: 'Game Programmer',
    duration: 'Published',
    technology: 'Unity, Plastic SCM, Jira',
    summary:
      'Programmed a published Unity puzzle game with Adventure and Drawing modes, save systems, level progression, scriptable-object shop data, and monetization.',
    responsibilities: [
      'Implemented Save System for saving pixel art drawn and levels completed.',
      'Developed Adventure Mode System and all gameplay mechanics.',
      'Developed Drawing Mode System and all gameplay mechanics.',
      'Integrated a Levels system with difficulty management.',
      'Created a Shop system through scriptable objects.',
      'Integrated Unity Ads and monetization.',
    ],
    detail: [
      'Published | Unity. Tools: Plastic SCM, Jira.',
      'Kutla is a published puzzle game developed under The Video Games Studio (VGS).',
      'While my manager focused on the art and shaders of the game, I was responsible for managing the code architecture and creating all gameplay mechanics and features.',
      'I contributed to design decisions while owning the gameplay implementation.',
      '2 modes were created: Adventure mode, where players pop similar color pixels under a number of moves, and Drawing Mode, where players color in pixels on a white pixelated canvas and can save it locally in their gallery. In addition, players are able to play their own created level or drawing.',
    ],
    media: createMedia('Kutla', kutlaImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Kutla is a published Unity puzzle game developed under The Video Games Studio.',
          'The project combined color-matching puzzle mechanics with a drawing mode where players could create, save, and replay their own pixel-art levels.',
          'While another team member focused on art and shaders, I was responsible for the code architecture, gameplay systems, and most of the interactive feature implementation.',
        ],
        items: [
          'Published Unity puzzle game.',
          'Built around color-matching puzzle play and pixel-art creation.',
          'Included both authored levels and player-created playable drawings.',
          'My ownership focused on architecture, gameplay systems, and feature implementation.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'As the game programmer on Kutla, I owned the gameplay architecture and collaborated on design decisions throughout production.',
          'My responsibilities included:',
        ],
        items: [
          'Implementing the save system for completed levels and player-created pixel art.',
          'Developing Adventure Mode systems and gameplay mechanics.',
          'Developing Drawing Mode systems and gameplay mechanics.',
          'Building a level system with difficulty management.',
          'Creating a shop system using scriptable objects.',
          'Integrating Unity Ads and monetization.',
          'Contributing to game design decisions during development.',
        ],
      },
      {
        title: 'Designing Two Play Modes',
        paragraphs: [
          'Kutla was built around two complementary modes that shared a pixel-based visual language but served different player motivations.',
          'Adventure Mode focused on puzzle-solving under move constraints, while Drawing Mode let players create and save pixel-art canvases.',
        ],
        groups: [
          {
            title: 'Adventure Mode',
            items: [
              'Players pop similar colored pixels.',
              'Levels are constrained by a limited number of moves.',
              'Difficulty is managed through the level system.',
              'The mode provides the primary structured puzzle progression.',
            ],
          },
          {
            title: 'Drawing Mode',
            items: [
              'Players color pixels on a white pixelated canvas.',
              'Created drawings can be saved locally to the gallery.',
              'Player-created drawings can also become playable levels.',
              'The mode adds a creative layer alongside the authored puzzle content.',
            ],
          },
        ],
      },
      {
        title: 'Systems and Progression',
        paragraphs: [
          'A major part of my work was making the game systems connect cleanly: completed levels, saved drawings, difficulty progression, shop data, and monetization all needed to support the two-mode structure.',
        ],
        groups: [
          {
            title: 'Persistence',
            items: [
              'Saved pixel art.',
              'Completed level tracking.',
              'Local gallery support.',
            ],
          },
          {
            title: 'Progression and Economy',
            items: [
              'Difficulty-managed level flow.',
              'Shop system built with scriptable objects.',
              'Unity Ads and monetization support.',
            ],
          },
        ],
      },
      {
        title: 'Technical Takeaways',
        paragraphs: [
          'Kutla strengthened my ability to design gameplay systems around multiple modes without letting the codebase split into disconnected implementations.',
          'It also gave me more experience balancing engineering ownership with collaborative design input, especially in a small production environment where technical and design decisions were closely linked.',
        ],
        items: [
          'Improved my ability to share systems across multiple game modes.',
          'Practiced keeping creative tools and authored content connected.',
          'Built more confidence using scriptable objects for configurable game systems.',
          'Gained experience contributing to design decisions while owning implementation.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Engine', items: ['Unity.'] },
          { title: 'Data and Systems', items: ['Scriptable Objects.', 'Local save systems.'] },
          { title: 'Monetization', items: ['Unity Ads.'] },
          { title: 'Workflow', items: ['Plastic SCM.', 'Jira.'] },
        ],
      },
    ],
  },
  {
    slug: 'island-keeper',
    title: 'Island Keeper',
    year: '2021',
    role: 'Lead Game Programmer',
    duration: 'Archived Project',
    technology: 'Unity, Unity Collab, Jira',
    summary:
      'Led programming for a Unity adventure prototype inspired by Mesopotamian mythology, covering GDD planning, player systems, touch input, level support, and production workflow.',
    responsibilities: [
      'Designed GDD covering storytelling and cutscenes, gameplay mechanics, level design, enemies, weapons and equipment, and the ability system.',
      'Programmed most gameplay mechanics and assisted in level design.',
      'Programmed all classes relevant to main character.',
      'Developed a touch-mapping scheme with the new input system of Unity.',
      'Integrated team into Agile Development in Jira.',
      'Managed all stages of prototype and its bug fixes.',
    ],
    detail: [
      'Archived Project | Unity. Tools: Unity Collab, Jira.',
      'Set in a Mesopotamian legend, Island Keeper is an adventure game following the story of Tammuz, a Mesopotamian God of fertility, and his lover Ishtar, the Goddess of love and war, on the island of Failaka where the player discovers the island has been corrupted and takes control of Tammuz and his abilities to save the island.',
      'This prototype project was managed by VGS (The Video Games Studio), and I was the lead game programmer in it.',
    ],
    media: createMedia('Island Keeper', islandKeeperImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Island Keeper was an archived Unity adventure prototype developed under The Video Games Studio.',
          'The game was set in a Mesopotamian legend, following Tammuz and Ishtar on the island of Failaka after the island becomes corrupted.',
          'Players would take control of Tammuz and use his abilities to save the island.',
        ],
        items: [
          'Archived Unity adventure prototype.',
          'Story inspired by Mesopotamian mythology.',
          'Set on a corrupted version of Failaka island.',
          'Focused on Tammuz, player abilities, exploration, and prototype combat/adventure systems.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'As lead game programmer, I owned both technical implementation and a significant part of the prototype planning.',
          'My responsibilities included:',
        ],
        items: [
          'Designing the GDD for storytelling, cutscenes, mechanics, levels, enemies, weapons, equipment, and abilities.',
          'Programming most gameplay mechanics.',
          'Programming the main character classes.',
          'Assisting with level design.',
          "Developing a touch-mapping scheme using Unity's new input system.",
          'Introducing the team to Agile development workflows in Jira.',
          'Managing prototype stages and bug fixing.',
        ],
      },
      {
        title: 'Shaping the Prototype Foundation',
        paragraphs: [
          'Because Island Keeper was a prototype, early structure mattered. I defined the game through a GDD that connected narrative goals with the systems needed to support them.',
          'That meant treating story, level design, enemies, weapons, equipment, and abilities as connected parts of the same playable foundation.',
        ],
        groups: [
          {
            title: 'Design Areas',
            items: [
              'Storytelling and cutscenes.',
              'Core gameplay mechanics.',
              'Level design.',
              'Enemy design.',
              'Weapons and equipment.',
              'Ability system.',
            ],
          },
        ],
      },
      {
        title: 'Gameplay and Character Systems',
        paragraphs: [
          'My implementation work focused heavily on the player character and the core gameplay systems that made the prototype playable.',
          'I supported level design so the mechanics stayed grounded in the needs of the actual spaces players would move through.',
        ],
        groups: [
          {
            title: 'Gameplay Ownership',
            items: [
              'Main character classes.',
              'Player abilities.',
              'Prototype gameplay mechanics.',
              'Level design support.',
              'Bug fixing across prototype stages.',
            ],
          },
        ],
      },
      {
        title: 'Input and Production Workflow',
        paragraphs: [
          "The prototype targeted mobile-style interaction, so I developed a touch-mapping scheme using Unity's newer input system.",
          'I structured the team around Jira and Agile workflows so the prototype could move through tasks, bugs, and iteration more clearly.',
        ],
        groups: [
          {
            title: 'Production Support',
            items: [
              'Touch input mapping.',
              'Unity input system exploration.',
              'Jira workflow setup.',
              'Prototype stage management.',
            ],
          },
        ],
      },
      {
        title: 'Technical Takeaways',
        paragraphs: [
          'Island Keeper gave me early experience leading a prototype from both a technical and production perspective.',
          'It clarified how much a prototype depends on clear ownership: the code, GDD, input design, level support, and task management all need to point toward the same playable target.',
        ],
        items: [
          'Learned how to connect GDD planning with playable implementation.',
          'Built experience leading prototype stages and bug fixing.',
          'Practiced coordinating gameplay, input, and level design needs.',
          'Gained early production experience introducing Jira and Agile workflows to a team.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Engine', items: ['Unity.'] },
          { title: 'Input', items: ['Unity input system.', 'Touch controls.'] },
          { title: 'Production', items: ['Jira.', 'Agile workflows.'] },
          { title: 'Source Control', items: ['Unity Collab.'] },
        ],
      },
    ],
  },
  {
    slug: 'sudoku-mobile',
    title: 'Sudoku Mobile',
    year: '2020',
    role: 'Game Programmer',
    duration: 'Archived Project',
    technology: 'Unity, Unity Collab, Jira',
    summary:
      'Built a Unity mobile Sudoku prototype with Classic, Time Trial, and Adventure modes, player stats, profile progression, and a solver-based validation system.',
    responsibilities: [
      'Classic mode: players play random levels based on difficulty and earn stats and points after win.',
      'Time Trial mode: same mode as classic mode but with a time constraint.',
      'Adventure mode: levels created with different difficulties and designed to teach different strategies of Sudoku solving.',
      'Profile player stats: records data of player from each game, intended to connect to a server where players can check leaderboards and other player profiles.',
    ],
    detail: [
      'Archived Project | Unity. Tools: Unity Collab, Jira.',
      'Sudoku Mobile was developed under The Video Games Studio (VGS) as a cleaner, more mode-driven mobile take on classic Sudoku.',
      'My goal was to modernize the UI, add progression-oriented gameplay modes, and build a solver-based validation system for checking player solutions.',
      'The solver reached a working state and highlighted the difference between a functional algorithm and one optimized enough for a polished production release.',
    ],
    media: createMedia('Sudoku Mobile', sudokuMobileImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Sudoku Mobile was an archived Unity project developed under The Video Games Studio.',
          'I started the project from my love of pen-and-paper Sudoku and from noticing that many mobile Sudoku games did not feel smooth or satisfying to use.',
          'The goal was to modernize the Sudoku experience with a cleaner mobile UI, multiple modes, player statistics, and a solution-checking system.',
        ],
        items: [
          'Archived Unity mobile puzzle project.',
          'Designed around improving the feel of mobile Sudoku play.',
          'Included Classic, Time Trial, and Adventure modes.',
          'Explored player stats, profile data, leaderboards, and solution validation.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'As the game programmer, I focused on gameplay modes, player progression, profile data, and the Sudoku-solving logic needed to validate player answers.',
          'My responsibilities included:',
        ],
        items: [
          'Implementing Classic Mode with random levels based on difficulty.',
          'Implementing Time Trial Mode with time constraints.',
          'Designing Adventure Mode levels with different difficulties and solving strategies.',
          'Recording player stats after each game.',
          'Planning profile and leaderboard data for future server connection.',
          'Developing a Sudoku solver algorithm to check player solutions.',
        ],
      },
      {
        title: 'Building Multiple Game Modes',
        paragraphs: [
          'I structured the mobile version around several modes with different player motivations rather than a single endless Sudoku board.',
        ],
        groups: [
          {
            title: 'Classic Mode',
            items: [
              'Random levels based on selected difficulty.',
              'Stats and points awarded after wins.',
              'Core mode for traditional Sudoku play.',
            ],
          },
          {
            title: 'Time Trial Mode',
            items: [
              'Classic Sudoku rules with a time constraint.',
              'Designed for players who wanted pressure and replayability.',
            ],
          },
          {
            title: 'Adventure Mode',
            items: [
              'Authored levels with different difficulties.',
              'Level design focused on teaching Sudoku-solving strategies.',
              'Progression structure beyond single-board play.',
            ],
          },
        ],
      },
      {
        title: 'Player Profile and Progression',
        paragraphs: [
          'The project tracked player data from each game so results could feed into a profile system.',
          'The intended direction was to connect this data to a server later, allowing leaderboards and player profile lookup.',
        ],
        groups: [
          {
            title: 'Tracked Data',
            items: [
              'Game results.',
              'Player stats.',
              'Points earned.',
              'Mode-specific progress.',
            ],
          },
          {
            title: 'Planned Online Features',
            items: [
              'Leaderboards.',
              'Player profile checks.',
              'Server-connected progression data.',
            ],
          },
        ],
      },
      {
        title: 'Sudoku Solver',
        paragraphs: [
          'The most interesting technical challenge was developing a Sudoku solver algorithm to check player solutions.',
          'I reached a working solution and identified optimization as the next step toward production polish.',
          'That experience made the project especially valuable as an algorithmic learning exercise, not only a mobile UI project.',
        ],
        items: [
          'Built a solver to validate completed Sudoku boards.',
          'Used the solver as part of the player solution-checking flow.',
          'Reached a working implementation.',
          'Identified optimization as the next major improvement area.',
        ],
      },
      {
        title: 'Technical Takeaways',
        paragraphs: [
          'Sudoku Mobile clarified how classic games can be modernized through usability, mode structure, and progression.',
          'It also gave me early experience with algorithmic validation inside a gameplay context, especially the difference between getting a solver to work and making it efficient enough for a polished product.',
        ],
        items: [
          'Learned how UX can refresh a familiar puzzle format.',
          'Explored progression design for a traditionally single-board game.',
          'Gained practical experience with gameplay-facing algorithms.',
          'Better understood the gap between a working algorithm and a production-ready one.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Engine', items: ['Unity.'] },
          { title: 'Systems', items: ['Sudoku solver.', 'Player stats.', 'Mode progression.'] },
          { title: 'Production', items: ['Jira.'] },
          { title: 'Source Control', items: ['Unity Collab.'] },
        ],
      },
    ],
  },
]

export const allProjects = [...recentProjects, ...olderProjects]
