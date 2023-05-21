import axios from "axios";
const API_KEY = "124a0068";

// this function is for getting  moovie data based input search term
export const GetMovieDataService = async (userInput, page = 1) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${userInput}&apikey=${API_KEY}&page=${page}`
  );

  return response.data;
};

// this service is for getting latest moovie data
export const GetTrendingMovieDataService = async (page = 1) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?Y=${"2022"}&apikey=${API_KEY}&page=${page}`
  );
  return response.data;
};

// this service is for getting single movie data based on search
export const GetSingleMovieDataService = async (id) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  return response.data;
};