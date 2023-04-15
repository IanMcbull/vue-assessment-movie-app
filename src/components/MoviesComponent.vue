<script lang="ts" setup>
import { useMovieStore } from '@/stores/movie';
import ChipComponent from './ChipComponent.vue';

const {movies,imageUrl} =useMovieStore()
const imageBase = import.meta.env.VITE_IMAGE_BASE

</script>
<template>
  <section class="mt-10 md:mt-16">
    <div class="flex flex-col gap-2 md:gap-4">
        <h2 class="font-bold text-xl md:text-2xl">{{ movies.slice(7).length }} Movies</h2>
        <div class="flex gap-6 items-center">
            <p class=" text-base md:text-xl font-semibold">Filter by Genre</p>
            <ChipComponent position="relative" text="action"/>
        </div>
    </div>
    <article class="grid grid-cols-1 grid-flow-row md:grid-cols-4 mt-8 max-w-full gap-3">
    <div className="card bg-black shadow-xl rounded-none" v-for="movie in movies.slice(7).sort((a,b)=>a.overview!.length - b.overview!.length)" :key="movies.indexOf(movie)">
  <figure><img :src="imageUrl(imageBase,movie.poster_path)" alt="Movie" class="max-h-64 w-full object-cover"/></figure>
  <div className="card-body">
    <h2 className="card-title">{{ movie.title }}</h2>
    <p>{{ movie.overview }}</p>
      <div className="card-actions flex items-center">
        <p class="font-bold uppercase">Leave a rating</p>
        <div className="rating rating-lg rating-half">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" v-for="i in 5" :key="i">
            
        </div>
    </div>
  </div>
</div>

  </article>
  </section>
</template>