<template>
  <div class="my-10">
    <h1 class="text-dark-blue text-2xl font-bold mb-5">{{ section.title }}</h1>
    <div class="grid w-full grid-cols-1">
      <Swiper
        v-if="section?.projects"
        class="flex w-full gap-10 px-10"
        :modules="[SwiperPagination, SwiperNavigation]"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :navigation="{
          clickable: true,
        }"
        :breakpoints="{
          769: { slidesPerView: 1 },
          1024: {
            slidesPerView: 2,
          },
        }"
        :loop="true"
        space-between="8"
      >
        <SwiperSlide :key="project.id" v-for="project in section?.projects">
          <ItemCard :project="project" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/home'
import ItemCard from '@/components/ItemCard'

const homeStore = useHomeStore()
const { getHomeData } = homeStore
const { getProjects: section, isLoading } = storeToRefs(homeStore)

onBeforeMount(() => {
  getHomeData()
})
</script>

<style scoped></style>
