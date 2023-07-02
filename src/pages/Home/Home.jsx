import React from 'react';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';



const Home = () => {  

  const [ trendingMovies, setTrendingMovies ] = useState([]);
  

  useEffect(() => {

   const getTrendingMovies = async() => {

      try {
          const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
          const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=' + key);
          const trendingMovies = response.data.results;
          setTrendingMovies(trendingMovies);
      }
      catch(error) {
          console.log(error.message);
      }    
  }   
  getTrendingMovies();
    
  },[])
  
  return (
    <Fragment>
      <h3 className={css.header}>Trending today</h3>
      <MovieList movieList={trendingMovies}/>
    </Fragment>
    
  )
}

export default Home