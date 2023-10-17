import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { FavouriteType } from '@/Types/favourite'
import { favouriteApi } from '@/api/favourite'
import { ProjectsDetails } from '~/Types/SliderSection'
import { useHomeStore } from './home'

export const useFavStore = defineStore('favourite', {
  state: () =>
    ({
      favourites: {},
      isLoading: false,
      errMsg: '',
    }) as FavouriteType,

  actions: {
    getFavouriteData() {
      const { getFavouriteAPI } = favouriteApi()
      this.isLoading = true
      getFavouriteAPI()
        .then((res) => {
          this.favourites = res.data.blocks[0].projects
        })
        .catch(() => {
          this.errMsg = 'Error, Please Recheck'
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getUpdatedState() {
      return this.favourites
    },
    addFavouriteData(project: ProjectsDetails) {
      const { addFavouriteAPI } = favouriteApi()
      const { getHomeData } = useHomeStore()

      this.isLoading = true
      addFavouriteAPI(project)
        .then((res) => {
          this.getFavouriteData()
          getHomeData()
        })
        .catch(() => {
          this.errMsg = 'Error, Please Recheck'
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    removeFavouriteData(project: ProjectsDetails) {
      const { removeFavouriteAPI } = favouriteApi()
      const { getHomeData } = useHomeStore()
      this.isLoading = true
      removeFavouriteAPI(project)
        .then((res) => {
          this.getFavouriteData()
          getHomeData()
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
    getProjects: (state) => state.favourites,
  },
})
