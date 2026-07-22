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

const recentProjectData: Project[] = [
  {
    slug: 'game-technology-r-and-d',
    title: 'Confidential Game Technology R&D',
    year: 'Tencent, 2023-Present',
    role: 'Gameplay & Multiplayer Systems Engineer',
    duration: 'Experimental game technology R&D',
    technology: 'Godot 4, GDScript, Multiplayer, GDAI (Game Director AI), Designer Tooling',
    summary:
      "Built the multiplayer and gameplay-side foundations for a confidential R&D project's GDAI (Game Director AI), intended to shape sessions like an AI Dungeon Master.",
    responsibilities: [
      'Architected server-authoritative multiplayer and data-driven run systems supporting complete cooperative sessions.',
      'Built player, session, objective, interaction, economy, and persistence foundations around a synchronized run loop.',
      "Created shared gameplay events and validated actions that support the project's GDAI direction.",
      'Developed timeline runtime and editor tooling for authoring, validating, and testing session behaviours.',
    ],
    detail: [
      'This confidential R&D project explores how GDAI (Game Director AI) could observe a multiplayer run and shape it like an AI Dungeon Master through structured context and controlled gameplay actions.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'The project began as a collection of experiments exploring how generative AI could influence multiplayer gameplay. Those experiments evolved into a repeatable game structure with a longer-term goal: GDAI (Game Director AI) that can understand a run and shape the session like an AI Dungeon Master.',
          'I helped turn the prototypes into a networked gameplay foundation. My work has focused on multiplayer architecture, run and session systems, gameplay-side interfaces for controlled external actions, and tools that let designers author behaviours without changing low-level gameplay code.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Architected server-authoritative multiplayer systems supporting Steam P2P, LAN, listen servers, and dedicated-server configurations.',
          'Built the gameplay foundations required to carry players through a complete synchronized run.',
          "Created shared events and validated action boundaries for the project's GDAI direction.",
          'Developed timeline runtime and Godot editor tooling for designer-authored session behaviours.',
        ],
      },
      {
        title: 'Multiplayer and Run Architecture',
        paragraphs: [
          'The project needed to move beyond isolated test scenes and support complete cooperative sessions. I built a server-authoritative foundation in which the host owns critical gameplay state while clients receive synchronized updates through replication and RPCs.',
          'On top of that foundation, I implemented a configurable run structure covering player state, death and revival, objectives, node selection, map progression, currency, rewards, and win or loss conditions. Data-driven run definitions let designers adjust progression without rebuilding the networking flow.',
          'The architecture supports Steam and LAN sessions while remaining practical to debug through local multi-client testing.',
        ],
      },
      {
        title: 'Gameplay Foundations for GDAI',
        paragraphs: [
          'My contribution to GDAI (Game Director AI) has been on the gameplay side: establishing structured information and controlled actions that the system can eventually use without directly manipulating authoritative multiplayer objects.',
          'Shared events expose meaningful changes in the session, entity tags provide context, and a validated action library defines safe requests such as spawning encounters, granting rewards, or changing progression.',
          'The same action path can be used by conventional gameplay triggers and designer-authored timelines today, while creating a multiplayer-safe boundary for future AI-directed behaviour.',
        ],
      },
      {
        title: 'Designer-Authored Session Tooling',
        paragraphs: [
          'To make session experimentation faster, I built a timeline runtime and Godot editor plugin for time-based and event-driven behaviours.',
          'Designers can select validated actions, configure typed parameters, preview pacing beats, and validate timeline resources in the editor. At runtime, the server executes those entries with controlled access to players, rooms, spawners, objectives, and event payloads.',
          'This separates creative pacing decisions from low-level implementation and provides a practical way to prototype Dungeon Master-style behaviours before they are driven dynamically.',
        ],
      },
      {
        title: 'Current Direction',
        paragraphs: [
          "The project's longer-term goal is for GDAI to function like an AI Dungeon Master that can understand the state of a run and shape its pacing, challenges, and rewards.",
          'My next focus is becoming more involved with the Python GDAI server and contributing across the boundary between model-side decision-making and the authoritative gameplay systems I have already built.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'This project has shown me that an AI-driven game experience depends on more than the model itself. Structured context, constrained actions, deterministic execution, and designer control are what make dynamic decisions usable inside a live multiplayer game.',
        ],
      },
    ],
  },
  {
    slug: 'confidential-multiplayer-sdk-demo',
    title: 'Confidential Multiplayer Technology Demo',
    year: 'Tencent, 2023-Present',
    role: 'Gameplay & Online Systems Engineer',
    duration: 'Multiplayer demo platform',
    technology: 'Unreal Engine 5, C++, Blueprints, Multiplayer, InGame, PlayStation',
    summary:
      'Developed an Unreal Engine 5 multiplayer environment that demonstrates and validates InGame online services and platform workflows through complete playable scenarios.',
    responsibilities: [
      'Built the replicated gameplay loop used to exercise online-service features in realistic multiplayer conditions.',
      'Integrated InGame features across authentication, lobbies, matchmaking, progression, inventory, and achievements.',
      'Supported partner studios integrating InGame through InGameProxy, an Unreal Engine plugin wrapper developed by our team.',
      'Enabled PlayStation 5 and local dedicated-server workflows for cross-platform and partner-scenario validation.',
    ],
    detail: [
      'This confidential Unreal Engine 5 project serves as a playable demonstration, integration testbed, and technical reference for InGame workflows.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'The project was created to demonstrate publicly released online-service and voice-communication capabilities from InGame and GVoice inside a real multiplayer game rather than a collection of isolated test screens.',
          'The wider project also included GVoice, which exposed me to its voice integration in the codebase; my direct contribution concentrated on InGame rather than GVoice integration.',
          'My work connected moment-to-moment gameplay with InGame services, platform features, and the workflows used to validate partner scenarios.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Implemented the replicated gameplay foundation and complete Free for All and Teams match flows.',
          'Connected InGame authentication, lobbies, matchmaking, progression, inventory, and achievements to representative gameplay.',
          'Supported partner studios using InGameProxy and diagnosed issues across gameplay, plugin, backend, and UI boundaries.',
          'Built PlayStation 5 and local dedicated-server validation workflows and supported partner integrations.',
        ],
      },
      {
        title: 'Building a Playable SDK Validation Environment',
        paragraphs: [
          'The central challenge was making product features feel like parts of a coherent game rather than entries in a test menu.',
          'I built a multiplayer loop with character state, team rules, scoring, progression, interactables, and match transitions so authentication, matchmaking, achievements, and inventory could be exercised in realistic sequences.',
          'Connecting gameplay results to player progression gave service behaviour meaningful context and exposed integration problems that isolated feature tests could miss.',
        ],
      },
      {
        title: 'Integrating InGame and Supporting Partners',
        paragraphs: [
          'I integrated InGame services into playable flows across authentication, lobbies, matchmaking, progression, quests, items, inventory, and achievements.',
          'I also supported partner studios integrating InGame through InGameProxy, an Unreal Engine plugin wrapper developed by our team. My role included validating partner scenarios, explaining integration paths, reproducing issues, and coordinating findings with the relevant engineering teams.',
        ],
      },
      {
        title: 'Cross-Platform Validation',
        paragraphs: [
          'I independently enabled PlayStation 5 support and integrated a local dedicated-server workflow that allowed multiplayer scenarios to be debugged directly from the Unreal Editor.',
          'These workflows made it easier to reproduce issues spanning InGame services, networking, gameplay, and platform-specific behaviour before they reached production environments.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'This project reinforced that a platform feature is only useful when it survives the complete player journey around it. Building the surrounding game flow made the demo a stronger validation tool and gave partner teams a clearer reference for their own integrations.',
        ],
      },
    ],
    links: [
      { label: 'InGame Product', href: 'https://intl.ingame.tencent.com/' },
      {
        label: 'GVoice Product (Project Context)',
        href: 'https://intl.gcloud.tencent.com/pages/products/gvoice.html',
      },
    ],
  },
  {
    slug: 'confidential-ai-gaming-companion',
    title: 'Confidential AI Gaming Companion',
    year: 'Tencent, 2023-Present',
    role: 'Client Systems Engineer',
    duration: 'Cross-platform companion app',
    technology: 'Rust, Tauri v2, React, TypeScript, Three.js, PixiJS, gRPC, Steam SDK, CPAL',
    summary:
      'Owned client-side technical direction for a cross-platform AI gaming companion, taking it from framework evaluation to a multi-window desktop architecture and Windows/macOS delivery.',
    responsibilities: [
      'Evaluated Electron and Tauri through working prototypes and selected Tauri v2 for the product constraints.',
      'Designed a dual-mode, multi-window experience spanning full chat, lightweight companion, avatar, and settings contexts.',
      'Integrated desktop-native features, transparent overlays, screen capture, and external avatar communication.',
      'Built feature-flagged platform integrations and automated Windows/macOS setup, packaging, and release workflows.',
    ],
    detail: [
      'This confidential desktop application explores how an AI companion can remain useful during gameplay without becoming heavy, intrusive, or limited to a traditional chat window.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'The product began as a conventional chat surface and evolved into a cross-platform companion designed to live alongside games.',
          'I took primary responsibility for the client-side architecture, balancing a full conversational experience with lightweight desktop behaviours such as companion windows, overlays, hotkeys, tray access, screen capture, and avatar presentation.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Led the Electron-versus-Tauri evaluation and migration of the core client to Tauri v2.',
          'Designed the dual-mode UX and multi-window desktop architecture.',
          'Integrated native desktop, overlay, avatar, Steam, and debugging capabilities.',
          'Delivered automated Windows and macOS build, installer, and packaging workflows.',
        ],
      },
      {
        title: 'Choosing the Desktop Foundation',
        paragraphs: [
          'The assistant needed to run alongside games, so runtime footprint and native integration mattered as much as frontend productivity.',
          'I evaluated Electron and Tauri through proof-of-concept implementations, comparing performance, bundle size, multi-window behaviour, desktop APIs, ecosystem fit, and migration cost. Based on that evidence, I recommended Tauri v2 and migrated the core feature set.',
          'The smaller footprint supported the product goal of a companion that remains available without competing heavily with the game for system resources.',
        ],
      },
      {
        title: 'Designing the Companion Architecture',
        paragraphs: [
          'Players do not always want the same level of assistant presence. I redesigned the experience around a full chat interface for deeper interaction and a lightweight companion for use during play.',
          'A multi-window architecture separated the main app, companion, avatar, and settings into focused contexts while shared communication kept them coherent. Transparent overlays, global hotkeys, tray access, image-paste workflows, and screen-capture integration made the experience behave like a desktop companion rather than a browser page.',
          'I also connected external avatar presentation through gRPC and Three.js and used PixiJS for interactive companion visuals.',
        ],
      },
      {
        title: 'Cross-Platform Delivery',
        paragraphs: [
          'I built automated setup, build, installer, and packaging tooling for Windows and macOS, with Steam integration isolated behind feature flags so it did not become a requirement for every build.',
          'Cross-platform delivery also required resolving native compatibility problems. One example was a macOS audio-stream threading issue that led me to research and integrate a custom CPAL fork.',
          'Debug panels and structured logging supported this work by making failures visible across frontend, Rust, desktop API, avatar, audio, and platform boundaries.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'This project changed how I think about AI companion products. The difficult part is not simply connecting a model; it is designing a lightweight client architecture that makes the assistant available, contextual, and unobtrusive during play.',
        ],
      },
    ],
  },
]

const recentProjectOrder = [
  'game-technology-r-and-d',
  'confidential-ai-gaming-companion',
  'confidential-multiplayer-sdk-demo',
]

export const recentProjects = [...recentProjectData].sort(
  (left, right) => recentProjectOrder.indexOf(left.slug) - recentProjectOrder.indexOf(right.slug),
)

export const mastersProjects: Project[] = [
  {
    slug: 'sensation5',
    title: 'Sensation5',
    year: '2023',
    role: 'Game Programmer',
    duration: "Kingston University Master's Project",
    technology: 'Unity, C#, URP, Input System, DualSense Integration',
    summary:
      'Developed a first-person portal puzzle prototype that used distance-scaled DualSense adaptive-trigger resistance as part of the core mechanic.',
    responsibilities: [
      'Designed and implemented the portal, rendering, teleportation, and adaptive-trigger systems.',
      'Mapped portal distance to physical trigger resistance through a third-party DualSense integration.',
      'Built reusable interaction foundations for multi-room environmental puzzles.',
    ],
    detail: [
      'Sensation5 explored how controller feedback could communicate spatial information instead of acting only as surface-level polish.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Sensation5 is a first-person Unity puzzle prototype built around portals, physics interactions, and tactile controller feedback.',
          'The central experiment was to make portal placement physically legible: the farther away a portal was placed, the more resistance the player felt through the adaptive trigger.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Built portal placement, paired state, camera rendering, and teleportation.',
          'Connected portal distance to adaptive-trigger resistance using a third-party PC integration.',
          'Created reusable pickup, trigger, shooting, checkpoint, and room-progression systems around the core mechanic.',
        ],
      },
      {
        title: 'Turning Controller Feedback into a Mechanic',
        paragraphs: [
          'I treated the adaptive trigger as an input channel with gameplay meaning rather than a one-off effect. Converting portal distance into resistance gave players physical information about where they were aiming before placement.',
          'Designing around limited native DualSense support on PC required a third-party integration, but keeping the hardware experiment central gave the prototype a clear interaction question to test.',
        ],
      },
      {
        title: 'Portal and Interaction Architecture',
        paragraphs: [
          'The portal mechanic required placement validation, paired portal state, render-texture cameras, teleportation, and player input to work together.',
          'I supported it with reusable interaction interfaces so puzzle rooms could combine portals with pickups, triggered objects, projectiles, hazards, checkpoints, and progression without rebuilding the core interaction path.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'The project strengthened my understanding of how hardware constraints, camera rendering, physics, and interaction architecture combine in a mechanic that must feel immediate to the player.',
        ],
      },
    ],
    links: [{ label: 'GitHub Repository', href: 'https://github.com/mchami7/Sensation5' }],
  },
  {
    slug: 'elden-ring-onboarding',
    title: 'Elden Ring Onboarding',
    year: '2023',
    role: 'Game Programmer',
    duration: 'Kingston University Group Project',
    technology: 'Unity, C#, ScriptableObjects, UI, Touch Input',
    summary:
      'Built the Unity implementation for an unofficial academic companion-map prototype that offered optional, data-driven guidance to new Elden Ring players.',
    responsibilities: [
      'Worked as the sole programmer in a multidisciplinary UX, animation, and game-design team.',
      'Built the interactive 3D map, navigation controls, contextual panels, and marker behaviour.',
      'Created ScriptableObject data models that separated guidance content from its presentation.',
    ],
    detail: [
      'This academic project responded to a UX brief: make onboarding more approachable without changing or interrupting the original game.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'The team explored how optional guidance could support players who found Elden Ring difficult to enter while respecting those who preferred minimal direction.',
          'Our prototype placed quests, characters, items, weapons, and danger information in a separate interactive map that players could consult when they wanted help.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Served as the sole programmer in a multidisciplinary group.',
          'Translated UX research and interface designs into a working Unity prototype.',
          'Implemented 3D map navigation, touch input, generated information panels, markers, filtering, and show-on-map interactions.',
        ],
      },
      {
        title: 'Data-Driven Guidance',
        paragraphs: [
          'I represented quests, NPCs, key items, and weapons as ScriptableObject data rather than embedding content inside UI components.',
          'The prototype could generate lists, contextual panels, and map relationships from reusable content, allowing the team to revise the guidance structure without rebuilding its presentation.',
        ],
      },
      {
        title: 'Supporting Player Choice',
        paragraphs: [
          'Keeping guidance in a standalone companion preserved the original game while letting players choose when they wanted more context.',
          'The interaction layer supported that idea through explorable map navigation, contextual markers, danger-zone visibility, and direct links between information panels and world locations.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'This project reinforced the value of data-driven UI and taught me how to turn research and interface specifications from a large multidisciplinary group into a coherent interactive system.',
        ],
      },
    ],
    links: [{ label: 'GitHub Repository', href: 'https://github.com/mchami7/EldenRing_Onboarding' }],
  },
  {
    slug: 'knockoff',
    title: 'Knockoff',
    year: '2023',
    role: 'Gameplay & Multiplayer Programmer',
    duration: "Kingston University Master's Project",
    technology: 'Unity, C#, Photon PUN 2, PlayFab, URP',
    summary:
      'Developed a physics-based online arena prototype with an end-to-end Photon multiplayer flow, knockback combat, and PlayFab-backed player services.',
    responsibilities: [
      'Built the Photon connection, lobby, team, synchronized scene, spawning, and match-state flow.',
      'Implemented networked character selection, physics-based knockback combat, scoring, and respawning.',
      'Connected account, statistics, password recovery, and leaderboard workflows through PlayFab.',
    ],
    detail: [
      'Knockoff combines a simple physical objective—push opponents out of the arena—with the online systems required to carry players from login to a completed match.',
    ],
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Knockoff is a Unity multiplayer arena prototype in which players use movement, attacks, and weapons to force opponents out of the playable space.',
          'Its compact rules made network behaviour, physical feedback, and match readability central to the experience.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Implemented the end-to-end Photon connection, room, lobby, team, scene, and match flow.',
          'Built networked identity, character selection, spawning, combat, scoring, and respawning.',
          'Integrated PlayFab account management, statistics, password recovery, and leaderboards.',
        ],
      },
      {
        title: 'Building the Multiplayer Flow',
        paragraphs: [
          'I connected the complete journey from Photon connection and room selection through synchronized character setup, arena spawning, match progression, and results.',
          'Player identity, team state, scene loading, spawning, timers, and scores were shared through Photon so each client represented the same match state.',
        ],
      },
      {
        title: 'Physics-Based Combat',
        paragraphs: [
          'Combat focused on displacement rather than traditional damage. Attacks and projectiles applied knockback, while arena boundaries converted successful hits into scoring and respawn events.',
          'Building multiple weapon behaviours around the same physical objective let the project vary range and force without fragmenting the core combat rule.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'Knockoff gave me an early end-to-end view of multiplayer development and made the relationship between game feel, synchronized state, identity, external services, and reliable match transitions concrete.',
        ],
      },
    ],
    links: [{ label: 'GitHub Repository', href: 'https://github.com/mchami7/Knockoff' }],
  },
]

export const olderProjects: Project[] = [
  {
    slug: 'hustler',
    title: 'Hustler',
    year: '2022',
    role: 'Solo Developer',
    duration: 'Published',
    technology: 'Unity, PlayFab, Unity Ads',
    summary:
      'Built and shipped a hyper-casual Unity runner with PlayFab-backed competition cycles, external reward handling, and a separate cycle-control tool.',
    responsibilities: [
      'Owned gameplay, backend integration, difficulty tuning, monetization, and release as the solo developer.',
      'Connected player, leaderboard, and game-entity data through PlayFab API scripts.',
      'Built a separate application for controlling competition timing and retrieving winner data.',
    ],
    detail: [
      'I developed Hustler for a client over roughly six months, taking a simple runner from gameplay implementation through backend-connected competition and mobile release.',
    ],
    media: createMedia('Hustler', hustlerImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Hustler is a published hyper-casual runner built around recurring high-score competitions.',
          'As the solo developer, I owned the complete implementation: moment-to-moment gameplay, difficulty calibration, PlayFab integration, monetization, supporting tools, and release.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Developed and tuned the complete runner experience.',
          'Integrated PlayFab player, leaderboard, and game-entity data.',
          'Built the separate control application used to open and close competition cycles.',
          'Delivered the monetized mobile release for the client.',
        ],
      },
      {
        title: 'Building the Competition Loop',
        paragraphs: [
          'Players competed for high scores during an active cycle. A separate control application managed the competition window and retrieved winner data when the cycle closed, while rewards were handled externally.',
          'This connected the mobile gameplay loop to live backend state and gave me practical experience shipping a game whose competition structure depended on more than local player data.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'Hustler taught me how backend data, tuning, feedback, monetization, and release constraints all contribute to the quality of an intentionally simple mobile game.',
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
    technology: 'Unity, C#, ScriptableObjects',
    summary:
      'Programmed a published Unity puzzle game whose Adventure and Drawing modes shared persistence, progression, and configurable content systems.',
    responsibilities: [
      'Owned the gameplay architecture and most interactive feature implementation.',
      'Built Adventure and Drawing modes on shared level, persistence, and progression foundations.',
      'Implemented saving for completed levels and player-created pixel art, including replayable drawings.',
    ],
    detail: [
      'Kutla combined authored color-matching puzzles with a creative mode where players could draw, save, and replay their own pixel-art levels.',
    ],
    media: createMedia('Kutla', kutlaImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Kutla is a published Unity puzzle game developed under The Video Games Studio.',
          'While another team member focused on art and shaders, I owned the gameplay architecture and most interactive systems across two complementary modes.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Developed the move-constrained Adventure Mode and creative Drawing Mode.',
          'Built save systems for completed levels and player-created pixel art.',
          'Connected drawings to the level flow so players could replay their own creations.',
          'Implemented configurable difficulty, progression, and shop data with ScriptableObjects.',
        ],
      },
      {
        title: 'Connecting Two Play Modes',
        paragraphs: [
          'Adventure Mode delivered authored puzzle progression, while Drawing Mode let players create and save pixel-art canvases. The important engineering challenge was keeping them connected rather than building two isolated feature sets.',
          'Shared persistence and level systems allowed completed content, player drawings, difficulty progression, and the local gallery to participate in one product structure.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'Kutla strengthened my ability to share systems across different player motivations and to balance engineering ownership with collaborative design decisions in a small production team.',
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
    technology: 'Unity, C#, Input System',
    summary:
      'Led programming for a Unity adventure prototype inspired by Mesopotamian mythology, connecting early game design with player, ability, input, and level systems.',
    responsibilities: [
      'Translated the game design into a playable technical foundation as lead programmer.',
      'Implemented the main character, abilities, and core gameplay systems.',
      'Developed touch input and collaborated with level design throughout the prototype.',
    ],
    detail: [
      'Island Keeper was an adventure prototype following Tammuz and Ishtar on a corrupted version of Failaka island.',
    ],
    media: createMedia('Island Keeper', islandKeeperImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Island Keeper was a Unity adventure prototype developed under The Video Games Studio and inspired by Mesopotamian mythology.',
          'As lead game programmer, I connected the early game design with the systems required to make the idea playable.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Defined the gameplay foundation through the project GDD and technical planning.',
          'Implemented the main character, abilities, and core adventure mechanics.',
          'Developed a touch-mapping scheme with the Unity Input System.',
          'Worked with level design to keep spaces aligned with the player mechanics.',
        ],
      },
      {
        title: 'From Design to Playable Prototype',
        paragraphs: [
          'The project required narrative, levels, enemies, equipment, and player abilities to point toward the same prototype goal.',
          'I used the GDD to establish those relationships, then focused implementation on the character and interaction systems needed to test them in playable spaces.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'Island Keeper gave me early experience leading both the technical direction and practical implementation of a prototype, including the tradeoffs required to turn a broad concept into a focused playable foundation.',
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
    technology: 'Unity, C#, Mobile UI',
    summary:
      'Built a Unity mobile Sudoku prototype with three game modes, local player progression, and a working solver used to validate completed boards.',
    responsibilities: [
      'Implemented Classic, Time Trial, and authored Adventure modes.',
      'Built local statistics, points, difficulty, and mode-progression systems.',
      'Developed a working Sudoku solver for solution validation.',
    ],
    detail: [
      'Sudoku Mobile explored how a familiar puzzle could be modernized through cleaner interaction, varied modes, progression, and algorithmic validation.',
    ],
    media: createMedia('Sudoku Mobile', sudokuMobileImages),
    detailSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Sudoku Mobile was a Unity prototype inspired by my interest in pen-and-paper Sudoku and the opportunity to make mobile puzzle interaction feel more structured and satisfying.',
          'The project combined traditional play with time pressure, authored progression, local statistics, and automated solution checking.',
        ],
      },
      {
        title: 'My Contribution',
        items: [
          'Built Classic Mode with difficulty-based random boards.',
          'Implemented Time Trial Mode and an authored Adventure progression.',
          'Recorded local results, points, and mode progress.',
          'Developed the solver used to validate completed boards.',
        ],
      },
      {
        title: 'Designing Multiple Modes',
        paragraphs: [
          'Classic Mode supported traditional difficulty-based play, Time Trial added pressure and replayability, and Adventure Mode used authored levels to introduce different solving strategies.',
          'Treating the modes as variations on shared board and progression systems kept the experience coherent while serving different player motivations.',
        ],
      },
      {
        title: 'Sudoku Solver',
        paragraphs: [
          'The main technical challenge was building a solver that could check completed boards as part of the gameplay flow.',
          'The implementation reached a working state, but I identified optimization as the next step required for production polish. That limitation made the project a useful lesson in the difference between a correct algorithm and a production-ready one.',
        ],
      },
      {
        title: 'Technical Perspective',
        paragraphs: [
          'The project gave me early experience combining player-facing systems with algorithmic validation and showed how usability, progression, and feedback can refresh a familiar puzzle format.',
        ],
      },
    ],
  },
]

export const allProjects = [...recentProjects, ...mastersProjects, ...olderProjects]
