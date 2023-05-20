import React from "react";
import "../MoviesFound/Movies.css";
import NotFoundIcon from "../../../Assets/Images/not-found.png";

const MovieNotFound = ({ notFoundError }) => {


  return (
    <article>
      <h2>Sorry... {notFoundError}</h2>

      <figure className="figure_container_notfound">
        <img src={NotFoundIcon} alt="not-found-icon" />
      </figure>

      <p>But don't worry, it could be a typo! </p>

      <p>
        Try again or search for a new movie
      </p>
    </article>
  );
};

export default MovieNotFound;
