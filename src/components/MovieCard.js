import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/movie-details")}
      className="mx-1 w-24 sm:w-32 sm:mx-2 rounded-lg  overflow-hidden hover:scale-125 duration-500 cursor-pointer"
    >
      <img
        src={"https://image.tmdb.org/t/p/w500/" + poster}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
