<template>
  <div>
    <a
      class="flex relative flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        :src="project?.image"
        :alt="project.image_internal"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ project?.title }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ project?.description }}
        </p>
      </div>

      <div
        v-if="isAuth()"
        class="cursor-pointer text-red-700 absolute top-4 right-4"
        @click="clickIconHandler(project)"
      >
        <favText class="w-10" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFavStore } from '@/store/favourite'
import { ProjectsDetails } from '@/types/SliderSection'
import { useHomeStore } from '@/store/home'
import { toRefs } from '@vue/reactivity'
import { HeartIcon, loading } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'

const homeStore = useHomeStore()
const { getHomeData } = homeStore
import { useLoginStore } from '@/store/login'

const loginStore = useLoginStore()
const { isAuth, logout } = loginStore

const favouriteStore = useFavStore()
const {
  addFavouriteData,
  removeFavouriteData,
  getFavouriteData,
  getUpdatedState,
} = favouriteStore
const { favourites, isLoading, errMsg } = storeToRefs(favouriteStore)

const props = defineProps({
  project: { required: true, type: Object as ProjectsDetails },
})

let isFav = props.project?.favorite
let favText = isFav ? HeartIconSolid : HeartIcon

const clickIconHandler = async (item: ProjectsDetails) => {
  if (
    favourites.value.length &&
    favourites?.value.some((u) => u.id === item.id)
  ) {
    removeFavouriteData(item)
    favText = HeartIcon
  } else {
    addFavouriteData(item)
    favText = HeartIconSolid
  }
}
</script>

<style lang="scss" scoped></style>
