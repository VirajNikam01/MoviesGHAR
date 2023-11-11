import React from 'react'
import Header from './Header'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {

  //the custom hooks
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()


  return (
    <div className=''>
      <Header/>
      <div className=''>
            <MainContainer/>
            <SecondaryContainer/>
      </div>
     
    </div>
  )
}

export default Browse
