import React from "react";
import MovieCard from "../Movies/MoviesFound/MoviCard";
import "../Movies/MoviesFound/Movies.css";

const LatestMovies = ({ movies }) => {
  return (
    <>
      <div className="movie-grid">
        {movies?.Search?.map((el) => (
          <MovieCard key={el} foundMovie={el} />
        ))}
      </div>
    </>
  );
};

export default LatestMovies;
