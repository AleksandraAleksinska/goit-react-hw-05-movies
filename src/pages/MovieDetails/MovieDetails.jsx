import React from 'react';
import { useState, useEffect, Fragment, Suspense, useRef } from 'react';
import { useParams, NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import css from './MovieDetails.module.css'
import axios from 'axios';


const MovieDetails = () => {

    const { movieId } = useParams();
    const [ movieDetailsById, setMovieDetailsById ] = useState([]);
    const [ movieGenres, setMovieGenres ] = useState([]);
    const [ movieReleaseYear, setMovieReleaseYear ] = useState('');
    const [ userScore, setUserScore ] = useState(null)
    
    const location = useLocation()
    const navigate = useNavigate();
    const locationRef = useRef(location);


    const goBack = () => {
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate(locationRef.current.state.from);
      } 
    };
      

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
       <button className={css.backButton} onClick={goBack} >Go back</button>
        <div className={css.movieDetailsBox}>
        {movieDetailsById.poster_path && (
          <img className={css.movieImg} src={`https://image.tmdb.org/t/p/w500/${movieDetailsById.poster_path}`} alt={movieDetailsById.title} />
        )}
          <div>
            <h2 className={css.movieTitle}>{movieDetailsById.title} ({movieReleaseYear.slice(0,4)})</h2>
            <p>User score: <b>{Number(userScore).toFixed(2)}</b></p>
            <h3>Overview</h3>
            <p>{movieDetailsById.overview}</p>
           <h4>Genres</h4>
            {movieGenres.length > 0 ? movieGenres.map((genre) => genre.name).join(' ') : '---'}
        </div> 
        </div>
        <div>
          <p className={css.additionalHeader}>Additional information</p>
          <ul className={css.additionalList}>
            <li className={css.additionalListItem}>
              <NavLink className={(navData) => (navData.isActive ? css.active : css.additionalLink)}to='cast'>Cast</NavLink>
            </li>
            <li className={css.additionalListItem}>
              <NavLink className={(navData) => (navData.isActive ? css.active : css.additionalLink)} to='reviews'>Reviews</NavLink>
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