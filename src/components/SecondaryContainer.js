import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector((store)=>store.movie)
  if(!movie) return
  return (
    <div className='bg-black lg:-mt-80'>
      <MovieList title={"Popular"} movie={movie.popularMovies} />
      <MovieList title={"Top Rated"} movie={movie.topRatedMovies} />
      <MovieList title={"Upcoming"} movie={movie.upComingMovies} />
      <MovieList title={"Now Playing"} movie={movie.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer
