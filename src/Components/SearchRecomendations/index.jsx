import React from "react";
import "./index.css";
import { DummyImage } from "../../Assets/Images/DummyImage";

const SearchRecomendations = ({
  data,
  setUserInput,
  setRecomendationData,
  setSearchParams,
}) => {
  //set recomendations on searching in component
  const handleRecomendation = (el) => {
    setUserInput(el.Title);
    setSearchParams({ movie_name: el.Title });
    setRecomendationData([]);
  };

  return (
    <div className="recommendation_container">
      {data?.Search?.map((el) => (
        <div
          onClick={() => handleRecomendation(el)}
          key={el?.Title}
          className="image_container"
        >
          {el.Poster === "N/A" ? (
            <img src={DummyImage} alt="movie-poster" />
          ) : (
            <img
              src={el?.Poster}
              alt="movie-poster"
              data-testid="movie-image"
            />
          )}
          <h5> {el?.Title}</h5>
        </div>
      ))}
    </div>
  );
};

export default SearchRecomendations;
