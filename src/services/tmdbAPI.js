import axios from 'axios';


  const  api_key ='api_key=dce0b8b37fbd78cdab3203c47fa0e91b';
  const  baseURL = 'https://api.themoviedb.org/3/';


export const getTrendingMovies = async() => {
    
        const response = await axios.get(`${baseURL}trending/movie/day?${api_key}`);
        const trendingMovies = response.data.results;       
        return trendingMovies;
    
    }      

export const getMovieDetails = async(movieId) => {

      const response = await axios.get(`${baseURL}movie/${movieId}?${api_key}`);
      const movieDetails = response.data;
      return movieDetails;
}

export const getMoviesByQuery = async (query) => {
 
      const response = await axios.get(`${baseURL}search/movie?query=${query}&${api_key}`);
      const movies = response.data.results;
      return movies;
}

export const getReviews= async(movieId) => {

      const response = await axios.get(`${baseURL}movie/${movieId}/reviews?${api_key}`);
      const movieReview = response.data.results;
      return movieReview;
}

export const getMovieCast= async(movieId) => {

      const response = await axios.get(`${baseURL}movie/${movieId}/credits?${api_key}`);
      const movieCast = response.data.cast;
      return movieCast;
}