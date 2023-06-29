import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

const Movies = () => {

    const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
    const [ searchParams, setSearchParams ] = useSearchParams();
    const query = searchParams.get("query") ?? '';
    

    useEffect(() => {

        if(query ==='') return;
        const getMoviesByQuery = async() => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}`)
                console.log(response.data.results)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        getMoviesByQuery()
    }, [query])

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ name: form.elements.query.value });
        form.reset();
      };


  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={query}
            name='query'
            onChange={e => setSearchParams({ query: e.target.value })}></input>
            <button type='submit'>Search</button>
        </form>
    </Fragment>
  )
}

export default Movies