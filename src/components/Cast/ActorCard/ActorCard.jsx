import React, { Fragment } from 'react';
import css from './ActorCard.module.css';
import noimg from 'images/noimg.png'

const ActorCard = ({movieCastById}) => {
  return (
    <Fragment>
        {movieCastById.map((actor) => <li className={css.actorListItem}key={actor.id}>
      {actor.profile_path ? (
            <img className={css.actorImg} src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
          ) : <img className={css.actorImg} src={noimg} alt='no_image'/>}
        <span className={css.actorName}>{actor.name}</span>
        <span>Character: {actor.character}</span>
        </li>)}
        </Fragment>
  )
    
    
}

export default ActorCard