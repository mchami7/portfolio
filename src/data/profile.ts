import type { Education, ProfileLink } from '../types/portfolio'

export const education: Education[] = [
  {
    school: 'Kingston University London',
    period: '2022-2023',
    award: 'Master of Science in Games Development (Programming)',
  },
  {
    school: 'American University of Beirut',
    period: '2017-2021',
    award: 'Bachelor of Science in Computer Sciences',
  },
  {
    school: 'American University of Beirut',
    period: '2016-2020',
    award: 'Bachelor of Arts in Economics',
  },
]

export const skillGroups = [
  {
    title: 'Games & Multiplayer',
    skills: [
      'Gameplay systems',
      'Game UI implementation',
      'Replicated match flows',
      'Data-driven run systems',
      'Unreal Engine',
      'Unity',
      'Godot',
      'C++',
      'C#',
      'GDScript',
      'Multiplayer networking',
      'Server-authoritative architecture',
      'Dedicated servers',
      'Online services integration',
      'Tencent InGame',
      'PlayFab',
      'PlayStation development',
      'Designer timeline tooling',
      'Steamworks',
    ],
  },
  {
    title: 'Applied AI & Prototyping',
    skills: [
      'Generative AI integration',
      'LLM-powered research pipelines',
      'Structured model outputs',
      'Response validation',
      'AI character dialogue',
      'Python',
      'Rapid prototyping',
      'Designer tooling',
      'Gameplay action validation',
    ],
  },
  {
    title: 'Frontend & Desktop',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tauri',
      'Rust',
      'UI architecture',
      'Multi-window applications',
      'Native desktop integration',
      'Three.js',
      'PixiJS',
    ],
  },
  {
    title: 'Software Engineering',
    skills: [
      'C',
      'Node.js',
      'Express',
      'gRPC',
      'Protobuf',
      'Event-driven architecture',
      'Automated testing',
      'Debugging',
      'Performance profiling & optimisation',
      'Cross-platform development',
      'CI pipeline configuration',
      'Build and release tooling',
      'Git',
      'Perforce',
      'Code review',
      'Technical documentation',
    ],
  },
]

export const resumeLink: ProfileLink = {
  label: 'cv',
  name: 'Resume',
  href: '/Mira_Chami_CV.pdf',
  resume: true,
}

export const socialLinks: ProfileLink[] = [
  {
    label: 'in',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mira-chami-a9280b209/',
    iconId: 'linkedin-icon',
  },
  { label: 'gh', name: 'GitHub', href: 'https://github.com/mchami7', iconId: 'github-icon' },
  resumeLink,
]

export const aboutCopy = [
  'I am a software engineer working across games, applied AI, and interactive applications. At Tencent, my work spans gameplay, multiplayer, UI, designer tooling, and cross-platform desktop applications.',
  "My work includes integrating InGame, Tencent's public online-service framework for game backends, into Unreal Engine gameplay and UI, alongside cooperative run systems, an interactive evidence board, and a React/Rust desktop companion with AI backend integration. I have independently enabled PlayStation 5 support and built timeline tools that help designers author and test session behaviours.",
  'Before Tencent, I developed and released Unity games, including a mobile runner, ownership of a puzzle game’s gameplay architecture, and programming leadership on an adventure prototype. I enjoy turning experimental ideas into working systems and helping designers iterate.',
  'Technology and art are both essential to who I am. Games are where those two parts meet.',
  'Some of my favourite games are Clair Obscur: Expedition 33, The Last of Us, God of War, Split Fiction, Celeste, Slay the Spire, and Outer Wilds.',
]
