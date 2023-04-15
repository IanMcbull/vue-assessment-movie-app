import { ref} from 'vue'
import { defineStore } from 'pinia'
type movieShape = {
    title:string;
    poster_path:string;
    vote_average:number;
    overview?:string;
}
export const useMovieStore = defineStore('movie', () => {
  const movies = ref<movieShape[]>([])

const setMovies = (apiData:[]) =>{
  movies.value = apiData
}
const imageUrl = (baseUrl:string,poster_path:string) => `${baseUrl}${poster_path}`

  return { movies, setMovies,imageUrl}
})
