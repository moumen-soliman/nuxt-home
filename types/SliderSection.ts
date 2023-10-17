export interface ProjectsDetails {
  id: string
  title: string
  favorite: boolean
  image: string
  image_internal: string
}

export interface SectionSlider {
  title: string
  projects: ProjectsDetails[]
}
