<template>
  <div class="flex flex-col min-h-screen">
    <div v-if="currentPageName === 'login'" class="login-bg"></div>
    <Header />
    <main class="flex grow max-w-screen-xl mx-auto px-5">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
let currentPageName = router.currentRoute.value.name
</script>

<style lang="scss" scoped>
.login-bg {
  background: url('https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg') !important;
  -webkit-filter: blur(4px);
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
