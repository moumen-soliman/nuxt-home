import { SectionSlider } from './SliderSection'

export interface HomeType {
  section: SectionSlider
  isLoading: boolean
  errMsg: string
}
export interface HomeDataType {
  email: string
  password: string
  device_os: string
  device_type: string
  uniq_device_id: string
}
