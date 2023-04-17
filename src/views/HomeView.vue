<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'
import MoviesComponent from '@/components/MoviesComponent.vue'
import { useFetch } from '@vueuse/core'
import { useMovieStore } from '@/stores/movie'
import { getMoviesGenresUrl, popularMoviesUrl } from '@/utils'
import { useGenreStore } from '@/stores/Genres'
const { setGenres } = useGenreStore()
const { setMovies } = useMovieStore()
const { isFetching, error, data } = await useFetch(popularMoviesUrl()).json()
const res = await useFetch(getMoviesGenresUrl()).json()
if (res.data.value.genres) {
  setGenres(res.data.value.genres)
}
if (data) {
  setMovies(data.value.results)
}
</script>

<template>
  <main class="flex flex-col h-full p-4 font-serif">
    <div v-if="isFetching">
      <p>Loading...</p>
    </div>
    <div v-if="error">
      <p>An error occured</p>
    </div>
    <section>
      <CarouselComponent />
      <MoviesComponent />
    </section>
  </main>
</template>
