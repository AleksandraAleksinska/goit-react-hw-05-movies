import axios from 'axios';

axios.defaults.params = {
      api_key: "dce0b8b37fbd78cdab3203c47fa0e91b"
    }

  const  baseURL = 'https://api.themoviedb.org/3/';


export const getTrendingMovies = async() => {
    
        const response = await axios.get(`${baseURL}trending/movie/day?`);
        const trendingMovies = response.data.results;       
        return trendingMovies;
    
    }      

export const getMovieDetails = async(movieId) => {

      const response = await axios.get(`${baseURL}movie/${movieId}?`);
      const movieDetails = response.data;
      return movieDetails;
}

export const getMoviesByQuery = async (query) => {
 
      const response = await axios.get(`${baseURL}search/movie?query=${query}&`);
      const movies = response.data.results;
      return movies;
}

export const getReviews= async(movieId) => {

      const response = await axios.get(`${baseURL}movie/${movieId}/reviews?`);
      const movieReview = response.data.results;
      return movieReview;
}

export const getMovieCast= async(movieId) => {

      const response = await axios.get(`${baseURL}movie/${movieId}/credits?`);
      const movieCast = response.data.cast;
      return movieCast;
}