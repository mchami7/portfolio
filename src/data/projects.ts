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
    slug: 'glaux',
    title: 'Glaux',
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
      'Glaux is a cross-platform desktop companion application designed to explore how AI can support players during gameplay without becoming heavy, intrusive, or locked to a single interaction style.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Glaux was a cross-platform desktop application exploring how an AI companion could support players through conversation, lightweight contextual interactions, and avatar-driven presentation.',
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
    media: createMedia('Hustler', hustlerImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Hustler is a published hyper-casual runner game developed for players who wanted a simple mobile game tied to crypto reward cycles.',
          'I worked on the project as a solo developer for a client over roughly six months, taking ownership of gameplay, backend integration, monetization, and release support.',
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
        title: 'What I Learned',
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
          'I worked as the game programmer on Kutla, owning the gameplay architecture and collaborating on design decisions throughout production.',
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
        title: 'What I Learned',
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
          'I worked as the lead game programmer, owning both technical implementation and a significant part of the prototype planning.',
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
          'Because Island Keeper was a prototype, early structure mattered. I helped define the game through a GDD that connected narrative goals with the systems needed to support them.',
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
          'I also supported level design, which helped keep the mechanics grounded in the needs of the actual spaces players would move through.',
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
          'I also helped structure the team around Jira and Agile workflows so the prototype could move through tasks, bugs, and iteration more clearly.',
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
        title: 'What I Learned',
        paragraphs: [
          'Island Keeper gave me early experience leading a prototype from both a technical and production perspective.',
          'It helped me understand how much a prototype depends on clear ownership: the code, GDD, input design, level support, and task management all need to point toward the same playable target.',
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
          'I worked as the game programmer, focusing on gameplay modes, player progression, profile data, and the Sudoku-solving logic needed to validate player answers.',
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
          'I wanted the mobile version to offer more than a single endless Sudoku board, so I structured the project around several modes with different player motivations.',
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
          'I reached a working solution, but I also recognized that the implementation still needed optimization.',
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
        title: 'What I Learned',
        paragraphs: [
          'Sudoku Mobile helped me think about how classic games can be modernized through usability, mode structure, and progression.',
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
