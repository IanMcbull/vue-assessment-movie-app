import { defineStore } from "pinia";
import { ref } from "vue";
type genreShape = {
    id:number;
    name:string;
}
export const useGenreStore = defineStore('genres',()=>{
  const genres = ref<genreShape[]>([])
  const setGenres = (apiData:[]) =>{
     genres.value = apiData
  }
  return {genres,setGenres}  
})