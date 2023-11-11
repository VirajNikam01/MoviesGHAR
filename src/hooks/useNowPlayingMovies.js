import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from '../utility/movieSlice'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
  const nowPlayingMovies = async () => {
    const req = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const resp = await req.json();
    dispatch(addNowPlayingMovies(resp.results))
  };

  useEffect(()=>{
    nowPlayingMovies()
  },[])
};


export default useNowPlayingMovies;