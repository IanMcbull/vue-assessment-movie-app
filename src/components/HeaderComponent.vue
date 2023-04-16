<script lang="ts" setup>
	import logo from "@/assets/logo.png"
    import { useFetch } from "@vueuse/core";
    import { ref } from "vue";
	import { searchMoviesByTitleUrl } from "@/utils";
    import { useMovieStore } from "@/stores/movie";
    import { useGenreStore } from "@/stores/Genres";
	const {genres} = useGenreStore()
	const searchQuery = ref('')
	const {setMovies} = useMovieStore()
    const submitHandler = async() =>{
       if(searchQuery.value.length > 0){
		const {data,error,isFetching} = await useFetch(searchMoviesByTitleUrl(searchQuery.value)).json()
        if(data.value.results){
           setMovies(data.value.results)
           searchQuery.value = '' 
        }   
	   }
	   else{
		console.log('You need to provide a search value')
	   }
	}
</script>
<template>
  <header class="p-6 flex items-center gap-6">
  	<nav class="flex flex-col">
  		<img :src="logo" class="w-16 rotate-12"/>
  	</nav>
	<form class="form relative w-3/4 flex items-center" @submit.prevent="submitHandler">
     <input class="form-control outline-none input-md rounded-md w-full text-base md:text-md p-x-2 placeholder:font-semibold" placeholder="Search for movies by title or release year" v-model="searchQuery"/>
	 <!-- <i class="fa-sharp fa-solid fa-spinner fa-spin absolute text-gray-400 right-0 mr-4 text-xl hidden md:block"></i> -->

	 <i class="fa-solid fa-magnifying-glass absolute text-gray-400 right-0 mr-4 text-xl hidden md:block"></i>
	</form>
	<div class="flex gap-4 items-center">
		<p class="text-xs min-w-max">SEARCH BY</p>
        <select className="select select-bordered w-full">
			<option selected>Title</option>
			<option selected>Release Year</option>
		</select>
	</div>
	<div class="flex gap-4 items-center ml-24">
		<p class="text-xs min-w-max">Filter by Genre</p>
            <select className="select select-bordered max-w-md ">
              <option selected disabled>Pick a Genre</option>
              <option v-for="genre in genres" :key="genre.id">{{ genre.name }}</option>
		        </select>
	</div>
  </header>
</template>