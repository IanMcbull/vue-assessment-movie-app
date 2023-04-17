export type genreType = { id: number; name: string }
export type genreShape = {
  id: number
  name: string
}
export type movieShape = {
  title: string
  poster_path: string
  vote_average: number
  overview: string
  popularity: string
  genre_ids: genreType[]
}
