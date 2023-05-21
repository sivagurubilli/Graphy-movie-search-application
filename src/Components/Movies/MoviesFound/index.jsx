import React from "react";
import MovieCard from "./MoviCard";

const MovieFound = ({ movies }) => {
  return (
    <div className="movie_grid">
      {movies?.Search?.map((el) => (
        <MovieCard key={el.Title} foundMovie={el} />
      ))}
    </div>
  );
};

export default MovieFound;
