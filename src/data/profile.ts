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
    award: 'Bachelor of Science in Computer Science & Economics',
  },
]

export const skills = [
  'Gameplay systems',
  '0-to-1 prototyping',
  'Server-authoritative architecture',
  'Multiplayer networking',
  'Generative AI integration',
  'Validated action systems',
  'Designer tooling',
  'Event-driven architecture',
  'Automated testing',
  'Online services integration',
  'UI architecture',
  'Unreal Engine',
  'Unity',
  'Godot',
  'C++',
  'C',
  'C#',
  'GDScript',
  'Rust',
  'Python',
  'React',
  'TypeScript',
  'Tauri',
  'gRPC',
  'Protobuf',
  'Dedicated servers',
  'PlayFab',
  'PlayStation development',
  'Steamworks',
  'Build and release tooling',
]

export const socialLinks: ProfileLink[] = [
  {
    label: 'in',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mira-chami-a9280b209/',
    iconId: 'linkedin-icon',
  },
  { label: 'gh', name: 'GitHub', href: 'https://github.com/mchami7', iconId: 'github-icon' },
  {
    label: 'cv',
    name: 'Resume',
    href: 'https://drive.google.com/file/d/13zO9C98hWRi5gdLRKqioChAUSarxxobC/view?usp=sharing',
    resume: true,
  },
]

export const aboutCopy = [
  'I am a gameplay and systems engineer with experience across multiplayer networking, gameplay architecture, online-service integrations, designer tooling, and cross-platform applications. My work stays close to the player experience, but I care just as much about building foundations that help designers and engineers experiment confidently.',
  'Technology and art are both essential to who I am. Games are where those two parts meet.',
  'Some of my favorite games are Clair Obscur: Expedition 33, The Last of Us, God of War, Split Fiction, Celeste, and Slay the Spire.',
]
