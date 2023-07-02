import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import ActorCard from './ActorCard/ActorCard';
import css from './Cast.module.css'

const Cast = () => {

  const { movieId } = useParams();
  const [ movieCastById, setMovieCastById ] = useState([]);
  

  useEffect(() => {

    const getMovieCast= async() => {

      try {
        const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`);
        const movieCast = response.data.cast;
        setMovieCastById(movieCast)
      }
      catch(error) {
        console.log(error.message)
      }

    }
   getMovieCast() 
  }, [movieId])

  return (
    <Fragment>
      <ul className={css.castList}>
      <ActorCard movieCastById={movieCastById}/>
      </ul>
    </Fragment>
  )
}

export default Cast