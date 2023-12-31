import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtApp } from 'nuxt/schema'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

declare function useNuxtApp(): NuxtApp

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance
  }

  interface Context {
    $axios: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $axios: NuxtAxiosInstance
  }
}
