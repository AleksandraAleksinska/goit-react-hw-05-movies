import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import css from './MovieList.module.css';


const MovieList = ({movieList}) => {
    const location = useLocation()
  return (
    <Fragment>
    <ul className={css.movieList}>
      {movieList.map((movie) => 
        <li className={css.movieListItem} key={movie.id}>
            <Link className={css.movieLink} to={`/movies/${movie.id}`} state={{ from: location }} >{movie.title}</Link>  
        </li>
        )}
    </ul>
    </Fragment>
  )
}

export default MovieList

MovieList.propTypes ={
  movieList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
  
}