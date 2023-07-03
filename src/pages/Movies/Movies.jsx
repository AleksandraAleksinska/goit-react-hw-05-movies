import React, { Fragment, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import css from './Movies.module.css';
import { getMoviesByQuery } from 'services/tmdbAPI';

const Movies = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const fetchMovies = async () => {

    try {
      const movies = await getMoviesByQuery(searchParams.get('query'));
      setMoviesByQuery(movies);
    } 
    catch (error) {
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
    searchParams.get('query') && fetchMovies()
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