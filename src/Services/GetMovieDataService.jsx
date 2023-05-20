import axios from "axios";
const API_KEY = "a20d168d";

// this function is for getting  moovie data based input search term

export const GetMovieDataService = async (userInput, page = 1) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${userInput}&apikey=${API_KEY}&page=${page}`
  );

  return response.data;
};

// this function is for getting latest moovie data
export const GetTrendingMovieDataService = async (page = 1) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?Y=${"2022"}&apikey=${API_KEY}&page=${page}`
  );

  return response.data;
};
