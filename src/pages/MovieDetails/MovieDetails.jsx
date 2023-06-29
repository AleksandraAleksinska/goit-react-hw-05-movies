import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import { getMovieById } from 'utils/trendingMovies';
import axios from 'axios';



const MovieDetails = () => {

    const { movieId } = useParams();
    const [ movieDetailsById, setMovieDetailsById ] = useState([]);
    
  
    useEffect(() => {

      const getMovieDetails = async() => {

        try {
          const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`);
          const movieDetails = response.data;
          console.log(movieDetails)
          setMovieDetailsById(movieDetails)
        }
        catch(error) {
          console.log(error.message)
        }

      }
     getMovieDetails() 
    }, [movieId])
  
  
   
  return (
     
     
    
    <Fragment>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetailsById.poster_path
}`} />
        </div>
        <div>
          <h2>{movieDetailsById.title} ({movieDetailsById.release_date})</h2>
          <p>User score: {movieDetailsById.popularity}</p>
          <h3>Overview</h3>
          <p>{movieDetailsById.overview}</p>
          <h4>Genres</h4>
          <p>genres</p>
        </div>

    </Fragment>
  )
}

export default MovieDetails