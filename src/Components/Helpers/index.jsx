import {
  GetMovieDataService,
  GetSingleMovieDataService,
  GetTrendingMovieDataService,
} from "../../Services/GetMovieDataService";

// this function to get movies data
export const handleApiCallHelper = async (userInput, setMovieMethod) => {
  const responseData = await GetMovieDataService(userInput);
  setMovieMethod(responseData);
};

// this function to get movies Trending Movies data
export const TrendingMoviesApiCallHelper = async (page, setMovieMethod) => {
  const responseData = await GetTrendingMovieDataService(page);
  setMovieMethod(responseData);
};

//// this function to get movie single Movie data
export const SingleMoviesApiCallHelper = async (id, setMovieMethod) => {
  const responseData = await GetSingleMovieDataService(id);
  setMovieMethod(responseData);
};
