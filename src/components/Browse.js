import React from 'react'
import Header from './Header'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Footer from './Footer'

const Browse = () => {

  //the custom hooks
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  useNowPlayingMovies()

  return (
    <div className=''>
      <Header/>
      <div className=''>
            <MainContainer/>
            <SecondaryContainer/>
            <Footer/>
      </div>
     
    </div>
  )
}

export default Browse
