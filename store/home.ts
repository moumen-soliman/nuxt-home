import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { HomeType, HomeDataType } from '@/Types/home'
import { homeApi } from '@/api/home'
import { loginApi } from '~/api/login'
import { profileApi } from '~/api/profile'
import { useLoginStore } from './login'
import { COOKIE_AUTH } from '~/constants'

export const useHomeStore = defineStore('home', {
  state: () =>
    ({
      section: {},
      isLoading: false,
      errMsg: '',
    }) as HomeType,

  actions: {
    getHomeData() {
      const { getHomeAPI } = homeApi()
      this.isLoading = true
      getHomeAPI()
        .then((res) => {
          this.section = res.data.blocks[2]
        })
        .catch(() => {
          this.errMsg = 'Error, Please Recheck'
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },

  getters: {
    getProjects: (state) => state.section,
  },
})
