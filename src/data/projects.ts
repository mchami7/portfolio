import type { Project } from '../types/portfolio'

export const recentProjects: Project[] = [
  {
    slug: 'ascension',
    title: 'Ascension',
    year: 'Tencent, 2023-Present',
    role: 'Game Programmer',
    duration: 'AI-driven roguelike',
    technology: 'Godot 4, Multiplayer, AI-Driven Roguelike',
    summary:
      'A cooperative roguelike exploring how AI can become a gameplay system rather than simply a tool for generating content.',
    responsibilities: [
      'Multiplayer architecture and networking.',
      'Core gameplay loop implementation.',
      'Meta-progression systems.',
      'Entity tagging and event infrastructure for future AI Director systems.',
      'Gameplay architecture and refactoring.',
      'Cross-disciplinary collaboration with gameplay engineers and AI researchers.',
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
          'Multiplayer architecture and networking.',
          'Core gameplay loop implementation.',
          'Meta-progression systems.',
          'Entity tagging and event infrastructure for future AI Director systems.',
          'Gameplay architecture and refactoring.',
          'Cross-disciplinary collaboration with gameplay engineers and AI researchers.',
        ],
      },
      {
        title: 'Building the Multiplayer Foundation',
        paragraphs: [
          'One of my primary areas of ownership was the multiplayer infrastructure.',
          "I built and maintained server-authoritative networking systems using Godot's built-in multiplayer framework, supporting both dedicated server and listen-server architectures.",
          "During development, we investigated third-party networking solutions but ultimately chose Godot's native framework due to compatibility concerns and the level of control it offered.",
          'Choosing the right technical foundation early allowed the team to focus on experimentation rather than fighting infrastructure.',
        ],
        groups: [
          {
            title: 'Features included',
            items: [
              'Dedicated server support.',
              'Listen server support.',
              'Multiple clients on the same machine.',
              'Cross-network multiplayer through GodotSteam lobbies.',
              'Session synchronization.',
              'Replicated gameplay systems.',
            ],
          },
        ],
      },
      {
        title: 'Creating a Complete Gameplay Loop',
        paragraphs: [
          'As the prototype evolved into a playable experience, I helped implement the systems required to support an entire cooperative run.',
          'Rather than existing as isolated mechanics, these systems worked together to create a complete gameplay loop that could support repeated playtesting and iteration.',
        ],
        groups: [
          {
            title: 'Combat and Objectives',
            items: [
              'Enemy spawning systems.',
              'Enemy health and kill tracking.',
              'Shared objectives.',
              'Difficulty progression.',
              'Keystone interactions.',
            ],
          },
          {
            title: 'Player Progression',
            items: [
              'Health and respawn systems.',
              'Failure states.',
              'Voting mechanics.',
              'Session progression.',
            ],
          },
          {
            title: 'Economy and Meta Systems',
            items: [
              'Favour economy.',
              'Shops and purchasing.',
              'Item persistence.',
              'Meta-progression infrastructure.',
            ],
          },
        ],
      },
      {
        title: 'Laying the Foundation for the AI Director',
        paragraphs: [
          'One of the most interesting challenges was preparing gameplay systems so a future AI Director could understand and act on the game world.',
          'I did not build the AI telemetry layer itself. My contribution was the gameplay-side infrastructure that could feed it: entity tagging, a general event trigger system, and an event-driven spawning foundation.',
          'Traditional gameplay events often answer questions like: Did an enemy die?',
          "For Ascension's future Director systems, that would not be enough.",
          'The Director needs context before it can choose meaningful actions:',
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
            title: 'General Event Trigger System',
            paragraphs: [
              'I helped establish a flexible event trigger foundation where gameplay events can be announced and later connected to reactions without hardwiring every event source to every outcome.',
            ],
            items: [
              'Keystone collected.',
              'Enemy killed.',
              'Chest opened.',
              'Future gameplay events that can be routed into director logic.',
            ],
          },
          {
            title: 'Event-Driven Spawn Foundation',
            paragraphs: [
              'I also worked on the spawn execution foundation that allows spawning decisions to be separated from the enemy spawner itself.',
            ],
            items: [
              'Preserved legacy spawning behaviour while creating a replacement point for future Director-controlled spawns.',
              'Introduced a stable spawn request path for systems that need to materialise enemies.',
              'Prepared the foundation for a gameplay-side Action Library that the AI Director can request from safely later.',
            ],
          },
        ],
      },
      {
        title: 'Evolving the Architecture',
        paragraphs: [
          'As the project grew, maintaining flexibility became increasingly important.',
          'I contributed to several architectural improvements designed to support rapid iteration.',
        ],
        groups: [
          {
            title: 'Session-Based State',
            paragraphs: [
              'I introduced systems that separated run-level data from player entities, allowing information to persist independently of character lifecycles.',
              'This made it easier to support:',
            ],
            items: [
              'Respawns.',
              'Meta systems.',
              'Future expansions.',
              'Cleaner ownership boundaries.',
            ],
          },
          {
            title: 'Event-Driven Systems',
            paragraphs: [
              'Gameplay interactions increasingly relied on signals and shared events rather than hardcoded dependencies.',
              'This approach enabled designers and engineers to experiment more freely with new mechanics, and it created a path for future AI Director actions to plug into authored gameplay systems safely.',
            ],
          },
        ],
      },
      {
        title: 'What I Learned',
        paragraphs: [
          'Ascension changed how I think about AI in games.',
          'I entered the project viewing AI primarily as a content generation tool. Working on Ascension shifted that perspective.',
          'I became increasingly interested in how AI can function as a gameplay system, but only when supported by clear symbolic infrastructure, safe action boundaries, and reliable gameplay context.',
          'At the same time, the project strengthened my experience in multiplayer engineering, gameplay architecture, and cross-disciplinary collaboration.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Engine', items: ['Godot 4.'] },
          { title: 'Languages', items: ['GDScript.'] },
          {
            title: 'Networking',
            items: ['Dedicated Servers.', 'Listen Servers.', 'Godot Multiplayer.', 'GodotSteam.'],
          },
          {
            title: 'Systems',
            items: [
              'Gameplay Architecture.',
              'Event-Driven Systems.',
              'Session Management.',
              'Meta Progression.',
            ],
          },
          {
            title: 'AI',
            items: [
              'Entity Tagging.',
              'Event Trigger Infrastructure.',
              'Event-Driven Spawn Foundation.',
              'Gameplay-side Action Library foundation for AI Director requests.',
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
    technology: 'Unreal Engine 5, C++, Blueprints, Multiplayer Networking, PS5, InGame SDK, GVoice, UMG',
    summary:
      'Developed Pegasus, an Unreal Engine 5 multiplayer demo project built to showcase Tencent InGame and GVoice products in a real gameplay context.',
    responsibilities: [
      'Implemented character progression, game modes, pickups, scoring, and gameplay UI.',
      'Integrated login, matchmaking, lobbies, chat, friends, achievements, progression, and inventory systems.',
      'Extended InGame SDK functionality and validated integrations across multiple modules, identifying and reporting issues to product teams.',
      'Enabled PlayStation 5 support and local dedicated server workflows for cross-platform multiplayer testing.',
      'Supported partner studios through technical guidance, implementation documentation, and debugging assistance.',
    ],
    detail: [
      'Pegasus is an Unreal Engine 5 demo project built to showcase Tencent InGame and GVoice products in a multiplayer game context.',
      'The project connected gameplay implementation with platform features, SDK validation, partner support, and cross-platform multiplayer testing workflows.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Pegasus was an Unreal Engine 5 multiplayer demo platform created to showcase Tencent InGame and GVoice products inside a real playable game environment.',
          'The goal was not only to build a sample project, but to prove how product integrations behaved when surrounded by actual gameplay systems.',
          'That made Pegasus part game demo, part integration testbed, and part technical reference for partner studios.',
        ],
        items: [
          'Demonstrate Tencent InGame and GVoice inside a playable multiplayer project.',
          'Validate SDK features in real gameplay flows rather than isolated test screens.',
          'Provide a reference implementation for partner studios.',
          'Exercise platform-specific workflows such as PS5 support and local dedicated server testing.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'I worked as a gameplay and online systems programmer, focusing on the bridge between moment-to-moment multiplayer gameplay and Tencent InGame/GVoice platform integrations.',
          'My responsibilities included:',
        ],
        items: [
          'Multiplayer gameplay systems.',
          'Character progression and scoring.',
          'Game modes, pickups, and gameplay UI.',
          'Platform feature integration.',
          'InGame SDK and GVoice validation.',
          'PlayStation 5 support.',
          'Local dedicated server workflows.',
          'Partner support through documentation, debugging, and technical guidance.',
        ],
      },
      {
        title: 'Building a Playable SDK Demo',
        paragraphs: [
          'One of the main challenges was making the project feel like a real multiplayer game rather than a disconnected set of SDK examples.',
          'The gameplay layer needed enough structure to demonstrate product features naturally. Login, matchmaking, lobbies, chat, friends, achievements, progression, and inventory all needed to exist in a context that made sense to players and partner developers.',
        ],
        groups: [
          {
            title: 'Gameplay systems',
            items: [
              'Character progression.',
              'Game modes.',
              'Pickups.',
              'Scoring.',
              'Gameplay UI.',
            ],
          },
          {
            title: 'Platform systems',
            items: [
              'Login.',
              'Matchmaking.',
              'Lobbies.',
              'Chat.',
              'Friends.',
              'Achievements.',
              'Progression.',
              'Inventory.',
            ],
          },
        ],
      },
      {
        title: 'Integrating InGame and GVoice',
        paragraphs: [
          'Pegasus served as a practical environment for validating Tencent InGame and GVoice features across multiple modules.',
          'My work involved integrating product features end-to-end, extending SDK functionality where needed, and identifying issues that only appeared once the SDKs were exercised in a full multiplayer gameplay context.',
        ],
        groups: [
          {
            title: 'Integration work',
            items: [
              'Connected InGame product features to game flows.',
              'Integrated GVoice functionality into multiplayer communication flows.',
              'Validated SDK behaviour across gameplay and platform modules.',
              'Identified and reported integration issues to product teams.',
              'Helped turn the demo into a useful reference for partner studios.',
            ],
          },
        ],
      },
      {
        title: 'Cross-Platform Multiplayer Testing',
        paragraphs: [
          'Another important part of the project was supporting cross-platform multiplayer testing.',
          'I enabled PlayStation 5 support and integrated local dedicated server workflows so the team could test multiplayer behaviour more efficiently across target environments.',
          'This made iteration faster and gave the project a more reliable foundation for validating SDK and gameplay interactions.',
        ],
        groups: [
          {
            title: 'Testing foundation',
            items: [
              'PlayStation 5 support.',
              'Local dedicated server workflows.',
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
        ],
        items: [
          'Explained integration flows and implementation expectations.',
          'Documented how gameplay systems connected to Tencent product features.',
          'Helped debug SDK, multiplayer, and platform integration issues.',
          'Fed product issues and integration findings back to internal teams.',
        ],
      },
      {
        title: 'What I Learned',
        paragraphs: [
          'Pegasus strengthened my understanding of how gameplay systems and platform integrations depend on each other in multiplayer projects.',
          'A feature can work in isolation and still fail to feel useful unless it is embedded into a coherent game flow.',
          'The project also gave me practical experience with SDK validation, cross-platform testing, partner-facing documentation, and the kind of debugging needed when gameplay, networking, platform services, and UI all meet in one project.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Engine', items: ['Unreal Engine 5.'] },
          { title: 'Languages', items: ['C++.', 'Blueprints.'] },
          {
            title: 'Multiplayer',
            items: ['Multiplayer Networking.', 'Dedicated Servers.', 'Local server workflows.'],
          },
          {
            title: 'Platform',
            items: ['PlayStation 5.', 'InGame SDK.', 'GVoice.'],
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
    slug: 'ai-gaming-assistant',
    title: 'AI Gaming Assistant',
    year: 'Tencent, 2023-Present',
    role: 'Client-Side Developer',
    duration: 'Cross-platform companion app',
    technology: 'Rust, Tauri v2, React, TypeScript, Three.js, PixiJS, gRPC, Steam SDK',
    summary:
      'Led client-side development of a cross-platform AI gaming companion application designed to support players through chat, lightweight companion interactions, overlays, and avatar-driven experiences.',
    responsibilities: [
      'Evaluated Electron versus Tauri through proof-of-concept implementations and recommended Tauri adoption based on performance and footprint advantages.',
      'Designed a dual-mode user experience featuring both a conversational chat interface and a lightweight companion mode.',
      'Built a multi-window architecture supporting companion, avatar, settings, and main application contexts.',
      'Integrated desktop features including system tray support, global hotkeys, and clipboard image workflows.',
      'Implemented transparent desktop overlays and external avatar communication using gRPC and Three.js.',
      'Added optional Steam SDK integration using feature flags and automated build tooling.',
      'Delivered Windows and macOS releases with automated packaging pipelines.',
    ],
    detail: [
      'AI Gaming Assistant is a cross-platform desktop companion application designed to explore how AI can support players during gameplay without becoming heavy, intrusive, or locked to a single interaction style.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'AI Gaming Assistant was a cross-platform desktop application exploring how an AI companion could support players through conversation, lightweight contextual interactions, and avatar-driven presentation.',
          'The central product challenge was not simply building a chat app. The goal was to create an assistant that could live alongside games, switch between interaction modes, and feel responsive enough to be useful during play.',
          'This meant the client needed to balance a full application experience with desktop-native companion behaviours such as overlays, global hotkeys, tray access, and separate avatar communication.',
        ],
      },
      {
        title: 'My Role',
        paragraphs: [
          'I led client-side development, focusing on the technical foundation of the desktop application and the user experience patterns that made the assistant feel practical during gameplay.',
          'My responsibilities included:',
        ],
        items: [
          'Client-side application architecture.',
          'Electron versus Tauri technical evaluation.',
          'Dual-mode UX design for chat and companion modes.',
          'Multi-window desktop app architecture.',
          'System tray, global hotkey, and clipboard workflows.',
          'Transparent overlay implementation.',
          'External avatar communication through gRPC and Three.js.',
          'Optional Steam SDK integration.',
          'Windows and macOS packaging pipelines.',
        ],
      },
      {
        title: 'Choosing the Desktop Foundation',
        paragraphs: [
          'One of the first important decisions was choosing the desktop runtime. I evaluated Electron and Tauri through proof-of-concept implementations rather than treating the framework choice as a preference call.',
          'The assistant needed to feel lightweight enough to run alongside games, while still supporting multiple windows, native desktop integrations, and modern frontend development.',
          'Based on performance and footprint advantages, I recommended Tauri v2 as the foundation for the client.',
        ],
        groups: [
          {
            title: 'Evaluation focus',
            items: [
              'Runtime footprint.',
              'Desktop integration support.',
              'Multi-window behaviour.',
              'Frontend development workflow.',
              'Release packaging complexity.',
              'Suitability for a game-adjacent companion app.',
            ],
          },
        ],
      },
      {
        title: 'Designing a Dual-Mode Experience',
        paragraphs: [
          'A major UX challenge was that players do not always want the same level of assistant presence.',
          'Sometimes they need a full conversational interface where they can ask questions, inspect responses, or configure behaviour. At other times, they need something lighter that stays out of the way while still being quickly accessible.',
          'To support this, I helped design and implement a dual-mode experience: a main chat interface for deeper interaction and a lightweight companion mode for lower-friction use during play.',
        ],
        groups: [
          {
            title: 'Experience modes',
            items: [
              'Conversational chat interface.',
              'Lightweight companion mode.',
              'Settings context for configuration.',
              'Avatar context for presentation and feedback.',
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
            ],
          },
          {
            title: 'Desktop features',
            items: [
              'System tray support.',
              'Global hotkeys.',
              'Clipboard image workflows.',
              'Transparent desktop overlays.',
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
              'External avatar communication through gRPC.',
              'Three.js-based avatar presentation workflows.',
              'PixiJS usage for interactive visual layers.',
            ],
          },
        ],
      },
      {
        title: 'Steam and Release Tooling',
        paragraphs: [
          'I added optional Steam SDK integration behind feature flags so the application could support Steam-related workflows without forcing that dependency into every build.',
          'I also worked on automated build and packaging tooling to deliver Windows and macOS releases reliably.',
        ],
        groups: [
          {
            title: 'Release support',
            items: [
              'Feature-flagged Steam SDK integration.',
              'Automated build tooling.',
              'Windows release packaging.',
              'macOS release packaging.',
            ],
          },
        ],
      },
      {
        title: 'What I Learned',
        paragraphs: [
          'This project changed how I think about AI companion products. The hard part is not only connecting to an AI model, but designing the client architecture that lets the assistant be available, lightweight, and contextually useful.',
          'It strengthened my experience in desktop application architecture, cross-platform release workflows, native integrations, and UX design for game-adjacent tools.',
          'It also reinforced the importance of making technical choices through prototypes: the Electron versus Tauri decision was much stronger because it was based on practical implementation evidence.',
        ],
      },
      {
        title: 'Technologies',
        groups: [
          { title: 'Desktop Runtime', items: ['Tauri v2.', 'Rust.'] },
          { title: 'Frontend', items: ['React.', 'TypeScript.'] },
          { title: 'Rendering', items: ['Three.js.', 'PixiJS.'] },
          { title: 'Communication', items: ['gRPC.'] },
          { title: 'Platform', items: ['Windows.', 'macOS.', 'Steam SDK feature flags.'] },
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
      'Hustler is a hyper-casual runner game that was developed for people looking to earn crypto rewards easily while enjoying a good game.',
    responsibilities: [
      'Integrated PlayFab into game architecture for managing the backend database of players and game entities.',
      'Developed all gameplay mechanics and systems.',
      'Created a difficulty manager for easy calibration.',
      'Implemented animations and audio.',
      'Integrated Unity Ads and monetization.',
    ],
    detail: [
      'Published | Unity (Solo Development). Tools: GitHub, Trello.',
      'Hustler is a hyper-casual runner game that was developed for people looking to earn crypto rewards easily while enjoying a good game. This is a project I worked on alone for a client and took me 6 months to develop.',
      'The idea is to have an ongoing cycle where players compete for the highest scores for the highest rewards. Once that cycle closes, the leaderboard of winners is retrieved and the winning players are rewarded on Binance separately. I also created a separate app for this game which controls the duration of the cycle and its closure.',
      'I managed all this data through scripts that connect to the PlayFab API.',
      'What was the most interesting to me about this project was getting to deep dive into PlayFab, and experimenting with what is needed for a simple game to become enjoyable.',
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
      'Kutla is a puzzle game that I worked on under the management of The Video Games Studio.',
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
      'Kutla is a puzzle game that I worked on under the management of The Video Games Studio (VGS).',
      'While my manager focused on the art and shaders of the game, I was responsible for managing the code architecture and creating all gameplay mechanics and features.',
      'I also took part in a lot of the decision-making in the game design of the project.',
      '2 modes were created: Adventure mode, where players pop similar color pixels under a number of moves, and Drawing Mode, where players color in pixels on a white pixelated canvas and can save it locally in their gallery. In addition, players are able to play their own created level or drawing.',
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
      'Island Keeper is an adventure prototype set in a Mesopotamian legend and managed by The Video Games Studio.',
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
  },
  {
    slug: 'sudoku-mobile',
    title: 'Sudoku Mobile',
    year: '2020',
    role: 'Game Programmer',
    duration: 'Archived Project',
    technology: 'Unity, Unity Collab, Jira',
    summary:
      'Sudoku on Mobile was a project I undertook for my love of pen-and-paper Sudoku and the lack of smooth UX in other mobile Sudoku games.',
    responsibilities: [
      'Classic mode: players play random levels based on difficulty and earn stats and points after win.',
      'Time Trial mode: same mode as classic mode but with a time constraint.',
      'Adventure mode: levels created with different difficulties and designed to teach different strategies of Sudoku solving.',
      'Profile player stats: records data of player from each game, intended to connect to a server where players can check leaderboards and other player profiles.',
    ],
    detail: [
      'Archived Project | Unity. Tools: Unity Collab, Jira.',
      'Sudoku on Mobile is a project that I decided to undertake for my love of the pen-and-paper Sudoku game and the lack of smooth user experience in other Sudoku mobile games available.',
      'I worked on this project under the management of The Video Games Studio (VGS). My goal was to take Sudoku and modernize its UI and add new features to its gameplay.',
      'What was interesting to me about this project was developing a Sudoku solver as an algorithm to check the solution of the player. While I did reach a solution in the end, I believe it needed a lot of optimization.',
    ],
  },
]

export const allProjects = [...recentProjects, ...olderProjects]
