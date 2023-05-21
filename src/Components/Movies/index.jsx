import React, { useState, useEffect } from "react";
import MovieNotFound from "./MoviesNotFound/index";
import MovieFound from "./MoviesFound/index";
import LatestMovies from "../LatestMovies";
import SingleMovie from "./SingleMovie";

const Movies = ({ movies, movieToSearch,singleMovie }) => {
  const [movieToShow, setMovieToShow] = useState([]);

  // display movies or error based on response
  const displayMovieResults = () => {
    if (movieToShow.Error) {
      return <MovieNotFound notFoundError={movieToShow.Error} />;
    } else if(singleMovie.Title){
      return <SingleMovie movie={singleMovie} />
    }
    else {
      return <MovieFound movies={movieToShow} />;
    }
  };

  //setmoviesdata on mounting
  useEffect(() => {
    setMovieToShow(movies);
  }, [movies]);

  return (
    <>
      {movieToSearch === "" ? (
        <LatestMovies movieToShow={movieToShow} />
      ) : (
        displayMovieResults()
      )}
    </>
  );
};

export default Movies;
