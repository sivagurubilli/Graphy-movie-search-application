import React, { useState, useEffect } from "react";
import Movies from "../../Components/Movies";
import "./index.css";
import {
  TrendingMoviesApiCallHelper,
  handleApiCallHelper,
} from "../../Components/Helpers/index";
import SearchComponent from "../../Components/SearchInput";

const Home = () => {
  const [retrievedMovies, setRetrievedMovies] = useState([]);
  const [movieToSearch, setMovieToSearch] = useState("");
  const [page, setPage] = useState(1);

  //when user come to the site it shows latest movies
  //if he enters any value then show data related to search term

  useEffect(() => {
    if (movieToSearch) {
      handleApiCallHelper(movieToSearch, setRetrievedMovies);
    } else {
      TrendingMoviesApiCallHelper(page, setMovieToSearch);
    }
  }, [movieToSearch, page]);

  //to handle movie search term
  const handleMovieToSearch = (movieInput) => {
    setMovieToSearch(movieInput);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>
          <span role="img" aria-label="coder">
            🎥
          </span>
          MOVIE FLiX
        </h1>
        <SearchComponent handleMovieSearch={handleMovieToSearch} />
      </header>
      <section>
        <Movies movies={retrievedMovies} movieToSearch={movieToSearch} />
      </section>
    </div>
  );
};

export default Home;
