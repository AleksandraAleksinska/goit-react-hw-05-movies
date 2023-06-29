import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useParams, Link, Outlet } from "react-router-dom";
import axios from 'axios';

const Cast = () => {

  const { movieId } = useParams();
  const [ movieCastById, setMovieCastById ] = useState([]);
  

  useEffect(() => {

    const getMovieCast= async() => {

      try {
        const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`);
        const movieCast = response.data;
        console.log(movieCast)
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
      {movieCastById.cast.map((actor) => {
        <li>
          adsddasd

        </li>
      })}
      </ul>
    </Fragment>
  )
}

export default Cast