import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'services/tmdbAPI';



const Home = () => {  

  const [ trendingMovies, setTrendingMovies ] = useState([]);
  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies();
  }, []);
  
  return (
    <Fragment>
      <h3 className={css.header}>Trending today</h3>
      <MovieList movieList={trendingMovies}/>
    </Fragment>
    
  )
}

export default Home