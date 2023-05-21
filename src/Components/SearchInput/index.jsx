import React, { useEffect, useState } from "react";
import "./index.css";
import SearchRecomendations from "../SearchRecomendations";
import { GetMovieDataService} from "../../Services/GetMovieDataService";
import { useSearchParams } from "react-router-dom";
import { delay } from "../../Assets/Images/DummyImage";
import useDebounce from "../Hooks/useDebounce";


const SearchComponent = ({ handleMovieSearch ,setMoviebyId}) => {
  const [userInput, setUserInput] = useState("");
  const [recomendationData, setRecomendationData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const debouncedInputValue = useDebounce(userInput, delay);
  

  //when click on button button this function will occur
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleMovieSearch(userInput);
    setUserInput("");
    setMoviebyId("")
  };

  //when user enter something into search it update input term and url params 
  const handleChange = (event) => {
    if (userInput) {
        setSearchParams({ movie_name: event.target.value });
      } else {
        setSearchParams({});
      }
      setUserInput(event.target.value);
  };

//handling recomendation data using debouncing
  useEffect(() => {
    if (debouncedInputValue) {
        getRecomandationData(debouncedInputValue)
    }else{
        setRecomendationData([]);
    }
  }, [debouncedInputValue]);

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
          getRecomandationData ={ getRecomandationData}
          setMoviebyId ={setMoviebyId}
        />
      )}
    </>
  );
};

export default SearchComponent;
