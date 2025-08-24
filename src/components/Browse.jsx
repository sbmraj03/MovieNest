import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies"
import useGetPopularMovies from "../hooks/useGetPopularMovies"
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies"
import useGetTrendingMovies from "../hooks/useGetTrendingMovies"
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
  
  useGetNowPlayingMovies()
  useGetTrendingMovies()
  useGetPopularMovies()
  useGetUpcomingMovies()
  useGetTopRatedMovies()


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
