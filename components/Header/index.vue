<template>
  <ClientOnly>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="/" class="flex items-center">
          <img
            src="@/assets/img/header/logo.png"
            class="h-8 mr-3"
            alt="Sat7Plus Logo"
          />
        </a>
        <div class="flex items-center gap-5" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="/"
                class="cursor-pointer block hidden md:flex text-white rounded md:bg-transparent md:p-0 dark:text-white"
                >Home</a
              >
            </li>
            <li v-if="!isAuth()" @click="btnHandler()">
              <a
                href="/favourite"
                class="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Log in</a
              >
            </li>
          </ul>

          <div v-if="userData && isAuth()" class="">
            <DropdownProfileHeader
              :profileData="userData"
              :btnHandler="btnHandler"
            />
          </div>
        </div>
      </div>
    </nav>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'
import LayoutContainer from '@/components/LayoutContainer'
import { navigateTo } from 'nuxt/app'

const loginStore = useLoginStore()
const { isAuth, logout, getProfileData } = loginStore
const { getUserData: userData } = storeToRefs(loginStore)

const btnHandler = () => {
  isAuth() ? logout() : navigateTo('/login')
}

onBeforeMount(() => {
  if (isAuth()) {
    getProfileData()
  }
})
</script>
