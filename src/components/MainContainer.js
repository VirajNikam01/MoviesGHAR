import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackgroud'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie = useSelector((store)=>store.movie.popularMovies)
    if(!movie) return
  
    const {original_title, overview, id} = movie[2]
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer
