<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue';
import MoviesComponent from "@/components/MoviesComponent.vue"
import { useFetch } from '@vueuse/core'
import { useMovieStore } from "@/stores/movie"
import { getMoviesGenresUrl, popularMoviesUrl } from '@/utils';
import { useGenreStore } from '@/stores/Genres';
const {setGenres} = useGenreStore()
const {setMovies} = useMovieStore()

const { isFetching, error, data } = await useFetch(popularMoviesUrl()).json()
const res = await useFetch(getMoviesGenresUrl()).json();
setGenres(res.data.value.genres)
if(data){
  setMovies(data.value.results)  
}
</script>

<template>
  <main class="flex flex-col h-full p-4 font-serif">
    <div v-if=isFetching>
       <p>Loading...</p>
    </div>
    <div v-if="error">
       <p>An error occured</p>
    </div>
    <section>
      <CarouselComponent />
      <MoviesComponent/>
    </section>
    <!-- <div className="hero h-full">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> -->
  </main>
</template>
