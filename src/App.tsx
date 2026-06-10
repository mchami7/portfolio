import { useEffect, useMemo, useState } from 'react'
import heroImage from './assets/hero.png'

type Project = {
  slug: string
  title: string
  year: string
  role: string
  duration: string
  technology: string
  summary: string
  responsibilities: string[]
  detail: string[]
  links?: { label: string; href: string }[]
}

const recentProjects: Project[] = [
  {
    slug: 'ascension',
    title: 'Ascension',
    year: 'Tencent, 2023-Present',
    role: 'Game Programmer',
    duration: 'AI-driven roguelike',
    technology: 'Godot 4, GDScript, Multiplayer Networking',
    summary:
      'Developed multiplayer gameplay systems for a cooperative roguelike exploring novel applications of AI in gameplay mechanics.',
    responsibilities: [
      'Built server-authoritative networking systems supporting dedicated server and listen-server architectures.',
      'Implemented enemy spawning, health, respawn, objectives, economy, voting, shops, and meta-progression systems.',
      'Integrated gameplay telemetry and entity tagging for LLM-powered narrative and whisper systems.',
    ],
    detail: [
      'Ascension is a cooperative roguelike exploring novel applications of AI in gameplay mechanics. My work focused on reliable multiplayer foundations and gameplay systems that could support fast iteration.',
      'I designed scalable node-based gameplay architecture, event-driven interactions, and session-level state management to support experimental AI-driven mechanics.',
    ],
  },
  {
    slug: 'pegasus',
    title: 'Pegasus',
    year: 'Tencent, 2023-Present',
    role: 'Gameplay and Systems Programmer',
    duration: 'Multiplayer demo platform',
    technology: 'Unreal Engine 5, C++, Blueprints, PS5',
    summary:
      'Developed an Unreal Engine 5 demo project showcasing Tencent InGame and GVoice products.',
    responsibilities: [
      'Implemented character progression, game modes, pickups, scoring, and gameplay UI.',
      'Integrated login, matchmaking, lobbies, chat, friends, achievements, progression, and inventory systems.',
      'Enabled PlayStation 5 support and local dedicated server workflows for cross-platform multiplayer testing.',
    ],
    detail: [
      'Pegasus is an Unreal Engine 5 demo project built to showcase Tencent InGame and GVoice products in a multiplayer game context.',
      'The project connected gameplay implementation with platform features, SDK validation, partner support, and cross-platform multiplayer testing workflows.',
    ],
  },
  {
    slug: 'ai-gaming-assistant',
    title: 'AI Gaming Assistant',
    year: 'Tencent, 2023-Present',
    role: 'AI Gameplay Researcher',
    duration: 'Cross-platform companion app',
    technology: 'Rust, Tauri v2, React, TypeScript, Three.js',
    summary:
      'Led client-side development of a cross-platform AI gaming companion application.',
    responsibilities: [
      'Evaluated Electron versus Tauri and recommended Tauri based on performance and footprint advantages.',
      'Designed dual-mode UX with conversational chat and lightweight companion modes.',
      'Built multi-window desktop architecture with tray support, global hotkeys, overlays, gRPC, and automated packaging.',
    ],
    detail: [
      'AI Gaming Assistant is a cross-platform AI companion application designed around both a full conversational interface and a lighter companion mode.',
      'The work involved desktop-native features, transparent overlays, external avatar communication, optional Steam SDK integration, and Windows/macOS release packaging.',
    ],
  },
]

const olderProjects: Project[] = [
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

const education = [
  {
    school: 'Kingston University London',
    period: '2022-2023',
    award: 'Master of Science in Games Development (Programming)',
  },
  {
    school: 'American University of Beirut',
    period: '2017-2021',
    award: 'Bachelor of Science in Computer Science & Economics',
  },
]

const skills = [
  'Unreal Engine',
  'Unity',
  'Godot',
  'C/C++',
  'C#',
  'GDScript',
  'Rust',
  'Python',
  'React',
  'TypeScript',
  'Multiplayer networking',
  'Dedicated servers',
  'LLM integration',
  'PlayFab',
  'PS5 SDK',
  'Steam SDK',
]

const socialLinks = [
  { label: '@', name: 'Email', href: 'mailto:miranchami@gmail.com' },
  { label: 'in', name: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'gh', name: 'GitHub', href: 'https://github.com/' },
  { label: 'cv', name: 'Resume', href: '/Mira_Chami_CV.pdf', resume: true },
]

const allProjects = [...recentProjects, ...olderProjects]

function getProjectSlugFromHash() {
  const match = window.location.hash.match(/^#\/portfolio\/([^/]+)$/)
  return match?.[1] ?? null
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="experience">
      {items.map((project, index) => (
        <article className="job-card" key={project.title}>
          <a className="job-card-link" href={`#/portfolio/${project.slug}`}>
            <span className="sr-only">Open {project.title} project details</span>
          </a>
          <div className="job-card-video" aria-hidden="true">
            <div className="video-frame">
              <span>{index + 1}</span>
            </div>
          </div>

          <div className="video-additional-info">
            <div>
              <span className="icon" aria-hidden="true">
                #
              </span>
              {index + 1}
            </div>
            <div>
              <span className="icon" aria-hidden="true">
                ⌛
              </span>
              {project.duration}
            </div>
            <div>
              <span className="icon" aria-hidden="true">
                ⚙
              </span>
              {project.technology}
            </div>
          </div>

          <h3 className="clickable-card-header">
            {project.title} ({project.year})
            <small>{project.role}</small>
          </h3>
          <p>{project.summary}</p>
          <ul className="done-list">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="content-wrapper">
      <div className="portfolio-header">
        <a className="portfolio-close" href="#/">
          <span aria-hidden="true">‹</span>
          <small>Portfolio</small>
        </a>
      </div>

      <article>
        <div className="portfolio-top">
          <div className="content-placeholder detail-media" aria-hidden="true">
            <div className="video-frame">
              <span>{project.title.slice(0, 1)}</span>
            </div>
          </div>
          <h2>
            {project.title} ({project.year})
          </h2>
        </div>

        <div className="video-additional-info detail-additional-info">
          <div>
            <span className="icon" aria-hidden="true">
              ⌛
            </span>
            {project.duration}
          </div>
          <div>
            <span className="icon" aria-hidden="true">
              ⚙
            </span>
            {project.technology}
          </div>
          <div>
            <span className="icon" aria-hidden="true">
              ★
            </span>
            {project.role}
          </div>
        </div>

        <section className="part">
          <strong className="part-header">Project</strong>
          {project.detail.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {project.links ? (
            <ul className="code-links">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a className="url-link" href={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section className="part">
          <strong className="part-header">My contribution</strong>
          <p>{project.summary}</p>
          <ul className="done-list">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="part">
          <strong className="part-header">Tools & technology</strong>
          <ul className="badge-list detail-badges">
            {project.technology.split(',').map((item) => (
              <li className="badge" key={item.trim()}>
                {item.trim()}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  )
}

function App() {
  const [selectedSlug, setSelectedSlug] = useState(getProjectSlugFromHash)
  const selectedProject = useMemo(
    () => allProjects.find((project) => project.slug === selectedSlug),
    [selectedSlug],
  )

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedSlug(getProjectSlugFromHash())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} />
  }

  return (
    <main className="content-wrapper">
      <header className="header">
        <a className="header-link" href="#home">
          <h1>
            Mira Chami
            <small>Gameplay Programmer</small>
          </h1>
        </a>

        <nav className="links" aria-label="Profile links">
          {socialLinks.map((link) => (
            <a
              aria-label={link.name}
              className={link.resume ? 'link resume' : 'link'}
              href={link.href}
              key={link.name}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              <span aria-hidden="true">{link.label}</span>
              {link.resume ? <span className="link-icon" aria-hidden="true">↓</span> : null}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="about-information" aria-labelledby="intro-title">
        <picture>
          <img className="profile-image" src={heroImage} alt="Mira Chami profile mark" />
        </picture>
        <p className="about-text" id="intro-title">
          Game programmer driven by passion, creativity, and hard work. I love bringing
          games to life with code, from multiplayer systems and AI-driven gameplay to
          mobile prototypes and cross-platform tools.
        </p>
      </section>

      <section aria-labelledby="projects-title">
        <h2 id="projects-title">Recent Projects</h2>
        <ProjectGrid items={recentProjects} />
      </section>

      <section aria-labelledby="older-projects-title">
        <h2 id="older-projects-title">Older Portfolio Projects</h2>
        <ProjectGrid items={olderProjects} />
      </section>

      <section className="information-section" aria-labelledby="education-title">
        <h2 className="information-header" id="education-title">
          Educations
        </h2>
        <div className="information-text education-list">
          {education.map((item) => (
            <article key={item.school}>
              <h3>
                {item.school} ({item.period})
              </h3>
              <p>{item.award}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-title">
        <h2 id="skills-title">Technical Experience</h2>
        <ul className="badge-list">
          {skills.map((skill) => (
            <li className="badge" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="information-section" aria-labelledby="about-title">
        <h2 className="information-header" id="about-title">
          Hi, I&apos;m Mira
        </h2>
        <div className="information-text">
          <p>
            I am a Computer Science graduate and professional game programmer with
            experience across indie game development, game tech R&D, multiplayer systems,
            tools, and AI companion applications.
          </p>
          <p>
            Technology and art are both essential to who I am. Creating games is where
            those two parts meet, and that blend is what keeps pushing me to put my heart
            into the work.
          </p>
          <p>
            Favourite games: Clair Obscur: Expedition 33, The Last of Us, God of War,
            Split Fiction, and Slay the Spire.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
