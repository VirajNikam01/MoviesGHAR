import { useEffect } from 'react';
import {API_OPTIONS} from '../utility/constants'
import {useDispatch} from 'react-redux'
import {addUpcomingMovies} from '../utility/movieSlice'

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
  const upcomingMovies = async () => {
    const req = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const resp = await req.json()
    dispatch(addUpcomingMovies(resp.results))
  };

  useEffect(()=>{
    upcomingMovies()
  },[])
};

export default useUpcomingMovies;
