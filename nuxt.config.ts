import { createResolver } from '@nuxt/kit'
import type { NuxtConfig } from '@nuxt/types'
const { resolve } = createResolver(import.meta.url)

const config: NuxtConfig = {
  app: {
    head: {
      title: 'Nuxt App',
      meta: [{ name: 'description', content: 'Nuxt App' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxt/content',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    'nuxt-swiper',
    '@vee-validate/nuxt',
  ],

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  plugins: ['@/plugins/axios'],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  buildModules: ['@nuxt/typescript-build', 'nuxt-vite', 'nuxt-windicss'],
}

export default config
