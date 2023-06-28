import React from 'react';
import { useState, useEffect, Fragment, Link } from 'react';
import axios from 'axios';

const Home = () => {  

  const [ trendingMovies, setTrendingMovies ] = useState([]);

  useEffect(() => {

    const getTrendingMovies = async () => {

      try {
        const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=' + key);
        const trendingMovies = response.data.results;
        console.log(trendingMovies)

        setTrendingMovies( [...trendingMovies])
      }
      catch (error) {
        console.log(error.message)
      } 
  
    }
    getTrendingMovies();

  },[])


  return (
    <Fragment>
      <h3>Trending today</h3>
      <ul>
      {trendingMovies.map((movie) => 
      <li key={movie.id}>{movie.title}</li>
      )}
      </ul>
    </Fragment>
    
  )
}

export default Home