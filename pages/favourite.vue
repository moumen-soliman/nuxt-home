<template>
  <div class="my-10">
    <h1 class="text-dark-blue text-2xl font-bold mb-5">Favourites</h1>

    <div
      v-if="favourites"
      class="grid grid-cols-1 md:grid-cols-2 w-full gap-20"
    >
      <div v-for="project in favourites" :key="project.id" class="">
        <ItemCard :project="project" class="h-full flex" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useFavStore } from '@/store/favourite'
import ItemCard from '@/components/ItemCard'

const favouriteStore = useFavStore()
const {
  addFavouriteData,
  removeFavouriteData,
  getFavouriteData,
  getUpdatedState,
} = favouriteStore
const { getProjects: favourites } = storeToRefs(favouriteStore)

definePageMeta({
  middleware: 'user-auth',
})

onBeforeMount(() => {
  getFavouriteData()
})
</script>

<style scoped></style>
