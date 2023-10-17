export const profileApi = () => {
  const { $axios } = useNuxtApp()

  const profileAPI = async () => {
    const res = await $axios.post('/member/info/get')
    return res
  }

  return {
    profileAPI,
  }
}
