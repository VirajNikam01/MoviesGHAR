import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  if (!movie) return;

  return (
    <div className="pl-5 sm:pl-16 relative z-10 ">
      <div className="text-white text-xl pb-2 pt-5">{title}</div>
      <div className=" overflow-x-scroll flex  ">
        <div className="flex">
          {movie.map((movie, i) => (
            <MovieCard key={i} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
