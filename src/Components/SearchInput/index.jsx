import React, { useState } from "react";
import "./index.css";


const SearchComponent = ({ handleMovieSearch }) => {
  const [userInput, setUserInput] = useState("");

  //when click on button button this function will occur
  const handleFormSubmit =(event)=>{
    event.preventDefault();
  handleMovieSearch(userInput)
  }

  return (
    <form
      onSubmit={(e) =>handleFormSubmit(e)}
      className="form"
    >
      <input
        type="text"
        placeholder="Enter Movie Title..."
        name="movie"
        value={userInput}
        onChange={(event) =>setUserInput(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchComponent;
