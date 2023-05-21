import React from "react";
import { DummyImage } from "../../../Assets/Images/DummyImage";
import "./index.css";

const SingleMovie = ({ movie }) => {
  return (
    <div>
      <section className="single_movie">
        <div className="flex_column">
          <figure className="figure_container">
            {movie?.Poster === "N/A" ? (
              <img src={DummyImage} alt="movie-poster" />
            ) : (
              <img
                src={movie?.Poster}
                alt="movie-poster"
                data-testid="movie-image"
              />
            )}
          </figure>
        </div>
        <div className="movie_details">
          <p>
            <strong>Movie Name:</strong> <em>{movie?.Title}</em>
          </p>
          <p>
            <strong>Actors:</strong> <em>{movie?.Actors}</em>
          </p>
          <p>
            <strong>Director:</strong> <em>{movie?.Director}</em>
          </p>
          <p>
            <strong>Country:</strong> <em>{movie?.Country}</em>
          </p>
          <p>
            <strong>Language:</strong> <em>{movie?.Language}</em>
          </p>
          <p>
            <strong>Type:</strong> <em>{movie?.Type}</em>
          </p>
          <p>
            <strong>Released Year:</strong> <em>{movie?.Year}</em>
          </p>
          <p>
            <strong>Genre:</strong> <em>{movie?.Genre}</em>
          </p>
          <p>
            <strong>Rating:</strong> <em>{movie?.imdbRating}</em>
          </p>
          <p>
            <strong>TotalVotes:</strong> <em>{movie?.imdbVotes}</em>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SingleMovie;
