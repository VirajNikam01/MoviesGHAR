import { useEffect } from "react"
import { API_OPTIONS } from "../utility/constants"
import {useDispatch} from 'react-redux'
import { addTopRatedMovies } from "../utility/movieSlice"

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()
   const topRatedMovies = async ()=>{
        const req = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const resp = await req.json()
        dispatch(addTopRatedMovies(resp.results))
    }

    useEffect(()=>{
        topRatedMovies()
    },[])
}

export default useTopRatedMovies;