import { ProjectsDetails } from './SliderSection'

export interface FavouriteType {
  favourites: ProjectsDetails[] | null
  errMsg: string
  isLoading: boolean
}
