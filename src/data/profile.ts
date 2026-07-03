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
  'Multiplayer networking',
  'Server-authoritative architecture',
  'Online services integration',
  'UI architecture',
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
  'Tauri',
  'gRPC',
  'Protobuf',
  'Dedicated servers',
  'AI-facing gameplay infrastructure',
  'PlayFab',
  'PS5 SDK',
  'Steam SDK',
]

export const socialLinks: ProfileLink[] = [
  { label: 'in', name: 'LinkedIn', href: 'https://www.linkedin.com/', iconId: 'linkedin-icon' },
  { label: 'gh', name: 'GitHub', href: 'https://github.com/mchami7', iconId: 'github-icon' },
  { label: 'cv', name: 'Resume', href: '#/cv', resume: true },
]

export const introCopy =
  'Gameplay and systems programmer building multiplayer game systems, cross-platform tools, and AI-facing gameplay infrastructure across Unreal, Godot, Unity, and desktop companion applications.'

export const aboutCopy = [
  'I am a game programmer with experience across gameplay systems, multiplayer networking, UI architecture, online-service integrations, and AI companion tooling. My work stays close to the player experience, but I care just as much about the architecture that keeps teams moving.',
  'Technology and art are both essential to who I am. Games are where those two parts meet: code gives an idea structure, and art gives it feeling, rhythm, and a reason for players to care.',
  'Recently, I have focused on server-authoritative multiplayer foundations, roguelike session systems, desktop AI companion clients, and partner-facing SDK demo projects. I enjoy turning experimental ideas into reliable systems that designers, engineers, and product teams can build on.',
  'Some of my favorite games are Clair Obscur: Expedition 33, The Last of Us, God of War, Split Fiction, Celeste, and Slay the Spire.',
]
