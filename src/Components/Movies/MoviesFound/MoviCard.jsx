import React from "react";
import "./Movies.css";

const MovieCard = ({ foundMovie }) => {
 

  return (
    <>
      <section className="flex_row">
        <div className="flex_column">
          <figure className="figure_container">
            <img
              src={foundMovie.Poster}
              alt="movie-poster"
              data-testid="movie-image"
            />
          </figure>
        </div>
        <div className="movie-details">
          <p>
            <strong>Movie Name:</strong> <em>{foundMovie?.Title}</em>
          </p>
          <p>
            <strong>Type:</strong> <em>{foundMovie?.Type}</em>
          </p>
          <p>
            <strong>Year:</strong> <em>{foundMovie?.Year}</em>
          </p>
        </div>
      </section>
    </>
  );
};

export default MovieCard;
