<script setup lang="ts">
import { useMovieStore } from '@/stores/movie'
const { getMovies, imageUrl } = useMovieStore()
</script>
<template>
  <div className="carousel md:carousel-end rounded-box md:h-auto" v-if="getMovies().length > 0">
    <div
      className="carousel-item "
      v-for="movie in getMovies().slice(0, 6)"
      :key="getMovies().indexOf(movie)"
    >
      <img :src="imageUrl(movie.poster_path)" alt="poster images" />
    </div>
  </div>
</template>
