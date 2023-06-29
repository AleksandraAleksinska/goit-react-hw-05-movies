import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import { getTrendingMovies } from 'utils/trendingMovies';


const Home = () => {  

  const [ trendingMovies, setTrendingMovies ] = useState([]);
  

  useEffect(() => {
    getTrendingMovies().then((response) => {
      
      console.log(response)
      setTrendingMovies([...response]);
    })
    
    
  },[])
  
  return (
    <Fragment>
      <h3>Trending today</h3>
      <ul>
      {trendingMovies.map((movie) => 
      
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
          {movie.title}
          </Link>
          
        </li>
           
      )}
      </ul>
    </Fragment>
    
  )
}

export default Home