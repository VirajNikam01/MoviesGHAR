import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch } from "react-redux";
import { addVideoBG } from "../utility/movieSlice";

const useBgVideo = (id) => {
    const dispatch = useDispatch()
  const bgVideo = async () => {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const resp = await req.json();
    dispatch(addVideoBG(resp.results))
  };

  useEffect(() => {
    bgVideo();
  }, []);
};

export default useBgVideo;