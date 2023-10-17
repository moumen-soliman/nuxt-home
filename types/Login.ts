export interface LoginType {
  userData: object | null
  isLoggedIn: boolean
  errMsg: string
}

export interface LoginFormDataType {
  email: string
  password: string
  device_os: string
  device_type: string
  uniq_device_id: string
}

export interface LoginFormInput {
  email: string
  password: string
}
