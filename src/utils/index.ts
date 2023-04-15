export const popularMoviesUrl = () =>{
    return `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
}
export const searchMoviesByTitleUrl = (title:string) =>{
    return `https://api.themoviedb.org/3/movie/search?query=${title}api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`
}
export const searchMoviesByReleaseYearUrl = () =>{
    
}
