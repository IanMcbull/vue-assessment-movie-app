import { ref } from 'vue'
import { defineStore } from 'pinia'
import { popularMoviesUrl } from '@/utils'
import { useFetch } from '@vueuse/core'
import type { movieShape, genreType } from '@/types'

export const useMovieStore = defineStore('movie', () => {
  const imageBase = import.meta.env.VITE_IMAGE_BASE
  const movies = ref<movieShape[]>([])
  const setMovies = (apiData: movieShape[]) => {
    movies.value = apiData
  }
  const imageUrl = (poster_path: string) => `${imageBase}${poster_path}`
  const filterByGenre = async (id: any) => {
    const { data } = await useFetch(popularMoviesUrl()).json()
    const apiResponse = data.value.results
    const filteredMovies = apiResponse.filter((movie: { genre_ids: genreType[] }) =>
      movie.genre_ids.includes(id)
    )
    movies.value = filteredMovies
  }
  const sortMovies = (sortBy: string) => {
    sortBy === 'Rating'
      ? (movies.value = [...movies.value].sort((a: any, b: any) => b.vote_average - a.vote_average))
      : (movies.value = [...movies.value].sort((a: any, b: any) => b.popularity - a.popularity))
  }
  const getMovies = () => {
    return movies.value
  }
  return { movies, setMovies, imageUrl, getMovies, filterByGenre, sortMovies }
})
