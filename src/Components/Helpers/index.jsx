import {
  GetMovieDataService,
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
