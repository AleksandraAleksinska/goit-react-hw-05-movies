import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import ActorCard from './ActorCard/ActorCard';
import css from './Cast.module.css';
import { getMovieCast } from 'services/tmdbAPI';

const Cast = () => {

  const { movieId } = useParams();
  const [ movieCastById, setMovieCastById ] = useState([]);
  

  useEffect(() => {
    
    const fetchCast = async () => {
      try {
        const cast = await getMovieCast(movieId);
        setMovieCastById(cast);
      } 
      catch (error) {
        console.log(error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <Fragment>
      <ul className={css.castList}>
      <ActorCard movieCastById={movieCastById}/>
      </ul>
    </Fragment>
  )
}

export default Cast