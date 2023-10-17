import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { LoginType, LoginFormDataType } from '@/Types/login'
import { loginApi } from '@/api/login'
import { profileApi } from '@/api/profile'
import { COOKIE_AUTH, PROFILE_ID } from '~/constants'
import { navigateTo, useCookie } from 'nuxt/app'

export const useLoginStore = defineStore('login', {
  state: () =>
    ({
      userData: {} || null,
      isLoggedIn: false,
      errMsg: '',
    }) as LoginType,

  actions: {
    signIn(payload: LoginFormDataType) {
      const { signInAPI } = loginApi()
      const cookieAuth = useCookie(COOKIE_AUTH)
      let { userData, isLoggedIn } = this

      signInAPI(payload)
        .then((res) => {
          userData = res?.data.data
          cookieAuth.value = res.data.data.auth_token
          isLoggedIn = true
          if (process.client) {
            localStorage.setItem(
              PROFILE_ID,
              JSON.stringify(res?.data.profiles[0].id),
            )
          }
          window.location.reload()
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            this.errMsg = err?.response?.data?.message
          } else {
            this.errMsg = 'Error, Please Recheck'
          }
        })
    },
    isAuth() {
      const cookieAuth = useCookie(COOKIE_AUTH)
      this.isLoggedIn = cookieAuth.value ? true : false
      return this.isLoggedIn
    },
    getProfileData() {
      const { profileAPI } = profileApi()
      const cookieAuth = useCookie(COOKIE_AUTH)

      if (cookieAuth.value) {
        profileAPI()
          .then((res) => {
            this.userData = res?.data
          })
          .catch((err) => {
            if (err?.response?.data?.message) {
              this.errMsg = err?.response?.data?.message
            } else {
              this.errMsg = 'Error, Please Recheck'
            }
          })
      }
    },
    logout() {
      const cookieAuth = useCookie(COOKIE_AUTH)
      let { userData, isLoggedIn } = this

      userData = null
      cookieAuth.value = null
      isLoggedIn = false
      if (process.client) {
        localStorage.removeItem(PROFILE_ID)
      }
      window.location.reload()
    },
  },

  getters: {
    getUserData: (state) => state.userData,
  },
})
