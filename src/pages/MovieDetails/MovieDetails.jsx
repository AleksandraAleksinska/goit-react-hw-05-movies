import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useParams, Link, Outlet } from "react-router-dom";

import axios from 'axios';



const MovieDetails = () => {

    const { movieId } = useParams();
    const [ movieDetailsById, setMovieDetailsById ] = useState([]);
    const [ movieGenres, setMovieGenres ] = useState([]);
    const [ movieReleaseYear, setMovieReleaseYear ] = useState('');
    
  
    useEffect(() => {

      const getMovieDetails = async() => {

        try {
          const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`);
          const movieDetails = response.data;
          const movieGenres = response.data.genres;
          const movieReleaseYear = response.data.release_date;
       
          setMovieDetailsById(movieDetails);
          setMovieGenres(movieGenres);
          setMovieReleaseYear(movieReleaseYear);

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
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetailsById.poster_path}`} alt={movieDetailsById.title} />
        </div>
        <div>
          <h2>{movieDetailsById.title} ({movieReleaseYear.slice(0,4)})</h2>
          <p>User score: {movieDetailsById.popularity}</p>
          <h3>Overview</h3>
          <p>{movieDetailsById.overview}</p>
          <h4>Genres</h4>
          {movieGenres.length > 0 ? movieGenres.map((genre) => genre.name) : '---'}
          
          
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to='cast'>Cast</Link>
            </li>
            <li>
              <Link to='reviews'>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>

    </Fragment>
  )
}

export default MovieDetails