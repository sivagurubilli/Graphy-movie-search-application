import React from "react";
import "./Movies.css";
import { DummyImage } from "../../../Assets/Images/DummyImage";

const MovieCard = ({ foundMovie }) => {
    return (
        <>
            <section className="flex_row">
                <div className="flex_column">
                    <figure className="figure_container">
                        {foundMovie.Poster === "N/A" ? (
                            <img src={DummyImage} alt="movie-poster" />
                        ) : (
                            <img
                                src={foundMovie.Poster}
                                alt="movie-poster"
                                data-testid="movie-image"
                            />
                        )}
                    </figure>
                </div>
                <div className="movie_details">
                    <p>
                        <strong>Movie Name:</strong> <em>{foundMovie?.Title}</em>
                    </p>
                    <p>
                        <strong>Type:</strong> <em>{foundMovie?.Type}</em>
                    </p>
                    <p>
                        <strong>Released Year:</strong> <em>{foundMovie?.Year}</em>
                    </p>
                </div>
            </section>
        </>
    );
};

export default MovieCard;
