import React, { Fragment, useEffect, useState } from 'react';
import { useSearchParams, Link } from "react-router-dom";
import axios from 'axios';

const Movies = () => {

    const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ moviesByQuery, setMoviesByQuery ] = useState([]);
    const query = searchParams.get("query") ?? '';
    

    useEffect(() => {

        if(query ==='') return;
        const getMoviesByQuery = async() => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}`);
                const movies = response.data.results;
                setMoviesByQuery(movies);
                console.log(movies)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        getMoviesByQuery()
    }, [query])

    const handleChange = (e) => {
        setSearchParams({ query: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ name: form.elements.query.value });
        console.log(moviesByQuery)
        form.reset();
      };


  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={query}
            name='query'
            onChange={handleChange}></input>
            <button type='submit'>Search</button>
        </form>
        <ul>
        {moviesByQuery.map((movie) => 
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          {movie.title}
          </Link>
    </li>)}
        </ul>
    </Fragment>
  )
}

export default Movies