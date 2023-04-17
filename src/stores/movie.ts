import { ref } from 'vue'
import { defineStore } from 'pinia'
import { popularMoviesUrl } from '@/utils'
import { useFetch } from '@vueuse/core'

type genreType = {id:number,name:string}
type movieShape = {
  title: string
  poster_path: string
  vote_average: number
  overview?: string;
  genre_ids:genreType[]
}
export const useMovieStore = defineStore('movie', () => {
  const imageBase = import.meta.env.VITE_IMAGE_BASE

  const movies = ref<movieShape[]>([])

  const setMovies = (apiData: []) => {
    movies.value = apiData
  }
  const imageUrl = (poster_path: string) => `${imageBase}${poster_path}`
  const filterByGenre = async(id:any) =>{
    const {data} = await useFetch(popularMoviesUrl()).json()
    const filteredMovies = data.value.results.filter((movie: { genre_ids: string | any[] })=>movie.genre_ids.includes(id))
    movies.value = filteredMovies 
  }
  const getMovies = () => {
    return movies.value;
  }
  return { movies, setMovies, imageUrl, getMovies,filterByGenre }
})
