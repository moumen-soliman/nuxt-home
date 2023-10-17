export const homeApi = () => {
  const { $axios } = useNuxtApp()

  const getHomeAPI = async () => {
    const res = await $axios.get('/home')
    return res
  }

  return {
    getHomeAPI,
  }
}
