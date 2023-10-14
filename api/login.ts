import { useContext } from '@nuxtjs/composition-api'
import { Context } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { LoginFormDataType } from '~/Types/login'
import { $axios } from '~/utils/api'

export const loginApi = () => {
  const signInAPI = async (payload: LoginFormDataType) => {
    const res = await $axios.post('/login/signin', payload)

    return res
  }

  return {
    signInAPI,
  }
}
