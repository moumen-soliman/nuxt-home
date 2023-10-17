import axios from 'axios'
import { defineNuxtPlugin, useCookie } from 'nuxt/app'
import { COOKIE_AUTH, DEVICE_ID, PROFILE_ID } from '~/constants'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  const cookieAuth = useCookie(COOKIE_AUTH)

  const axiosInstance = axios.create({
    baseURL: config.public.baseURL,
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  axiosInstance.interceptors.request.use(function (config) {
    const token = cookieAuth.value

    if (token && process.client) {
      config.headers.Authorization = token
      config.headers.Profile = JSON.parse(localStorage.getItem(PROFILE_ID))
    } else {
      delete axios.defaults.headers.common.Authorization
    }

    return config
  })

  return {
    provide: {
      axios: axiosInstance,
    },
  }
})
