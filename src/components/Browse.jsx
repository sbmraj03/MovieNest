import useGetTrendingMovies from "../hooks/useGetTrendingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
  
  useGetTrendingMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
