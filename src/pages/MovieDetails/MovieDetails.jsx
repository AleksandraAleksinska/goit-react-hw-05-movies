import React from 'react';
import { useState, useEffect, Fragment, Suspense } from 'react';
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";

import axios from 'axios';



const MovieDetails = () => {

    const { movieId } = useParams();
    const [ movieDetailsById, setMovieDetailsById ] = useState([]);
    const [ movieGenres, setMovieGenres ] = useState([]);
    const [ movieReleaseYear, setMovieReleaseYear ] = useState('');
    const [ userScore, setUserScore ] = useState(null)
    
  
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    useEffect(() => {

      const getMovieDetails = async() => {

        try {
          const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`);
          const movieDetails = response.data;
          const movieGenres = response.data.genres;
          const movieReleaseYear = response.data.release_date;
          const movieUserScore = response.data.vote_average;
       
          setMovieDetailsById(movieDetails);
          setMovieGenres(movieGenres);
          setMovieReleaseYear(movieReleaseYear);
          setUserScore(movieUserScore)

        }
        catch(error) {
          console.log(error.message)
        }

      }
     getMovieDetails() 
    }, [movieId])
  

   
  return (
      
    <Fragment>
        <button onClick={goBack}>Go back</button>
        <div>
        {movieDetailsById.poster_path && (
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetailsById.poster_path}`} alt={movieDetailsById.title} />
        )}
          <div>
            <h2>{movieDetailsById.title} ({movieReleaseYear.slice(0,4)})</h2>
            <p>User score: {Number(userScore).toFixed(2)}</p>
            <h3>Overview</h3>
            <p>{movieDetailsById.overview}</p>
           <h4>Genres</h4>
            {movieGenres.length > 0 ? movieGenres.map((genre) => genre.name).join(' ') : '---'}
        </div> 
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
          <Suspense fallback={<p>'Loading...'</p>}>
            <Outlet />
          </Suspense>
        </div>
    </Fragment>
  )
}

export default MovieDetails