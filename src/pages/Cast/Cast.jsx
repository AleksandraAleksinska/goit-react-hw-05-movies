import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

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
      <ul>
      {movieCastById.map((actor) => <li key={actor.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
        <p>{actor.name}</p>
        <p>Character: {actor.character}</p>
        </li>)}
      </ul>
    </Fragment>
  )
}

export default Cast