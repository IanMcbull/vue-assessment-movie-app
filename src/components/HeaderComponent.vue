<script lang="ts" setup>
	import logo from "@/assets/logo.png"
    import { ref } from "vue";
	const searchQuery = ref('')
	const submitHandler = () =>{
       if(searchQuery.value.length > 0){
		console.log("Submitting request")
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
  </header>
</template>