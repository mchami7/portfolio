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

export const socialLinks: ProfileLink[] = [
  { label: '@', name: 'Email', href: 'mailto:miranchami@gmail.com' },
  { label: 'in', name: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'gh', name: 'GitHub', href: 'https://github.com/' },
  { label: 'cv', name: 'Resume', href: '/Mira_Chami_CV.pdf', resume: true },
]

export const introCopy =
  'Game programmer driven by passion, creativity, and hard work. I love bringing games to life with code, from multiplayer systems and AI-driven gameplay to mobile prototypes and cross-platform tools.'

export const aboutCopy = [
  'I am a Computer Science graduate and professional game programmer with experience across indie game development, game tech R&D, multiplayer systems, tools, and AI companion applications.',
  'Technology and art are both essential to who I am. Creating games is where those two parts meet, and that blend is what keeps pushing me to put my heart into the work.',
  'Favourite games: Clair Obscur: Expedition 33, The Last of Us, God of War, Split Fiction, and Slay the Spire.',
]
