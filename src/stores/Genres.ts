import type { genreShape } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGenreStore = defineStore('genres', () => {
  const genres = ref<genreShape[]>([])
  const setGenres = (apiData: []) => {
    genres.value = apiData
  }
  const getGenres = () => genres.value
  return { genres, setGenres, getGenres }
})
