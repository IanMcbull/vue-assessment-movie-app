export const popularMoviesUrl = () => {
  return `https://api.themoviedb.org/3/movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`
}
export const searchMoviesByTitleUrl = (title: string) => {
  return `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`
}
export const getMoviesGenresUrl = () => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1
`
}
