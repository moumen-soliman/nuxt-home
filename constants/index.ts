import { object, string } from 'yup'

export const COOKIE_AUTH = 'SAT7PLUS_TOKEN'

export const DEVICE_ID = 'DEVICE_ID'

export const loginFormScheme = object({
  email: string().required().email(),
  password: string().required().min(10),
})

export const PROFILE_ID = 'PROFILE_ID'
