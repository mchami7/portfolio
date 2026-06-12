export type ProjectLink = {
  label: string
  href: string
}

export type ProjectDetailGroup = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

export type ProjectDetailSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
  groups?: ProjectDetailGroup[]
}

export type Project = {
  slug: string
  title: string
  year: string
  role: string
  duration: string
  technology: string
  summary: string
  responsibilities: string[]
  detail: string[]
  detailSections?: ProjectDetailSection[]
  links?: ProjectLink[]
}

export type Education = {
  school: string
  period: string
  award: string
}

export type ProfileLink = {
  label: string
  name: string
  href: string
  resume?: boolean
}
