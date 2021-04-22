<template>
  <div class="container grid gap-4 mx-auto my-4 text-center lg:grid-cols-2">
    <div v-for="(movie, index) in movies" :key="index">
      <Card :movie="movie" />
    </div>
  </div>
  <div class="flex items-center justify-center mb-4 space-x-2">
    <div>
      <button @click="prevPage" class="px-4 py-2 bg-white rounded">-</button>
    </div>
    <div>
      <p class="px-4 text-coolGray-200">Page {{ page }} of {{ pages }}</p>
    </div>
    <div>
      <button @click="nextPage" class="px-4 py-2 bg-white rounded">+</button>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { getMovies, movies, page, pages } from '~/helpers/useMoviesAPI'

  onMounted(() => {
    getMovies()
  })

  const nextPage = () => {
    if (page.value < pages.value) {
      page.value++
      getMovies()
    }
  }

  const prevPage = () => {
    if (page.value > 1) {
      page.value--
      getMovies()
    }
  }
</script>
