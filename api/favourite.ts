import { ProjectsDetails } from '~/Types/SliderSection'

export const favouriteApi = () => {
  const { $axios } = useNuxtApp()

  const getFavouriteAPI = async () => {
    const res = await $axios.get('/member/project?user_list=1&page=1')
    return res
  }

  const addFavouriteAPI = async (project: ProjectsDetails) => {
    const res = await $axios.get(`/member/favorites/add?program=${project?.id}`)
    return res
  }

  const removeFavouriteAPI = async (project: ProjectsDetails) => {
    const res = await $axios.get(
      `/member/favorites/remove?program=${project?.id}`,
    )
    return res
  }

  return {
    getFavouriteAPI,
    addFavouriteAPI,
    removeFavouriteAPI,
  }
}
