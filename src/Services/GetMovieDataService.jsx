import axios from "axios";
const API_KEY = "a20d168d"


 export const GetMovieDataService = async (userInput, page = 1) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${userInput}&apikey=${API_KEY}&page=${page}`
  );

  return response.data;
};

export const GetTrendingMovieDataService = async ( page = 1) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?Y=${"2022"}&apikey=${API_KEY}&page=${page}`
  );

  return response.data;
};
