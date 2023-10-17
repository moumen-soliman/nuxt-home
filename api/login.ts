import { LoginFormDataType } from '~/Types/login'

export const loginApi = () => {
  const { $axios } = useNuxtApp()

  const signInAPI = async (payload: LoginFormDataType) => {
    const res = await $axios.post('/login/signin', payload)
    return res
  }

  const signOutAPI = async () => {
    const res = await $axios.post('/logout')
    return res
  }

  return {
    signInAPI,
    signOutAPI,
  }
}
