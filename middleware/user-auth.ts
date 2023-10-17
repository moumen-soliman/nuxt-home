import { defineNuxtRouteMiddleware, navigateTo, useCookie } from 'nuxt/app'
import { COOKIE_AUTH } from '~/constants'

export default defineNuxtRouteMiddleware((to, from) => {
  const cookieAuth = useCookie(COOKIE_AUTH)

  if (!cookieAuth.value) {
    return navigateTo('/login')
  }
})
