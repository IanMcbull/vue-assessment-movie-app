<script setup lang="ts">
import { useMovieStore } from '@/stores/movie';
const {movies,imageUrl} = useMovieStore()
const imageBase = import.meta.env.VITE_IMAGE_BASE
</script>
<template>
    <div className="carousel md:carousel-end rounded-box md:h-auto" v-if="movies.length > 0">
  
  <div className="carousel-item " v-for="movie in movies.slice(0,6)" :key="movies.indexOf(movie)">
    <img :src="imageUrl(imageBase,movie.poster_path)" alt="Drink" />
  </div> 
  
</div>
</template>