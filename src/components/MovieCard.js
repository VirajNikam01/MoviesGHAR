import React from "react";

const MovieCard = ({ poster }) => {
  return (
    <div className="mx-1 w-24 sm:w-32 sm:mx-2">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + poster}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
