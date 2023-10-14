export interface LoginType {
  user: object
  isAuthinticated: boolean
  errorMessage: string
  profile: object
}

export interface LoginFormDataType {
  email: string
  password: string
  device_os: string
  device_type: string
  uniq_device_id: string
}
