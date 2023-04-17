<script lang="ts" setup>
import logo from '@/assets/logo.png'
import { useFetch } from '@vueuse/core'
import { ref, watch } from 'vue'
import { searchMoviesByTitleUrl } from '@/utils'
import { useMovieStore } from '@/stores/movie'
import { useGenreStore } from '@/stores/Genres'
const { getGenres } = useGenreStore()
const { setMovies, filterByGenre, sortMovies } = useMovieStore()
const searchQuery = ref('')
const genres = ref('Pick a Genre')
const sortCriteria = ref('Sort Movies')
watch(genres, () => {
  filterByGenre(getGenres().find((genre) => genre.name === genres.value)!.id)
})
watch(sortCriteria, () => {
  sortMovies(sortCriteria.value)
})
const submitHandler = async () => {
  if (searchQuery.value.length > 0) {
    const { data } = await useFetch(searchMoviesByTitleUrl(searchQuery.value)).json()

    if (data.value.results) {
      setMovies(data.value.results)
      searchQuery.value = ''
    }
  }
}
</script>
<template>
  <header class="p-6 flex flex-col md:flex-row items-center gap-6">
    <nav class="flex flex-col">
      <RouterLink to="/"><img :src="logo" class="w-16 rotate-12" /></RouterLink>
    </nav>
    <form class="form relative w-full md:w-3/4 flex items-center" @submit.prevent="submitHandler">
      <input
        class="form-control outline-none input-md rounded-md w-full text-base md:text-md p-x-2 placeholder:font-semibold"
        placeholder="Search for movies by title or release year"
        v-model="searchQuery"
      />
      <i
        class="fa-solid fa-magnifying-glass absolute text-gray-400 right-0 mr-4 text-xl hidden lg:block"
      ></i>
    </form>
    <div class="flex gap-4 items-center">
      <p class="text-base md:text-xs min-w-max">Sort by</p>
      <select v-model="sortCriteria" className="select select-bordered w-full">
        <option disabled>Sort Movies</option>
        <option>Rating</option>
        <option>Popularity</option>
      </select>
    </div>
    <div class="flex gap-4 items-center md:ml-16">
      <p class="text-base md:text-xs min-w-max">Filter by Genre</p>
      <select
        className="select select-bordered max-w-md"
        v-if="getGenres().length > 0"
        v-model="genres"
      >
        <option disabled>Pick a Genre</option>
        <option v-for="genre in getGenres()" :key="genre.id">{{ genre.name }}</option>
      </select>
    </div>
  </header>
</template>
