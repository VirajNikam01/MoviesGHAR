import { useEffect } from "react"
import { API_OPTIONS } from "../utility/constants"
import {useDispatch} from 'react-redux'
import {addPopularMovies} from '../utility/movieSlice'

const usePopularMovies = ()=>{
    const dispatch = useDispatch()
   const popularMovies = async ()=>{
   const req = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
   const resp = await req.json()
   dispatch(addPopularMovies(resp.results))
   }

   useEffect(()=>{
    popularMovies()
   },[])
}

export default usePopularMovies;