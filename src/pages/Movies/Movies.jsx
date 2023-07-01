import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
  const [searchParams, setSearchParams] = useSearchParams('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);
 
  
  const query = searchParams.get('query') || '';
  const moviesByQueryRef = useRef([]);

  const getMoviesByQuery = async () => {
    if (query === '') return;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}`
      );
      const movies = response.data.results;
      moviesByQueryRef.current = movies;
      setMoviesByQuery(movies);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setSearchParams({ query: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    getMoviesByQuery();
    
    form.reset();
  };

  useEffect(() => {
    moviesByQueryRef.current = moviesByQuery;
  }, [moviesByQuery]);

  useEffect(() => {
    if (moviesByQueryRef.current.length === 0) {
      getMoviesByQuery();
    }
  });

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          name="query"
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      <ul>
        {moviesByQueryRef.current.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Movies;