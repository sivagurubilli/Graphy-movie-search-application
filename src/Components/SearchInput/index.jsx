import React, { useState } from "react";
import "./index.css";
import SearchRecomendations from "../SearchRecomendations";
import { GetMovieDataService } from "../../Services/GetMovieDataService";
import { useSearchParams } from "react-router-dom";

const SearchComponent = ({ handleMovieSearch }) => {
  const [userInput, setUserInput] = useState("");
  const [recomendationData, setRecomendationData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});


  //when click on button button this function will occur
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleMovieSearch(userInput);
    setUserInput("");
  };

  //when user enter something into search it update input term and url params 
  const handleChange = (event) => {
    if (userInput) {
        setSearchParams({ movie_name: event.target.value });
      } else {
        setSearchParams({});
      }
      setUserInput(event.target.value);
    getRecomandationData(event.target.value);

  };

  //for getting recommendation data
  const getRecomandationData = async (value) => {
    try {
      const data = await GetMovieDataService(value);
      setRecomendationData(data);
    } catch (err) {}
  };

  return (
    <>
      <form onSubmit={(e) => handleFormSubmit(e)} className="form">
        <input
          type="text"
          placeholder="Enter Movie Title..."
          name="movie"
          value={userInput}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Search</button>
      </form>
      {recomendationData?.Search?.length && (
        <SearchRecomendations
          data={recomendationData}
          setUserInput={setUserInput}
          setRecomendationData={setRecomendationData}
          setSearchParams ={ setSearchParams}
        />
      )}
    </>
  );
};

export default SearchComponent;
