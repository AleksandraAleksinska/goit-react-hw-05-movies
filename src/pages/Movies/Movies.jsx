import React, { Fragment, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from 'components/MovieList/MovieList';
import css from './Movies.module.css'

const Movies = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState([]);
 
  const getMoviesByQuery = async () => {
 
    try {
      const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchParams.get('query')}&api_key=${key}`
      );
      const movies = response.data.results;
      setMoviesByQuery(movies);
    } catch (error) {
      console.log(error.message);
    }
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: e.target[0].value });   
    
    form.reset();
  };

  useEffect(() => {
    searchParams.get('query') && getMoviesByQuery()
  },);


  return (
    <Fragment>
      <form className={css.searchBar} onSubmit={handleSubmit}>
        <input 
          type="text"
          name="query"
        ></input>
        <button className={css.searchButton}type="submit">Search</button>
      </form>
      <MovieList movieList={moviesByQuery} />
    </Fragment>
  );
};

export default Movies;