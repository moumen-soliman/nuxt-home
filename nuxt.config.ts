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
      API: process.env.NUXT_PUBLIC_API_URL,
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
  ],

  plugins: ['@/plugins/composition-api', '@/plugins/axios-accessor'],

  css: [],

  components: [],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  buildModules: ['@nuxt/typescript-build'],
}

export default config
