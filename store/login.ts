import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { LoginType, LoginFormDataType } from '@/Types/login'
import { loginApi } from '@/api/login'

export const useLoginStore = defineStore('login', {
  state: () =>
    ({
      user: {},
      profile: {},
      isAuthinticated: false,
      errorMessage: '',
    }) as LoginType,

  actions: {
    signIn(payload: LoginFormDataType) {
      const { signInAPI } = loginApi()
      signInAPI(payload)
        .then((res) => {
          this.user = res?.data
          this.isAuthinticated = true
          const { replace } = useRouter()
          replace('/')
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            this.errorMessage = err?.response?.data?.message
          } else {
            this.errorMessage = 'Something Went Wrong'
          }
        })
    },
    setIsAuth(payload: boolean) {
      this.isAuthinticated = payload
    },
    logout() {
      this.user = {}
      this.isAuthinticated = false
    },
  },
})
